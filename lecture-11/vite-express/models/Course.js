/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const schemaCourse = new Schema({
    courseid:Number,
    code:String,
    title:String,
    crhr:Number,
    semester:Number,

});
export const Course = model("Course", schemaCourse);

