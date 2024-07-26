const express = require('express');
const router = express.Router();
const { Pembayaran } = require('../models');

// Create a new Pembayaran
router.post('/', async (req, res) => {
    try {
        const pembayaran = await Pembayaran.create(req.body);
        res.status(201).json(pembayaran);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all Pembayarans
router.get('/', async (req, res) => {
    try {
        const pembayarans = await Pembayaran.findAll();
        res.json(pembayarans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single Pembayaran by ID
router.get('/:id', async (req, res) => {
    try {
        const pembayaran = await Pembayaran.findByPk(req.params.id);
        if (pembayaran) {
            res.json(pembayaran);
        } else {
            res.status(404).json({ error: 'Pembayaran not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Pembayaran
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Pembayaran.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const pembayaran = await Pembayaran.findByPk(req.params.id);
            res.json(pembayaran);
        } else {
            res.status(404).json({ error: 'Pembayaran not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a Pembayaran
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Pembayaran.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Pembayaran not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
