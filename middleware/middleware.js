const fs = require('fs');

exports.loggerMiddleware = (req,res,next)=>{
  // middelware calisti, simdi devam etmesi icin 
  // (yani, altinda (server.js te) bulunan fonksiyonlarin (get,post etc.) calismasi icin) izin vermemiz gerek:
  next()
}

let tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.controlMiddleware = (req, res, next) => {

  // elemanı turların arasından bul
  const found = tours.find(item => item.id === req.params.id);

  // bulunamadıysa bir sonraki adıma geçmeyi engelleyip res gönderiyoruz
  if (!found)
    return next(res.status(404).json({ status: "Gönderdiğiniz id'ye sahip bir tur bulunamadı" }))

  // bulunan tur bilgisini isteğe ekle
  req.tour = found;


  // bulunduysa sonraki adıma geçebilir
  next();
};




