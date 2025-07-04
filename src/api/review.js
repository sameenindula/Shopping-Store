import express from 'express';
import { getAllReviews, saveReview } from '../application/review';

const reviewRouter = express.Router;
reviewRouter.use(express.json);

reviewRouter
    .router('/:id')
    .get(getAllReviews)
    .post(saveReview)