import axios from "axios";

export const getAllProducts = (page? : number, limit? : string) => async (dispatch: any) => {
    try{
        const response = await axios.get(`https://vlixes-server.herokuapp.com/products?pag=${page ? page : 1}&limit=${limit ? limit : 5}`);
        return dispatch({
            type: "ALL_PRODUCTS",
            payload: response.data
        });
    }catch(error){
        console.log(error);
    };
};
export const  getProductsByName = (name: any) => async(dispatch: any) => {
    try{
        const response = await axios.get("https://vlixes-server.herokuapp.com/products?title=" + name);
        return dispatch({
            type: "GET_PRODUCT_BY_NAME",
            payload: response.data,
        });
    }catch(error){
        console.log(error);
    };
};
export const deleteProduct = (id: number) => async (dispatch: any) => {
    try {
        const response: any = await axios.delete(`https://vlixes-server.herokuapp.com/products/${id}`);
        dispatch(getAllProducts());
    } catch (error) {
        console.log(error);
    }
};
export const getAllUsers = () => async (dispatch: any) => {
    try {
        const response: any = await axios.get("https://vlixes-server.herokuapp.com/users");
        return dispatch({
            type: "GET_ALL_USERS",
            payload: response.data,
        });
    }catch (error) {
        console.log(error);
    }
};
export const getUserByName = (name: string) => {
    try {
        return {
            type: "GET_USER_BY_NAME",
            payload: name,
        };
    }catch (error) {
        console.log(error);
    }
};
export const deleteUser = (id: number) => async (dispatch: any) => {
    try {
        const response: any = await axios.delete("https://vlixes-server.herokuapp.com/users/" + id);
        dispatch(getAllUsers());
        return response;
    } catch (error) {
        console.log(error);
    }
};