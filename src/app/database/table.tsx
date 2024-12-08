/* eslint-disable jsx-a11y/alt-text */
'use client';
import { IGasStation } from '@/models/gas-station';
import useGasStations from '@/queries/useGasStations';
import { Ban, Check, ExternalLink, Image, Pencil } from 'lucide-react';
import React from 'react';
import dayjs from 'dayjs';

interface TableProps {
  // eslint-disable-next-line no-unused-vars
  onRowClick: (gasStation: IGasStation) => void;
}

const Table = ({ onRowClick }: TableProps) => {
  const { data, isLoading } = useGasStations();

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
              <th className="w-1/12 px-3 py-1 border truncate">Edit</th>
              <th className="w-1/12 px-3 py-1 border truncate">Station Name</th>
              <th className="w-1/12 px-3 py-1 border truncate">
                Station Address
              </th>
              <th className="w-1/12 px-3 py-1 border truncate">Location</th>
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
              <th className="w-1/8 px-3 py-1 border truncate">Map Link</th>
              <th className="w-[10px] px-3 py-1 border truncate">Notes</th>
              <th className="w-[10px] px-3 py-1 border truncate">
                Updated Date
              </th>
              <th className="w-1/8 px-3 py-1 border truncate">Updated By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: IGasStation) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                key={item._id}
              >
                <td className="flex justify-center">
                  <Pencil
                    className="cursor-pointer"
                    onClick={() => onRowClick(item)}
                  />
                </td>
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
                <td className="px-3 py-1 border group relative">
                  <div className="w-36 text-ellipsis overflow-hidden whitespace-nowrap ">{item.shopNames}
                    {item.shopNames ? (
                    <span className="w-80 text-wrap absolute top-0 right-0 scale-0 rounded bg-gray-800 p-2 text-white group-hover:scale-100">
                      {item.shopNames}
                    </span>) : null}
                  </div>
                </td>
                <td className="px-3 py-1 border">
                  {item.truckStop ? <Check /> : <Ban />}
                </td>
                <td className="px-3 py-1 border">{item.bathroomStallCount}</td>
                <td className="px-3 py-1 border">
                  {item.seatingAvailable ? <Check /> : <Ban />}
                </td>
                <td className="px-3 py-1 border">
                  {item.greenspaceAvailable ? <Check /> : <Ban />}
                </td>
                <td className="px-3 py-1 border">{item.dailyCustomers}</td>
                <td className="px-3 py-1 border">
                  {item.imageLink ? (
                    <a
                      href={item.imageLink}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      <Image />
                    </a>
                  ) : null}
                </td>
                <td className="px-3 py-1 border">
                  {item.googleLink ? (
                    <a
                      href={item.googleLink}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      <ExternalLink />
                    </a>
                  ) : null}
                </td>
                <td className="px-3 py-1 border group relative">
                  <div className="w-36 text-ellipsis overflow-hidden whitespace-nowrap ">{item.notes}
                    {item.notes ? (
                    <span className="w-80 text-wrap absolute top-0 right-0 scale-0 rounded bg-gray-800 p-2 text-white group-hover:scale-100">
                      {item.notes}
                    </span>) : null}
                  </div>
                </td>
                <td className="px-3 py-1 border">
                  {dayjs(item.createdDate).format('M/DD/YYYY')}
                </td>
                <td className="px-3 py-1 border">{item.updatedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Table;
