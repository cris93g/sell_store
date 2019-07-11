module.exports = {
  getTvs(req, res) {
    const db = req.app.get("db");
    db.getAllTvs()
      .then(response => res.status(200).json(response))
      .catch(console.log);
  }
};
