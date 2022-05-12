import {getNetworkInfo, Network} from "@injectivelabs/networks";
import {protoObjectToJson, ExchangeClient, TradeDirection, TradeExecutionSide} from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);

  const marketIds = ["0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce"];
  const subaccountIds = ["0xc6fe5d33615a1c52c08018c47e8bc53646a0e101000000000000000000000000"];
  const executionSide = TradeExecutionSide.Maker;
  const direction = TradeDirection.Buy;
  const pagination = {
    skip: 0,
    limit: 10,
    key: ""
  };

  const exchangeClient = new ExchangeClient.ExchangeGrpcStreamClient(
    network.exchangeApi
  );

  await exchangeClient.derivativesStream.streamDerivativeTrades(
    {
      marketIds: marketIds,
      subaccountIds: subaccountIds,
      executionSide: executionSide,
      direction: direction,
      pagination: pagination,
      callback: (streamDerivativeTrades) => {
        console.log(protoObjectToJson(streamDerivativeTrades, {}));
      },
      onEndCallback: (status) => {
        console.log("Stream has ended with status: " + status);
      },
    });
})();
