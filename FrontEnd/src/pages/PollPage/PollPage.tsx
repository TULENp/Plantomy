import { Progress } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PollQuestion } from '../../components/PollQuestion'
import { TPollQuestion, TChars } from '../../types'
import './PollPage.scss'
//* Function of this component:
//*
//* Display poll component and tools to interact with it 
//* like next, prev buttons and progress bar
//*
export function PollPage(): JSX.Element {

    const countMax = 1; // max number of questions 
    const [questionCounter, setQuestionCounter] = useState<number>(0);

    // state of plant characteristics  
    const [chars, setChars] = useState<TChars>(
        {
            watering: 0,
            lighting: 0,
            temperature: 0,
            humidity: 0,
            fertilization: 0,
            cost: 0,
            size: 0,
            preferences: 0
        })

    const navigate = useNavigate();

    //* test. Get this from db
    const questions: TPollQuestion[] = [
        {
            title: 'Как часто вы сможете поливать растение?',
            value: 'watering',
            //! check the value possibly future bug
            options: [
                {
                    title: 'Редко ',
                    value: 0,
                    description: 'раз в месяц - раз в неделю'
                },
                {
                    title: 'Периодически ',
                    value: 1,
                    description: 'Раз в неделю - пару раз в неделю'
                },
                {
                    title: 'Часто',
                    value: 2,
                    description: 'несколько раз в неделю - раз в день'
                },
                {
                    title: 'Не знаю',
                    value: 3,
                    description: ''
                }
            ]
        },
        {
            title: 'Как много света попадает в вашу квартиру?',
            value: 'lighting',
            options: [
                {
                    title: 'Мало',
                    value: 0,
                    description: 'Окна выходят на север или что-то (например здание) мешает свету попадать в вашу квартиру'
                },
                {
                    title: 'Умеренно  ',
                    value: 1,
                    description: 'Окна выходят на запад или восток. Весь день окна освещаются непрямыми лучами света'
                },
                {
                    title: 'Много',
                    value: 2,
                    description: 'Окна выходят на юг. Весь день в квартиру попадают прямые лучами света'
                },
                {
                    title: 'Не знаю',
                    value: 3,
                    description: ''
                }
            ]
        },
    ]

    function toNextQuestion() {
        if (questionCounter < countMax) {
            setQuestionCounter(prev => prev + 1)
        }
        else {
            //render poll result
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
            <div className='wrapper_poll'>
                <PollQuestion question={questions[questionCounter]} setChars={setChars} />
                 <div className='btns_progress_bar_img'>
                    <img src='src\Assets\1question.png' width={209} className='img_question' alt='1question.png'/>
                    <div>
                        <label className='btn_prev' onClick={toPrevQuestion}><img className='img_arrow_prev' src="src\Assets\arrowPrev.png"/>Назад</label>
                        <label className='btn_next' onClick={toNextQuestion}>Далее<img className='img_arrow_next' src="src\Assets\arrowNext.png"/></label>
                    </div>
                    <Progress strokeColor={'#7ABDBD'} width={160} percent={questionCounter*10} />
                </div>         
            </div>
        </>
    )
}
