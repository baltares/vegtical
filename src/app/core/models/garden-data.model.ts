export interface GardenDataModel {
    name: string;
    height: number;
    width: number;
    plantGrid?: number[][];
    calculatePlantGrid();
}