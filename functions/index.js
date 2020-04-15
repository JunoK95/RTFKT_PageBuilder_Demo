const moment = require('moment');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.saveData = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const {page_id, data} = request.body;
      console.log(page_id, data)
      await db.collection('pages')
        .doc(page_id)
        .set({data, last_updated: moment().unix()})
      response.status(200).send('successfully saved')
    } catch (error) {
      response.status(500).send(error);
    }
  })
});

exports.getPages = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const snapshot = await db.collection('pages')
        .orderBy('last_updated')
        .limit(10)
        .get()
      
      const snapData = snapshot.docs.map(doc => {
        return({...doc.data(), id: doc.id});
      });
      response.status(200).send(snapData);
    } catch (error) {
      response.status(500).send(error);
    }
  })
})

exports.getRequestData = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const {page_id} = request.query;
      const data = await db.collection('pages')
        .doc(page_id)
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.warn('Document does not exist');
            return false;
          } else {
            return(doc.data());
          }
        })
        .catch(err => console.error(err));

      if (!data) {
        const defaultData =
          [{
            type: 'text',
            text: "Click to edit box, Click + to add a new box",
            width: 300,
            height: 200,
            pos_x: 100,
            pos_y: 150,
            color: '#000',
            fontSize: 14,
            backgroundColor: '#ccc',
            zIndex: 0
          }]
        response.send({data: defaultData});
        return;
      } else {
        response.status(200).send(data);
        return;
      }
    } catch (error) {
      response.status(500).send(error);
    }
  })
})