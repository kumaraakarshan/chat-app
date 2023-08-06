const express= require('express');
const data = require('./data');
const fs = require('fs');


const router=express.Router();

router.get(`/`,(req, res,next) => {
    fs.readFile('message.txt',(err, data) => {
        if(err){
            console.log(err)
            data='no chat exist'
        }

    });
    res.send(
        `${data}<form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
    method="POST"><input id="message" name="message" type="text"placeHolder="message"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`)
   })
router.post(`/`,(req, res, next) => {
    
    data.push(`{${req.body.username}:${req.body.message}\n}`)
    console.log(data);
    
    console.log(`${req.body.username}:${req.body.message}`);
    fs.writeFile("message.txt", `${req.body.username}:${req.body.message}`,{flag:'a'}, (err) => {
        if (err) {
          console.log('Error writing to file:', err);
        } else {
          console.log('Data written to file successfully.');
        }
      });
    res.redirect(`/`)
    
    
})


module.exports = router