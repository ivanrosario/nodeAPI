 let rest = "1,23,45,64";
 const test = rest.split(",")
 console.log(test)

 module.exports = function(app, db) {
  app.get('/allProducts', (req, res) => {
    test.forEach(function(id){
      db.query(`SELECT * FROM Products WHERE Product = ${id} `, function (err, result, fields) {
        if (err) throw err;
        res.send(result)
      })
    })
  })
};
