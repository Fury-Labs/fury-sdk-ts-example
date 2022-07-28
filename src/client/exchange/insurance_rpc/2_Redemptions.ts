import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcInsuranceFundApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcInsuranceFundApi = new ExchangeGrpcInsuranceFundApi(
    network.exchangeApi
  );

  const denom = "share2";
  const address = "inj1gxqdj76ul07w4ujsl8403nhhzyvug2h66qk057";
  const status = "disbursed";

  const redemptions = await exchangeGrpcInsuranceFundApi.fetchRedemptions({
    denom,
    address,
    status,
  });

  console.log(redemptions);
})();
