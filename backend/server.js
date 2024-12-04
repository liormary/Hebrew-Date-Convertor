const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/convert", async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).send({ error: "Date parameter is required" });
  }

  try {
    const response = await axios.get(
      `https://www.hebcal.com/converter?cfg=json&date=${date}&g2h=1&strict=1`
    );
    res.send(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "An error occurred while converting the date" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
