import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcSpotStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotStream = new ExchangeGrpcSpotStream(
    network.exchangeApi
  );

  const marketIds = [
    "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0",
  ];

  await exchangeGrpcSpotStream.streamSpotOrderbook({
    marketIds,
    callback: (streamSpotOrderbook) => {
      console.log(streamSpotOrderbook);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
