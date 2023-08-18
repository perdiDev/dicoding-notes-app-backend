const ExportNotesPayloadSchema = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const ValidatorExports = {
  validateExportNotesPayload: (payload) => {
    const validationResult = ExportNotesPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ValidatorExports;
