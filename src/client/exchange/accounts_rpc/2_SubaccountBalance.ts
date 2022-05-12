import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const denom = "inj";

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );

  const subaccountBalance = await exchangeClient.accountApi.fetchSubaccountBalance(
    subaccountId,
    denom
  );

  console.log(protoObjectToJson(subaccountBalance, {}));
})();
