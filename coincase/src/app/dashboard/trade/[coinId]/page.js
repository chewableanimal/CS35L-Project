"use client";
import axios from "axios";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import { coinPrices } from "../../../../../static/coinPrices";
import Coin from "../../coins/[coinId]/coin";

const BASE_URL = "https://api.coinpaprika.com/v1";
export default function Home({ params }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Coin params={params} type={"trade"} />
    </QueryClientProvider>
  );
}
