"use client";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";
import { styled } from "styled-components";
import axios from "axios";

const ChartContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
`;

export default function Chart({ params }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchCoinHistory = async () => {
    return await axios
      .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${params.coinId}`)
      .then((res) => res.data);
  };

  const { isLoading, data } = useQuery(
    ["ohlcv", { params }],
    () => fetchCoinHistory(params.coinId), // Note the change here
    { refetchInterval: 10 * 60 * 1000 }
  );
  const series = data
    ? data.map((item) => ({
        x: new Date(item.time_open * 1000),
        y: [
          parseFloat(item.open),
          parseFloat(item.high),
          parseFloat(item.low),
          parseFloat(item.close),
        ],
      }))
    : [];

  const options = {
    chart: {
      type: "candlestick",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <ChartContainer>
      {isLoading
        ? "Loading Chart..."
        : isClient && (
            <div>
              {isLoading ? (
                "Loading Chart..."
              ) : (
                <ApexChart
                  style={{ width: "180%" }}
                  options={options}
                  series={[
                    {
                      data: series,
                    },
                  ]}
                  type="candlestick"
                />
              )}
            </div>
          )}
    </ChartContainer>
  );
}
