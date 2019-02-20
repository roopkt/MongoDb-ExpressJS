import * as mongoose from "mongoose";
import { ContactSchema } from "../models/crm-model";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req : Request, res:any) =>{
    let newContact = new Contact(req.body);
    newContact.save((error, contact)=>{
        if(error) {
            res.send(error);
        }
        res.json(contact);
    })
}
