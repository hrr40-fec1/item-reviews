/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import * as Controller from '../client/src/controllers/index';
import App from '../client/src/components/App';

Controller.default = jest.fn();

describe('<App /> rendering', () => {
  test('it properly renders', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<App /> lifecycle method ', () => {
  beforeEach(() => {
    // Before each test we want to reset the state of the mocked component, so each test can
    // mock the component in the way it needs to be mocked. Should you have any default mock
    // needed that is required for every test, this is the place to do this.
    Controller.default.mockClear();
  });
  // In this test we will mock the DataRetriever in a way that it will call the callback method
  // we pass to it, and call it with "fakeTitle" as argument. This simulates that the API has
  // given us a result with { title: "fakeTitle" } in it. We make the test asynchronous, since
  // we want to be able to use await in the code to wait for a promise to resolve.
  it('Should show the data, When retrieved', async () => {
    // We are going to set up the mock value that DataRetriever resolves to, we tell it when the
    // code uses DataRetiever instead of actually calling it and fetching data from the API. It
    // instantly resolves to a value 'fakeTitle'.
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
    Controller.default.mockResolvedValue({
      reviews: mokReviews,
      summary: mokSummary,
    });
    const wrapper = shallow(<App />);
    // We shallow mount the compont through enzyme. This renders the component with a fake DOM
    // making us able to see the result that would be rendered. We specifically use the shallow
    // mount in this case. Not only is this the prefered render for unit tests, since it isolates
    // the component completly when rendering, we also use it because we don't want to trigger
    // the lifecycle methods. Since our lifecycle method handles code asynchronously, we want
    // to be able to wait for that code to complete, this requires manually calling this method.

    // We need to get the actual instance from the virtual DOM, so we can call any method that
    // is available on it.
    const instance = wrapper.instance();
    // Now we call the componentDidMount event, telling the component that it mounted. But because
    // we called it manually we are able to await for it to resolve. This makes sure the promise
    // for the method is completed before going on with the code.
    await instance.componentDidMount();
    // Since we fake a result coming back from the retriever, we expect the text to actually show
    // the word "fakeTitle" in the component.
    expect(wrapper.text()).toContain({
      reviews: mokReviews,
      summary: mokSummary,
    });
  });

  // In this test we will mock the DataRetriever in a way that it will not call the callback
  // method we pass to it. This simulates tha API not being finished or returning an error.
  // We make the test asynchronous, since we want to be able to use await in the code to wait
  // for a promise to resolve.
  it('Should show not available, When data has not been retrieved', async () => {
    // We are going to set up the mock value that DataRetriever resolves to, we tell it when the
    // code uses DataRetiever instead of actually calling it and fetching data from the API. It
    // instantly resolves to an undefined value, so we can handle nothing coming back from the API.
    Controller.default.mockResolvedValue(undefined);

    // We are shallow mounting the component again, using its instance, calling the
    // componentDidMount and waiting for it to resolve. Only this time it will resolve to a value
    // of undefined.
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    await instance.componentDidMount();
    // Since we fake no result coming back from the retriever we don't expect any title appearing
    // on the page, but instead we expect to see the text "not available"
    expect(wrapper.text()).toContain('not available');
  });
});
