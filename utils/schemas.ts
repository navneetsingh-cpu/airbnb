import * as z from 'zod';
// import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
});