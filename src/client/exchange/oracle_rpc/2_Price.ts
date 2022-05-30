import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const baseSymbol = "BTC";
  const quoteSymbol = "USDT";
  const oracleType = "bandibc";
  const oracleScaleFactor = 6;

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const oraclePrice = await exchangeClient.oracle.fetchOraclePrice(
    {
      baseSymbol,
      quoteSymbol,
      oracleType,
      oracleScaleFactor
    }
  );

  console.log(protoObjectToJson(oraclePrice));
})();
