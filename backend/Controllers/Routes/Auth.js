const route = require("express").Router();
const UserModel = require("../../Models/UserModel");

route.post("/user", (req, res) => {
  UserModel.create(req.body)
    .then((user) => {
      if (!user) {
        return res.status(400).send("There was an error.");
      }
      res.send("Created user");
    })
    .catch((error) => {
      if (error) {
        res.status(400).send(`An error occurred. ${error}`);
      }
    });
});

route
  .put("/user", (req, res) => {
    const { _id, name, password, role } = req.body;
    UserModel.findByIdAndUpdate(_id, { name, password, role })
      .then((user) => {
        if (!user) {
          return res.status(400).send("No user found");
        }
        res.send("User updated");
      })
      .catch((error) => {
        if (error) {
          res.status(400).send(`An error occurred. ${error}`);
        }
      });
  })
  .post("/", (req, res) => {
    UserModel.findOne(req.body)
      .then((user) => {
        if (!user) {
          return res.status(400).send("Incorrect e-mail or password.");
        }
        res.cookie("user", user);
        res.send(true);
      })
      .catch((error) => {
        if (error) {
          res.status(400).send(`An error occurred. ${error}`);
        }
      });
  })
  .get("/", (req, res) => {
    UserModel.find()
      .then((user) => {
        if (!user) {
          return res.status(400).send("No users found.");
        }
        res.send(user);
      })
      .catch((error) => {
        if (error) {
          res.status(400).send(`An error occurred. ${error}`);
        }
      });
  });

module.exports = route;
