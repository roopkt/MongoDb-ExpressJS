import * as express from "express";
const app = express();
const PORT = 3400;

app
  .get("/", (req: any, res: any) => {
    res.send(`Node and express server is running on port ${PORT}`);
  })
  .listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`);
});
