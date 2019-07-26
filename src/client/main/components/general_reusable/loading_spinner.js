import React from 'react';
import '../../../../../resources/css/loading_spinner.css';

const LoadingSpinner = ( { circleColor } ) => {
  return(
    <div className = "main-loading-spinner">
      <div className = "lds-ellipsis" >
        <div style={ { 'background-color': circleColor } } />
        <div style={ { 'background-color': circleColor } } />
        <div style={ { 'background-color': circleColor } } />
        <div style={ { 'background-color': circleColor } } />
      </div>
    </div>
  );
};

export default LoadingSpinner;