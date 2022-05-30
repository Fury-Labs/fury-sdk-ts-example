import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const spotOrderHashes = ["0xbae2927fbc4fd12c70eb7f41fb69b28eeceabbad68fecf4547df7c9dba5eb816"];
  const derivativeOrderHashes = ["0x82113f3998999bdc3892feaab2c4e53ba06c5fe887a2d5f9763397240f24da50"];

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const orderStates = await exchangeClient.account.fetchOrderStates(
    {
      spotOrderHashes,
      derivativeOrderHashes
    }
  );

  console.log(protoObjectToJson(orderStates));
})();
