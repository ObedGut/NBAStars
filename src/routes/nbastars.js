const {Router} = require('express');
const router = Router();
const _ = require('underscore');
const httpStatus = require('http-status');

const mysqlConexion = require('../database');

//Get all 
router.get('/', (req,res)=>{
    mysqlConexion.query('SELECT * FROM nbaStars', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//Get one
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConexion.query('SELECT * FROM nbaStars WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0])
      } else {
        console.log(err);
      }
    });
  });

//Insert
router.post('/', (req, res) => {
    const {id, name, team, champs, image} = req.body;
    console.log(id, name, team, champs, image);
    
    const query = `
      SET @id = ?;
      SET @name = ?;
      SET @team = ?;
      SET @champs = ?;
      SET @image = ?;
      CALL nbastarsAddOrEdit(@id, @name, @team, @champs, @image);
    `;
    mysqlConexion.query(query, [id, name, team, champs, image], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Player Saved'});
      } else{
        console.log(err);
      }
    });

  
  });

//Update
router.put('/:id', (req, res) => {
    const { name, team, champs, image} = req.body;
    const { id } = req.params;
    const query = `
     SET @id = ?;
     SET @name = ?;
      SET @team = ?;
      SET @champs = ?;
      SET @image = ?;
      CALL nbastarsAddOrEdit(@id, @name, @team, @champs, @image);
    `;
    mysqlConexion.query(query, [id, name, team, champs, image], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Updated'});
      } else {
        console.log(err);
      }
    });
  });

//Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConexion.query('DELETE FROM nbaStars WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Player Deleted'});
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;