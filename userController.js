import User from "./user.js";

class UserController {
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
      const { uid } = req.body;
      const user = await User.get(uid);
      res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
    }
  }
  async registerUser(req, res) {
    try {
      const { email, password, phone, displayName } = req.body;
      await User.register(email, password, displayName, phone);
      res.status(201).json({ message: "User register" }).end();
    } catch (error) {
      res.status(500).json(error).end();
    }
  }
  async updateUserCreds(req, res) {
    try {
      const { uid, email, password, phone, displayName } = req.body;
      await User.updateCredentials(uid, displayName, email, phone, password);
      res.status(200).json({ message: "User creds updated" }).end();

      console.log("updated user creds");
    } catch (error) {
      console.log(error);
      res.status(500).json(error).end();
    }
  }
  async updateUserData(req, res) {
    try {
      const {
        uid,
        email,
        phone,
        displayName,
        profession,
        location,
        genre,
        experience,
        social,
        bio,
      } = req.body;
      await User.updateData(
        uid,
        email,
        phone,
        displayName,
        profession,
        location,
        genre,
        experience,
        social,
        bio
      );
      res.status(201).json({ message: "User data updated." }).end();
      console.log("User data updated");
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message).end();
    }
  }
}

export default new UserController();
