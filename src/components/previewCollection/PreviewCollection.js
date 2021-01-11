import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../collectionItem/CollectionItem'

import './PreviewCollection.scss'

const PreviewCollection = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <div onClick={() => history.push(`${match.path}/${routeName}`)}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
      <div className="preview">
        {
          items.filter((item, idx) => idx < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  )
}
export default withRouter(PreviewCollection)
