import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, TradeDirection, TradeExecutionType, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const subaccountId = "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";
  const marketId = "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce";
  const direction = TradeDirection.Buy;
  const executionType = TradeExecutionType.Market;
  const pagination = {
    skip: 0,
    limit: 10,
    key: ""
  };

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const subaccountTrades = await exchangeClient.derivativesApi.fetchDerivativeSubaccountTradesList(
    {
      subaccountId: subaccountId,
      marketId: marketId,
      direction: direction,
      executionType: executionType,
      pagination: pagination,
    }
  );

  console.log(protoObjectToJson(subaccountTrades, {}));
})();
