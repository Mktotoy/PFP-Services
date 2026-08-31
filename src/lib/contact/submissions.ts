import { Pool } from 'pg';

type SubmissionStatus =
    | 'received'
    | 'spam'
    | 'invalid'
    | 'rate_limited'
    | 'sending'
    | 'sent'
    | 'failed';

type SubmissionUpdate = {
    status: SubmissionStatus;
    reason?: string;
    provider?: string;
    errorMessage?: string;
    sentAt?: Date;
};

type SubmissionInput = {
    body: Record<string, unknown>;
    ip: string;
    userAgent: string | null;
};

const globalForDatabase = globalThis as typeof globalThis & {
    contactSubmissionPool?: Pool;
};

function getPool(): Pool {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL est absente.');
    }

    if (!globalForDatabase.contactSubmissionPool) {
        globalForDatabase.contactSubmissionPool = new Pool({
            connectionString: process.env.DATABASE_URL,
            max: 3,
            connectionTimeoutMillis: 3_000,
            idleTimeoutMillis: 10_000,
        });
    }

    return globalForDatabase.contactSubmissionPool;
}

function storedText(value: unknown, maxLength: number): string | null {
    if (typeof value !== 'string') return null;
    return value.slice(0, maxLength);
}

export async function createContactSubmission(input: SubmissionInput): Promise<string> {
    const result = await getPool().query<{ id: string }>(
        `INSERT INTO contact_submissions
            (name, email, phone, message, company, ip_address, user_agent)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id`,
        [
            storedText(input.body.name, 500),
            storedText(input.body.email, 500),
            storedText(input.body.phone, 200),
            storedText(input.body.message, 20_000),
            storedText(input.body.company, 500),
            input.ip.slice(0, 200),
            input.userAgent?.slice(0, 1_000) ?? null,
        ],
    );

    return result.rows[0].id;
}

export async function updateContactSubmission(
    id: string,
    update: SubmissionUpdate,
): Promise<void> {
    await getPool().query(
        `UPDATE contact_submissions
         SET status = $1,
             reason = COALESCE($2, reason),
             provider = COALESCE($3, provider),
             error_message = COALESCE($4, error_message),
             sent_at = COALESCE($5, sent_at)
         WHERE id = $6`,
        [
            update.status,
            update.reason ?? null,
            update.provider ?? null,
            update.errorMessage?.slice(0, 2_000) ?? null,
            update.sentAt ?? null,
            id,
        ],
    );
}

export type { SubmissionStatus, SubmissionUpdate, SubmissionInput };