import React from 'react';
import  './collection.style.scss';
import CollectionItems from '../../components/collection-item/collection-item.component';
import {connect } from 'react-redux';
import { shopCategorySelector } from '../../redux/shop/shop.selectors'
const Collection = ({collection}) => {
    const {title,items} = collection;
return (
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(row=>(<CollectionItems key={row.id} item={row}/>))
            }
        </div>
    </div>
);
}
const  storeToProps = (state, ownProps) => ({
  collection: shopCategorySelector(ownProps.match.params.collectionId)(state)
})
export default connect(storeToProps) (Collection);