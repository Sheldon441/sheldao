import Explorer from '../models/explorerModel.js';

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body);
        return res.status(201).json(explorer);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const explorer = await Explorer.find().exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const show = async (req, res) => {
    try {
      const explorer = await Explorer.findById(req.params.id).exec();
      res.json(explorer);
    } catch (error) {
      res.status(400).send(error);
    }
  };

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};