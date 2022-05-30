import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcStreamClient } from "@injectivelabs/sdk-ts/exchange-grpc-stream-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const baseSymbol = "BTC";
  const quoteSymbol = "USDT";
  const oracleType = "bandibc";

  const exchangeClient = new ExchangeGrpcStreamClient(
    network.exchangeApi
  );

  await exchangeClient.oracle.streamOraclePrices(
    {
    oracleType,
    baseSymbol,
    quoteSymbol,
    callback: (streamPrices) => {
      console.log(protoObjectToJson(streamPrices));
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
