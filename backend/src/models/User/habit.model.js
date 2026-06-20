import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
    habitName: {
        type: String,
        required: true,
        trim: true
    },
    habitDescription: {
        type: String,
        default: "",
    },
    habitCategory: {
        type: String,
        enum: ["Productivity", "Health", "Fitness", "Study", "Finance", "Personal", "other"],
        default: "Productivity"
    },
    habitGoalDuration: {
        type: Number,
        default: 21
    },
    habitReminderTime: {
        type: String,
        default: "00:00"
    },
    habitColorTheme: {
        type: String,
        default: '#22c55e'
    },
    habitEnableReminder: {
        type: Boolean,
        default: true
    },
    completedDays: [{
        type: String
    }],
    habitEndDate: {
        type: Date,
        required: true
    },
    habitCompletedToday: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    }
}, { timestamps: true })

const habit = mongoose.model("habit", habitSchema);

export default habit;