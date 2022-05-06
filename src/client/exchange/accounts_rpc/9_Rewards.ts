import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const address = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku"
  const epoch = -1;

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const rewards = await exchangeClient.accountApi.fetchRewards(
    {
      address: address,
      epoch: epoch
    }
    );

  console.log(protoObjectToJson(rewards, {}));
})();
