import { Radio} from 'antd'
import React from 'react'
import { TPollOption} from '../../types';

//* Function of this component:
//*
//* Display poll question option
//*
export function PollOption({ title, value, description }: TPollOption) {

    return (
        <>
            <Radio.Button value={value} >
                <h1>{title}</h1>
                <h3>{description}</h3>
            </Radio.Button>
        </>
    )
}
