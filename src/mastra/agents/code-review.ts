import { deepseek } from '@ai-sdk/deepseek'
import { Agent } from '@mastra/core'
export default new Agent({
    name: 'Code Review Agent',
    instructions: `
    You are a code reviewer. Your task is to review the code and give feedback to the developer.
       
    use the CodeReviewTool to review the code.
    `,
    model: deepseek('deepseek-chat'),
    tools: { }
})