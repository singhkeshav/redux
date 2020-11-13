import './directory.style.scss';
import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import  {selectDirectoryList} from '../../redux/directory/directory.selectors'
const Directory = ({sections}) =>(
        <div className="directory-menu">
          { 
           sections.map(row=><MenuItem  key={row.id} {...row}/> )
          }
        </div>
      )
    
const stateToProps = createStructuredSelector({
  sections: selectDirectoryList
}) 
export default connect(stateToProps) (Directory);