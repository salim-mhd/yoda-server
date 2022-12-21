const app = require("../../app");
const User = require("../../modal/userModal/userSchema")


//storing the data from signup form
const register = async (req, res) => {
    try {
        console.log(req.body, 'reqqqqqqqqqqqqqqqqqqqqqqqq');
        let user = await User.findOne({email:req.body.email})
        console.log(user,'userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        if (!user) {
            try {
              const user = await new User({
                firstname: req.body.firstName,
                lastname:req.body.lastName,
                email: req.body.email,
                createdat: new Date().toDateString(),
                status:"unblock"
              })
              await user.save().then(() => {
                res.status(200).json({ res: user })
              })
      
            } catch (error) {
              console.log(error.message);
            }
        } else {
          res.status(200).json({ res: user , alredyUser:true })
        }
      } catch (error) {
        console.log(error,'tryyyyyyyyyyyeroorrrrrrrrrrrrrrrrrrrrrr');
      }

}



module.exports = { register }