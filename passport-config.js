const LocalStrategy = require("passport-local")

function initalize(passport){
    const authenticateUser = (email,password,done) => {
        
    }

    passport.use(new LocalStrategy({usernameField :"email"}),authenticateUser)
}