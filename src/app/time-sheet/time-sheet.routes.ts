import { Router } from 'express';
import { createTimeSheet, getTimeSheet, updateTimeSheet } from './time-sheet.controller';
import { auth } from '../../middleware/auth.middleware';

const timeSheetRouter = Router();

timeSheetRouter.post('/time-sheet', auth('manager'), createTimeSheet);
timeSheetRouter.get('/time-sheet', getTimeSheet);
timeSheetRouter.put('/time-sheet/:id', auth('manager'), updateTimeSheet);


export default timeSheetRouter;