 import axios from "axios"
 
 const apiClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
 });

 export const fetchUsers= async()=>{
    const response = await apiClient.get("/users");
    console.log("Response",response)
    return response.data;
 }

 export const addUser= async(newUser)=>{
    const response = await apiClient.post('/users',newUser);
    console.log("Response",response)
    return response.data;
 }

 export const updateUser= async(id, updateUser)=>{
    const response = await apiClient.put(`/users/${id}`,updateUser);
    console.log("Response",response)
    return response.data;
 }

 export const deleteUser= async(id)=>{
    await apiClient.delete(`/users/${id}`);
 }