import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";


(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const marketId = "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce";
  const skip = 0;
  const limit = 10;

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );

  const fundingRates = await exchangeClient.derivativesApi.fetchDerivativeFundingRates(
    {
      marketId,
      pagination: {
        skip: skip,
        limit: limit,
        key: "" }
    }
    );

  console.log(protoObjectToJson(fundingRates, {}));
})();



