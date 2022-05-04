import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const denom = "share2";
  const address = "inj1gxqdj76ul07w4ujsl8403nhhzyvug2h66qk057";
  const status = "disbursed";

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );

  const redemptions = await exchangeClient.insuranceFundApi.fetchRedemptions(
    {
      denom,
      address,
      status
    }
  );

  console.log(protoObjectToJson(redemptions, {}))
})();
