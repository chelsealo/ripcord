import React from 'react';
import { shallow, mount, render } from 'enzyme';

import UserListRow from './UserListRow';

describe('UserListRow component tests', () => {
	it('should render basic component', () => {
		const props = {
			user: {},
			deleteUser: jest.fn()
		};
		const component = shallow(<UserListRow {...props} />);
		expect(component).toMatchSnapshot();
	});
});