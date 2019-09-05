/* eslint-disable no-console */
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
      error: false,
    };
    this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  async getReviews() {
    try {
      const response = await GetReviews();
      if (response !== undefined) {
        const { reviews, summary } = response.data;
        this.setState({
          loading: false,
          reviews,
          summary,
        });
      }
    } catch (err) { console.log('error', err); }
  }

  render() {
    const {
      loading, reviews, summary,
    } = this.state;
    if (loading) return <div>Loading...</div>;
    return (
      <div className="app">
        <h1> Bullseye Reviews </h1>
        <Summary summary={summary} />
        <Filters />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}

export default App;
