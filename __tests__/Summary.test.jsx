/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// it should render summary consisting of title, percentage of reviewers recommending, # of reviews
// total of reviews value, comfort, style, value
import Summary from '../client/src/components/Summary';

describe('<Summary /> rendering', () => {
  const mokSummary = {
    overall: '2.7',
    quality: '2.9',
    sizing: '3.1',
    style: '3.3',
    value: '2.6',
    comfort: '2.1',
    recommends: 6,
    reviews: 7,
  };
  const wrapper = shallow(<Summary summary={mokSummary} />);
  test(' Summary exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
