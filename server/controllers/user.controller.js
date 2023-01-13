import userModel from "../models/user.models";
import Jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler";
const signup = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;

    const checkuser = await userModel.findOne({ username });

    if (checkuser) return responseHandler(res, "Username exit");

    const user = new userModel();

    user.displayName = displayName;
    user.username = username;
    user.setPassword(password);

    await user.save();

    const token = Jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24" }
    );
    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user.id
    });
  } catch {
    responseHandler.error(res);
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel
      .findOne({ username })
      .select("username password salt id displayName");
    if (!user) return responseHandler.badrequest(res, "user not found");

    if (!user.validPassword(password))
      return responseHandler.badrequest(res, "Wrong password");

    const token = Jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24" }
    );

    user.password = undefined;
    user.salt = undefined;

    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user.id
    });
  } catch {
    responseHandler.error(res);
  }
};

const getInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) return responseHandler.notFound(res);

    responseHandler.ok(res, user);
  } catch {
    responseHandler.error(res);
  }
};

export default {
  signin,
  getInfo,
  signup
};
