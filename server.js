const express = require('express');
const app = express();

app.use(express.static('public')); // Serve files from /public

app.listen(80, () => {
    console.log('WHR Academy is live on port 80');
});
