const { Job } = require('@src/models');
const { responseError, responseSuccess } = require("@src/utils/output")

const getJobs = async (req, res) => {
    try {
    const job = await Job.findAll()

    return responseSuccess(res, job);
    } catch (error) {
    return responseError(res, error);
    }
}

module.exports = {
    getJobs,
};