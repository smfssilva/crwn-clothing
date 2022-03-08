import React from 'react';
import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => {
  const renderedItems = items.filter((item, idx) => idx< 4).map(({id, ...otheritemProps}) =>{
    return <CollectionItem key={id} {...otheritemProps} />
  })
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {renderedItems}
      </div>
    </div>
  )
}

export default PreviewCollection;