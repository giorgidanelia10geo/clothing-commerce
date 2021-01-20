import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../menuItem/MenuItem'
import { selectDirerctorySection } from '../../redux/directory/directorySelector'

import './Directory.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirerctorySection
})

export default connect(mapStateToProps)(Directory)
