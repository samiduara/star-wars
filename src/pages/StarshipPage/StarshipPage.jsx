import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css';

const StarshipPage = (props) => {
  
  const starship = props.getStarship(props.match.params.idx);
  
  return (
    <div className='StarshipPage'>
      {starship ?
        <div className='StarshipPage-starship'>
          <flex>NAME:</flex>
          <flex>{starship.name}</flex>
          <flex>Skywalker:captain</flex>
          <flex>{starship.Skywalker}</flex>
          <flex>DarkVader:pilot</flex>
          <flex>{starship.DarkVader}</flex>
          <flex>MODEL:</flex>
          <flex>{starship.model}</flex>
          <Link to='/'>RETURN</Link> 
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default StarshipPage;
