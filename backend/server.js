import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/db/db.js"
import { startHabitReminderJob } from "./src/services/reminder.service.js";

connectDB();
startHabitReminderJob();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port no ${PORT}`)
})