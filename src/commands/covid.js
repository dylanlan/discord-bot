const axios = require('axios');
const moment = require('moment');

module.exports = {
    name: '!covid',
    description: 'lists current covid cases in Alberta',
    async execute(message) {
        const format = 'YYYY-MM-DD HH:mm:ss';
        const currentDay = moment();
        const previousDay = moment().subtract(1, 'days');
        const minDate = previousDay.format(format);
        const maxDate = currentDay.format(format);

        const dataUrl = `https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/province_daily_totals/FeatureServer/0/query?where=Province%20%3D%20'ALBERTA'%20AND%20SummaryDate%20%3E%3D%20TIMESTAMP%20'${minDate}'%20AND%20SummaryDate%20%3C%3D%20TIMESTAMP%20'${maxDate}'&outFields=Province,SummaryDate,TotalCases,TotalDeaths,TotalActive,DailyTotals&returnGeometry=false&outSR=4326&f=json`;

        const result = await axios.get(dataUrl);
        console.log({ data: result.data.features[0].attributes });
        if (result.data.features && result.data.features[0] && result.data.features[0].attributes) {
            const {
                TotalCases, TotalDeaths, TotalActive, DailyTotals,
            } = result.data.features[0].attributes;
            message.channel.send(`Covid cases in Alberta as of ${maxDate}:\nDaily New: ${DailyTotals}\nTotal Active: ${TotalActive}\nTotal Cases: ${TotalCases}\nTotal Deaths: ${TotalDeaths}`);
        } else {
            message.channel.send('Woops! Couldn\'t figure out current covid data');
        }
    },
};
