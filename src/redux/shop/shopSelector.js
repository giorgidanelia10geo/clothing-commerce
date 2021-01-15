import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'


const selectShop = state => state.shop

export const selectcollections = createSelector(
  selectShop,
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  selectcollections,
  collections =>
    collections ? Object.keys(collections).map(item => collections[item]) : []
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    selectcollections,
    collections => collections ? collections[collectionUrlParam] : null
  )
)

export const selectCollectionFetching = createSelector(
  selectShop,
  shop => shop.isFetching
)

export const selectCollectionsLoaded = createSelector(
  selectShop,
  shop => !!shop.isLoaded
)