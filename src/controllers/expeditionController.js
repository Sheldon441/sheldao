import Expedition from '../models/expeditionModel.js';

export const store = async (req, res) => {
    try {
        const expedition = await Expedition.create(req.body);
        return res.status(201).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const expedition = await Expedition.find().exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const show = async (req, res) => {
    try {
      const expedition = await Expedition.findById(req.params.id).exec();
      res.json(expedition);
    } catch (error) {
      res.status(400).send(error);
    }
  };

export const update = async (req, res) => {
    try {
        const expedition = await Expedition.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const expedition = await Expedition.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};