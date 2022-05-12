import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";


(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const subaccountId = "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const marketId = "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";
  const orderDirection = "buy";

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );

  const subaccountOrderSummary = await exchangeClient.accountApi.fetchSubaccountOrderSummary(
    {
    subaccountId,
    marketId,
    orderDirection
  }
  );

  console.log(protoObjectToJson(subaccountOrderSummary, {}));
})();
