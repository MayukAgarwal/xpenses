"use client";
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic, Skeleton } from "antd";

interface netWorthCardProps {
  data: string;
  loading?: boolean;
}

const NetWorth = ({ data, loading = false }: netWorthCardProps) => (
  <div
    className="block p-6 border rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2 max-w-full"
    style={{ background: "#C69749" }}
  >
    <h5 className="mb-2 font-bold text-gray-900 dark:text-white">
      Total Net Worth
    </h5>

    <div className="flex justify-between items-center">
      <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data}
      </p>
      <Statistic
        value={11.28}
        precision={2}
        valueStyle={{
          color: "#950101",
          fontSize: "15px",
        }}
        prefix={<ArrowDownOutlined />}
        suffix="%"
      />
    </div>
  </div>
);

export default NetWorth;
