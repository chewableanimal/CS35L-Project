"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import CoinList from "@/app/dashboard/coins/page";

export default function trade() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CoinList isLoggedIn={true} type={"trade"} />
    </QueryClientProvider>
  );
}
