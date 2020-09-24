import React from 'react';
import {withFocusable} from '@noriginmedia/react-spatial-navigation';

class Card extends React.Component {

  componentDidMount() {
    //setFocus lo provee la hoc, por eso la props
    this.props.setFocus('CARD-0');
  }

  render() {
    const {data} = this.props;
    return (
      // la props focused la pasa la hoc
      <div className="card" style={{border: this.props.focused ? '2px solid red' : 'none'}}>
        <img src={data.src} alt={data.description} />
      </div>
    )
  }
};

export default withFocusable()(Card);