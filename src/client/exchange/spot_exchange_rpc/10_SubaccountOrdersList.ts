// import { getNetworkInfo, Network } from "@injectivelabs/networks";
// import { ExchangeClient } from "@injectivelabs/sdk-ts";
// import { protoObjectToJson } from "@injectivelabs/sdk-ts";
//
//
// (async () => {
//   const network = getNetworkInfo(Network.Testnet);
//
//   const marketId = "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0"
//   const subaccountId = "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000"
//
//   const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
//     network.exchangeApi
//   );
//   const market = await exchangeClient.spotApi.fetchSubaccountOrdersList(
//     {
//       subaccountId: subaccountId,
//       marketId: marketId
//     }
//   );
//
//   console.log(protoObjectToJson(market, {}));
// })();
//
//
//
