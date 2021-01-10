import React from "react"
import { LoaderOverlay, LoaderContainer } from './LoaderStyle'

const WithLoader = WrappedComponent => {
  const loader = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <LoaderOverlay>
        <LoaderContainer />
      </LoaderOverlay>
    ) : (<WrappedComponent {...otherProps} />)
  }
  return loader
}

export default WithLoader
