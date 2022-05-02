import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const ping = await exchangeClient.metaApi.fetchPing(
  );

  console.log(JSON.stringify(ping.toObject(), null, 2))
})();
