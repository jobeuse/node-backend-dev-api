import { JsonWebTokenError } from "jsonwebtoken";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler";
import userModel from "../models/user.models";

const toeknDecode = (req) => {
  try {
    const bearerHeader = req.header["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    }

    return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  const toeknDecode = toeknDecode(req);
  if (!toeknDecode) return responseHandler.unauthorize(res);

  const user = await userModel.findById(toeknDecode.data);
  if (!user) return responseHandler.unauthorize(res);
  req.user = user;
  next();
};

export default { auth, toeknDecode };
