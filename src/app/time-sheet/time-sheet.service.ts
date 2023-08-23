import { TimeSheet } from "./time-sheet.model";
import { DataService } from "../../services/data.service";

export class TimeSheetService extends DataService<TimeSheet> {
  constructor() {
    super(TimeSheet);
  }
}