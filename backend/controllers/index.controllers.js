const fetch = require("node-fetch");
let url = "https://api.gueno.com.ar/challenge/"

const getCuit = (req, res) =>{

  try{
    fetch(url + `getCuit/${req.params.id}`)
    .then(response =>response.json())
    .then(data=>{
      res.send(data);
    })
  }catch (e){
    res.json({
      status: 'error',
      message:'Error al realizar la consulta'
    })
  }
}

const getInfo = (req, res) => {

  try {
    fetch(url + `getUserData/${req.params.id}`)
    .then(response=> response.json())
    .then(data =>{
        res.send(data);
    })
  } catch (e) {
    console.log(e);
    res.json({
        status: 'error',
        message: 'Error al realizar la consulta'
    })
  }
};

module.exports = {
  getInfo,
  getCuit
};
