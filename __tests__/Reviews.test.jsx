// renders review title, text, ratings, reviewer name, date review is posted
// should be have button to mark helpful
import Reviews from '../client/src/components/Reviews';

const wrapper = shallow(<Reviews />);

describe('<Reviews /> rendering', () => {
  test('it properly renders', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});

describe('<Reviews /> interactions', () => { });

describe('<Reviews /> lifecycle method invocations', () => {
  // it('should change the state componentState componentDidMount method is invoked', () => {
  //   expect(wrapper.state('componentState')).toEqual('mounted');
  // });
});
