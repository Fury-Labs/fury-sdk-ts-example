import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, SpotOrderSide } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcStreamClient } from "@injectivelabs/sdk-ts/exchange-grpc-stream-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const marketId = "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";
  const subaccountId = "0xc6fe5d33615a1c52c08018c47e8bc53646a0e101000000000000000000000000";
  const orderSide = SpotOrderSide.Buy;

  const exchangeClient = new ExchangeGrpcStreamClient(
    network.exchangeApi
  );

  await exchangeClient.spot.streamSpotOrders(
    {
      marketId,
      orderSide,
      subaccountId,
      callback: (streamSpotOrders) => {
        console.log(protoObjectToJson(streamSpotOrders));
      },
      onEndCallback: (status) => {
        console.log("Stream has ended with status: " + status);
      },
    });
})();
