import User from './user.js'

class DocController{
    async createUser (req, res){
        try {
            const {name, age, sex} = req.body;
            const user = await User.create('name', 32, 'sex');
            res.json(user);
        } catch (error) {
            res.status(500).json(e);
        }
    }
    async getUser(req,res){
        try {
            const user = await User.get();
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new DocController();
