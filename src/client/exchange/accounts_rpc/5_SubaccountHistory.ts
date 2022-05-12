import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const denom = "inj";
  const transferTypes = ["deposit"];
  const pagination = {
    skip: 0,
    limit: 10,
    key: ""
  };

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const subaccountHistory = await exchangeClient.accountApi.fetchSubaccountHistory(
    {
      subaccountId: subaccountId,
      denom: denom,
      transferTypes: transferTypes,
      pagination: pagination,
    });

  console.log(protoObjectToJson(subaccountHistory, {}));
})();
