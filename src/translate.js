// function that translates code inputText from inputLang to outputLang
async function translate(inputLang, outputLang, inputText) {
    // OpenAI initialization
    const { Configuration, OpenAIAPI, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // OpenAI Parameters
    const max_tokens = 256;
    
    const top_p = 1;
    const frequency_penalty = 0;
    const presence_penalty = 0;

    var model = "";
    var prompt = "";
    var temperature = 0;

    if (outputLang === "English") {
        model = "code-davinci-002";

        if (inputLang === "Python" || inputLang === "JavaScript") {
            prompt = `# ${inputLang}\n${inputText}\n\n# Explanation of what the code does:\n\n#`;
        } else if (inputLang === "SQL") {
            prompt = `${inputText}\n\nThe above ${inputLang} command`
        } else if (inputLang === "English") {
            temperature = 0.5;
            model = "text-davinci-002";
            prompt = inputText;
        } else {
            prompt = `// ${inputLang}\n${inputText}\n\n// Explanation of what the code does:\n\n//`;
        }
    } else if (inputLang === "English") {
        if (outputLang === "SQL") {
            model = "text-davinci-002";
            prompt = `Create a ${outputLang} request that ${inputText}:\n\n`;
        } else if (outputLang === "Python" || outputLang === "JavaScript") {
            model = "code-davinci-002";
            prompt = `# A ${outputLang} function that ${inputText}:\n\n`;
        } else {
            model = "code-davinci-002";
            prompt = `// A ${outputLang} function that ${inputText}:\n\n`;
        }
    } else {
        model = "code-davinci-002";

        if (inputLang === "Python" || inputLang === "JavaScript") {
            prompt = `# ${inputLang} to ${outputLang}:\n${inputLang}\n\n${inputText}\n\n${outputLang}:\n`;
        } else {
            prompt = `// ${inputLang} to ${outputLang}:\n${inputLang}\n\n${inputText}\n\n${outputLang}:\n`;
        }
    }

    console.log(prompt);

    // call to OpenAI API
    const response = await openai.createCompletion({
        model: model,
        prompt: prompt,
        max_tokens: max_tokens,
        temperature: temperature,
        top_p: top_p,
        frequency_penalty: frequency_penalty,
        presence_penalty: presence_penalty,
    });


    return response.data.choices[0].text;
}

export default translate;