import React from "react";

const Dashboard = () => {
  const summary = {
    totalBookings: 3,
    completed: 1,
    upcoming: 1,
    totalSpent: 1899,
  };

  const bookings = [
    {
      id: "BK001",
      name: "Rajesh Kumar",
      service: "Plumbing",
      date: "2024-01-15",
      time: "10:00 AM",
      location: "Koramangala, Bangalore",
      amount: 450,
      status: "Completed",
      rating: 5,
      review: "Excellent service, very professional",
      image: "https://i.pravatar.cc/50?img=3",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Total Bookings</p>
          <h3 className="text-xl font-bold">{summary.totalBookings}</h3>
        </div>
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Completed</p>
          <h3 className="text-xl font-bold">{summary.completed}</h3>
        </div>
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Upcoming</p>
          <h3 className="text-xl font-bold">{summary.upcoming}</h3>
        </div>
        <div className="p-4 bg-white shadow rounded-xl">
          <p className="text-gray-500">Total Spent</p>
          <h3 className="text-xl font-bold">₹{summary.totalSpent}</h3>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-4">My Bookings</h3>
        {bookings.map((b) => (
          <div
            key={b.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
          >
            <div className="flex items-center gap-4">
              <img src={b.image} alt={b.name} className="w-14 h-14 rounded-full" />
              <div>
                <p className="font-semibold">{b.name}</p>
                <p className="text-blue-600">{b.service}</p>
                <p className="text-gray-400 text-sm">ID: {b.id}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-3 md:mt-0">
              <p>Date & Time: {b.date} - {b.time}</p>
              <p>Location: {b.location}</p>
              <p>Amount: ₹{b.amount}</p>
            </div>
            <div className="flex flex-col items-end mt-3 md:mt-0">
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                {b.status}
              </span>
              <span className="text-yellow-500 mt-1">⭐ {b.rating}</span>
            </div>
          </div>
        ))}

        <div className="mt-2 text-gray-600 italic">
          "{bookings[0].review}"
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
