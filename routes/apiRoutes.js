var tableData = require("../data/tableData")
var waitListData = require("../data/waitlistData");

module.exports = function(app){
app.get("/api/tables", function(req, res){
    res.json(tableData);
})

app.get("/api/waitlist", function(req, res){
    res.json(waitListData);
});

app.post("/api/tables", function(req, res){
    if(tableData.length <5){
        tableData.push()
    } else{
        waitListData.push()
    }
})}

