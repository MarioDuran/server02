import express from 'express';
import {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
} from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost);            // Create a post
router.get('/', getAllPosts);            // Get all posts
router.get('/:postId', getPostById);     // Get a specific post
router.patch('/:postId', editPost);      // Update a post
router.delete('/:postId', deletePost);   // Delete a post

export default router;
