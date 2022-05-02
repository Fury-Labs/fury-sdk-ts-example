import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeClient } from "@injectivelabs/sdk-ts";

export const prettyPrint = (object: any): string => {
  return JSON.stringify(object.toObject(), null, 2)
}

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const subaccountId =
    "0xaf79152ac5df276d9a8e1e2e22822f9713474902000000000000000000000000";

  const exchangeClient = new ExchangeClient.ExchangeGrpcStreamClient(
    network.exchangeApi
  );

  await exchangeClient.accountStream.streamSubaccountBalance({
    subaccountId,
    callback: (subaccountBalance) => {
      console.log(prettyPrint(subaccountBalance));
    },
    onEndCallback: (status) => {
      console.log("Stream has ended with status: " + status);
    },
  });
})();
