import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcSpotApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotApi = new ExchangeGrpcSpotApi(network.exchangeApi);

  const marketIds = [
    "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0",
    "0x0511ddc4e6586f3bfe1acb2dd905f8b8a82c97e1edaef654b12ca7e6031ca0fa",
  ];

  const market = await exchangeGrpcSpotApi.fetchOrderbooks(marketIds);

  console.log(market);
})();
