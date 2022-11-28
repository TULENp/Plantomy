import { Radio, RadioChangeEvent } from 'antd'
import React from 'react'
import { TPollOption, TPollQuestion, TChars } from '../../types';
import { PollOption } from '../PollOption';
import './PollQuestion.scss'
//* Function of this component:
//*
//* Display poll question and its options
//* Change chars state depending on selected radio
//*
export function PollQuestion({ question, setChars }: { question: TPollQuestion, setChars: React.Dispatch<React.SetStateAction<TChars>> }) {
    const { title, value, options } = question;

    //Change the value of a specific(depending on question) characteristic to the one selected by the radio button
    const onChange = (e: RadioChangeEvent) => {
        setChars(prev => {
            return {
                ...prev,
                [value]: e.target.value
            }
        });
    };

    const pollOptions: JSX.Element[] = options.map((option: TPollOption) => {
        return (
            <PollOption key={option.value} {...option} />
        )
    })
    return (
        <section className='section_poll'>
            <div className='static_poll_title'>
                <img src='src\Assets\iconPoll.png' width='53' height='53' alt='iconPoll.png'/>
                <div className='inner_static_poll_title'>
                    <h1>Опрос</h1>
                    <h2>Данный опрос поможет вам подобрать растения</h2>
                </div>
            </div>
            <h1 className='h1_title_poll'>{title}</h1>
            <div className='wrapper_poll_options'>
                <Radio.Group className='poll_question' onChange={onChange}>
                    {pollOptions}
                </Radio.Group>
            </div>
        </section>
    )
}
