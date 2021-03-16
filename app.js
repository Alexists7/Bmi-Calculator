// JMJ
const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.render("index");
});

app.post("/",(req, res) => {
  

      const weight = Number(req.body.weight);

      const height = Number(req.body.height);
    
      const bmi = weight / (Math.pow(height, 2));
      
      
      function result(){  if(bmi < 18.5){
      res.render("underweight", {yourBmi: bmi});
      }else if(bmi > 18.5 && bmi < 25){
      res.render("normal", {yourBmi: bmi});
      }else if(bmi > 25 && bmi < 30){
      res.render("overweight", {yourBmi: bmi});
      }else res.render("obese", {yourBmi: bmi});
   }
   
result();
 

   res.send();
});






app.listen(3000, () => {
   console.log("Port is running!");
});










