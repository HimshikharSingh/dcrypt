import { useState, useEffect } from "react";

const Table = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  // console.log(SERVER_URL);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/api/data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [SERVER_URL]);

  // console.log(data);

  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left border-separate  border-spacing-y-4 rounded-lg">
        <thead className="md:text-lg text-xs uppercase dark:text-[#43495c] text-[#aab8c6]">
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              Last
            </th>
            <th scope="col" className="text-center">
              Buy / Sell Price
            </th>
            <th scope="col" className="text-center">
              Volume
            </th>
            <th scope="col" className="text-center">
              Base_unit
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, last, buy, sell, base_unit, volume }) => (
            <tr
              key={id}
              className="dark:bg-[#2e3241] bg-[#f8f9fa] font-semibold dark:text-white text-[#0c0f48] md:text-lg text-xs rounded-full"
            >
              <th
                scope="row"
                className="py-3 text-center whitespace-nowrap"
              >
                {id % 10 === 0 ? 10 : id % 10}
              </th>
              <td className="py-3 text-center">{name}</td>
              <td className="py-3 text-center">{last}</td>
              <td className="py-3 text-center">
                ₹ {buy} / ₹ {sell}
              </td>
              <td className="py-3 text-center">{volume}</td>
              <td className="py-3 text-center">{base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
