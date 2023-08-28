import { Router } from 'express';
import { approve, createLeave, getLeaves, reject, updateLeaves } from './leave.controller';
import { auth } from '../../middleware/auth.middleware';

const leaveRouter = Router();

leaveRouter.post('/leave', createLeave);
leaveRouter.get('/leave', getLeaves);
leaveRouter.put('/leave/:id', updateLeaves);
leaveRouter.put('/leave/:id/approve', auth('manager'), approve);
leaveRouter.put('/leave/:id/reject', auth('manager'), reject);

export default leaveRouter;
