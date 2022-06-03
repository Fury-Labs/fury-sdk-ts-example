import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const round = 19532;

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const auction = await exchangeClient.auction.fetchAuction(round);

  console.log(protoObjectToJson(auction));
})();
