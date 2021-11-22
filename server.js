const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepAlive() {
  require("http").createServer((req, res) => res.end("Bot Nyalaa")).listen(process.env.PORT || 8080)
  }

module.exports = keepAlive
