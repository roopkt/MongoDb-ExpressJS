import * as express from "express";
import routes from "./routes/crmRoutes";

const app = express();
const PORT = 3400;
routes(app);

app
  .get("/", (req: any, res: any) => {
    res.send(`Node and express server is running on port ${PORT}`);
  })
  .listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
  });
