export const getWeatherReducer = (state:any) => state

describe('getWeather', () => {
    test('work with empty state', () => {
        expect(getWeatherReducer({
            weather: [],
            loading: false,
        })).toEqual({
            weather: [],
            loading: false,
        })
    })

    test('work with filled state', () => {
        expect(getWeatherReducer({
            weather: [
                {
                    id: 1,
                    name: "test"
                }
            ],
            loading: true,
        })).toEqual({
            weather: [
                {
                    id: 1,
                    name: "test"
                }
            ],
            loading: true,
        })
    })
})
