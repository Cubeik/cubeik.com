import React from 'react';
import Scplayer from './Scplayer'

export default React.createClass({
  getDefaultProps() {
    return {
      className: 'music'
    }
  },

  render() {
    return (
      <div>
        <h1>Music</h1>
        <p>
          Welcome to the music page, our best music is spotlighted here.
        </p>

        <Scplayer trackid='196857744' colour='00CCAA' />
        <Scplayer trackid='161573640' colour='50C3FF' />
        <Scplayer trackid='158690567' colour='E979FE' />
        <Scplayer trackid='221465569' />
        <Scplayer trackid='190981988' colour='00CCAA' />

      </div>
    )
  }
});
