
import { Mastra } from '@mastra/core';
import { createLogger } from '@mastra/core/logger';
import CodeReviewAgent from './agents/code-review';
import { CloudflareDeployer } from '@mastra/deployer-cloudflare';

export const mastra = new Mastra({
    deployer: new CloudflareDeployer({
        scope: process.env.CLOUDFLARE_ACCOUNT_ID || '',
        projectName: 'mastra-cr-agent',
        workerNamespace: 'mastra',
        auth: {
            apiEmail: process.env.CLOUDFLARE_EMAIL ||  '',
            apiToken: process.env.CLOUDFLARE_API_TOKEN || ''
        }
    }),
    agents: { CodeReviewAgent },
    logger: createLogger({
        name: 'mastra',
    })
})