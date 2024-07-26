const express = require('express');
const router = express.Router();
const { DataKelas } = require('../models');

// Create a new DataKelas
router.post('/', async (req, res) => {
    try {
        const dataKelas = await DataKelas.create(req.body);
        res.status(201).json(dataKelas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all DataKelas
router.get('/', async (req, res) => {
    try {
        const dataKelasList = await DataKelas.findAll();
        res.json(dataKelasList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single DataKelas by ID
router.get('/:id', async (req, res) => {
    try {
        const dataKelas = await DataKelas.findByPk(req.params.id);
        if (dataKelas) {
            res.json(dataKelas);
        } else {
            res.status(404).json({ error: 'DataKelas not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a DataKelas
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await DataKelas.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const dataKelas = await DataKelas.findByPk(req.params.id);
            res.json(dataKelas);
        } else {
            res.status(404).json({ error: 'DataKelas not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a DataKelas
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await DataKelas.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'DataKelas not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
