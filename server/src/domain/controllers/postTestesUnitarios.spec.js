const postsController = require('./postsController')

const mockResponse = () => {
    const res = {
        status: undefined,
    };
    res.status = (status) => { res.status = status; return res };
    res.json = () => res;
    return res;
};

test('Deve cadastrar um post', async () => {
    const req = {
        body: {
            userName: 'teste',
            coment: 'comentario teste'
        }
    }

    const res = mockResponse();

    await postsController.createPost(req, res)

    return expect(res.status).toBe(201)
})