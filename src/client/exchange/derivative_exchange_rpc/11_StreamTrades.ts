// import { getNetworkInfo, Network } from "@injectivelabs/networks";
// import { ExchangeClient } from "@injectivelabs/sdk-ts";
// import { protoObjectToJson } from "@injectivelabs/sdk-ts";
//
// (async () => {
//   const network = getNetworkInfo(Network.Testnet);
//
//   const marketIds = ["0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce"];
//   const subaccountIds = ["0xc6fe5d33615a1c52c08018c47e8bc53646a0e101000000000000000000000000"];
//   const executionSide = "maker";
//   const direction = "buy";
//   const skip = 0;
//   const limit = 10;
//
//   const exchangeClient = new ExchangeClient.ExchangeGrpcStreamClient(
//     network.exchangeApi
//   );
//
//   await exchangeClient.derivativesStream.streamDerivativeTrades(
//     {
//       marketIds: marketIds,
//       subaccountIds: subaccountIds,
//       executionSide: executionSide,
//       direction: direction,
//       skip: skip,
//       limit: limit,
//       callback: (streamDerivativeTrades) => {
//         console.log(protoObjectToJson(streamDerivativeTrades, {}));
//       },
//       onEndCallback: (status) => {
//         console.log("Stream has ended with status: " + status);
//       },
//     });
// })();
