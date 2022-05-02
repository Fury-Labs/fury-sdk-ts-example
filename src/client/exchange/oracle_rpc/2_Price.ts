import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";

export const prettyPrint = (object: any): string => {
  return JSON.stringify(object.toObject(), null, 2)
}

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const baseSymbol = "BTC";
  const quoteSymbol = "USDT";
  const oracleType = "bandibc";
  const oracleScaleFactor = 6;

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const oraclePrice = await exchangeClient.oracleApi.fetchOraclePrice(
    {
      baseSymbol,
      quoteSymbol,
      oracleType,
      oracleScaleFactor
    }
  );

  console.log(prettyPrint(oraclePrice));
})();



