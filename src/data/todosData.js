const tasks = [
    {
        taskName: "Study",
        description: "Conduct research",
        completed: {
            type: Boolean,
            default: false
        },
        text: "",
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        taskName: "Job Search",
        description: "Apply to 5 companies",
        completed: {
            type: Boolean,
            default: false
        },
        text: "",
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        taskName: "Clean",
        description: "Sweep room",
        completed: {
            type: Boolean,
            default: false
        },
        text: "",
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        taskName: "Homework1",
        description: "Week1 HW1",
        completed: {
            type: Boolean,
            default: false
        },
        text: "",
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        taskName: "Homework2",
        description: "Week1 HW2",
        completed: {
            type: Boolean,
            default: false
        },
        text: "",
        createdAt: {
            type: Date,
            default: Date.now()
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    }

]

export default tasks;