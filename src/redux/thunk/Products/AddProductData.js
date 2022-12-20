import { addProduct } from "../../actions/productAction";

const AddProductData = (product) =>{
    return async (dispatch,getState)=>{
        const res = await  fetch("http://localhost:5000/product" ,{
            method : "POST",
            body : JSON.stringify(product),
            headers : {
                "Content-type" : "application/json",
            }
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(addProduct({
                ...product,
                _id: data.insertedId,
            }))
        }
    }
}

export default AddProductData;