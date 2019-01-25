import React, { Component } from 'react';
import CONST from '../../Common/CONST';

class Quotes extends Component {
  state = {
    currentQuote: {
      quote: CONST.quotes[0].quote,
      author: CONST.quotes[0].author
    }
  };

  componentDidMount() {
    this.randomQuote();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  randomQuote () {
    this.timer = setInterval(() => {
      let randomQuote = CONST.quotes[Math.floor(Math.random() * CONST.quotes.length)];
      this.setState({currentQuote: randomQuote});
    }, 5000);
  }

  render () {
    return (
      <section classNames="quotes">
        {this.state.currentQuote.quote} - {this.state.currentQuote.author}
      </section>
    )
  }
};

export default Quotes;
