import { GardenDataModel } from "@core/models/garden-data.model";

export class GardenData implements GardenDataModel{
    user: string;
    height: number;
    width: number;
    plantGrid: number[][];
    name: string;
}
