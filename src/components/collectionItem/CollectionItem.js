import React from 'react'
import { connect } from 'react-redux'
import CostumButton from '../costumbutton/CostumButton'
import { addItem } from '../../redux/cart/cartAction'

import './CollectionItem.scss'

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CostumButton onClick={() => addItem(item)} inverted>
				add to cart
			</CostumButton>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
