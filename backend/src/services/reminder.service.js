import cron from "node-cron"
import habit from "../models/User/habit.model.js"
import user from "../models/Auth/user.model.js"
import { sendHabitReminderEmail } from "./mail.service.js"

const getTodayDate = () => {
    return new Date().toLocaleDateString("en-CA", {
        timeZone: process.env.REMINDER_TIMEZONE || "Asia/Kolkata"
    });
}

const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-GB", {
        timeZone: process.env.REMINDER_TIMEZONE || "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
};

export const startHabitReminderJob = () => {
    cron.schedule("* * * * *", async () => {
        try {
            const today = getTodayDate();
            const currentTime = getCurrentTime();

            const reminderHabits = await habit.find({
                habitEnableReminder: true,
                habitReminderTime: currentTime,
                habitEndDate: { $gte: new Date() },
                completedDays: { $ne: today },
                lastReminderSentDate: { $ne: today }
            });

            for (const h of reminderHabits) {
                const currentUser = await user.findById(h.userId);

                if (!currentUser || !currentUser.userEmail) {
                    continue;
                }

                await sendHabitReminderEmail({
                    to: currentUser.userEmail,
                    userName: currentUser.userName,
                    habit: h
                });

                h.lastReminderSentDate = today;
                await h.save();
            }
        } catch (error) {
            console.log("Reminder job error:", error.message);
        }
    });

    console.log("Habit reminder job started");
};