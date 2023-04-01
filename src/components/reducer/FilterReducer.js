const FilterReducer=(state,action)=>{
    switch(action.type){

        case "FILTER_LOADING":
            return {
                ...state,
                filter_loading: true,
            };

    case "LOAD_FILTER_PRODUCTS":
            
            return {
                ...state,
                filter_loading:false,
                filter_error:false,
                all_products: action.payload,
                filter_products: action.payload, 
            };
    case "GET_SORT_VALUE":
        // let userSortValue= document.getElementById("sort");
        // let val=userSortValue.options[userSortValue.selectedIndex].value;
        return {
            ...state,
            sorting_value: action.payload,
        };
    case "SORTING_PRODUCTS":
        let newSortData;
        const {filter_products}=state;
        let tempSortData=[...filter_products];
        if(state.sorting_value==="a-z"){
            newSortData=tempSortData.sort((a,b)=>
                a.name.localeCompare(b.name)
            );
        }
        if(state.sorting_value==="z-a"){
            newSortData=tempSortData.sort((a,b)=>
                b.name.localeCompare(a.name)
            );
        }
        if(state.sorting_value==="lowest"){
            const sortingProducts=(a,b)=>{
                return a.price - b.price;
            }
            newSortData=tempSortData.sort(sortingProducts);
        }
        if(state.sorting_value==="highest"){
            const sortingProductsH=(a,b)=>{
                return b.price - a.price;
            }
            newSortData=tempSortData.sort(sortingProductsH);
        }
        return {
            ...state,
            filter_products: newSortData,
        };

        case "UPDATE_FILTERS_VALUE":
            const {name,value}=action.payload;
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]: value, 
                },
            };
        case "FILTER_PRODUCTS":
            let {all_products}=state;
            let tempFilterProduct=[...all_products];
            const {text, category,company}=state.filters;
            if (text) {  
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                  return curElem.name.toLowerCase().includes(text);
                });
              }
            if(category){
                
                tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                    if(category==="all") return tempFilterProduct;
                    else return curElem.category===category;
                });
            }
            if(company){
                tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                    if(company==="all") return tempFilterProduct;
                    else return curElem.company===company.toLowerCase();
                })
            }
            else{
                <div>Nothing found</div>
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
              };
   default:
    return state; 
}
    
};

export default FilterReducer;