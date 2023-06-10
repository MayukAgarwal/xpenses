"use client";
import React from "react";
import { Card } from "antd";
import { AreaChart, Area } from "recharts";
import "./graphCard.css";

interface GraphCardProps {
  size: number;
  chartHeight: number;
  title: React.ReactNode | string;
  data: any;
}

const GraphCard = ({ size, chartHeight, data, title }: GraphCardProps) => (
  <Card
    hoverable
    bordered={false}
    bodyStyle={{ padding: 0 }}
    style={{
      width: size,
      margin: "10px",
      background: "#17202A",
    }}
    headStyle={{
      border: "0",
      color: "white",
    }}
    title={title}
    className="graph-card"
  >
    <AreaChart
      width={size}
      height={chartHeight}
      data={data.plot}
      margin={{
        top: 10,
      }}
    >
      <Area
        type="monotone"
        dataKey="uv"
        stroke={data.stroke}
        fill={data.fill}
      />
    </AreaChart>
  </Card>
);

export default GraphCard;
