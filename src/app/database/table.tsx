'use client';
import { IGasStation } from '@/models/gas-station';
import useGasStations from '@/queries/useGasStations';
import React from 'react';

const Table = () => {
  const { data, isLoading, isError } = useGasStations();

  if (isLoading) return <p>Loading...</p>;

  if (data) {
    console.log(data);
  }

  return (
    data && (
      <div className="relative overflow-x-auto">
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto"
          id="gas-station-table"
        >
          <thead className="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-1/12 px-3 py-1 border truncate">Station Name</th>
              <th className="w-1/12 px-3 py-1 border truncate">
                Station Address
              </th>
              <th className="w-1/12 px-3 py-1 border truncate">Area</th>
              <th className="w-1/8 px-3 py-1 border truncate">Gas Pumps</th>
              <th className="w-1/8 px-3 py-1 border truncate">Diesel Pumps</th>
              <th className="w-1/8 px-3 py-1 border truncate">EC - Lvl 2</th>
              <th className="w-1/8 px-3 py-1 border truncate">EC - Fast DC</th>
              <th className="w-1/8 px-3 py-1 border truncate">DCFC</th>
              <th className="w-1/8 px-3 py-1 border truncate">EC stations</th>
              <th className="w-1/8 px-3 py-1 border truncate">
                Charge Capacity
              </th>
              <th className="w-1/8 px-3 py-1 border truncate">
                Number of Shops
              </th>
              <th className="w-1/8 px-3 py-1 border truncate">Shop Names</th>
              <th className="w-1/8 px-3 py-1 border truncate">Truck Stop?</th>
              <th className="w-1/8 px-3 py-1 border truncate">
                Bathroom Stalls
              </th>
              <th className="w-1/8 px-3 py-1 border truncate">Seating?</th>
              <th className="w-1/8 px-3 py-1 border truncate">Greenspace?</th>
              <th className="w-1/8 px-3 py-1 border truncate">
                Number of Daily Customers
              </th>
              <th className="w-1/8 px-3 py-1 border truncate">Image(s)</th>
              <th className="w-[10px] px-3 py-1 border truncate">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: IGasStation) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                key={item._id}
              >
                <td className="px-3 py-1 border whitespace-nowrap">
                  {item.stationName}
                </td>
                <td className="px-3 py-1 border whitespace-nowrap">
                  {item.stationAddress}
                </td>
                <td className="px-3 py-1 border whitespace-nowrap">
                  {item.lat}, {item.long}
                </td>
                <td className="px-3 py-1 border">{item.gasPumps}</td>
                <td className="px-3 py-1 border">{item.dieselPumps}</td>
                <td className="px-3 py-1 border">{item.ecLvl2}</td>
                <td className="px-3 py-1 border">{item.ecFastDC}</td>
                <td className="px-3 py-1 border">{item.dcfc}</td>
                <td className="px-3 py-1 border">{item.ecCount}</td>
                <td className="px-3 py-1 border">{item.chargeCapacity}</td>
                <td className="px-3 py-1 border">{item.shopCount}</td>
                <td className="px-3 py-1 border truncate">
                  <div className="w-36 text-ellipsis overflow-hidden whitespace-nowrap">
                    {item.shopNames}
                  </div>
                </td>
                <td className="px-3 py-1 border">{String(item.truckStop)}</td>
                <td className="px-3 py-1 border">{item.bathroomStallCount}</td>
                <td className="px-3 py-1 border">
                  {String(item.seatingAvailable)}
                </td>
                <td className="px-3 py-1 border">
                  {String(item.greenspaceAvailable)}
                </td>
                <td className="px-3 py-1 border">{item.dailyCustomers}</td>
                <td className="px-3 py-1 border">
                  <a
                    href={item.imageLink}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Image_1
                  </a>
                </td>
                <td className="px-3 py-1 border">
                  <div className="w-36 text-ellipsis overflow-hidden whitespace-nowrap">
                    {item.notes}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Table;
