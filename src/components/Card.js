import React from 'react';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';

class Card extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="card">
        <img src={data.src} alt={data.description} />
      </div>
    )
  }
};

export default Card;