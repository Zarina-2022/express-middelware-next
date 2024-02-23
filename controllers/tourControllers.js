const fs = require('fs');
const crypto = require('crypto');

// ! Controllers
// Projedeki endpoint'leri istek atılınca devreye giricek olan
// gelen isteği işleyip kullanıcıya cevap gönderen fonksiyonları
// tutuğumuz dosya

// get all tours' data here:
let tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

// Get all data
exports.getAllTours = (req, res) => {
  res.status(200).json({
      status: 'success',
      results: tours.length,
      tours: tours,
  })
}

// Create new data
exports.createTour = (req, res) => {
  // adding a new value without changing the object we have: there are two ways:
  // 1st method:
  //const newwTour = {...req.body,id:'123'}

  // 2nd method:
  const newTour = Object.assign({ id: crypto.randomUUID() }, req.body)

  // now add this new tour(object) to the end of the tours array list:
  tours.push(newTour)

  // In order for this change to be permanent, I also need to save it in the json file.
  fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), () => {
      // send response:
      res.status(201).json({
          status: 'successfully created',
          newTour: newTour,
      })
  })
}

// Get one data by id
exports.getTour = (req, res) => {
  // asagidaki id bulmak ve hata vermek kodlarina artik ihtiyac yok cunku server.js te middelware ile bunu kontrol ediyoruz zaten.
  
  /* node.js te istedigin id'yi <req.params.id> seklinde arariz:
  const tour = tours.find(item => item.id === req.params.id)

  //Validation
  if(!tour) return res.status(404).json({status:"Invalid ID"})
  */

  // send it to frontend:
  res.status(200).json({
      status: 'requested id successfully found and send',
      // iki kelimede ayni ise birini yazmamiz yeterlidir: tour: tour
      tour: req.tour,
  })
}

// Update data
exports.updateTour = (req, res) => {
  // asagidaki id bulmak ve hata vermek kodlarina artik ihtiyac yok cunku server.js te middelware ile bunu kontrol ediyoruz zaten.

  /* node.js te istedigin id'yi <req.params.id> seklinde arariz:
  const updatedTour = tours.find(item => item.id === req.params.id)

  //Validation
  if(!updatedTour) return res.status(404).json({status:"Invalid ID"})
  */

  // todo turu ve json guncelle

  // send it to frontend:
  res.status(200).json({
      status: 'requested id successfully updated',
      tour: updatedTour,
  })
}

// Delete data
exports.deleteTour = (req, res) => {
  // asagidaki id bulmak ve hata vermek kodlarina artik ihtiyac yok cunku server.js te middelware ile bunu kontrol ediyoruz zaten.
  
  /* node.js te istedigin id'yi <req.params.id> seklinde arariz:
  const deletedTour = tours.find(item => item.id === req.params.id)

  //Validation
  if(!updatedTour) return res.status(404).json({status:"Invalid ID"})

  */

  // delete id with filter:
  const filteredTours = tours.filter(item => item.id !== req.params.id)

   // In order for this change to be permanent, I also need to save it in the json file.
   JSON.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, filteredTours, () => {
      // send response:
      res.status(204).send()
  })
}



/*

const fs = require('fs');
const crypto = require('crypto');

let tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllTours = (req, res) => {
  res.status(200).json({
      status: 'success', results: tours.length, tours: tours })}

// Create new data
exports.createTour = (req, res) => {
  const newTour = Object.assign({ id: crypto.randomUUID() }, req.body)
  tours.push(newTour)

  fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), () => {
      res.status(201).json({
          status: 'successfully created', newTour: newTour })})}

// Get one data by id
exports.getTour = (req, res) => {
  res.status(200).json({
      status: 'requested id successfully found and send', tour: req.tour })}

// Update data
exports.updateTour = (req, res) => {
  // todo turu ve json guncelle
  res.status(200).json({
      status: 'requested id successfully updated', tour: updatedTour })}

// Delete data
exports.deleteTour = (req, res) => {
  const filteredTours = tours.filter(item => item.id !== req.params.id)
   JSON.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, filteredTours, () => {
      res.status(204).send()
  })}

*/