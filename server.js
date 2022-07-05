const express = require("express");
const htmlRouters = require("./Routes/html").default;
const apiRoutes = require("./Routes/api");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/notes', apiRoutes);
app.use('/', htmlRouters);

app.listen(PORT, () => console.log(`API server now on port ${PORT}!`));



