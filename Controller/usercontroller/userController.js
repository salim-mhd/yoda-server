const app = require("../../app");
const User = require("../../modal/userModal/userSchema")
const jwt = require('jsonwebtoken')

//storing the data from signup form
const register = async (req, res) => {
    try {
        let user = await User.findOne({email:req.body.email})
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
                const token = jwt.sign({ email: user.email }, process.env.USER_JWTSECRET_KEY)
                res.status(200).json({ res: user , token:token })
              })
      
            } catch (error) {
              console.log(error.message);
            }
        } else {
          const token = jwt.sign({ email: user.email }, process.env.USER_JWTSECRET_KEY)
          res.status(200).json({ res: user , alredyUser:true , token:token })
        }
      } catch (error) {
        console.log(error,'tryyyyyyyyyyyeroorrrrrrrrrrrrrrrrrrrrrr');
      }

}



module.exports = { register }