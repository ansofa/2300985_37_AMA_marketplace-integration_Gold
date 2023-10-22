const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan")
const router = require("./routers/router");
const path = require("path");
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./libs/passport');

app.use(morgan("dev"))

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// proses inisasi middleware atuh
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: '4ee26b85-1fff-4b1a-ad3c-a11087d18f2b',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}!`);
});
