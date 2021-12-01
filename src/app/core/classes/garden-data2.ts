import { GardenData2Model } from "@core/models/garden-data2.model";

export class GardenData2 implements GardenData2Model{

    constructor(
        public name: string,
        public height: number,
        public width: number,
        public plantList?: number[],
        ){
            this.name = name;
            this.height = height;
            this.width = width;
            this.plantList = (plantList)? plantList : this.calculatePlantGrid();
        }

        calculatePlantGrid(){
            //Asuming standard dimensions for each plant of 30 cm height and 15 cm width
            let plantsPerRow = Math.floor(this.width / 0.15);
            let plantsPerColumn = Math.floor(this.height / 0.3);
            let totalPlants = plantsPerRow * plantsPerColumn;
            this.plantList = new Array<number>(totalPlants);
            return this.plantList;
        }
}