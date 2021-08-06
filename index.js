var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hostelguru",
});

con.connect((error) => {
  if (error) throw error;
  //   console.log("connection successful");
  con.query("select * from students", (err, result) => {
    if (err) throw err;
    console.log("all results are here : ", result);
    // console.log("all results are here : ", result[0].email);
  });
});
