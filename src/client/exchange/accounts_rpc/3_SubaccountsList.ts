import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const accountAddress = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku"
  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const subaccountLists = await exchangeClient.accountApi.fetchSubaccountsList(
    accountAddress
  );

  console.log(protoObjectToJson(subaccountLists, {}));
})();
