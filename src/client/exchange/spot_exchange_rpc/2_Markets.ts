import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcSpotApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotApi = new ExchangeGrpcSpotApi(network.exchangeApi);

  const marketStatus = "active";
  const quoteDenom = "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7";

  const markets = await exchangeGrpcSpotApi.fetchMarkets({
    marketStatus: marketStatus,
    quoteDenom: quoteDenom,
  });

  console.log(markets);
})();
