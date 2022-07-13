require('dotenv').config({ path: '../.env' });

async function test() {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "Say this is a test",
        max_tokens: 6,
        temperature: 0,
    });

    console.log(response.data.choices[0].text)
}

test();
