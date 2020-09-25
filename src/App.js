import React from 'react';
import Card from './components/Card';

import { initNavigation } from '@noriginmedia/react-spatial-navigation';

initNavigation();


class App extends React.Component {
  state = {
    data: []
  };
  myRef = React.createRef();

  getData = async () => {
    const response = await fetch('data.json');
    const data = await response.json();
    this.setState({ data: data });
  };

  componentDidMount() {
    this.getData();
  };

  prev = (event) => {
    if (event.keyCode === 13) {
      const slide = this.myRef.current;
      slide.scrollLeft -= slide.offsetWidth;
      if (slide.scrollLeft <= 0) {
        slide.scrollLeft = slide.scrollWidth;
      }
    }
  };

  next = (event) => {
    if (event.keyCode === 13) {
      const slide = this.myRef.current;
      slide.scrollLeft += slide.offsetWidth;
      if (slide.scrollLeft <= (slide.scrollWidth - slide.offsetWidth)) {
        slide.scrollLeft = 0;
      }
    }
  }

  render() {

    const { data } = this.state;
    return (
      <div className="wrapper">
        <div className="app" ref={this.myRef}>
          {data.map((item, index) => (
            <Card focusKey={`CARD-${index}`} data={item} key={index} />))}
        </div>
        <div className="row">
          <button className="prev" onKeyDown={this.prev}>
            &#706;
          </button>
          <button className="next" onKeyDown={this.next}>
            &#707;
          </button>
        </div>
      </div>
    )
  }
}

export default App;
