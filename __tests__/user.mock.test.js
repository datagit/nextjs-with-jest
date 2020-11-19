// users.test.js
import axios from 'axios';
import Users from '../utility/user';
import { callApiLogin } from '../utility/common';


jest.mock('axios');
test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    //axios.get.mockResolvedValue(resp);
    axios.get.mockImplementation(() => Promise.resolve(resp))

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users));
});

test('mock override function', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    // mock function
    const callApiLogin = jest.fn((params, headers) => {
        return Promise.resolve(resp);
    });

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return callApiLogin().then(resp => expect(resp.data).toEqual(users));
});