import { db } from "./models/index.js";

// (async()=>  {
    
//         const marks = await db.find({ course: "WebTech" });
//         const marksString = JSON.stringify(marks);
//         console.log(marksString);
//         process.exit(0);
// })();

db.Course.find().then((Course) => {
    console.log(Course);
});

