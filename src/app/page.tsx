"use client";
import React from "react";
import NetWorth from "./components/netWorthCard/net.worth";

const skeleton = (
  <div
    role="status"
    className="max-w-lg border rounded-2xl shadow w-96 p-4 m-2 space-y-4 border-gray-200 divide-y divide-gray-200 animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div className="flex items-center justify-between pt-4">
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

const skeletonGraph = (
  <div
    role="status"
    className="w-full sm:w-2/5 p-4 m-2 border rounded-2xl shadow border-gray-200 animate-pulse md:p-6 dark:border-gray-700 "
  >
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
    <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-baseline mt-4 space-x-6">
      <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
      <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
      <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
      <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

const Home = () => {
  const populateCards = () => {
    return (
      <a
        href="#"
        className="block max-w-xs   p-6 border rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2"
        style={{ background: "#282A3A" }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    );
  };

  return (
    <div className="h-screen">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center md:w-3/4 sm:w-full ">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/4">
              <NetWorth data={"$90,000"} loading={true} />
              {populateCards()}
            </div>
            <div>
              {populateCards()}
              {populateCards()}
            </div>
            <div className="flex">{skeleton}</div>
          </div>
          <div className="flex flex-wrap justify-center w-full">
            {skeletonGraph}
            {skeletonGraph}
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:w-1/5 sm:w-full">
          {populateCards()}
          {populateCards()}
        </div>
      </div>
    </div>
  );
};

export default Home;
