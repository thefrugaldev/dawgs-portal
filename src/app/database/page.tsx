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

/* const data = [
   {
     id: 1,
     stationName: 'Citgo',
     stationAddress: '314 5th St',
     area: '34.4325, -82.9302',
     gasPumps: 12,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Convenience Store',
     truckStop: 'Yes',
     bathroomStallCount: 8,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 550,
   },
   {
     id: 2,
     stationName: 'Liberty Gas Station',
     stationAddress: '1246 Veterans Pkwy',
     area: '34.4636, -83.1057',
     gasPumps: 10,
     dieselPumps: 3,
     ecLvl2: 4,
     ecFastDC: 3,
     dcfc: 1,
     ecCount: 1,
     chargeCapacity: 8,
     shopCount: 1,
     shopNames: 'Fast Food Restaurant',
     truckStop: 'No',
    bathroomStallCount: 12,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 1550,
   },
   {
     id: 3,
     stationName: 'Zelmos Zip In',
     stationAddress: '400 3rd Ave',
     area: '32.8575, -85.1982',
     gasPumps: 14,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Coffee Shop',
    truckStop: 'Yes',
    bathroomStallCount: 8,
    seatingAvailable: 'Yes',
    seatingreenspaceAvailable: 'No',
    dailyCustomers: 350,
  },
  {
    id: 4,
    stationName: 'Liberty',
    stationAddress: '3600 2nd Ave',
    area: '34.3914, -83.1756',
    gasPumps: 12,
    dieselPumps: 3,
    ecLvl2: 0,
     ecFastDC: 0,
    dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Dairy Queen',
     truckStop: 'Yes',
     bathroomStallCount: 6,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 540,
   },
   {
     id: 5,
     stationName: 'Marathon Gas',
     stationAddress: '269 Shallowford Rd',
     area: '34.3300, -83.2000',
     gasPumps: 12,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
    shopNames: 'Automotive Service Center',
     truckStop: 'Yes',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 1200,
   },
   {
     id: 6,
     stationName: 'Shell',
     stationAddress: '387 Hill St SE',
     area: '34.2136, -83.0948',
     gasPumps: 10,
     dieselPumps: 3,
    ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Coffee Shop',
     truckStop: 'No',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 690,
   },
   {
     id: 7,
     stationName: 'Shell',
     stationAddress: '4584 Hamilton Rd',
     area: '34.2861, -83.4375',
     gasPumps: 8,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Deli or Sandwich Shop',
     truckStop: 'No',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 564,
   },
   {
     id: 8,
     stationName: 'Marathon',
     stationAddress: '5325 Hwy 29',
    area: '34.2971, -83.8088',
     gasPumps: 16,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
    dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
    shopNames: 'Pharmacy',
     truckStop: 'Yes',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
    seatingreenspaceAvailable: 'No',
     dailyCustomers: 674,
   },
   {
     id: 9,
     stationName: 'BP',
     stationAddress: '610 Spring St NW',
     area: '34.1782, -83.9220',
     gasPumps: 22,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Bakery, Liquor store',
     truckStop: 'Yes',
     bathroomStallCount: 12,
     seatingAvailable: 'Yes',
    seatingreenspaceAvailable: 'No',
     dailyCustomers: 234,
   },
  {
     id: 10,
     stationName: 'Chevron',
     stationAddress: '3600 2nd Ave',
     area: '34.1208, -84.0070',
     gasPumps: 24,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Liquor Store',
     truckStop: 'Yes',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'Yes',
    dailyCustomers: 567,
   },
   {
     id: 11,
     stationName: 'Chevron',
     stationAddress: '6548 5th Ave',
     area: '34.0515, -84.0748',
     gasPumps: 8,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'ATM or Banking Kiosk',
    truckStop: 'Yes',
     bathroomStallCount: 14,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 624,
  },
  {
     id: 12,
     stationName: 'Marathon',
     stationAddress: '210 3rd Ave',
     area: '33.9878, -84.1434',
     gasPumps: 12,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Gift Shop',
     truckStop: 'No',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 105,
   },
   {
     id: 13,
     stationName: 'Shell',
     stationAddress: '954 Ball St',
     area: '33.9742, -84.2274',
     gasPumps: 24,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Grocery Store',
     truckStop: 'No',
     bathroomStallCount: 6,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 260,
   },
   {
     id: 14,
     stationName: 'Liberty Gas Station',
     stationAddress: '541 Bemis St',
     area: '33.9449, -84.2105',
     gasPumps: 2,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Laundromat',
     truckStop: 'No',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 1200,
   },
   {
     id: 15,
     stationName: 'BP',
     stationAddress: '345 5th St',
     area: '33.9273, -84.3133',
     gasPumps: 16,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Health Food Store',
     truckStop: 'Yes',
     bathroomStallCount: 8,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'Yes',
     dailyCustomers: 400,
   },
   {
     id: 16,
     stationName: 'Pilot',
     stationAddress: '9745 Docile Dr',
     area: '33.7858, -84.3859',
     gasPumps: 18,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Dairy Queen',
     truckStop: 'No',
     bathroomStallCount: 8,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 650,
   },
   {
     id: 17,
     stationName: 'Shell',
     stationAddress: '4594 McMount Pkwy',
     area: '33.6784, -84.4537',
     gasPumps: 20,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Health Food Store',
     truckStop: 'No',
     bathroomStallCount: 6,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 490,
   },
   {
     id: 18,
     stationName: 'Chevron',
     stationAddress: '4597 3rd Ave',
     area: '33.6510, -84.4598',
     gasPumps: 15,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Ice Cream Parlor',
     truckStop: 'Yes',
     bathroomStallCount: 14,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 380,
   },
   {
     id: 19,
     stationName: 'JP GAS',
     stationAddress: '2690 Laurel Dr',
     area: '33.5892, -84.5811',
     gasPumps: 6,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Fast Food Restaurant',
     truckStop: 'No',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 240,
   },
   {
     id: 20,
     stationName: 'Marathon',
     stationAddress: '4584 Ballard Rd',
     area: '33.5718, -84.5989',
     gasPumps: 8,
     dieselPumps: 3,
     ecLvl2: 0,
     ecFastDC: 0,
     dcfc: 0,
     ecCount: 0,
     chargeCapacity: 0,
     shopCount: 1,
     shopNames: 'Laundromat',
     truckStop: 'No',
     bathroomStallCount: 10,
     seatingAvailable: 'Yes',
     seatingreenspaceAvailable: 'No',
     dailyCustomers: 1115,
   },
 ];
const yourfunc = ({data}: {data: type}) => {*/

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
              {/* <td className="px-2 py-1">{item.area}</td> */}
              <td className="px-2 py-1">{item.gasPumps}</td>
              {/* <td className="px-2 py-1">{item.dieselPumps}</td>
              <td className="px-2 py-1">{item.ecLvl2}</td>
              <td className="px-2 py-1">{item.ecFastDC}</td>
              <td className="px-2 py-1">{item.dcfc}</td>
              <td className="px-2 py-1">{item.ecCount}</td>
              <td className="px-2 py-1">{item.chargeCapacity}</td>
              <td className="px-2 py-1">{item.shopCount}</td>
              <td className="px-2 py-1">{item.shopNames}</td>
              <td className="px-2 py-1">{item.truckStop}</td>
              <td className="px-2 py-1">{item.bathroomStallCount}</td>
              <td className="px-2 py-1">{item.seatingAvailable}</td>
              <td className="px-2 py-1">{item.greenspaceAvailable}</td>
              <td className="px-2 py-1">{item.dailyCustomers}</td> */}
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
  // }

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
