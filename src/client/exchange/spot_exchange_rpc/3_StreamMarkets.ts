// import { getNetworkInfo, Network } from "@injectivelabs/networks";
// import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";
//
// (async () => {
//   const network = getNetworkInfo(Network.Testnet);
//   const baseSymbol = "BTC";
//   const quoteSymbol = "USDT";
//   const oracleType = "bandibc";
//
//   const exchangeClient = new ExchangeClient.ExchangeGrpcStreamClient(
//     network.exchangeApi
//   );
//
//   await exchangeClient.spotStream.streamSpotMarkets(
//     {
//       callback: (streamSpotMarkets) => {
//         console.log(protoObjectToJson(streamSpotMarkets, {}));
//       },
//       onEndCallback: (status) => {
//         console.log("Stream has ended with status: " + status);
//       },
//     });
// })();
