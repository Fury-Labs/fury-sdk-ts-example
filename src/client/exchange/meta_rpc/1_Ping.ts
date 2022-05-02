import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";

export const prettyPrint = (object: any): string => {
  return JSON.stringify(object.toObject(), null, 2)
}

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const ping = await exchangeClient.metaApi.fetchPing(
  );

  console.log(prettyPrint(ping))
})();
