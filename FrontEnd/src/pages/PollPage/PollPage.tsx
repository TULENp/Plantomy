import { Progress } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PollQuestion } from '../../components/PollQuestion'
import { TPollQuestion, TChars } from '../../types'
import { questions } from '../../zDataExamples/PollQuestions';

//* Function of this component:
//*
//* Display poll component and tools to interact with it 
//* like next, prev buttons and progress bar
//*
export function PollPage(): JSX.Element {

    const countMax = questions.length - 1; // max number of questions 
    const [questionCounter, setQuestionCounter] = useState<number>(0);

    // state of plant characteristics  
    const [chars, setChars] = useState<TChars>(
        {
            watering: 0,
            lighting: 0,
            temperature: 0,
            humidity: 0,
            fertilization: 0,
            size: 0,
            preferences: 0,
            cost: 0
        })

    const navigate = useNavigate();

    //* test. Get this from db


    function toNextQuestion() {
        if (questionCounter < countMax) {
            setQuestionCounter(prev => prev + 1)
        }
        else {
            //TODO render poll result
            navigate('/pollResult');
        }
        console.log(chars);

    }

    function toPrevQuestion() {
        if (questionCounter > 0) {
            setQuestionCounter(prev => prev - 1)
        }
    }

    return (
        <>
            <PollQuestion question={questions[questionCounter]} setChars={setChars} />
            {/* Example progressbar */}
            <Progress percent={questionCounter / questions.length * 100} />
            <button onClick={toPrevQuestion}>Назад</button>
            <button onClick={toNextQuestion}>Далее</button>
        </>
    )
}
