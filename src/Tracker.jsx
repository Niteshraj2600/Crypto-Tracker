import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Tracker.css";

function Heading() {
  const data = useSelector((state) => state.data.tracker);

  //   Handle the up and down graph color method
  const downUpGraph = (graph) => {
    if (graph.includes("▼")) {
      return "down";
    }
    if (graph.includes("▲")) {
      return "up";
    }
    return "neutral";
  };
  //   end

  // Function that update the price and percentage change

  const [update, setUpdate] = useState(data);

  // Random price & % update
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = update.map((user) => {
        const getRandomChange = () => {
          const sign = Math.random() > 0.5 ? "▲" : "▼";
          return `${sign}${(Math.random() * 2).toFixed(2)}%`;
        };

        const currentPrice = parseFloat(user.price.replace(/[$,]/g, ""));
        const newPrice = (
          currentPrice *
          (1 + (Math.random() - 0.5) * 0.01)
        ).toFixed(2);

        return {
          ...user,
          price: `$${newPrice}`,
          change_1h: getRandomChange(),
          change_24h: getRandomChange(),
          change_7d: getRandomChange(),
        };
      });

      setUpdate(updatedData);
    }, 2000);

    return () => clearInterval(interval);
  }, [update]);

  //   end

  return (
    <table>
      <thead className="t-head">
        <tr>
          <th>#</th>
          <th>Name</th>
          {/* <th>Symbol</th> */}
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>Volume (24h)</th>

          {/* <th>Volume_Detail</th> */}
          {/* // this also inside the volume 24h */}

          <th>Circulating Supply</th>
          <th>Last 7 Days </th>
          {/* in this put the graph  */}
        </tr>
      </thead>

      <tbody>
        {update.map((user) => (
          <tr key={user.id} className="tbody-tr">
            <td>{user.id} </td>
            <td data-label="Name">
              <div
                className="tname-section"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img src={user.image} width={"32px"} />
                {user.name}{" "}
                <span style={{ color: "gray", fontSize: "14px", gap: "4px" }}>
                  {user.symbol}
                </span>
              </div>
            </td>
            <td data-label="Price">{user.price}</td>
            <td data-label="1h %" className={downUpGraph(user.change_1h)}>
              {user.change_1h}
            </td>
            <td data-label="24h %" className={downUpGraph(user.change_24h)}>
              {user.change_24h}
            </td>
            <td data-label="7d %" className={downUpGraph(user.change_7d)}>
              {user.change_7d}
            </td>
            <td data-label="Market Cap">{user.market_cap}</td>

            <td data-label="Volume(24h)">
              <div className="t-volume">
                {user.volume_24h}

                <span style={{ fontSize: "15px", color: "gray" }}>
                  {" "}
                  {user.volume_detail}{" "}
                </span>
              </div>
            </td>
            <td data-label="Circulating Supply">{user.circulating_supply}</td>
            <td data-label="Last 7 Days ">
              <div className="last">
                <img
                  src={user.graph}
                  alt="last7Days_chart"
                  width={"120px"}
                  //   style={{ fill: "green" }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Heading;
