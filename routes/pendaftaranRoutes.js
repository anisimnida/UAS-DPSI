const express = require('express');
const router = express.Router();
const { Pendaftaran } = require('../models');
const { authenticate } = require('../middleware/auth');

// Create a new Pendaftaran
router.post('/',authenticate , async (req, res) => {
    try {
        const pendaftaran = await Pendaftaran.create(req.body);
        res.status(201).json(pendaftaran);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all Pendaftarans
router.get('/', async (req, res) => {
    try {
        const pendaftarans = await Pendaftaran.findAll();
        res.json(pendaftarans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single Pendaftaran by ID
router.get('/:id', async (req, res) => {
    try {
        const pendaftaran = await Pendaftaran.findByPk(req.params.id);
        if (pendaftaran) {
            res.json(pendaftaran);
        } else {
            res.status(404).json({ error: 'Pendaftaran not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Pendaftaran
router.put('/:id',authenticate , async (req, res) => {
    try {
        const [updated] = await Pendaftaran.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const pendaftaran = await Pendaftaran.findByPk(req.params.id);
            res.json(pendaftaran);
        } else {
            res.status(404).json({ error: 'Pendaftaran not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a Pendaftaran
router.delete('/:id',authenticate , async (req, res) => {
    try {
        const deleted = await Pendaftaran.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Pendaftaran not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
