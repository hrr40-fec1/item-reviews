import React from 'react';

import Summary from './Summary';
import Filters from './Filters';
import Reviews from './Reviews';

import GetReviews from '../controllers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      reviews: [],
      summary: {},
    };
  }

  async componentDidMount() {
    const response = await GetReviews('10');
    if (response !== undefined) {
      const { reviews, summary } = response.data;
      console.log('reviews', reviews, 'summarys:', summary);
      this.setState({
        loading: false,
        reviews,
        summary,
      });
    }
  }

  render() {
    const { loading, reviews, summary } = this.state;
    if (loading) return <div>Data not available</div>;
    return (
      <div className="app">
        <h1> Target Reviews </h1>
        <Summary summary={summary} />
        <Filters reviews={reviews} />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}

export default App;
