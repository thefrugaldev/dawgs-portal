"use client";

import React, { useState, useEffect } from "react";
import { getGasStations } from '../../../src/app/actions';
import { IGasStation } from '../../models/gas-station';
import * as XLSX from 'xlsx';
import { Button } from '@/components/ui/button';

export function DownloadButton() {
    // Define the state with the correct type
    const [data, setData] = useState<IGasStation[]>([]);

    useEffect(() => {
        async function fetchData() {
            const gasStations: IGasStation[] = await getGasStations();
            setData(gasStations);
        }

        fetchData();
    }, []);

    const downloadExcel = (data: IGasStation[]) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "Gas_Stations.xlsx");
    };

    function handleClick() {
        downloadExcel(data);
    }

    return (
        <Button onClick={handleClick}>
            Download As Excel
        </Button>
    );
}