import express from "express";
import cors from "cors";

const app = express();
const PORT = 9000;

app.use(cors({
    origin: "*",
}));
/*app.use((req, res, next) => {
    console.log(`Request made at ${new Date()}`);
    next();
});*/

app.get("/node/api/", (req, res) => {
    res.json({message: "Hello"});
});

app.listen(PORT, () => {
    console.log("LanguageTrans listening on port", PORT);
});
