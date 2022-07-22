import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ChainRestAuthApi, MsgExecuteContract } from "@injectivelabs/sdk-ts";
import { PrivateKey } from "@injectivelabs/sdk-ts/dist/local";
import {
  privateKeyToPublicKeyBase64,
  DEFAULT_STD_FEE,
} from "@injectivelabs/sdk-ts";
import { createTransaction } from "@injectivelabs/tx-ts";
import { TxService, TxClient } from "@injectivelabs/tx-ts/dist/client";
import { BigNumberInBase } from "@injectivelabs/utils";

/** MsgSend Example */
(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const privateKeyHash =
    "f9db9bf330e23cb7839039e944adef6e9df447b90b503d5b4464c90bea9022f3";
  const privateKey = PrivateKey.fromPrivateKey(privateKeyHash);
  const injectiveAddress = privateKey.toBech32();
  const publicKey = privateKeyToPublicKeyBase64(
    Buffer.from(privateKeyHash, "hex")
  );

  /** Account Details **/
  const accountDetails = await new ChainRestAuthApi(
    network.sentryHttpApi
  ).fetchAccount(injectiveAddress);

  /** Prepare the Message */
  const amount = {
    amount: new BigNumberInBase(0.0001).toWei().toFixed(),
    denom: "inj",
  };

  const msg = MsgExecuteContract.fromJSON({
    contractAddress: "inj1q0e70vhrv063eah90mu97sazhywmeegp7myvnh",
    sender: injectiveAddress,
    msg: {
      create_asset_meta: {
        // eslint-disable-next-line no-constant-condition
        asset_info: true
          ? {
              native_token: { denom: "inj" },
            }
          : {
              token: {
                contract_addr: "inj",
              },
            },
        nonce: 69,
      },
    },
    amount: amount,
  });

  /** Prepare the Transaction **/
  const { signBytes, txRaw } = createTransaction({
    message: msg.toDirectSign(),
    memo: "",
    fee: DEFAULT_STD_FEE,
    pubKey: Buffer.from(publicKey).toString("base64"),
    sequence: parseInt(accountDetails.account.base_account.sequence, 10),
    accountNumber: parseInt(
      accountDetails.account.base_account.account_number,
      10
    ),
    chainId: network.chainId,
  });

  /** Sign transaction */
  const signature = await privateKey.sign(signBytes);

  /** Append Signatures */
  txRaw.setSignaturesList([signature]);

  /** Calculate hash of the transaction */
  console.log(`Transaction Hash: ${await TxClient.hash(txRaw)}`);

  const txService = new TxService({
    txRaw,
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
