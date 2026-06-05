import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import authRoutes from "./routes/auth.routes.js";
import { UserModel } from "./models/user.model.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      const name = profile.name.givenName;
      const email = profile.emails[0].value;

      const isExisted = await UserModel.findOne({ email });

      if (isExisted) {
        return cb(null, isExisted);
      }

      const newUser = await UserModel.create({
        name,
        email,
        provider: "google",
        provider_id: profile.id,
      });
      return cb(null, newUser);
    },
  ),
);

app.get("/",(req,res)=>{
    return res.send("fail to fetch")
})

app.use("/api/auth", authRoutes);

export default app;
