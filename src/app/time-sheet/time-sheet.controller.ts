import { Request, Response } from "express";
import { TimeSheetService } from "./time-sheet.service";
import { TimeSheet } from "./time-sheet.model";

const timeSheetSevice = new TimeSheetService();
export const createTimeSheet = async (req: Request, res: Response) => {
  try {
    const newTimeSheet: TimeSheet[] = await timeSheetSevice.create(req.body);

    return res.status(201).json(newTimeSheet);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const getTimeSheet = async (req: Request, res: Response) => {
  try {
    const timeSheets: TimeSheet[] = await timeSheetSevice.getAll();
    return res.status(200).json(timeSheets);

  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const updateTimeSheet = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const updatedTimeSheet = await timeSheetSevice.update(id, req.body);

    return res.status(201).json(updatedTimeSheet);
  } catch (error) {
    return res.status(500).json({ error });
  }
}