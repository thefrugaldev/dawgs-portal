
'use client';

import React from 'react';
import * as XLSX from 'xlsx';
import '../database.css';
//import '../globals.css';

const data = [
  { id: 1, stationName: 'Citgo', stationAddress: '314 5th St', area: '34.4325, -82.9302', gasPumps: 12, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Convenience Store', truckStop: 'Yes', bathroomStallCount: 8, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 550 },
  { id: 2, stationName: 'Liberty Gas Station', stationAddress: '1246 Veterans Pkwy', area: '34.4636, -83.1057', gasPumps: 10, dieselPumps: 3, ecLvl2: 4, ecFastDC: 3, dcfc: 1, ecCount: 1, chargeCapacity: 8, shopCount: 1, shopNames: 'Fast Food Restaurant', truckStop: 'No', bathroomStallCount: 12, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 1550 },
  { id: 3, stationName: 'Zelmos Zip In', stationAddress: '400 3rd Ave', area: '32.8575, -85.1982', gasPumps: 14, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Coffee Shop', truckStop: 'Yes', bathroomStallCount: 8, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 350 },
  { id: 4, stationName: 'Liberty', stationAddress: '3600 2nd Ave', area: '34.3914, -83.1756', gasPumps: 12, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Dairy Queen', truckStop: 'Yes', bathroomStallCount: 6, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 540 },
  { id: 5, stationName: 'Marathon Gas', stationAddress: '269 Shallowford Rd', area: '34.3300, -83.2000', gasPumps: 12, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Automotive Service Center', truckStop: 'Yes', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 1200 },
  { id: 6, stationName: 'Shell', stationAddress: '387 Hill St SE', area: '34.2136, -83.0948', gasPumps: 10, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Coffee Shop', truckStop: 'No', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 690 },
  { id: 7, stationName: 'Shell', stationAddress: '4584 Hamilton Rd', area: '34.2861, -83.4375', gasPumps: 8, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Deli or Sandwich Shop', truckStop: 'No', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 564 },
  { id: 8, stationName: 'Marathon', stationAddress: '5325 Hwy 29', area: '34.2971, -83.8088', gasPumps: 16, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Pharmacy', truckStop: 'Yes', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 674 },
  { id: 9, stationName: 'BP', stationAddress: '610 Spring St NW', area: '34.1782, -83.9220', gasPumps: 22, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Bakery, Liquor store', truckStop: 'Yes', bathroomStallCount: 12, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 234 },
  { id: 10, stationName: 'Chevron', stationAddress: '3600 2nd Ave', area: '34.1208, -84.0070', gasPumps: 24, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Liquor Store', truckStop: 'Yes', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'Yes', dailyCustomers: 567 },
  { id: 11, stationName: 'Chevron', stationAddress: '6548 5th Ave', area: '34.0515, -84.0748', gasPumps: 8, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'ATM or Banking Kiosk', truckStop: 'Yes', bathroomStallCount: 14, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 624 },
  { id: 12, stationName: 'Marathon', stationAddress: '210 3rd Ave', area: '33.9878, -84.1434', gasPumps: 12, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Gift Shop', truckStop: 'No', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 105 },
  { id: 13, stationName: 'Shell', stationAddress: '954 Ball St', area: '33.9742, -84.2274', gasPumps: 24, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Grocery Store', truckStop: 'No', bathroomStallCount: 6, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 260 },
  { id: 14, stationName: 'Liberty Gas Station', stationAddress: '541 Bemis St', area: '33.9449, -84.2105', gasPumps: 2, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Laundromat', truckStop: 'No', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 1200 },
  { id: 15, stationName: 'BP', stationAddress: '345 5th St', area: '33.9273, -84.3133', gasPumps: 16, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Health Food Store', truckStop: 'Yes', bathroomStallCount: 8, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'Yes', dailyCustomers: 400 },
  { id: 16, stationName: 'Pilot', stationAddress: '9745 Docile Dr', area: '33.7858, -84.3859', gasPumps: 18, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Dairy Queen', truckStop: 'No', bathroomStallCount: 8, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 650 },
  { id: 17, stationName: 'Shell', stationAddress: '4594 McMount Pkwy', area: '33.6784, -84.4537', gasPumps: 20, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Health Food Store', truckStop: 'No', bathroomStallCount: 6, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 490 },
  { id: 18, stationName: 'Chevron', stationAddress: '4597 3rd Ave', area: '33.6510, -84.4598', gasPumps: 15, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Ice Cream Parlor', truckStop: 'Yes', bathroomStallCount: 14, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 380 },
  { id: 19, stationName: 'JP GAS', stationAddress: '2690 Laurel Dr', area: '33.5892, -84.5811', gasPumps: 6, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Fast Food Restaurant', truckStop: 'No', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 240 },
  { id: 20, stationName: 'Marathon', stationAddress: '4584 Ballard Rd', area: '33.5718, -84.5989', gasPumps: 8, dieselPumps: 3, ecLvl2: 0, ecFastDC: 0, dcfc: 0, ecCount: 0, chargeCapacity: 0, shopCount: 1, shopNames: 'Laundromat', truckStop: 'No', bathroomStallCount: 10, seatingAvailable: 'Yes', seatingreenspaceAvailable: 'No', dailyCustomers: 1115 },  
];
//const yourfunc = ({data}: {data: type}) => {
 const Table = ({ data }: any) => {
  return (
    <div className="wrapper">
      <table id="gas-station-table">
        <thead>
          <tr>
          <th className="fix">Station Name</th>
            <th>Station Address</th>
            <th>Area</th>
            <th>Number of Gas Pumps</th>
            <th>Number of Diesel Pumps</th>
            <th>EC - Lvl 2</th>
            <th>EC - Fast DC</th>
            <th>DCFC</th>
            <th>Number of EC stations</th>
            <th>Charge Capacity</th>
            <th>Number of Shops</th>
            <th>Shop Names</th>
            <th>Truck Stop?</th>
            <th>Bathroom Stalls</th>
            <th>Seating Available?</th>
            <th>Greenspace Available?</th>
            <th>Number of Daily Customers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.id}>
            <td className="fix" >{item.stationName}</td>
              <td>{item.stationAddress}</td>
              <td>{item.area}</td>
              <td>{item.gasPumps}</td>
              <td>{item.dieselPumps}</td>
              <td>{item.ecLvl2}</td>
              <td>{item.ecFastDC}</td>
              <td>{item.dcfc}</td>
              <td>{item.ecCount}</td>
              <td>{item.chargeCapacity}</td>
              <td>{item.shopCount}</td>
              <td>{item.shopNames}</td>
              <td>{item.truckStop}</td>
              <td>{item.bathroomStallCount}</td>
              <td>{item.seatingAvailable}</td>
              <td>{item.greenspaceAvailable}</td>
              <td>{item.dailyCustomers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const downloadExcel = (data: any) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "Gas_Stations.xlsx");
};

function handleClick() {
  downloadExcel(data);
  console.log("I was clicked!");
}

export default function App() {
  return (
    <div className="App">
      <div className="search-container">
      <input type="text" placeholder="Find a Gas Station..." />
      <select>
        <option>Sort by: Name</option>
      </select>
      <button>Add a Gas Station</button>
      <button  id="export-button" onClick={() => handleClick()}>Download As Excel</button>

      </div>
      <Table data={data} />
    </div>
  );
}

