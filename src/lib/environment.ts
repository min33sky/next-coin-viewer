import { z } from 'zod';

const Environment = z.object({
  EXCHANGE_RATE_API: z.string(),
});

export type Environment = z.infer<typeof Environment>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}
