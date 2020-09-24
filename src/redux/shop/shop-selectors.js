import { createSelector} from 'reselect';


const Collection_IDS = {
    'hats' : 1,
    'jackets': 2,
    'sneakers': 3,
    'womens': 4,
    'mens': 5
}

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shopData => shopData.collection
)

export const selectCollection = collectionID => createSelector(
    [selectShopCollection],
    collection => collection.find((item) => item.id === Collection_IDS[collectionID])
)