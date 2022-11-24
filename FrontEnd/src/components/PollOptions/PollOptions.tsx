import { Radio, RadioChangeEvent } from 'antd'
import React from 'react'
import { TPollOption, TPollQuestion } from '../../types';

export function PollOptions({ question }: { question: TPollQuestion }) {

    const onChange = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
    };

    return (
        <section>
            <h1>{question.title}</h1>
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value={question.options[0].value}>{question.options[0].title}</Radio.Button>
                <Radio.Button value={question.options[1].value}>{question.options[1].title}</Radio.Button>
            </Radio.Group>
        </section>
    )
}
