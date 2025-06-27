export const employees = [
    {
        img: './assets/profile-pics/hero-pics/hero-pic-9.png',
        name: 'Evan Yates',
        email: 'evan.yates@example.com',
        gender: 'Male',
        birthday: 'Apr 12, 1995',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-8.png',
        name: 'Oscar Holloway',
        email: 'oscar.holloway@example.com',
        gender: 'Male',
        birthday: 'Jan 1, 1990',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-4.png',
        name: 'Louis Castro',
        email: 'louis.castro@example.com',
        gender: 'Male',
        birthday: 'Apr 12, 1995',
        fullAge: '30',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-2.png',
        name: 'James Williamson',
        email: 'james.williamson@example.com',
        gender: 'Male',
        birthday: 'Jan 1, 1990',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-3.png',
        name: 'Emily Tyler',
        email: 'emily.tyler@example.com',
        gender: 'Female',
        birthday: 'Jan 1, 1990',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-1.png',
        name: 'Shawn Stone',
        email: 'shawn.stone@example.com',
        gender: 'Male',
        birthday: 'Jan 1, 1990',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-5.png',
        name: 'Blake Silva',
        email: 'blake.silva@example.com',
        gender: 'Male',
        birthday: 'Jan 1, 1990',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },
    {
        img: './assets/profile-pics/hero-pics/hero-pic-7.png',
        name: 'Joel Phillips',
        email: 'joel.phillips@example.com',
        gender: 'Male',
        birthday: 'Jan 1, 1990',
        fullAge: '33',
        position: 'Software Engineer',
        level: 'Middle'
    },

]






export const projects = [
    {
        name: 'Medical App (iOS native)',
        pn: 'PN0001266',
        created: 'Jan 1, 2023',
        description: 'App for maintaining your medical record, making appointments with a doctor, storing prescriptions',
        reporter: employees[0],
        assignees: [employees[0], employees[1]],
        priority: 'Medium',
        deadLine: 'Dec 31, 2023',
        tasks: [
            {
                taskName: 'Research',
                Estimate: '2d 4h',
                SpentTime: '1d 2h',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'Done',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 1,

            },
            {
                taskName: 'Mind Map',
                Estimate: '2d 4h',
                SpentTime: '4h 25m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Medium',
                progress: 'In Progress',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 2,


            },
            {
                taskName: 'UX sketches',
                Estimate: '4d',
                SpentTime: '2d 2h 20m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'In Progress',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 3,

            },
            {
                taskName: 'UX Login',
                Estimate: '2d',
                SpentTime: '3h 15m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'To Do',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 4,

            },
            {
                taskName: 'UI Login ',
                Estimate: '1d 2h',
                SpentTime: '4h',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Medium',
                progress: 'In Review',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 5,

            },
            {
                taskName: 'UI for T',
                Estimate: '4d',
                SpentTime: '2d 2h 20m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'In Progress',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 6,

            }
        ]
    },
    {
        name: 'Medical App (iOS native)',
        pn: 'PN0001265',
        created: 'Jan 1, 2023',
        description: 'App for maintaining your medical record, making appointments with a doctor, storing prescriptions',
        reporter: employees[0],
        assignees: [employees[0], employees[1]],
        priority: 'Medium',
        deadLine: 'Dec 31, 2023',
        tasks: [
            {
                taskName: 'Research',
                Estimate: '2d 4h',
                SpentTime: '1d 2h',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'Done',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 1,

            },
            {
                taskName: 'Mind Map',
                Estimate: '2d 4h',
                SpentTime: '4h 25m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Medium',
                progress: 'In Progress',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 2,


            },
            {
                taskName: 'UX sketches',
                Estimate: '4d',
                SpentTime: '2d 2h 20m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'In Progress',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 3,

            },
            {
                taskName: 'UX Login + Registration',
                Estimate: '2d',
                SpentTime: '3h 15m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'To Do',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 4,

            },
            {
                taskName: 'UI Login + Registration',
                Estimate: '1d 2h',
                SpentTime: '4h',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Medium',
                progress: 'In Review',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 5,

            },
            {
                taskName: 'UI for other screens',
                Estimate: '4d',
                SpentTime: '2d 2h 20m',
                Assignee: './assets/profile-pics/project-pic/project-pic-1.png',
                Priority: 'Low',
                progress: 'In Progress',
                progressBar: './assets/profile-pics/project-pic/project-pic-ransiz.svg',
                uuid: 6,

            }
        ]
    }
]