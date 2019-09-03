/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// it should render summary consisting of title, percentage of reviewers recommending, # of reviews
// total of reviews value, comfort, style, value
import Summary from '../client/src/components/Summary';

describe('<Summary /> rendering', () => {
  const wrapper = shallow(<Summary />);
  test(' Summary exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
