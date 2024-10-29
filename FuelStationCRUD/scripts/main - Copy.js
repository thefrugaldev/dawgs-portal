
/* ====================================================
   JS File for CRUD Operations: main.js
   Project: NON REACT version      Fuel Station CRUD Interface
   Description: This provides functions to add, 
                read, update, and delete fuel station 
                entries in a table using event listeners.
         Guy Primiano   MIST 7590e
             Date: 10/28/2024

   ==================================================== */

// JavaScript file for CRUD operations: main.js

// Function to ADD a station entry
document.getElementById('addStationBtn').addEventListener('click', function () {
    const stationData = getFormData();
    addStationToTable(stationData);
    clearForm();
});

// Function to READ a station entry by ID
document.getElementById('readStationBtn').addEventListener('click', function () {
    const stationId = document.getElementById('stationId').value;
    if (stationId) {
        const station = document.querySelector(`#tableBody [data-id='${stationId}']`);
        if (station) {
            populateForm(station.dataset);
        } else {
            alert('Station not found');
        }
    } else {
        alert('Please enter an ID to read');
    }
});

// Function to UPDATE     a station entry
document.getElementById('updateStationBtn').addEventListener('click', function () {
    const stationId = document.getElementById('stationId').value;
    if (stationId) {
        const updatedData = getFormData();
        const station = document.querySelector(`#tableBody [data-id='${stationId}']`);
        if (station) {
            updateStationInTable(station, updatedData);
            clearForm();
        } else {
            alert('Station not found');
        }
    } else {
        alert('Please enter an ID to update');
    }
});

// Function to DELETE    a station entry
document.getElementById('deleteStationBtn').addEventListener('click', function () {
    const stationId = document.getElementById('stationId').value;
    if (stationId) {
        const station = document.querySelector(`#tableBody [data-id='${stationId}']`);
        if (station) {
            station.remove();
            clearForm();
        } else {
            alert('Station not found');
        }
    } else {
        alert('Please enter an ID to delete');
    }
});

// Helper function to get form data
function getFormData() {
    return {
        id: document.getElementById('stationId').value,
        name: document.getElementById('stationName').value,
        address: document.getElementById('stationAddress').value,
        shopName: document.getElementById('shopNames').value,
        dailyCustomers: document.getElementById('dailyCustomers').value,
        area: document.getElementById('area').value,
        dieselPumps: document.getElementById('dieselPumps').value,
        gasPumps: document.getElementById('gasPumps').value,
        ecCount: document.getElementById('ecCount').value,
        ecLvl2: document.getElementById('ecLvl2').value,
        ecFastDC: document.getElementById('ecFastDC').value,
        dcfc: document.getElementById('dcfc').value,
        chargeCapacity: document.getElementById('chargeCapacity').value,
        truckStop: document.getElementById('truckStop').value,
        seatingAvailable: document.getElementById('seatingAvailable').value,
        greenspaceAvailable: document.getElementById('greenspacingAvailable').value,
    };
}

//         Helper function to add a station to the table
function addStationToTable(data) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    row.setAttribute('data-id', data.id);
    row.dataset.name = data.name;
    row.dataset.address = data.address;
    row.dataset.shopName = data.shopName;
    row.dataset.dailyCustomers = data.dailyCustomers;
    row.dataset.area = data.area;
    row.dataset.dieselPumps = data.dieselPumps;
    row.dataset.gasPumps = data.gasPumps;
    row.dataset.ecCount = data.ecCount;
    row.dataset.ecLvl2 = data.ecLvl2;
    row.dataset.ecFastDC = data.ecFastDC;
    row.dataset.dcfc = data.dcfc;
    row.dataset.chargeCapacity = data.chargeCapacity;
    row.dataset.truckStop = data.truckStop;
    row.dataset.seatingAvailable = data.seatingAvailable;
    row.dataset.greenspacingAvailable = data.greenspacingAvailable;

    row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.address}</td>
        <td>${data.shopName}</td>
        <td>${data.dailyCustomers}</td>
        <td>${data.area}</td>
        <td>${data.dieselPumps}</td>
        <td>${data.gasPumps}</td>
        <td>${data.ecCount}</td>
        <td>${data.ecLvl2}</td>
        <td>${data.ecFastDC}</td>
        <td>${data.dcfc}</td>
        <td>${data.chargeCapacity}</td>
        <td>${data.truckStop}</td>
        <td>${data.seatingAvailable}</td>
        <td>${data.greenspacingAvailable}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editStation('${data.id}')"><i class="fas fa-edit"></i></button>
            <button class="btn btn-dark btn-sm" onclick="deleteStation('${data.id}')"><i class="fas fa-trash-alt"></i></button>
        </td>
    `;
    tableBody.appendChild(row);
}

// Helper function to UPDATE station in the table
function updateStationInTable(row, data) {
    row.dataset.name = data.name;
    row.dataset.address = data.address;
    row.dataset.shopName = data.shopName;
    row.dataset.dailyCustomers = data.dailyCustomers;
    row.dataset.area = data.area;
    row.dataset.dieselPumps = data.dieselPumps;
    row.dataset.gasPumps = data.gasPumps;
    row.dataset.ecCount = data.ecCount;
    row.dataset.ecLvl2 = data.ecLvl2;
    row.dataset.ecFastDC = data.ecFastDC;
    row.dataset.dcfc = data.dcfc;
    row.dataset.chargeCapacity = data.chargeCapacity;
    row.dataset.truckStop = data.truckStop;
    row.dataset.seatingAvailable = data.seatingAvailable;
    row.dataset.greenspacingAvailable = data.greenspacingAvailable;

    row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.address}</td>
        <td>${data.shopName}</td>
        <td>${data.dailyCustomers}</td>
        <td>${data.area}</td>
        <td>${data.dieselPumps}</td>
        <td>${data.gasPumps}</td>
        <td>${data.ecCount}</td>
        <td>${data.ecLvl2}</td>
        <td>${data.ecFastDC}</td>
        <td>${data.dcfc}</td>
        <td>${data.chargeCapacity}</td>
        <td>${data.truckStop}</td>
        <td>${data.seatingAvailable}</td>
        <td>${data.greenspacingAvailable}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editStation('${data.id}')"><i class="fas fa-edit"></i></button>
            <button class="btn btn-dark btn-sm" onclick="deleteStation('${data.id}')"><i class="fas fa-trash-alt"></i></button>
        </td>
    `;
}

// Helper function to Fill  the form with station data
function populateForm(data) {
    document.getElementById('stationId').value = data.id;
    document.getElementById('stationName').value = data.name;
    document.getElementById('stationAddress').value = data.address;
    document.getElementById('shopNames').value = data.shopName;
    document.getElementById('dailyCustomers').value = data.dailyCustomers;
    document.getElementById('area').value = data.area;
    document.getElementById('dieselPumps').value = data.dieselPumps;
    document.getElementById('gasPumps').value = data.gasPumps;
    document.getElementById('ecCount').value = data.ecCount;
    document.getElementById('ecLvl2').value = data.ecLvl2;
    document.getElementById('ecFastDC').value = data.ecFastDC;
    document.getElementById('dcfc').value = data.dcfc;
    document.getElementById('chargeCapacity').value = data.chargeCapacity;
    document.getElementById('truckStop').value = data.truckStop;
    document.getElementById('seatingAvailable').value = data.seatingAvailable;
    document.getElementById('greenspacingAvailable').value = data.greenspacingAvailable;
}

// Helper function to clear the form fields
function clearForm() {
    document.getElementById('stationForm').reset();
}
