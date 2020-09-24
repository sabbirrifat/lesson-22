import React from 'react';

import './collection-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview';

import { createStructuredSelector } from 'reselect';

import { selectShopCollection} from '../../redux/shop/shop-selectors';

import { connect } from 'react-redux';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
            ))}   
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  collections : selectShopCollection
})

export default connect(mapStateToProps)(CollectionOverview)
