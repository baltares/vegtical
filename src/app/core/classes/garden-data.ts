import { GardenDataModel } from "@core/models/garden-data.model";

export class GardenData implements GardenDataModel{

    constructor(
        public user:string,
        public name:string,
        public height: number,
        public width: number,
        public plantList?: number[],
        ){
            this.user = user;
            this.name = name;
            this.height = height;
            this.width = width;
            this.plantList = (plantList)? plantList : this.calculatePlantGrid();
        }

        calculatePlantGrid(){
            //Asuming standard dimensions for each plant of 30 cm height and 15 cm width
            let plantsPerRow = this.width / 0.3;
            let plantsPerColumn = this.height / 0.15;
            let totalPlants = Math.floor(plantsPerRow * plantsPerColumn);
            this.plantList = new Array(totalPlants).fill(999);
            // this.plantList = new Array<number>(totalPlants);
            return this.plantList;
        }
}
