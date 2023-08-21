const InvariantError = require('../../exceptions/InvariantError');
const ImageHeadersSchema = require('./scema');

const UploadsValidator = {
  validateImageHeaders: (headers) => {
    const validationResult = ImageHeadersSchema.validate(headers);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error);
    }
  },
};

module.exports = UploadsValidator;
