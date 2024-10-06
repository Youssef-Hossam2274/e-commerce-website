import React, { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Get interaction history from localStorage or backend
    const storedHistory = JSON.parse(localStorage.getItem('userHistory')) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div>
      <h2>User History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.action} - {item.productName} on {item.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent activity</p>
      )}
    </div>
  );
};

export default History;
