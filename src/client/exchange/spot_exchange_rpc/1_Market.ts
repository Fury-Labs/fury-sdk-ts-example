import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";


(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const marketId = "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const market = await exchangeClient.spot.fetchMarket(marketId);

  console.log(protoObjectToJson(market));
})();
