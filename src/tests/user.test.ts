import { User } from "@models/user";

test('it should be ok', () => {
    const user = new User();
    user.nome = 'Test Name';

    expect(user.nome).toEqual('Test Name');
})