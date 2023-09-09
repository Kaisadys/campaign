import express from 'express';
import Campaign from './models/Campaign';

const router = express.Router();

router.get('/campaigns', async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

router.post('/campaigns', async (req, res) => {
  const { title, content } = req.body;
  const newCampaign = new Campaign({ title, content,targetGroup });
  await newCampaign.save();
  res.status(201).json(newCampaign);
});

export default router;