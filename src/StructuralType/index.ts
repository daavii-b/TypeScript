type VerifyUserFN = (user: User, sentValue: User) => boolean;
type User = {
    username: string;
    password: string;
}


const verifyUser: VerifyUserFN = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
}

const dbUser = {
    username: 'Joãozinho',
    password: '1234'
}

const sentValue = {
    username: 'Joãozinho',
    password: '1234'
}


const userIsLoggedIn = verifyUser(dbUser, sentValue)


console.log(userIsLoggedIn)
