import React from 'react';

import Fire from '../../assets/delete-me.png';

import {
  Container
} from './style';

const Home: React.FC = () => {
  return (
    <Container>
      {/* let's gooo! 🔥 */}
      <img className="fire" src={Fire} />
      <p>GUS TEMPLATE</p>
    </Container>
  );
}

export default Home;