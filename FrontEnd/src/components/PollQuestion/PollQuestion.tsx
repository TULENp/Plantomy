import { Radio, RadioChangeEvent } from 'antd'
import React from 'react'
import { TPollOption, TPollQuestion, TChars } from '../../types';
import { PollOption } from '../PollOption';

//* Function of this component:
//*
//* Display poll question and its options
//* Change chars state depending on selected radio
//*
export function PollQuestion({ question, setChars }: { question: TPollQuestion, setChars: React.Dispatch<React.SetStateAction<TChars>> }) {
    const { title, value, options } = question;

    //Change the value of a specific(depending on question) characteristic to the one selected by the radio button
    //FIXME display prev selected option and don't get value if click pn this option
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
        <section>
            <h1>{title}</h1>
            <Radio.Group onChange={onChange}>
                {pollOptions}
            </Radio.Group>
        </section>
    )
}
