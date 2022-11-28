import { Radio, RadioChangeEvent } from 'antd'
import React, { useEffect, useState } from 'react'
import { TPollOption, TPollQuestion, TChars } from '../../types';
import { PollOption } from '../PollOption';

//* Function of this component:
//*
//* Display poll question and its options
//* Change chars state depending on selected radio
//*
export function PollQuestion({ question, setChars }: { question: TPollQuestion, setChars: React.Dispatch<React.SetStateAction<TChars>> }) {
    const { title, value, options } = question;
    const [selectedValue, setSelectedValue] = useState<number>(-1)

    // reset selected radio
    useEffect(() => {
        setSelectedValue(-1);
    }, [value])

    //Change the value of a specific(depending on question) characteristic to the one selected by the radio button
    //FIXME setSelectedValue() and useEffect() looks like dirty hack 
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
        <section>
            <h1>{title}</h1>
            <Radio.Group onChange={onChange} value={selectedValue}>
                {pollOptions}
            </Radio.Group>
        </section>
    )
}
