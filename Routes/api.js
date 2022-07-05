const router = require('express').Router();
const { createNewNote, deleteNote, initDb, hasNote } = require('../lib/database');


router.get('/', (req, res) => {
    res.json(initDb());
});

router.get('/', (req, res) => {
        if(!hasNote(req.params.id)) {
            return res.status(400).json({ message: `No not with id of${req.params.id} found`});
        }
        res.json(getNote(req.params.id));
});        

router.post("/", (req, res) => {
    const newNote = createNewNote(req.body);
    console.log(req.body);
    res.json(newNote);
});

router.delete("/:id", (req, res) => {
    if(!hasNote(req.params.id)) {
        return res.status(400).json({ Message: `No note with id of ${req.params.id} found`});
    }
    res.json(deleteNote(req.params.id));
});

module.exports = router;
