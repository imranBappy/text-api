const express = require('express');
const axios = require('axios');
const cron = require('node-cron');

const app = express();

// Define a scheduled job that runs every 2 minutes
// const scheduledJob = cron.schedule('*/2 * * * *', () => {
//     // Make the API call to the second Express server
//     axios.get('http://localhost:3001/second-server-route')
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// });

// // Start the scheduled job
// scheduledJob.start();
app.get('/', (req, res) => {
    axios.get('https://blog-23.onrender.com/')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    res.send('Hello World!');
});
setInterval(() => {
    axios.get('https://blog-23.onrender.com/')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}, 50000);
app.listen(process.env.PORT || 7000, () => {
    console.log('Express server listening on port 7000');
});
