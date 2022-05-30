import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const limit = 2

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const tx = await exchangeClient.explorer.fetchBlocks({
    limit,
  });

  console.log(protoObjectToJson(tx));
})();
