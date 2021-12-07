import express, { Request, Response } from "express";
import mongoose from "mongoose";

import EmployeeModel from "../model/employeeModel";

const router = express.Router();

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.find();
    // tslint:disable-next-line:no-console
    console.log(employee);
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const employee = EmployeeModel.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};




export const createEmployee = async (req: Request, res: Response) => {
  // const { name, gender, salary, birth_date } = req.body;
  const data = req.body
  const newEmployee = new EmployeeModel(data);
  try {
    await newEmployee.save((error:Error, result:string)=>{
      if(error){
        // tslint:disable-next-line:no-console
        console.log(error)
        res.status(201).json({status:false, data: error});
      }else{
        // tslint:disable-next-line:no-console
        console.log(result)
        res.status(201).json({status:true,data:result});

      }
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateEmployeeData = async (req: Request, res: Response) => {
  const { _id, name, gender, salary, birth_date } = req.body;
  if (!mongoose.Types.ObjectId.isValid( _id)) {
    return res.status(404).json({ _id, name, gender, salary, birth_date });
  }
  const updateEmployee = { name, gender, salary, birth_date, _id };
  try {
    await EmployeeModel.findByIdAndUpdate( _id, updateEmployee, { new: true });
    res.status(200).json({status:true,data:{ _id, name, gender, salary, birth_date }});
  } catch (error) {
    res.json({status:false, data:error.message});
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json(`There is no employee with id: ${id}`);
  }
  try {
    await EmployeeModel.findByIdAndRemove(id);
    res.status(200).json({ status:true, message: "Employee deleted successfully." });
  } catch (error) {
    res.json({ status:false, message: error.message });
  }
};

export default router;
