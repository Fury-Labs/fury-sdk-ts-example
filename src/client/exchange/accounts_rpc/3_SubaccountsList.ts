import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const accountAddress = "inj14au322k9munkmx5wrchz9q30juf5wjgz2cfqku";
  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const subaccountLists = await exchangeClient.account.fetchSubaccountsList(
    accountAddress
  );

  console.log(protoObjectToJson(subaccountLists));
})();
