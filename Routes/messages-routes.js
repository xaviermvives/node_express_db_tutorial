const express = require("express");
const Lessons = require("../models/dbHelpers");

const router = express.Router();

//all endpoints are for /api/messages
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Lessons.removeMessage(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "Message successfully deleted" });
      } else {
        res.status(404).json({ message: "No message with that id" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Unable to delete message" });
    });
});

module.exports = router;
