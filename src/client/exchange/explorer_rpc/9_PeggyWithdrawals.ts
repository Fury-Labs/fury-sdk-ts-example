import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/dist/client/exchange/ExchangeGrpcClient";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const sender = "inj1hkhdaj2a2clmq5jq6mspsggqs32vynpk228q3r"

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const tx = await exchangeClient.explorer.fetchPeggyWithdrawalTxs({
    sender: sender,
  });

  console.log(protoObjectToJson(tx));
})();
