import request from 'supertest'


const baseUrl = 'https://jsonplaceholder.typicode.com/'

describe('todos endpoint', () => {
    it('should return 200', async () => {
        const response = await request(baseUrl).get('todos/1')
        expect(response.statusCode).toBe(200)
        console.log(response.body)
        expect(response.body).toMatchSnapshot(
            {
                userId: expect.any(Number),
                id: expect.any(Number),
                completed: expect.any(Boolean)
            }
        )
    })
    
})
