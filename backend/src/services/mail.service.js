import nodemailer from "nodemailer"

const transpoter = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_APP_PASSWORD
    }
})

export const sendHabitReminderEmail = async ({ to , userName , habit }) =>{
    await transpoter.sendMail ({
        from: `"HabitForge Team" <${process.env.EMAIL_USER}>`,
        to,
        subject:"Habit Reminder : ${habit.habitName}",
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>HabitForge Reminder</h2>
                <p>Hello ${userName || "User"},</p>

                <p>It is time for your habit:</p>

                <div style="padding: 14px; border: 1px solid #ddd; border-radius: 8px;">
                    <h3>${habit.habitName}</h3>
                    <p>${habit.habitDescription || "Keep going. Complete your habit today."}</p>
                    <p><b>Category:</b> ${habit.habitCategory}</p>
                    <p><b>Reminder Time:</b> ${habit.habitReminderTime}</p>
                </div>

                <p>Stay consistent.</p>
                <p>- HabitForge</p>
            </div>
        `
    })
}