import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcAccountStream } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcAccountStream = new ExchangeGrpcAccountStream(
    network.exchangeApi
  );

  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";

  await exchangeGrpcAccountStream.streamSubaccountBalance({
    subaccountId,
    callback: (subaccountBalance) => {
      console.log(subaccountBalance);
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
