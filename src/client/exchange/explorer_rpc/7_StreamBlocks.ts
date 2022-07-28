import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcExplorerStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcExplorerStream = new ExchangeGrpcExplorerStream(
    network.exchangeApi
  );

  await exchangeGrpcExplorerStream.blocks({
    callback: (streamBlocks) => {
      console.log(streamBlocks);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
