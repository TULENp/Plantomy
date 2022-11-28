import { Progress } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PollQuestion } from '../../components/PollQuestion'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CharsReducer, CharsSlice } from '../../store/reducers/CharsSlice';
import { TPollQuestion, TChars } from '../../types'
import { questions } from '../../zDataExamples/PollQuestions';

//* Function of this component:
//*
//* Display poll component and tools to interact with it 
//* like next, prev buttons and progress bar
//*
export function PollPage(): JSX.Element {

    const { cost, fertilization, humidity, lighting, preferences, size, temperature, watering } = useAppSelector(state => state.CharsReducer);

    
    const countMax = questions.length - 6; // max number of questions 
    const [questionCounter, setQuestionCounter] = useState<number>(0);
    const dispatch = useAppDispatch();
    // state of plant characteristics  
    const [chars, setChars] = useState<TChars>(
        {
            watering: 1,
            lighting: 1,
            temperature: 1,
            humidity: 1,
            fertilization: 1,
            size: 1,
            preferences: 1,
            cost: 1
        })

    function toNextQuestion() {
        if (questionCounter < countMax) {
            setQuestionCounter(prev => prev + 1)
        }
        else {
            dispatch(CharsSlice.actions.changeChars(chars));
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
            <Progress percent={questionCounter / countMax * 100} showInfo={false} />
            <button onClick={toPrevQuestion}>Назад</button>
            <button onClick={toNextQuestion}>
                {(questionCounter !== countMax)
                    ? "Далее"
                    : <Link to={"/pollResult"}>К результатам</Link>
                }
            </button>
        </>
    )
}
