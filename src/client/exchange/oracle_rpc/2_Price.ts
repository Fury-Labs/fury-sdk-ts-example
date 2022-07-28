import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcOracleApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcOracleApi = new ExchangeGrpcOracleApi(network.exchangeApi);

  const baseSymbol = "BTC";
  const quoteSymbol = "USDT";
  const oracleType = "bandibc";
  const oracleScaleFactor = 6;

  const oraclePrice = await exchangeGrpcOracleApi.fetchOraclePrice({
    baseSymbol,
    quoteSymbol,
    oracleType,
    oracleScaleFactor,
  });

  console.log(oraclePrice);
})();
