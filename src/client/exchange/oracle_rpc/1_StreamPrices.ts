import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcOracleStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcOracleStream = new ExchangeGrpcOracleStream(
    network.exchangeApi
  );

  const baseSymbol = "BTC";
  const quoteSymbol = "USDT";
  const oracleType = "bandibc";

  await exchangeGrpcOracleStream.streamOraclePrices({
    oracleType,
    baseSymbol,
    quoteSymbol,
    callback: (streamPrices) => {
      console.log(streamPrices);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
