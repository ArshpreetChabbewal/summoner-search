export const summonerData = (summonerData = null, action) => {
    switch (action.type) {
        case 'SUMMONER_DATA':
            return action.payload;
        default:
            return summonerData;
    }
}