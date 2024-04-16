const express = require("express");
const fs = require("fs");
const { createServer } = require("http");
const { DateTime } = require("luxon");

const hostname = "localhost";
const port = 3000;

const app = express();

// Middlewareto upload the JSON data and order by date
app.use((req, res, next) => {
  fs.readFile("messages.json", "utf8", (err, data) => {
    if (err) {
      console.error("Errore nel leggere il file JSON:", err);
      res.status(500).send("Errore nel leggere il file JSON");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      //Convert strings of datas in obj DataTime
      jsonData.messages.forEach((message) => {
        message.date = DateTime.fromFormat(message.date, "dd-MM-yyyy");
      });
      // Order messages by date
      jsonData.messages.sort((a, b) => a.date - b.date);

      // Create a string for each element of messages
      const messageStrings = jsonData.messages.map((message) => {
        return `${message.name}  -  ${message.date.toFormat("dd-MM-yyyy")}:\n ${
          message.message
        }:`;
      });

      // Merge all strings into a single string, separating them with a newline character
      const finalString = messageStrings.join('\n\n');
      // Add the new ordered data in the req
      req.sortedData = finalString;

      next();
    } catch (error) {
      console.error("Errore nel parsing del file JSON:", error);
      res.status(500).send("Errore nel parsing del file JSON");
    }
  });
});

// Define routes
app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

app.get("/about/:username", (req, res) => {
  res.send(`About a user.. Username is ${req.params.username}`);
});

// Endpoint to obtain  ordered data
app.get("/messages", (req, res) => {
  // Set the Content-Type header to text/plain to send properly formatted text
  res.setHeader("Content-Type", "text/plain");
  res.send(req.sortedData);
});
// Create HTTP server
const server = createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
