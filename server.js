const express = require('express')

const { getAllTours, createTour, getTour, updateTour, deleteTour } = require('./controllers/tourControllers')
const { loggerMiddleware, controlMiddleware } = require('./middleware/middleware')

const app = express()
const PORT = 8000

// Middelware => request & response arasinda calisan function()
// ape.use()=> butun isteklerden hemen once bu istek calissin anlama=ina gelir:
// express.json()=> automatically processes the body of the request
app.use(express.json())

// middelware => requestlerin en ustune yazilir.
app.use(loggerMiddleware)


// You can write the URL here as you wish (as long as it makes sense). 
// The v1 (v2, v3 etc) here is the version of the API.
// api lar her zaman slash ile baslar: /api. Ve slash database table ile biter: /tours

/* Respond to GET request
app.get('/api/v1/tours', getAllTours)

// Respond to POST request
app.post('/api/v1/tours', createTour)
*/

// we cam write get & post in on line b/s the routes are the sema:
app.route('/api/v1/tours').get(getAllTours).post(createTour)

/* Get one data by id:
app.get('/api/v1/tours/:id', getTour)

// Update some parts of data:
app.patch('/api/v1/tours/:id', updateTour)

// Delete data by id:
app.delete('/api/v1/tours/:id',deleteTour)
*/

// id kontrol eden middelware buraya ekleyelim:
// eger id dogruysa devam et, degilse hata response gonder:
app.use(controlMiddleware)
//  get-id, patch-id ve delete-id routes ayni oldugu icin tek satirda yazabilirim:
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)

app.listen(PORT, () => {
    console.log(`it runs successfully on ${PORT} port`)
})



/*

const express = require('express')

const { getAllTours, createTour, getTour, updateTour, deleteTour } = require('./controllers/tourControllers')
const { loggerMiddleware, controlMiddleware } = require('./middleware/middleware')

const app = express()
const PORT = 8000

app.use(express.json())

app.use(loggerMiddleware)
app.route('/api/v1/tours').get(getAllTours).post(createTour)

app.use(controlMiddleware)
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)

app.listen(PORT, () => {
    console.log(`it runs successfully on ${PORT} port`)
})

*/




























