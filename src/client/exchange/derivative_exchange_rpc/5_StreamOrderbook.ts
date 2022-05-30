import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcStreamClient } from "@injectivelabs/sdk-ts/exchange-grpc-stream-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const marketIds = ["0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce"];

  const exchangeClient = new ExchangeGrpcStreamClient(
    network.exchangeApi
  );

  await exchangeClient.derivatives.streamDerivativeOrderbook(
    {
      marketIds,
      callback: (streamOrderbook) => {
        console.log(protoObjectToJson(streamOrderbook));
      },
      onEndCallback: (status) => {
        console.log("Stream has ended with status: " + status);
      },
    });
})();
