import { Schema, model, models } from 'mongoose';

export interface IGasStation {
  _id: string;
  stationName: string;
  stationAddress: string;
  lat: Number;
  long: Number;
  gasPumps: Number;
  dieselPumps: Number;
  ecLvl2: Number;
  ecFastDC: Number;
  dcfc: Number;
  ecCount: Number;
  chargeCapacity: Number;
  shopCount: Number;
  shopNames: String;
  truckStop: boolean;
  bathroomStallCount: Number;
  seatingAvailable: boolean;
  greenspaceAvailable: boolean;
  dailyCustomers: Number;
  imageLink: String;
  notes: String;
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
    type: Number,
    required: false,
  },
  long: {
    type: Number,
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
  }
});

export default models.gasstations || model('gasstations', gasStationSchema);
