import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcClient } from "@injectivelabs/sdk-ts/exchange-grpc-client";


(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const subaccountId = "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const marketId = "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce";
  const pagination = {
    skip: 0,
    limit: 10,
    key: ""
  };

  const exchangeClient = new ExchangeGrpcClient(
    network.exchangeApi
  );

  const fundingPayments = await exchangeClient.derivatives.fetchFundingPayments(
    {
      marketId: marketId,
      subaccountId: subaccountId,
      pagination: pagination,
      }
  );

  console.log(protoObjectToJson(fundingPayments));
})();
