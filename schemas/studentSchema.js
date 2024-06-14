import z from 'zod';

const studentSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required'
  }),
  surname: z.string({
    invalid_type_error: 'Surname must be a string',
    required_error: 'Surname is required'
  }),
  unique_code: z.string({
    invalid_type_error: 'Unique code must be a string',
    required_error: 'Unique code is required'
  }).length(9, {
    message: 'Unique code must be 9 characters long'
  }),
});

function validateStudent(data) {
  return studentSchema.safeParse(data);
}

export default validateStudent;
