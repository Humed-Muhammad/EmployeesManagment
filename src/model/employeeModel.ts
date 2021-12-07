import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  name: String,
  gender: String,
  salary: String,
  birth_date: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});


const Employee = model("Employee", employeeSchema);

export default Employee;
