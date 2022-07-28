import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAccountApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAccountApi = new ExchangeGrpcAccountApi(
    network.exchangeApi
  );

  const accountAddress = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku";

  const subaccountLists = await exchangeGrpcAccountApi.fetchSubaccountsList(
    accountAddress
  );

  console.log(subaccountLists);
})();
