import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcInsuranceFundApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcInsuranceFundApi = new ExchangeGrpcInsuranceFundApi(
    network.exchangeApi
  );

  const insuranceFunds =
    await exchangeGrpcInsuranceFundApi.fetchInsuranceFunds();

  console.log(insuranceFunds);
})();
