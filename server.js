const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./Develop/Routes/api');
const htmlRoutes = require('./Develop/Routes/html');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('./routes/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
