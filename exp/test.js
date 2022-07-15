const { HelpOutline } = require('@mui/icons-material');

require('dotenv').config({ path: '../.env' });

async function test() {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: "Translate the following Java function to Python: System.out.println(\"Hello, world!\");",
        max_tokens: 256,
        temperature: 0,
    });

    console.log(response.data.choices[0].text);
}

test();
