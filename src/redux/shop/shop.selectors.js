import  { createSelector} from 'reselect';


const shpReducers = state => state.shop;

const shopReducersSelecotrs =  createSelector(
    [shpReducers],
    (shop)=> shop.collections
);

export const shopCategorySelector = paramsId => createSelector(
    [shopReducersSelecotrs],
    (collections) => collections.find(row => row.routeName === paramsId)
)

export default shopReducersSelecotrs;