const Joi = require('joi');

const ExportNotesPayloadSchema = Joi.object({
  emailTarget: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportNotesPayloadSchema;
