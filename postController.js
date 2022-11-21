import Post from "./post.js";

class PostController {
  async createPost(req, res) {
    try {
      const {
        author,
        dateOfCreating,
        profession,
        experience,
        genre,
        location,
        sessionDate,
        shortInfo,
      } = req.body;
      await Post.create(
        author,
        dateOfCreating,
        profession,
        experience,
        genre,
        location,
        sessionDate,
        shortInfo
      );
      res.status(201).json({ message: "Post created" }).end();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message).end();
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await Post.getAll();
      console.log(posts);
      res.status(200).json(posts).end();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostController();
