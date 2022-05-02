import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";

export const prettyPrint = (object: any): string => {
  return JSON.stringify(object.toObject(), null, 2)
}

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const accountAddress = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku"

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const rewards = await exchangeClient.accountApi.fetchRewards(
      accountAddress
    );

  console.log(prettyPrint(rewards));
})();
