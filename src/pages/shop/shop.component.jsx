import  React from 'react';
import SHOP_DATA from './shopdata';
import PreviewCollection  from '../../components/preview-component/preview.component'
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections }  = this.state;
      return (
        <div className="shop-page">
          { collections.map(collection=>(
              <PreviewCollection key={collection.id} {...collection} />
          ))}
        </div>
      )
    };
}


export default ShopPage;