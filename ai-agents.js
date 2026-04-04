const OpenAI = require("openai")
require('dotenv').config()

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
})

async function main() {
  const completion = await openai.chat.completions.create({
    model: "stepfun/step-3.5-flash:free",
    messages: [
      { role: "user", content: "Say this is a test" }
    ],
  })

  console.log(completion.choices[0].message)
}
const analyzeGoal = async() => {
    const goalText = "Learn python";
    const durationDays = "7";
    const promt = `User wants to achieve the goal of ${goalText} in ${durationDays} days. Analyze the goal and break it down into smaller, manageable tasks that can be completed within the given timeframe. Provide a step-by-step plan to achieve the goal, including specific actions and milestones.`

    try{
        const completion = await openai.chat.completions.create({
        model: "stepfun/step-3.5-flash:free",
        messages: [
      { role: "user", content: promt }
        ],
    })
    console.log(completion.choices[0].message)
    }
    catch(error){
        console.log(error);
    }
}

analyzeGoal()