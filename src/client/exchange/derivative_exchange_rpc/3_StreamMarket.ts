// import { getNetworkInfo, Network } from "@injectivelabs/networks";
// import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";
//
// (async () => {
//   const network = getNetworkInfo(Network.Testnet);
//
//   const exchangeClient = new ExchangeClient.ExchangeGrpcStreamClient(
//     network.exchangeApi
//   );
//
//   await exchangeClient.derivativesStream.streamDerivativeMarkets(
//     {
//       callback: (streamDerivativeMarkets) => {
//         console.log(protoObjectToJson(streamDerivativeMarkets, {}));
//       },
//       onEndCallback: (status) => {
//         console.log("Stream has ended with status: " + status);
//       },
//     });
// })();
