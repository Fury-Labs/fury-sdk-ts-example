// import { getNetworkInfo, Network } from "@injectivelabs/networks";
// import { ExchangeClient } from "@injectivelabs/sdk-ts";
// import { protoObjectToJson } from "@injectivelabs/sdk-ts";
//
//
// (async () => {
//   const network = getNetworkInfo(Network.Testnet);
//
//   const marketIds = ["0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce"];
//
//   const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
//     network.exchangeApi
//   );
//   const market = await exchangeClient.derivativesApi.fetchDerivativeOrderbooks(marketIds);
//
//   console.log(protoObjectToJson(market, {}));
// })();
//
//
//
