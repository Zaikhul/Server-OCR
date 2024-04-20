import { Router, Request, Response, response } from "express";
import { ClassRoomController } from "../controller/orc.controller";

const router = Router();

const classroomController = new ClassRoomController();

router.get("/", (req: Request, res: Response) => {
  res.send("<h1>Server OCR</h1>");
});

router.get("/classrooms", classroomController.getOCR);

export default router;
