import { Router } from 'express';
import { approve, createLeave, getLeaves, getUserLeaves, reject, updateLeaves } from './leave.controller';
import { auth } from '../../middleware/auth.middleware';

const leaveRouter = Router();

leaveRouter.post('/leave', createLeave);
leaveRouter.get('/leave', auth('manager'), getLeaves);
leaveRouter.get('/leave/user', getUserLeaves);
leaveRouter.put('/leave/:id', updateLeaves);
leaveRouter.patch('/leave/:id/approve', auth('manager'), approve);
leaveRouter.patch('/leave/:id/reject', auth('manager'), reject);

export default leaveRouter;
