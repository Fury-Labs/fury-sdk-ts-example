import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAuctionStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const exchangeGrpcAuctionStream = new ExchangeGrpcAuctionStream(
    network.exchangeApi
  );

  await exchangeGrpcAuctionStream.streamBids({
    callback: (streamBidsResponse) => {
      console.log(streamBidsResponse);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
