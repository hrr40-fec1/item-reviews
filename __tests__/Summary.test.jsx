// it should render summary consisting of title, percentage of reviewers recommending, # of reviews
// total of reviews value, comfort, style, value
import App from '../client/src/components/App';

describe('App', () => {
  test('it properly renders', () => {
    shallow(<App />);
  });
});
