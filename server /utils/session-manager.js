const { verifyJwt } = require("./token");
const userModel = require("../modules/user/user.model");

const checkRole = (sysRole) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.access_token || null;
     
      if (!token) throw new Error("Access token is chaiyo");
      const {data} = verifyJwt(token);
       // Check if user is active or not
       const user = await userModel.findOne({
        email: data.email,
        isActive: true,
      });
      
      //check Role
      if (!user) throw new Error("Invalid Token");
      // Compare Role
      const isValidRole = sysRole.some((role) => user.roles.includes(role));
      if (!isValidRole) throw new Error("Permission denied");
      req.currentUser = user?._id;
      req.roles = user?.roles;
      next();
    } catch (e) {
      next(e);
    }
  };
};

module.exports = { checkRole };
