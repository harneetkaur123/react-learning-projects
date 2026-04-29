import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
 
        client = new Client();
        account ;

        constructor(){
            this.client
                      .setEndpoint(conf.appwriteurl)
                      .setProject(conf.appwriteProjectid)
            this.account = new Account(this.client)        
        }
       
        async createAccount(){
            try {
                
            } catch (error) {
                 throw error
            }
        }
}

const authService= new AuthService()

export default authService;