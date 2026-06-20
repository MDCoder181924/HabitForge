import habit from '../../models/User/habit.model.js'

export const habitCreat = async (req, res) => {
    try {
        const { habitName, habitDescription, habitCategory, habitGoalDuration, habitReminderTime, habitColorTheme, habitEnableReminder } = req.body;

        if (!habitName || !habitCategory) {
            return res.status(400).json({
                success: false,
                message: "fill oll data",
            })
        }

        const userId = req.user._id;

        const endDate = new Date();

        endDate.setDate(endDate.getDate() + habitGoalDuration)

        const newHabit = await habit.create({
            habitName,
            habitCategory,
            habitColorTheme,
            habitDescription,
            habitEnableReminder,
            habitGoalDuration,
            habitEndDate: endDate,
            completedDays: [],
            habitReminderTime,
            userId
        })

        res.status(200).json({
            success: true,
            message: "habit created",
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "habit not creat",
            error: error.message
        })
    }
}

export const getHabit = async (req, res) => {
    try {
        const userId = req.user._id

        const habits = await habit.find({ userId })

        return res.status(200).json({
            success: true,
            habits
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "not habit find",
            error: error.message
        })
    }
}

export const habitComplit = async (req, res) => {
    try {
        const { habitId } = req.body;

        if (!habitId) {
            return res.status(400).json({
                success: false,
                message: "Enter Habit Id"
            })
        }

        const newHabit = await habit.findOne({ _id: habitId, userId: req.user._id });

        if (!newHabit) {
            return res.status(400).json({
                success: false,
                message: "Not Found Habit"
            })
        }

        const today = new Date().toISOString().split("T")[0];

        if (newHabit.completedDays.includes(today)) {
            return res.status(400).json({
                success: false,
                message: "Habit already completed today"
            });
        }

        newHabit.habitCompletedToday = true;
        newHabit.completedDays.push(today);

        await newHabit.save();

        return res.status(200).json({
            success: true,
            message: "today habit is Complit"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "not count today habit",
            error: error.message
        })
    }
}

export const habitComplitRemove = async (req, res) => {
    try {
        const { habitId } = req.body;

        if (!habitId) {
            return res.status(400).json({
                success: false,
                message: "Enter Habit Id"
            })
        }

        const newHabit = await habit.findOne({ _id: habitId, userId: req.user._id });

        if (!newHabit) {
            return res.status(400).json({
                success: false,
                message: "Not Found Habit"
            })
        }

        const today = new Date().toISOString().split("T")[0];

        newHabit.habitCompletedToday = false;
        newHabit.completedDays = newHabit.completedDays.filter(day => day !== today);

        await newHabit.save();

        return res.status(200).json({
            success: true,
            message: "today habit is not complit"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "not count today habit",
            error: error.message
        })
    }
}