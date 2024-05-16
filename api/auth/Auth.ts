import client from "@/config/Appwrite_conf";
import { Account, ID } from "appwrite";

const account = new Account(client);

const RegisterUser = async (
    email : string,
    name : string,
    password : string
) => {
    try {
        const promise = await account.create(
            ID.unique(),
            email,
            password,
            name
        )
        if (promise) {
            console.log(promise);
            return promise;  
        }
        else {
            return false;
        }      
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured: ", error.message);
            return error;
        }
        else {
            console.log("Error of Unknown Origin");
            return "Error of Unknown Origin";
        }
    }
}

const LoginUser = async (
    email: string,
    password: string
) => {
    try {
        const promise = await account.createEmailPasswordSession(
            email,
            password
        )

        if (promise) {
            console.log(promise);
            return promise;
        }
        else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured: "+ error.message);
            return error;
        }
        else {
            console.log("Error of unknown Origin");
            return "Error of unkown Origin";
        }
    }
}

const createVerification = async (link: string) => {
    try {
        const promise = await account.createVerification(
            link
        )
        if (promise) {
            console.log(promise);
            return promise;
        }
        else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured ",error.message);
            return error;
        }
        else {
            return "Error of unknwon Cause";
        }
    }
}

const UpdateVerification = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get('secret');
        const userId = urlParams.get('userId');

        if (!userId) {
            throw new Error("userId is null");
        }

        const promise = await account.updateVerification(userId, secret!);

        console.log(promise);
        return promise;
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured: ", error.message);
            return error;
        } else {
            return "Error of unknown Cause";
        }
    }
}

const CreateRecovery = async (email : string, url:string) => {
    try {
        const promise = await account.createRecovery(
            email,
            url
        )
        if (promise) {
            console.log(promise);
            return promise;
        }
        else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured ",error.message);
            return error;
        }
        else {
            return "Error of unknwon Cause";
        }
    }
}

const UpdateRecovery = async (password: string, confirmPassword: string) => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get('secret');
        const userId = urlParams.get('userId');

        if (!userId) {
            throw new Error("userId is null");
        }

        if (password !== confirmPassword) {
            throw new Error("password and confirm passwords does not match");
        }

        const promise = await account.updateRecovery(
            userId,
            secret!,
            password,
        )
        if (promise) {
            console.log(promise);
            return promise;
        }
        else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured ",error.message);
            return error;
        }
        else {
            return "Error of unknwon Cause";
        }
    }
}

const GetCurrentUser = async () => {
    try {
        const promise = await account.get();
        if (promise) {
            console.log(promise);
            return promise;
        }
        else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured ",error.message);
            return error;
        }
        else {
            return "Error of unknwon Cause";
        }
    }
}

const LogoutUser = async () => {
    try {
        const promise = await account.deleteSession('current');
        if (promise) {
            console.log(promise);
            return promise;
        }
        else {
            return false;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error Occured ",error.message);
            return error;
        }
        else {
            return "Error of unknwon Cause";
        }
    }
}

export default {
    LoginUser,
    RegisterUser,
    UpdateRecovery,
    CreateRecovery,
    createVerification,
    UpdateVerification,
    GetCurrentUser,
    LogoutUser
}