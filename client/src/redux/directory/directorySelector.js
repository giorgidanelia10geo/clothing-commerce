import { createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const selectDirerctorySection = createSelector(
  selectDirectory,
  directory => directory.sections
)