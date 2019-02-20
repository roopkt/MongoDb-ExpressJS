import { addNewContact } from '../controllers/crm-controller';

const routes = (app: any) => {
  app
    .route("/contact")
    .get((req: any, res: any) => res.send(`GET request successfull!!!`))
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .put((req: any, res: any) => res.send(`PUT request successfull!!!`))
    .delete((req: any, res: any) => res.send(`DELETE request successfull!!!`));
};
export default routes;
