import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAccountApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAccountApi = new ExchangeGrpcAccountApi(
    network.exchangeApi
  );

  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const marketId =
    "0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0";
  const orderDirection = "buy";

  const subaccountOrderSummary =
    await exchangeGrpcAccountApi.fetchSubaccountOrderSummary({
      subaccountId,
      marketId,
      orderDirection,
    });

  console.log(subaccountOrderSummary);
})();
