import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcExplorerStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcExplorerStream = new ExchangeGrpcExplorerStream(
    network.exchangeApi
  );

  await exchangeGrpcExplorerStream.streamTransactions({
    callback: (streamTxs) => {
      console.log(streamTxs);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
