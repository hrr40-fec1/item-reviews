// it should render summary consisting of title, percentage of reviewers recommending, # of reviews
// total of reviews value, comfort, style, value
import Summary from '../client/src/components/Summary';

const wrapper = shallow(<Summary />);

describe('<Summary /> rendering', () => {
  test('it should render a title', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});

describe('<Summary /> interactions', () => {});
describe('<Summary /> lifecycle method invocation ', () => {});
