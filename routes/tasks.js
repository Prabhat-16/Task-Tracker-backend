const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all tasks
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new task
router.post('/', (req, res) => {
  const { name, description, status, due_date } = req.body;
  db.query('INSERT INTO tasks (name, description, status, due_date) VALUES (?, ?, ?, ?)',
    [name, description, status, due_date],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId });
    });
});

// Update task status
router.put('/:id', (req, res) => {
  const { status } = req.body;
  db.query('UPDATE tasks SET status = ? WHERE id = ?', [status, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Delete a task
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;