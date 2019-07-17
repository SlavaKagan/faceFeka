import React from 'react';

const PostStat = ( { name, amount } ) => {
  return(
    <div className = "stat-container">
      <div className = "stat" >{`${amount} ${name}`}</div>
    </div>
  );
};

export default PostStat;