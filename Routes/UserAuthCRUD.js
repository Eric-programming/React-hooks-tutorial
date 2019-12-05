const UserModel = require("../Model/UserModel");
//Add Error Handlers CHANGE ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
const ErrorClass = require("../ErrorHandler/ErrorClass");
const {successRes, catchAsync} = require("../ErrorHandler/Response");
//CHANGE⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

/**
 * @DESC Register User
 * @ROUTE1 GET /auth/register
 */
exports.register = catchAsync(async (req, res, next)=>{
    const { name, email, password, role } = req.body;
    
    const newUser = await UserModel.create({
        name, 
        email, 
        password, 
        role
    })

    res.status(200).json(successRes("User Registered"));
})