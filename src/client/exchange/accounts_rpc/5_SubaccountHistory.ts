import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAccountApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAccountApi = new ExchangeGrpcAccountApi(
    network.exchangeApi
  );

  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const denom = "inj";
  const transferTypes = ["deposit"];
  const pagination = {
    skip: 0,
    limit: 10,
    key: "",
  };

  const subaccountHistory = await exchangeGrpcAccountApi.fetchSubaccountHistory(
    {
      subaccountId: subaccountId,
      denom: denom,
      transferTypes: transferTypes,
      pagination: pagination,
    }
  );

  console.log(subaccountHistory);
})();
