const express = require('express')
const app = express()
const port = 4444
const bodyParser = require('body-parser')
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const docRef = db.collection('steamLogins')

app.use(cors({
  origin: 'http://localhost:3000', // Allow only this domain
}));
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')

  docRef.doc(`${TEST}`).set({
    test: "test"
  })
  .then(() => {
      console.log('success')
  })
  .catch( () => {
      console.log(error)
  })

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})