import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcMetaApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcMetaApi = new ExchangeGrpcMetaApi(network.exchangeApi);

  const version = await exchangeGrpcMetaApi.fetchVersion();

  console.log(version);
})();
