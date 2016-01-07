import React from 'react';


export default React.createClass({

  PropTypes: {
      trackid: React.PropTypes.string.isRequired,
      colour: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      trackid: '161573640',
      colour: '50C3FF'
    }
  },

  render() {
    return (
      <div>
        <iframe className='scplayer' width='100%' height='100' scrolling='no' frameborder='no' src={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + this.props.trackid + '&amp;color=' + this.props.colour + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'} />
      </div>
    )
  }
});
