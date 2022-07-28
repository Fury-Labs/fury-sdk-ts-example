import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcDerivativesApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcDerivativesApi = new ExchangeGrpcDerivativesApi(
    network.exchangeApi
  );

  const marketIds = [
    "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce",
  ];

  const market = await exchangeGrpcDerivativesApi.fetchOrderbooks(marketIds);

  console.log(market);
})();
