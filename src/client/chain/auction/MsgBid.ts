import { getNetworkInfo, Network } from "@injectivelabs/networks";
import {
  AuctionCore,
  ChainClient,
  PrivateKey,
  BaseAccount,
  TxInjective,
  TxService,
} from "@injectivelabs/sdk-ts";
import { BigNumberInBase } from "@injectivelabs/utils";

/** MsgBid Example */
(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const privateKey = PrivateKey.fromPrivateKey(
    "f9db9bf330e23cb7839039e944adef6e9df447b90b503d5b4464c90bea9022f3"
  );
  const injectiveAddress = privateKey.toBech32();
  console.log(injectiveAddress, privateKey.toHex());

  /** Account Details **/
  const accountDetails = await new ChainClient.AuthRestApi(
    network.sentryHttpApi
  ).account(injectiveAddress);
  const baseAccount = BaseAccount.fromRestApi(accountDetails);

  /** Prepare the Message */
  const auctionModuleState = await new ChainClient.AuctionApi(
    network.sentryGrpcApi
  ).moduleState();
  const latestRound = auctionModuleState.getState()?.getAuctionRound();
  const round = latestRound || 1;
  const bid = 1; /** 100 INJ */
  const amount = {
    amount: new BigNumberInBase(bid).toWei().toFixed(),
    denom: "inj",
  };
  const msg = new AuctionCore.MsgBid({
    round,
    amount,
    injectiveAddress,
  });

  /** Prepare the Transaction **/
  const txInjective = new TxInjective({
    baseAccount,
    msgs: [msg],
    chainId: network.chainId,
    address: injectiveAddress,
  });

  /** Sign transaction */
  const signature = await privateKey.sign(txInjective.signBytes);
  const signedTxInjective = txInjective.withSignature(signature);

  /** Calculate hash of the transaction */
  console.log(`Transaction Hash: ${signedTxInjective.getTxHash()}`);

  const txService = new TxService({
    txInjective: signedTxInjective,
    endpoint: network.sentryGrpcApi,
  });

  /** Simulate transaction */
  const simulationResponse = await txService.simulate();
  console.log(
    `Transaction simulation response: ${JSON.stringify(
      simulationResponse.gasInfo
    )}`
  );

  /** Broadcast transaction */
  const txResponse = await txService.broadcast();
  console.log(
    `Broadcasted transaction hash: ${JSON.stringify(txResponse.txhash)}`
  );
})();
