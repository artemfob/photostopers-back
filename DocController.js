import User from "./user.js";

class DocController {
  async createUser(req, res) {
    try {
      const { uid } = req.params;
      const user = await User.create(uid);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getUser(req, res) {
    try {
      const { uid } = req.params;
      const user = await User.get(uid);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
  async registerUser(req, res) {
    try {
      const { email, password, phone, name } = req.body;
      const newUser = await User.register(email, password, name, phone);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateUser(req, res) {
    try {
      const { uid } = req.params;
      const { name, email, phone } = req.body;
      await User.update(uid, name, email, phone);
      res.status(201).end();
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }
}

export default new DocController();
