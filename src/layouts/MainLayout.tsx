"use client";
import React from "react";
import {
  StockOutlined,
  SettingOutlined,
  PieChartOutlined,
  FallOutlined,
  FormOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Button } from "antd";

const { Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
  getItem("Investments", "investments", <StockOutlined />),
  getItem("Expenses", "expenses", <FallOutlined />),
  getItem("Goals", "goals", <FormOutlined />),
  getItem("Settings", "settings", <SettingOutlined />),
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="h-screen">
      {/* TODO : Mobile sidebar button and menu */}
      <Button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="link"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </Button>

      <aside
        id="default-sidebar"
        className="fixed top-0 bottom-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 flex flex-col justify-center"
        aria-label="Sidebar"
      >
        <div className="h-3/5 flex flex-col justify-center bg-slate-900 rounded-2xl p-1 ml-10 shadow-xl">
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
            onClick={({ item, key, keyPath, domEvent }) => {
              console.log(item, key, keyPath, domEvent);
            }}
            className=" bg-slate-900"
          />
        </div>
      </aside>
      <Layout className="bg-gray-700">
        <Content className=" overflow-y-auto sm:ml-64">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
