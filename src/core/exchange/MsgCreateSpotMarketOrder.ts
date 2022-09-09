import { getNetworkInfo, Network } from "@injectivelabs/networks";
import {
  ChainRestAuthApi,
  IndexerGrpcSpotApi,
  MsgCreateSpotMarketOrder,
} from "@injectivelabs/sdk-ts";
import { PrivateKey } from "@injectivelabs/sdk-ts/dist/local";
import { DEFAULT_STD_FEE } from "@injectivelabs/sdk-ts";
import { createTransaction } from "@injectivelabs/tx-ts";
import { TxRestClient, TxClient } from "@injectivelabs/tx-ts/dist/client";
import { TxError } from "@injectivelabs/tx-ts/dist/types/tx-rest-client";
import {
  spotPriceToChainPriceToFixed,
  spotQuantityToChainQuantityToFixed,
} from "@injectivelabs/utils";

/** MsgBatchCancelDerivativeOrders Example */
(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const privateKeyHash =
    "f9db9bf330e23cb7839039e944adef6e9df447b90b503d5b4464c90bea9022f3";
  const privateKey = PrivateKey.fromPrivateKey(privateKeyHash);
  const injectiveAddress = privateKey.toBech32();
  const address = privateKey.toAddress();
  const publicKey = privateKey.toPublicKey().toBase64();

  /** Account Details **/
  const accountDetails = await new ChainRestAuthApi(
    network.sentryHttpApi
  ).fetchAccount(injectiveAddress);

  /** Prepare the Message */
  const subaccountId = address.getSubaccountId();
  const indexerSpotApi = new IndexerGrpcSpotApi(network.indexerApi);
  const markets = await indexerSpotApi.fetchMarkets();
  const injUsdtMarket = markets.find((m) => m.ticker.includes("INJ"));

  if (!injUsdtMarket) {
    throw new Error(`The INJ/USDT market not found`);
  }

  /* 1 - buy, 2 - sell, 3 - stop_buy, 4 - stop_sell, 5 - take_buy, 6 - take_sell, 7 - buy post-only, 8 - sell post-only */
  const orderType = 1;
  const price = 2; /* This is the maximum price you are willing to accept for your market order */
  const quantity = 1;

  const msg = MsgCreateSpotMarketOrder.fromJSON({
    orderType,
    injectiveAddress,
    price: spotPriceToChainPriceToFixed({
      value: price,
      quoteDecimals: 6 /* USDT has 6 decimals */,
    }),
    quantity: spotQuantityToChainQuantityToFixed({ value: quantity }),
    marketId: injUsdtMarket.marketId,
    feeRecipient: injectiveAddress,
    subaccountId: subaccountId,
  });

  /** Prepare the Transaction **/
  const { signBytes, txRaw } = createTransaction({
    message: msg.toDirectSign(),
    memo: "",
    fee: DEFAULT_STD_FEE,
    pubKey: publicKey,
    sequence: parseInt(accountDetails.account.base_account.sequence, 10),
    accountNumber: parseInt(
      accountDetails.account.base_account.account_number,
      10
    ),
    chainId: network.chainId,
  });

  /** Sign transaction */
  const signature = await privateKey.sign(Buffer.from(signBytes));

  /** Append Signatures */
  txRaw.setSignaturesList([signature]);

  /** Calculate hash of the transaction */
  console.log(`Transaction Hash: ${TxClient.hash(txRaw)}`);

  const txService = new TxRestClient(network.sentryHttpApi);

  /** Simulate transaction */
  const simulationResponse = await txService.simulate(txRaw);
  console.log(
    `Transaction simulation response: ${JSON.stringify(
      simulationResponse.gasInfo
    )}`
  );

  /** Broadcast transaction */
  const txResponse = await txService.broadcast(txRaw);

  if ((txResponse as TxError).code !== 0) {
    console.log(`Transaction failed: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Broadcasted transaction hash: ${JSON.stringify(txResponse.txhash)}`
    );
  }
})();
