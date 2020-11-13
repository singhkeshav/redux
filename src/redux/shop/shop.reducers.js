import ShopData from './shopdata';
const INIT_STATE = {
    collections: ShopData
}


const shopReducers = (state = INIT_STATE, action) =>{
    switch(action.type){
        default:
            return {
                ...state
            }
    }
};


export default shopReducers;