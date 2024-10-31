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
import * as XLSX from 'xlsx';

const Table = ({ data }: any) => {
  return (
    <div className="relative overflow-x-auto">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto" id="gas-station-table">
<thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-1 py-1 border">
              Station Name
            </th>
            <th scope="col" className="px-1 py-1 border">
              Station Address
            </th>
            <th scope="col" className="px-1 py-1 border">
              Area
            </th>
            <th scope="col" className="px-1 py-1 border">
              Gas Pumps
            </th>
            <th scope="col" className="px-1 py-1 border">
              Diesel Pumps
            </th>
            <th scope="col" className="px-1 py-1 border">
              EC - Lvl 2
            </th>
            <th scope="col" className="px-1 py-1 border">
              EC - Fast DC
            </th>
            <th scope="col" className="px-1 py-1 border">
              DCFC
            </th>
            <th scope="col" className="px-1 py-1 border">
              EC stations
            </th>
            <th scope="col" className="px-1 py-1 border">
              Charge Capacity
            </th>
            <th scope="col" className="px-1 py-1 border">
              Number of Shops
            </th>
            <th scope="col" className="px-1 py-1 border">
              Shop Names
            </th>
            <th scope="col" className="px-1 py-1 border">
              Truck Stop?
            </th>
            <th scope="col" className="px-1 py-1 border">
              Bathroom Stalls
            </th>
            <th scope="col" className="px-1 py-1 border">
              Seating Available?
            </th>
            <th scope="col" className="px-1 py-1 border">
              Greenspace Available?
            </th>
            <th scope="col" className="px-1 py-1 border">
              Number of Daily Customers
            </th>
            <th scope="col" className="px-1 py-1 border">
              Image(s)
            </th>
            <th scope="col" className="px-1 py-1 border">
              Notes
            </th>
          </tr>
        </thead>
  <tbody>
    {data.map((item: IGasStation) => (
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        key={item.id}
      >
        <td className="px-3 py-2 border">{item.stationName}</td>
        <td className="px-3 py-2 border">{item.stationAddress}</td>
        <td className="px-3 py-2 border">
          {item.lat.toString()}, {item.long.toString()}
        </td>
        <td className="px-3 py-2 border">{item.gasPumps.toString()}</td>
        <td className="px-3 py-2 border">{item.dieselPumps.toString()}</td>
        <td className="px-3 py-2 border">{item.ecLvl2.toString()}</td>
        <td className="px-3 py-2 border">{item.ecFastDC.toString()}</td>
        <td className="px-3 py-2 border">{item.dcfc.toString()}</td>
        <td className="px-3 py-2 border">{item.ecCount.toString()}</td>
        <td className="px-3 py-2 border">{item.chargeCapacity.toString()}</td>
        <td className="px-3 py-2 border">{item.shopCount.toString()}</td>
        <td className="px-3 py-2 border">{item.shopNames}</td>
        <td className="px-3 py-2 border">{item.truckStop}</td>
        <td className="px-3 py-2 border">{item.bathroomStallCount.toString()}</td>
        <td className="px-3 py-2 border">{item.seatingAvailable}</td>
        <td className="px-3 py-2 border">{item.greenspaceAvailable}</td>
        <td className="px-3 py-2 border">{item.dailyCustomers.toString()}</td>
        <td className="px-3 py-2 border">
          <a href={item.imageLink.toString()} target="_blank" className="text-blue-600 hover:underline">
            Image_1
          </a>
        </td>
        <td className="px-3 py-2">{item.notes}</td>
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
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//   XLSX.writeFile(workbook, "Gas_Stations.xlsx");
// };
// const data = "hello";


// function handleClick() {
  
//   downloadExcel(data);
//   console.log("I was clicked!");
// }

export default async function App() {
  const data = await getGasStations();

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
