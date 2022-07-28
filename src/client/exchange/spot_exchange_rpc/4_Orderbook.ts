import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcSpotApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotApi = new ExchangeGrpcSpotApi(network.exchangeApi);

  const marketId =
    "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";

  const market = await exchangeGrpcSpotApi.fetchOrderbook(marketId);

  console.log(market);
})();
