let express = require("express");
let app = express();
app.set("view engine", "ejs");
ap.set("views","./views");
app.listen(4000);

app.get("/", function(red, res){
    res.render("trangchu")
})