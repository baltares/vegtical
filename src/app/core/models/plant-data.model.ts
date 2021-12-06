/**
 * Plant interface
 */
export interface PlantDataModel {
  key?: string | null;
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
/**
 * Graphic Interval List interface
 */
export interface GraphicIntervalList {
  finish: string;
  start: string;
  type: string;
}
