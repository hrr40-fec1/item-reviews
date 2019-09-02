// should be able to sort by most recent
// should be able to sort by number of stars
import Filters from '../client/src/components/Filters';

const wrapper = shallow(<Filters />);

xdescribe('<Filters /> rendering', () => {
  test('it properly renders', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});
