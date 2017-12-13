
module.exports = function(app, db) {
  app.get('/allProducts', (req, res) => {
    db.query("SELECT * FROM Products", function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    })
  });
};

module.exports = function(app, db) {
  app.post('/Order', (req, res) => {
    res.send("hell0s")
  });
};



