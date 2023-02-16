const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const routes = require("./controllers");
const helpers = require("./utils/helpers.js");
console.debug(1);
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
console.debug(2);
const hbs = exphbs.create({ helpers });
console.debug(3);
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
console.debug(4);
app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
console.debug(5);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
console.debug(6);
app.use(routes);
console.debug(7);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
console.debug(8);
