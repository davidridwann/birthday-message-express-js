require('module-alias/register');

const schedule = require("node-schedule");
const constants = require('../utils/constants.js');
const { sendMessage, doGetBirthDayUser } = require('./scheduler.js');

const runScheduler = async () => {
    // get birthday user 1 minute before 9 AM
    const getBirthDayUser = schedule.scheduleJob('* * * * *', () => {
        console.log('SCHEDULER: start get birthday user!')
        doGetBirthDayUser()
        console.log('SCHEDULER: get birthday user finished!')
    })

    // send birthday message every minute
    const sendPendingMessage = schedule.scheduleJob('* * * * *', () => {
        console.log('SCHEDULER: start send pending status!')
        sendMessage('birthday', constants.SCHEDULER.STATUS.PENDING);
        console.log('SCHEDULER: send birthday pending message finished!')
    })

    // send failed birthday message every minute
    const sendFailedMessage = schedule.scheduleJob('* * * * *', () => {
        console.log('SCHEDULER: start send failed status!')
        sendMessage('birthday', constants.SCHEDULER.STATUS.FAILED);
        console.log('SCHEDULER: resend birthday failed message finished!')
    })
}

module.exports = {
    runScheduler
};