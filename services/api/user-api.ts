import CallAPI from "./call-api";

const userRoutes = {
    getAllUsers: '/api/v1/users',
    deleteUser: '/api/v1/users',
}

let headerAuthor: object={}; 

if (typeof localStorage !== 'undefined') {
    let accessToken = localStorage.getItem("accessToken") as string;
    headerAuthor = {'Authorization': `Bearer ${accessToken}`}
} 
else {
    console.log("👉️ can't use localStorage")
}

export default class UserService {
    static getAllUsers = async()=>{
        try{
            const response = await CallAPI.call(userRoutes.getAllUsers,{
                method:'GET',
                headers: headerAuthor
            })
            return response;
        }
        catch(err){
            throw err;
        }
    }

    static deleteUser = async(user_id: string)=>{
        try{
            const response = await CallAPI.call(
                `${userRoutes.deleteUser}/${user_id}`,
                {
                    method: "DELETE",
                    headers: headerAuthor,
                }
            );
            return response;
        }
        catch(err){
            throw err;
        }
    }

    
}