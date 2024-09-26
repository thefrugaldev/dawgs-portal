import { Schema, model, models } from 'mongoose';

export interface IGasStation {
  id: number;
  stationName: string;
  stationAddress: string;
  gasPumps: number;
}

const gasStationSchema = new Schema<IGasStation>({
  id: {
    type: Number,
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
  gasPumps: {
    type: Number,
    required: false,
  },
});

export default models.gasstations || model('gasstations', gasStationSchema);
