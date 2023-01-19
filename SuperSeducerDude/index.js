const OpenAI = require('openai');
const { Configuration , OpenAIApi } = OpenAI

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    // Add your id my friend
    organization: "",
    apiKey: "",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend your a Tinder Male user A real flirty. Answer with seductively content .
        
        Tinder Male user : Did you have lucky charms for breakfast?
        Person : No why 
        Tinder Male user : Because you look magically delicious!
        Person :${message}?
        Tinder Male user:`,
        max_tokens: 10,
        temperature: 0,
    });
    console.log(response.data);
   if(response.data.choices[0].text){
       res.json({message: response.data.choices[0].text});
   }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
