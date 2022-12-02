import { Progress, Radio, RadioChangeEvent } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PollOption } from '../../components/PollOption';
import { TPollQuestion, TChars, TPollOption } from '../../types'
import { questions } from '../../zDataExamples/PollQuestions';
import './PollPage.scss'
import './PollQuestion.scss'

//* Function of this component:
//*
//* Display poll component and tools to interact with it 
//* like next, prev buttons and progress bar
//*
export function PollPage(): JSX.Element {

    const countMax = questions.length - 1; // max number of questions 
    const [questionCounter, setQuestionCounter] = useState<number>(0);
    const { title, value, options } = questions[questionCounter]; // current question 
    const [selectedValue, setSelectedValue] = useState<number>(-1) // value selected by radio
    const raw: string | null = localStorage.getItem('chars');
    const savedChars: TChars = raw ? JSON.parse(raw) : null;

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

    // reset selected radio
    useEffect(() => {
        setSelectedValue(-1);
    }, [value])

    function toNextQuestion() {
        if (questionCounter < countMax) {
            setQuestionCounter(prev => prev + 1)
        }
        else {
            localStorage.setItem('chars', JSON.stringify(chars));
        }
    }

    function toPrevQuestion() {
        if (questionCounter > 0) {
            setQuestionCounter(prev => prev - 1)
        }
    }

    //Change the value of a specific(depending on question) characteristic to the one selected by the radio button
    const onChange = (e: RadioChangeEvent) => {
        setChars(prev => {
            return {
                ...prev,
                [value]: e.target.value
            }
        });
        // change radio value to selected
        setSelectedValue(e.target.value);
    };

    const pollOptions: JSX.Element[] = options.map((option: TPollOption) => {
        return (
            <PollOption key={option.value} {...option} />
        )
    })
    return (
        <>
            <div className='wrapper_poll'>
                <section className='section_poll'>
                    <div className='static_poll_title'>
                        <img src='src\Assets\iconPoll.png' width='53' height='53' alt='iconPoll.png' />
                        <div className='inner_static_poll_title'>
                            <h1>Опрос</h1>
                            <h2>Данный опрос поможет вам подобрать растения</h2>
                        </div>
                    </div>
                    <h1 className='h1_title_poll'>{title}</h1>
                    <div className='wrapper_poll_options'>
                        <Radio.Group className='poll_question' onChange={onChange} value={selectedValue}>
                            {pollOptions}
                        </Radio.Group>
                    </div>
                </section>
                {/* Example progressbar */}
                <div className='btns_progress_bar_img'>
                    {savedChars && <Link to={"/pollResult"} className="last_result_poll">Результат последнего опроса</Link>}
                    <img src='src\Assets\1question.png' width={209} className='img_question' alt='1question.png' />
                    <div>
                        <label className='btn_prev' onClick={toPrevQuestion}><img className='img_arrow_prev' src="src\Assets\arrowPrev.png" />Назад</label>
                        <button onClick={toNextQuestion} className='btn_btn_next' disabled={selectedValue === -1}>
                            <label className='btn_next'>
                                {(questionCounter !== countMax)
                                    ? "Далее"
                                    : <Link to={"/pollResult"}>К результатам</Link>
                                }
                                <img className='img_arrow_next' src="src\Assets\arrowNext.png" /></label>
                        </button>
                    </div>
                    <Progress percent={questionCounter / countMax * 100} showInfo={false} strokeColor={'#7ABDBD'} width={160} />
                </div>
            </div>
        </>
    )
}
