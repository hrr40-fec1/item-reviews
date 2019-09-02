// should be able to sort by most recent
// should be able to sort by number of stars
import Filters from '../client/src/components/Filters';

describe('<Filters /> rendering', () => {
  const wrapper = shallow(<Filters />);
  test('it properly renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
