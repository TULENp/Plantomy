import { Progress } from 'antd';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PollOptions } from '../../components/PollOptions'
import { TPollQuestion } from '../../types'

export function PollPage(): JSX.Element {

    const countMax = 1;
    const [pollCounter, setPollCounter] = useState<number>(0);
    const navigate = useNavigate();
    const questions: TPollQuestion[] = [
        {
            title: 'watering',
            value: 'watering',
            options: [
                {
                    title: '0',
                    value: 0,
                    description: ''
                },
                {
                    title: '1',
                    value: 1,
                    description: ''
                }
            ]
        },
        {
            title: 'lighting',
            value: 'lighting',
            options: [
                {
                    title: '0',
                    value: 0,
                    description: ''
                },
                {
                    title: '1',
                    value: 1,
                    description: ''
                }
            ]
        },
    ]

    function countNext() {
        if (pollCounter < countMax) {
            setPollCounter(prev => prev + 1)
        }
        else {
            //render poll result
            navigate('/pollResult');
        }
    }
    function countPrev() {
        if (pollCounter > 0) {
            setPollCounter(prev => prev - 1)
        }
    }

    return (
        <>
            <div>PollPage</div>
            <PollOptions question={questions[pollCounter]} />
            {/* Example progressbar */}
            <Progress percent={pollCounter} />
            <button onClick={countPrev}>Назад</button>
            <button onClick={countNext}>Далее</button>
        </>
    )
}
