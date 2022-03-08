import React from 'react';

import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    const renderedCollections = collections.map(({id, ...otherCollectionProps}) => {
      return <PreviewCollection key={id} {...otherCollectionProps}/>
    })
    return (
      <div className="shop-page">
        {renderedCollections}
      </div>
    )
  }
}

export default ShopPage;