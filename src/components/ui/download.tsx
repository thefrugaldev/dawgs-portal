'use client';

import React from 'react';
import { IGasStation } from '../../models/gas-station';
import * as XLSX from 'xlsx';
import { Button } from '@/components/ui/button';
// import useGasStations from '@/queries/useGasStations';

export function DownloadButton() {
  // Define the state with the correct type
  // const { data } = useGasStations();

  // useEffect(() => {
  //   async function fetchData() {
  //     const data: string = await getGasStations();
  //     const gasStations: IGasStation[] = JSON.parse(data);
  //     setData(gasStations);
  //   }

  //   fetchData();
  // }, []);

  const downloadExcel = (data: IGasStation[]) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'Gas_Stations.xlsx');
  };

  function handleClick() {
    // if (!data) {
    //   console.warn('No data for excel');
    //   return;
    // }

    downloadExcel([]);
  }

  return <Button onClick={handleClick}>Download As Excel</Button>;
}
