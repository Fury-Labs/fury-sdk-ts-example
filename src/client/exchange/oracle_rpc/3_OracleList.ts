import { getNetworkInfo, Network } from "@injectivelabs/networks";
import { ExchangeGrpcOracleApi } from "@injectivelabs/sdk-ts";

(async () => {
  const network = getNetworkInfo(Network.TestnetK8s);
  const exchangeGrpcOracleApi = new ExchangeGrpcOracleApi(network.exchangeApi);

  const oracleList = await exchangeGrpcOracleApi.fetchOracleList();

  console.log(oracleList);
})();
