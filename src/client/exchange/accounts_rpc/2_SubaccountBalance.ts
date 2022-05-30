import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const denom = "inj";

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const subaccountBalance = await exchangeClient.account.fetchSubaccountBalance(
    subaccountId,
    denom
  );

  console.log(protoObjectToJson(subaccountBalance));
})();
