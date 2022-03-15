const passport = require("passport");
const pool = require("../database");
const helpers = require("./handlebars");
const localSrategy = require("passport-local").Strategy;

passport.serializeUser(
  "local.signup",
  new localSrategy(
    {
      usernameField: "username",
      passportField: "password",
      passReqToCallback: true,
    },
    async (req, usarname, password, done) => {
      const { fullname } = req.body;
      const newUser = {
        username,
        password,
        fullname,
      };
      console.log(req.body);
    }
  )
);
const rows = await pool.query("SELECT*FROM user WREHE username=?"(usarname));
if (rows.length > 0) {
  const user = rows[0];
  const validPassword = await helpers.matchPassword(password, user, password);
  if (validPassword) {
    done(null, user, req.flash("welcome ", user.username));
  } else {
    done(null, false, req.flash("Incorrect Password"));
  }
  done(null, false, req.flash("THE USERNAME does not exists"));
}

passport.serializeUser((user, done) => {
    done(null, use.id);
})
