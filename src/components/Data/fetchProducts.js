
const fetchProducts = (productos)=> {

    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(productos)
        },2000);
    }) 
}

export default fetchProducts;