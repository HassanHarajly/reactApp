import {callDogFactsApi} from "./CallDogApi"
describe('suite name', () => {
    it('return dog facts', async() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(Promise.resolve({
                "facts": [
                    "Basset Hounds cannot swim."
                ],
                "success": true
            }))
        })
        await expect(callDogFactsApi()).resolves.toEqual(["Basset Hounds cannot swim."]);
    });
});