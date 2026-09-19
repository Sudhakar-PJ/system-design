import dotenv from "dotenv";
import path from 'path';
import { z } from "zod";

dotenv.config({ path: path.resolve(process.cwd(), `.env`) })

/**
 * Zod Environment Variable Schema
 * Defines strict types, string-to-number transforms, defaults, and boundary constraints.
 */

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'staging', 'production'])
    .default('development'),
  PORT: z
    .string()
    .default('3000')
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().min(1024).max(65535)),
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
  API_PREFIX: z.string().default('/api/v1'),
  DATABASE_URL: z
    .string()
    .url()
    .optional()
    .describe('PostgreSQL Connection URL (Required in Stage 0C+)'),
  REDIS_URL: z
    .string()
    .url()
    .optional()
    .describe('Redis Connection URL (Required in Level 1+)'),
});


export type EnvConfig = z.infer<typeof envSchema>;

function validateAndLoadConfig(): Readonly<EnvConfig> {
    const result = envSchema.safeParse(process.env);
    if (!result.success) {
        console.error('❌ FATAL: Invalid application configuration / environment variables:');
        console.error(JSON.stringify(result.error.format(), null, 2));
        process.exit(1);
    }
    return Object.freeze(result.data);
}

export const config: Readonly<EnvConfig> = validateAndLoadConfig()
