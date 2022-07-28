import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcExplorerApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcExplorerApi = new ExchangeGrpcExplorerApi(
    network.exchangeApi
  );

  const address = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku";
  const limit = 2;

  const tx = await exchangeGrpcExplorerApi.fetchAccountTx({
    address,
    limit,
  });

  console.log(tx);
})();
