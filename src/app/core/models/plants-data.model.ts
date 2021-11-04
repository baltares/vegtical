export interface PlantsDataModel {
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

interface GraphicIntervalList {
  finish: string;
  start: string;
  type: string;
}