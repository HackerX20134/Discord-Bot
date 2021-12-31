Discord-Bot


CODING

Start new coding with go to index.js and complete
token: {Your bot token} 

Rename Your bot status with
`bot.status.                                             text: "{Your bot status}",
  type: "WATCHING",
  status: "online"
  time: 12`

Set Your bot prefix variable.js with
module.exports = {
  Prefix: "{Your bot prefix}"
}


Set Your bot website to website.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<p style="font-family: Helvetica;">{Your bot website}</p>')
});


app.listen(3030, () => {
  console.log('[INFO] Website Online');
});
           

