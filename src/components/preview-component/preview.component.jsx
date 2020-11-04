import  './preview.style.scss';
import React from 'react';

import CollectionItems from '../collection-item/collection-item.component'
const PreviewCollection = (props) => (
 <div className="collection-preview">
   <h1 className="title">{props.title.toUpperCase()}</h1>
   <div className="preview">
       { props.items.filter((itm,idx)=>idx<4).map(item=>(
           <CollectionItems key={item.id} {...item} />
       ))}
   </div>
 </div>
);

export default PreviewCollection;