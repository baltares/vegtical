import { PlantDataModel, GraphicIntervalList } from "@core/models/plant-data.model";

/**
 * Class implementing PlantDataModel
 */
export class PlantData implements PlantDataModel {
    key?: string;
    dateCreation: string;
    graphicIntervalList: GraphicIntervalList[];
    growingInterval: number;
    image: string;
    nameCommon: string;
    nameScientific: string;
    needSun: number;
    needWater: number;
    txtCulinary: string;
    txtDescription: string;
    txtResume: string;
    txtWikiLink: string;
    type: string;

}
