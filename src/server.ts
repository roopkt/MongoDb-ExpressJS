import * as express from "express";
import routes from "./routes/crm-routes";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";

const app = express();
const PORT = 3420;

// mongoose connection
(mongoose as any).Promise = global.Promise;
mongoose.connect(`mongodb://localhost/CRMdb`, {
   
  useNewUrlParser: true 
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app
  .get("/", (req: any, res: any) => {
    res.send(`Node and express server is running on port ${PORT}`);
  })
  .listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
  });
