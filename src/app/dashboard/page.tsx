// src/app/dashboard.tsx

"use client";

import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-500">Customers Online</p>
            <p className="text-3xl font-bold">1,359</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-500">Todays Sales</p>
            <p className="text-3xl font-bold">$7,349.90</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-500">Open Tickets</p>
            <p className="text-3xl font-bold">26</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-500">New Orders</p>
            <p className="text-3xl font-bold">476</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Section */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
            <canvas id="salesChart" width="400" height="200"></canvas>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Traffic Sources</h2>
            <canvas id="trafficChart" width="400" height="200"></canvas>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
