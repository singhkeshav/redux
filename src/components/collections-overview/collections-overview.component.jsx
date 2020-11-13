import React from 'react';
import  './collections-overview.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';
import PreviewCollection  from '../../components/preview-component/preview.component';
import shopReducersSelecotrs from '../../redux/shop/shop.selectors';

const ColectionPreview = ({collections}) => (
    <div className='collections-overview'>
        { collections.map(collection=>(
              <PreviewCollection key={collection.id} {...collection} />
             ))
          }
    </div>
);

const storeToProps = createStructuredSelector({
    collections: shopReducersSelecotrs
})
export default connect(storeToProps) (ColectionPreview)