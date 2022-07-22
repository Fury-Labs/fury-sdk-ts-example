import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAuctionApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAuctionApi = new ExchangeGrpcAuctionApi(
    network.exchangeApi
  );

  const round = 19532;

  const auction = await exchangeGrpcAuctionApi.fetchAuction(round);

  console.log(auction);
})();
