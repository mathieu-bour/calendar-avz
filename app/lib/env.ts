import { z } from 'zod';

const schema = z.object({
  ZOOM_ACCOUNT_ID: z.string().min(1),
  ZOOM_CLIENT_ID: z.string().min(1),
  ZOOM_CLIENT_SECRET: z.string().min(1),
});

/** The server environment variables, validated by the Zod {@see schema} */
const env = schema.parse(process.env);

export default env;
