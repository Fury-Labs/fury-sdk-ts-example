import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAuctionApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAuctionApi = new ExchangeGrpcAuctionApi(
    network.exchangeApi
  );

  const auction = await exchangeGrpcAuctionApi.fetchAuctions();

  console.log(auction);
})();
