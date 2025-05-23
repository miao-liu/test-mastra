import { createTool } from "@mastra/core";
import { z } from "zod";
export default createTool({
    id: "code-review",
    description: "代码片段审查",
    inputSchema: z.object({
        code: z.string()
    }),
    outputSchema: z.object({
        result: z.string()
    }),
    execute: async (input) => {
        return {
            result: "代码审查成功"
        }
    }
})