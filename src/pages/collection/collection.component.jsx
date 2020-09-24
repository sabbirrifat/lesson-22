import React from 'react'
import { selectCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.styles.scss';
import { connect } from 'react-redux';

const CollectionPage = ({collection, title}) => {
    console.log(collection)
    return (
        <div className='collection-page'>

        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='collection-page-items'>
        {collection.items
            .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>


  </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state),
        title: ownProps.match.params.collectionId
    }
}

export default connect( mapStateToProps)(CollectionPage)
