import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcExplorerApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcExplorerApi = new ExchangeGrpcExplorerApi(
    network.exchangeApi
  );

  const sender = "inj1hkhdaj2a2clmq5jq6mspsggqs32vynpk228q3r";

  const tx = await exchangeGrpcExplorerApi.fetchPeggyWithdrawalTxs({
    sender: sender,
  });

  console.log(tx);
})();
