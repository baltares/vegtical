import { GardenDataModel } from "@core/models/garden-data.model";

export class GardenData implements GardenDataModel{

    constructor(
        public name:string,
        public height: number,
        public width: number,
        public plantGrid?: number[][],
        ){
            this.name = name;
            this.height = height;
            this.width = width;
            (plantGrid)?this.plantGrid = plantGrid:this.calculatePlantGrid();
        }

        calculatePlantGrid(){
            
        }
}
