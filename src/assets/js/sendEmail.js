let mail = require("mail").Mail({
  host: "smtp.gmail.com",
  username: "me@gmail.com",
  password: "password",
});

function sendMessageMail() {
  mail
    .message({
      from: "sender@example.net",
      to: ["recipient@somewhere.org"],
      subject: "Hello from Node.JS",
    })
    .body("Node speaks SMTP!")
    .send(function (err) {
      console.log(err);
    });
}

exports[sendMessageMail];
