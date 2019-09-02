/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// renders review title, text, ratings, reviewer name, date review is posted
// should be have button to mark helpful
import Reviews from '../client/src/components/Reviews';

describe('<Reviews /> rendering', () => {
  test('it properly renders', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists()).toBe(true);
  });
});
