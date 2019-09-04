/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// renders review title, text, ratings, reviewer name, date review is posted
// should be have button to mark helpful
import Reviews from '../client/src/components/Reviews';

describe('<Reviews /> rendering', () => {
  test('it properly renders', () => {
    const mokReviews = [
      {
        ratings: {
          overall: 4,
          quality: 2,
          sizing: 2,
          style: 5,
          value: 3,
          comfort: 1,
        },
        _id: '5d6c1f9d5586ba9f753cec80',
        title: 'Unbranded Rubber Gloves',
        review: 'Sed commodi fuga cupiditate laboriosam velit modi. Ducimus maiores est perferendis fuga sit corrupti. Repudiandae debitis soluta ipsam minima non esse.',
        customerName: 'Kristy_Leuschke43',
        purchaseDate: '2019-09-01T18:30:48.624Z',
        productId: 10,
        helpful: true,
        recommend: false,
        __v: 0,
      },
    ];
    const wrapper = shallow(<Reviews reviews={mokReviews} />);
    expect(wrapper.exists()).toBe(true);
  });
});
