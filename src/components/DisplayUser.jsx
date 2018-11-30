import React from 'react';

const DisplayUser = ({user}) => (
  <div className='user-display box'> 
  <h4>User Data:</h4>
    {
      Object.keys(user).map((property, i) => {
        return (
          <div className='property-list' key={i}>{`${property}: ${user[property]}`}</div>
        )
      })
    }
  </div>
);

export default DisplayUser;