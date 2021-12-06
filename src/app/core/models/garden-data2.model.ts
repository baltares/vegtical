/**
 * Garden interface
 */
export interface GardenData2Model {
    name: string;
    height: number;
    width: number;
    plantList?: number[];
    calculatePlantGrid();
}