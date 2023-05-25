const users =[
    {
        name: 'John',
        surname: 'Doe',
        age: 30,
        skills: ['Developer', 'DevOps'],
    },
    {
        name: 'Katy',
        surname: 'Belova',
        age: 18,
        skills: ['Design']
    }
];

const users2 = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    }
})