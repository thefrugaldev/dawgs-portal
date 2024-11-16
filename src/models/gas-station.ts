import { timeStamp } from 'console';
import { Schema, model, models } from 'mongoose';
import { date } from 'zod';

export interface IGasStation {
  _id: string;
  stationName: string;
  stationAddress: string;
  lat: string;
  long: string;
  gasPumps: number;
  dieselPumps: number;
  ecLvl2: number;
  ecFastDC: number;
  dcfc: number;
  ecCount: number;
  chargeCapacity: number;
  shopCount: number;
  shopNames: string;
  truckStop: boolean;
  bathroomStallCount: number;
  seatingAvailable: boolean;
  greenspaceAvailable: boolean;
  dailyCustomers: number;
  imageLink: string;
  notes: string;
  createdDate: Date;
}

const gasStationSchema = new Schema<IGasStation>({
  _id: {
    type: String,
    required: true,
  },
  stationName: {
    type: String,
    required: false,
  },
  stationAddress: {
    type: String,
    required: false,
  },
  lat: {
    type: String,
    required: false,
  },
  long: {
    type: String,
    required: false,
  },
  gasPumps: {
    type: Number,
    required: false,
  },
  dieselPumps: {
    type: Number,
    required: false,
  },
  ecLvl2: {
    type: Number,
    required: false,
  },
  ecFastDC: {
    type: Number,
    required: false,
  },
  dcfc: {
    type: Number,
    required: false,
  },
  ecCount: {
    type: Number,
    required: false,
  },
  chargeCapacity: {
    type: Number,
    required: false,
  },
  shopCount: {
    type: Number,
    required: false,
  },
  shopNames: {
    type: String,
    required: false,
  },
  truckStop: {
    type: Boolean,
    required: false,
  },
  bathroomStallCount: {
    type: Number,
    required: false,
  },
  seatingAvailable: {
    type: Boolean,
    required: false,
  },
  greenspaceAvailable: {
    type: Boolean,
    required: false,
  },
  dailyCustomers: {
    type: Number,
    required: false,
  },
  imageLink: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  createdDate: {
    type: Date,
    required: false,
  },
});

export default models.gasstations || model('gasstations', gasStationSchema);
