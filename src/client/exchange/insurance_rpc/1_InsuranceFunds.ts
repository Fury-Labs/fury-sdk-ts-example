import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );

  const insuranceFunds = await exchangeClient.insuranceFundApi.fetchInsuranceFunds(
  );

  console.log(protoObjectToJson(insuranceFunds, {}))
})();
