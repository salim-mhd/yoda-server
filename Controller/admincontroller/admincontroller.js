const app = require('../../app');
const jwt = require("jsonwebtoken")
const User = require('../../modal/userModal/userSchema')


const admin = {
    adminEmail: 'admin@gmail.com',
    adminPassword: 12345678
}


const home = (req, res) => {
    res.json({"msg":"hello"})
}


const postadminlogin = async (req, res) => {
    try {
        let { email, password } = req.body

        if (email == admin.adminEmail && password == admin.adminPassword) {
            const token = jwt.sign({ email: admin.adminEmail }, process.env.ADMIN_JWTSECRET_KEY)
            if (res.status(201)) {
                return res.json({ state: "ok", data: token, admin: true })
            } else {
                return res.json({ error: "error" });
            }
        }
        return res.json({ status: "error", error: "Invalid Email or Password" })



    } catch (error) {
        console.log(error.message);
    }
}

const getUserDetails = async (req, res) => {
    try {
        const allUserDetails = await User.find()
        return res.json({ state: "ok", users: allUserDetails })

    } catch (error) {
        console.log(error.message);
    }
}

const userStatusChange = async (req, res) => {
    try {
        let userDetails = await User.findOne({ _id: req.body.userId })
        if (userDetails.block) {
            await User.findByIdAndUpdate(req.body.userId, { block: false })
        } else {
            await User.findByIdAndUpdate(req.body.userId, { block: true })
        }
        return res.json({ state: "ok" })

    } catch (error) {
        console.log(error.message);
    }
}

const userDelete = async (req, res) => {
    try {
        console.log(req.body.userId, 'userDeleteuserDeleteuserDelete');
        await User.deleteOne({_id:req.body.userId})
        return res.json({ state: "ok" })

    } catch (error) {
        console.log(error.message);
    }
}

const deleteAllUserDetails = async (req, res) => {
    try {
        console.log('userDeleteuserDeleteuserDeleteallllllllllllllllll');
        await User.deleteMany({})
        return res.json({ state: "ok" })

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = { postadminlogin, getUserDetails, userStatusChange, userDelete , deleteAllUserDetails,home }