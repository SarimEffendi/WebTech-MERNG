import mongoose from "mongoose";
import { Course } from "./Course.js";

(async () => {
    await mongoose.connect("mongodb://localhost:27017/recapsheet");
})();

export const db = { Course };