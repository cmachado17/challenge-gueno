const fetch = require("node-fetch");

const getInfo = (req, res) => {
  let cuit = 3011111119;

  try {
    fetch(`https://api.gueno.com.ar/challenge/getUserData/${cuit}`)
    .then(response=> response.json())
    .then(data =>{
        res.send(data);
    })
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getInfo,
};
