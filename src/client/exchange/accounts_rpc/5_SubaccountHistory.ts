import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const denom = "inj";
  const transferTypes = ["deposit"];
  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const subaccountHistory = await exchangeClient.accountApi.fetchSubaccountHistory(
    {
      subaccountId,
      denom,
      transferTypes });

  console.log(protoObjectToJson(subaccountHistory, {}));
})();
