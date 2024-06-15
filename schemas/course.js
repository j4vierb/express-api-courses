import z from 'zod';

const courseSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required'
  })
});

function validateCourse(data) {
  return courseSchema.safeParse(data);
}

function validatePartialCourse(data) {
  return courseSchema.partial().safeParse(data);
}

export default { validateCourse, validatePartialCourse };
