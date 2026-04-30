import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service{
     client = new Client();
     databases;
     bucket;

     constructor(){
         this.client
                      .setEndpoint(conf.appwriteurl)
                      .setProject(conf.appwriteProjectid)
         this.databases = new Databases(this.client)
         this.bucket = new Storage(this.client)
     }

     async createPost({title , slug, content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseid,
                conf.appwriteProjectid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
                console.log("APPWRITE SERVICE :: CREATEPOST ::",error);
            
        }
     }

     async updatePost(slug,{title,content , featuredImage , status}){
        try {
            return await this.databases.updatePost(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
             console.log("APPWRITE SERVICE :: UPDATEPOST ::",error);
            
        }
     }

     async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug
            )
            return true
        } catch (error) {
             console.log("APPWRITE SERVICE :: DELETEPOST ::",error);
            return false
        }
     }

     async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug
            )
        
        } catch (error) {
             console.log("APPWRITE SERVICE :: GETPOST ::",error);
        }
     }

     async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                queries,
            )

        } catch (error) {
             console.log("APPWRITE SERVICE :: GETPOSTS ::",error);
            return false
        }
     }


     // file storage

     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketid,
                ID.unique(),
                file
            )
        } catch (error) {
             console.log("APPWRITE SERVICE :: UPLOADFILE ::",error);
            return false
        }
     }

     async deleteFile(fileId){
         try {
            await this.bucket.deleteFile(
                conf.appwriteBucketid,
                fileId
            )
            return true
         } catch (error) {
            console.log("APPWRITE SERVICE :: DELETEFILE ::",error);
            return false
         }
     }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(
           conf.appwriteBucketid,
           fileId
        )
     }
}

const service = new Service()

export default service