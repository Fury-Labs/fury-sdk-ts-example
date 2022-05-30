import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, DerivativeOrderSide } from "@injectivelabs/sdk-ts";
import { ExchangeGrpcStreamClient } from "@injectivelabs/sdk-ts/exchange-grpc-stream-client";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);

  const marketId = "0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce";
  const subaccountId = "0xc6fe5d33615a1c52c08018c47e8bc53646a0e101000000000000000000000000";
  const orderSide = DerivativeOrderSide.Buy;

  const exchangeClient = new ExchangeGrpcStreamClient(
    network.exchangeApi
  );

  await exchangeClient.derivatives.streamDerivativeOrders(
    {
      marketId: marketId,
      subaccountId: subaccountId,
      orderSide: orderSide,
      callback: (streamDerivativeOrders) => {
        console.log(protoObjectToJson(streamDerivativeOrders));
      },
      onEndCallback: (status) => {
        console.log("Stream has ended with status: " + status);
      },
    });
})();
