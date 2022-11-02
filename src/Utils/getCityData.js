export const getCityData=({ cityNames, temperatures }) => {
    const cityData = {}
    cityNames.forEach(city => {
        cityData[city] = temperatures.dates.map((date, i) => ({
            date: new Date(date),
            mean: temperatures[city].temperatures.mean[i],
            min: temperatures[city].temperatures.min[i],
            max: temperatures[city].temperatures.max[i]
        }))

    })
    return cityData
}