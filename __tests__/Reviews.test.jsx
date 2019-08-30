// renders review title, text, ratings, reviewer name, date review is posted
// should be have button to mark helpful
import App from '../client/src/components/App';

describe('App', () => {
  test('it properly renders', () => {
    shallow(<App />);
  });
});
