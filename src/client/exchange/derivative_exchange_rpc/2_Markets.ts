import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/dist/client/exchange/ExchangeGrpcClient";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const marketStatus = "active";
  const quoteDenom = "peggy0xdAC17F958D2ee523a2206206994597C13D831ec7";

  const exchangeClient = new ExchangeGrpcClient(network.exchangeApi);

  const markets = await exchangeClient.derivatives.fetchMarkets({
    marketStatus: marketStatus,
    quoteDenom: quoteDenom,
  });

  console.log(protoObjectToJson(markets));
})();
