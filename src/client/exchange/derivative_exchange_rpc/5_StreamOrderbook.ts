import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcDerivativesStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcDerivativeStream = new ExchangeGrpcDerivativesStream(
    network.exchangeApi
  );

  const marketIds = [
    "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce",
  ];

  await exchangeGrpcDerivativeStream.streamDerivativeOrderbook({
    marketIds,
    callback: (streamOrderbook) => {
      console.log(streamOrderbook);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
