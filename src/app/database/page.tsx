

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { getGasStations } from '../actions';
import { IGasStation } from '../../models/gas-station';

const Table = ({ data }: any) => {
  return (
    <div className="relative overflow-x-auto">
      <table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        id="gas-station-table"
      >
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-1 py-1">
              Station Name
            </th>
            <th scope="col" className="px-1 py-1">
              Station Address
            </th>
            <th scope="col" className="px-1 py-1">
              Area
            </th>
            <th scope="col" className="px-1 py-1">
              Number of Gas Pumps
            </th>
            <th scope="col" className="px-1 py-1">
              Number of Diesel Pumps
            </th>
            <th scope="col" className="px-1 py-1">
              EC - Lvl 2
            </th>
            <th scope="col" className="px-1 py-1">
              EC - Fast DC
            </th>
            <th scope="col" className="px-1 py-1">
              DCFC
            </th>
            <th scope="col" className="px-1 py-1">
              Number of EC stations
            </th>
            <th scope="col" className="px-1 py-1">
              Charge Capacity
            </th>
            <th scope="col" className="px-1 py-1">
              Number of Shops
            </th>
            <th scope="col" className="px-1 py-1">
              Shop Names
            </th>
            <th scope="col" className="px-1 py-1">
              Truck Stop?
            </th>
            <th scope="col" className="px-1 py-1">
              Bathroom Stalls
            </th>
            <th scope="col" className="px-1 py-1">
              Seating Available?
            </th>
            <th scope="col" className="px-1 py-1">
              Greenspace Available?
            </th>
            <th scope="col" className="px-1 py-1">
              Number of Daily Customers
            </th>
            <th scope="col" className="px-1 py-1">
              Image(s)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: IGasStation) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <td className="px-2 py-1">{item.stationName}</td>
              <td className="px-2 py-1">{item.stationAddress}</td>
              <td className="px-2 py-1">{item.lat.toString()}, {item.long.toString()}</td>
              <td className="px-2 py-1">{item.gasPumps.toString()}</td>
              <td className="px-2 py-1">{item.dieselPumps.toString()}</td>
              <td className="px-2 py-1">{item.ecLvl2.toString()}</td>
              <td className="px-2 py-1">{item.ecFastDC.toString()}</td>
              <td className="px-2 py-1">{item.dcfc.toString()}</td>
              <td className="px-2 py-1">{item.ecCount.toString()}</td>
              <td className="px-2 py-1">{item.chargeCapacity.toString()}</td>
              <td className="px-2 py-1">{item.shopCount.toString()}</td>
              <td className="px-2 py-1">{item.shopNames}</td>
              <td className="px-2 py-1">{item.truckStop}</td>
              <td className="px-2 py-1">{item.bathroomStallCount.toString()}</td>
              <td className="px-2 py-1">{item.seatingAvailable}</td>
              <td className="px-2 py-1">{item.greenspaceAvailable}</td>
              <td className="px-2 py-1">{item.dailyCustomers.toString()}</td>
              <td className="px-2 py-1"><a href={item.imageLink.toString()} target="_blank">Image_1</a></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const downloadExcel = (data: any) => {
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//   XLSX.writeFile(workbook, 'Gas_Stations.xlsx');
// };

export default async function App() {
  const data = await getGasStations();

  // function handleClick() {
  //   downloadExcel(data);
  //   console.log('I was clicked!');
  //  }

  return (
    <div className="p-5">
      <div className="flex gap-2 mx-2 my-5">
        <Input
          type="text"
          className="max-w-sm"
          placeholder="Find a Gas Station..."
        />
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Station Name</SelectItem>
            <SelectItem value="address">Address</SelectItem>
            <SelectItem value="pumps">Number of Pumps</SelectItem>
            <SelectItem value="charge">Charge Capacity</SelectItem>
          </SelectContent>
        </Select>
        <Button>Add a Gas Station</Button>
        <Button id="export-button">Download As Excel</Button>
      </div>
      <Table data={data} />
    </div>
  );
}
