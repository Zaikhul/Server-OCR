import { Request, Response } from "express";
import {
  OCR_ClassRoom,
  OCR_LabRoom,
  OCR_LactureRoom,
} from "../schemas/ocr.schema";

class ClassRoomController {
  async getOCR(req: Request, res: Response) {
    try {
      const ClassRooms: OCR_ClassRoom[] = [];
      res.status(200).json(ClassRooms);
    } catch (e) {
      console.error("Error:", e);
      res.status(500).send("Internal Server Error");
    }
  }

  async getId(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const ClassRooms: OCR_ClassRoom | undefined = undefined;
      if (ClassRooms) {
        res.status(200).json(ClassRooms);
      } else {
        res.status(400).send("Classroom not found");
      }
    } catch (e) {
      console.error("Error:", e);
      res.status(500).send("Internal Server Error");
    }
  }
}

export { ClassRoomController };
