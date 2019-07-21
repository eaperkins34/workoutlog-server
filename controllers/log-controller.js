const router = require('express').Router();
const validateSession = require('../middleware/validate-session')
const Log = require('../db').import('../models/log');

/******CREATE NEW WORKOUT******/
router.post('/', validateSession, (req, res) => {
    if(!req.error){
    let description = req.body.log.description;
    let definition = req.body.log.definition;
    let results = req.body.log.results;
    let owner = req.user.id;

    Log
        .create({
            description: description,
            definition: definition,
            results: results,
            owner_properties: owner,
        })
        .then(function(log) {
            res.send(log);
        },
        function(err) {
            console.log(err);
        }
    )} else {
        res.status(500).json(error)
    }
});

/******GET ALL WORKOUTS******/
router.get('/', (req, res) => {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(error => res.status(500).json(error))
});

/******GET WORKOUT BY ID******/
router.get('/:id', (req, res) => {
    Log.findOne({ where: { id: req.params.id }})
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({error: err}))
})

/******UPDATE WORKOUT BY ID******/
router.put('/:id', (req, res) => {
    if(!req.errors) {
        Log.update(req.body, { where: {id: req.params.id }})
        .then(log => res.status(200).json(log))
        .catch( err => res.status(500).json(req.errors))
    } else {
        res.status(500).json(req.error)
    }
})

/******DELETE WORKOUT BY ID******/
router.delete('/:id', (req, res) => {
    if (!req.errors) {
        Log.destroy({ where: { id: req.params.id }})
        .then( log => res.status(200).json(log))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})
module.exports = router;