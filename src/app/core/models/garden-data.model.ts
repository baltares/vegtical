export interface GardenDataModel {
    name: string;
    height: number;
    width: number;
    plantList?: number[];
    calculatePlantGrid();
}