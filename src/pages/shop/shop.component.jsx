import  React from 'react';
import { Route} from 'react-router-dom';
import ColectionPreview from '../../components/collections-overview/collections-overview.component';
import  Collection from '../collection/collection.component';
const  ShopPage = ({match}) => (
        <div className="shop-page">
         <Route path={`${match.path}`} component={ColectionPreview} exact />
         <Route path={`${match.path}/:collectionId`} component={Collection}  />
        </div>
      )
    


export default ShopPage;