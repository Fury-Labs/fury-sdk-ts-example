import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcDerivativesStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcDerivativeStream = new ExchangeGrpcDerivativesStream(
    network.exchangeApi
  );

  const marketId =
    "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce";
  const subaccountId =
    "0xc6fe5d33615a1c52c08018c47e8bc53646a0e101000000000000000000000000";

  await exchangeGrpcDerivativeStream.streamDerivativePositions({
    marketId,
    subaccountId,
    callback: (streamDerivativePositions) => {
      console.log(streamDerivativePositions);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
