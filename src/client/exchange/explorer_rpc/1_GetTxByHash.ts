import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { protoObjectToJson, ExchangeClient } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.Testnet);
  const tx_hash =
    "d7a1c7ee985f807bf6bc06de728810fd52d85141549af0540486faf5e7de0d1d";

  const exchangeClient = new ExchangeClient.ExchangeGrpcClient(
    network.exchangeApi
  );
  const tx = await exchangeClient.explorerApi.fetchTxByHash(tx_hash);

  console.log(protoObjectToJson(tx, {}));
})();
