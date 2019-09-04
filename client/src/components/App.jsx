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
    this.getReviews(10);
  }

  async getReviews(id) {
    try {
      const response = await GetReviews(id);
      if (response !== undefined) {
        const { reviews, summary } = response.data;
        this.setState({
          loading: false,
          reviews,
          summary,
        });
        console.log('state', this.state);
      }
    } catch (err) { this.setState({ error: true }); }
  }

  render() {
    const {
      loading, reviews, summary, error,
    } = this.state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    return (
      <div className="app">
        <h1> Target Reviews </h1>
        <Summary summary={summary} />
        <Filters />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}

export default App;
