import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/dist/client/exchange/ExchangeGrpcClient";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const denom = "share2";
  const address = "inj1gxqdj76ul07w4ujsl8403nhhzyvug2h66qk057";
  const status = "disbursed";

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const redemptions = await exchangeClient.insuranceFund.fetchRedemptions(
    {
      denom,
      address,
      status
    }
  );

  console.log(protoObjectToJson(redemptions))
})();
