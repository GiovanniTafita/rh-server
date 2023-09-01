import { Request, Response } from "express";
import { LeaveService } from "./leave.service";
import { LeaveState } from "./leave.model";

const leaveService = new LeaveService();

export const createLeave = async (req: Request, res: Response) => {
  try {
    const newLeave = await leaveService.createLeave(req.body.userId, req.body);
    return res.status(201).json(newLeave);

  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const getLeaves = async (req: Request, res: Response) => {
  try {
    const leaves = await leaveService.getWithOption({
      relations: { user: true }
    });
    return res.status(200).json(leaves);

  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const getUserLeaves = async (req: Request, res: Response) => {
  try {
    const leaves = await leaveService.getAllBy({
      user: {
        id: +req.body.userId
      },
      relation: { user: true }
    });
    return res.status(200).json(leaves);

  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const updateLeaves = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const updatedLeave = await leaveService.update(id, req.body);

    return res.status(200).json(updatedLeave);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const approve = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const updatedLeave = await leaveService.update2(
      { id },
      {
        status: LeaveState.approved,
        approvedAt: new Date,
        rejectedAt: null,
        managerId: +req.body.userId,
        message: req.body.message
      }
    );

    return res.status(200).json(updatedLeave);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const reject = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const updatedLeave = await leaveService.update2(
      { id },
      {
        status: LeaveState.rejected,
        rejectedAt: new Date,
        approvedAt: null,
        managerId: +req.body.userId,
        message: req.body.message
      }
    );

    return res.status(200).json(updatedLeave);
  } catch (error) {
    return res.status(500).json({ error });
  }
}