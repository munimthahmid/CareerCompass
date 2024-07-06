import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold">Notifications</h2>
      {/* <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="border-b py-2">
            {notification.message}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Notifications;
