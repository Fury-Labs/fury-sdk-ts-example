import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAccountApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAccountApi = new ExchangeGrpcAccountApi(
    network.exchangeApi
  );

  const spotOrderHashes = [
    "0xbae2927fbc4fd12c70eb7f41fb69b28eeceabbad68fecf4547df7c9dba5eb816",
  ];
  const derivativeOrderHashes = [
    "0x82113f3998999bdc3892feaab2c4e53ba06c5fe887a2d5f9763397240f24da50",
  ];

  const orderStates = await exchangeGrpcAccountApi.fetchOrderStates({
    spotOrderHashes,
    derivativeOrderHashes,
  });

  console.log(orderStates);
})();
