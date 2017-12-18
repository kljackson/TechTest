import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import SearchResult from './SearchResult';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  title: 'Title',
  url: 'URL',
  description: 'Description',
};

it('renders the title', () => {
  const component = shallow(<SearchResult {...props} />);
  expect(component.find('a').text()).toEqual('Title');
});

it('renders the url', () => {
  const component = shallow(<SearchResult {...props} />);
  expect(component.find('a').props().href).toEqual('URL');
});

it('renders the description', () => {
  const component = shallow(<SearchResult {...props} />);
  expect(component.find('p').text()).toEqual('Description');
});
