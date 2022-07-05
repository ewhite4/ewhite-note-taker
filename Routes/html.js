const path = require('path');
const router = require('express').Router();

router.get("/notes", (req, res) => {
    res.sendFile(join(__dirname, "../public/notes.html"));
});

router.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../../index.html'));
});

router.get('*', (re, res) => {
    res.sendFile(join(__dirname, "../../index.html"))
});

module.exports = router;

