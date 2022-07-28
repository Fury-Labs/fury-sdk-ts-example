import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcExplorerApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcExplorerApi = new ExchangeGrpcExplorerApi(
    network.exchangeApi
  );

  const limit = 2;

  const tx = await exchangeGrpcExplorerApi.fetchBlocks({
    limit: limit,
  });

  console.log(tx);
})();
