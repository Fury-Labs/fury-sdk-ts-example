import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcExplorerApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcExplorerApi = new ExchangeGrpcExplorerApi(
    network.exchangeApi
  );

  const tx_hash =
    "d7a1c7ee985f807bf6bc06de728810fd52d85141549af0540486faf5e7de0d1d";

  const tx = await exchangeGrpcExplorerApi.fetchTxByHash(tx_hash);

  console.log(tx);
})();
