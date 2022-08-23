const {sequelize} = require('../models');
const JobApplication = require('../models/jobApplication')(sequelize);

/**
 * 요구사항 6. 사용자가 채용공고에 지원하기
 */
exports.enrollApplicant = async (info) => {
  const jobApplication = {
    opening_id: info.opening_id,
    applicant_id: info.applicant_id,
  };

  await JobApplication.create(jobApplication);
};