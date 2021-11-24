export interface GardenDataModel {
    user: string;
    name: string;
    height: number;
    width: number;
    plantList?: number[];
    calculatePlantGrid();
}