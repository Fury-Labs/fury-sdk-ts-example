import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";


(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const marketStatus = "active";
  const quoteDenom = "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7";

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const markets = await exchangeClient.derivativesApi.fetchDerivativeMarkets(
    {
      marketStatus: marketStatus,
      quoteDenom: quoteDenom
    }
  );

  console.log(protoObjectToJson(markets, {}));
})();
