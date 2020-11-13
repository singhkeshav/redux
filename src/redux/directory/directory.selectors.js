import  { createSelector } from 'reselect';

const directoryRedux = state=> state.directory;


export const selectDirectoryList  = createSelector(
    [directoryRedux],
    (directory)=> directory.sections
    );