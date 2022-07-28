import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcSpotStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcSpotStream = new ExchangeGrpcSpotStream(
    network.exchangeApi
  );

  const marketIds = [
    "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce",
  ];

  await exchangeGrpcSpotStream.streamSpotMarket({
    marketIds,
    callback: (streamSpotMarket) => {
      console.log(streamSpotMarket);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
