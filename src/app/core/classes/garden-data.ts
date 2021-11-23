import { GardenDataModel } from "@core/models/garden-data.model";

export class GardenData implements GardenDataModel{

    constructor(
        public name:string,
        public height: number,
        public width: number,
        public plantList?: number[],
        ){
            this.name = name;
            this.height = height;
            this.width = width;
            (plantList)?this.plantList = plantList:this.calculatePlantGrid();
        }

        calculatePlantGrid(){
            //Asuming standard dimensions of 30 cm height and 15 cm width
            let plantsPerRow = this.width / 0.3;
            let plantsPerColumn = this.height / 0.15;
            let totalPlants = Math.floor(plantsPerRow * plantsPerColumn);
            this.plantList = new Array<number>(totalPlants);
            return this.plantList;
        }
}
