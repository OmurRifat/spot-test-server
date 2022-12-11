const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const quizes = require('./Data/quiz.json')
const quizQuestion = require('./Data/quizQuestion.json')

app.get('/quiz', (req, res) => {
    res.send(quizes);
})
app.get('/quiz/:id', (req, res) => {
    const id = req.params.id;
    const catagoriesQuiz = quizQuestion.data;
    const desiredQuiz = catagoriesQuiz.find(quiz => quiz.id == id);
    const quizData = {
        "status": true,
        "data": desiredQuiz
    }
    res.send(quizData)
})

app.listen(port, () => {
    console.log("Running on port: ", port)
})