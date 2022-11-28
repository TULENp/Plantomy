import { ConfigProvider, Radio} from 'antd'
import React, { useState } from 'react'
import { TPollOption} from '../../types';

//* Function of this component:
//*
//* Display poll question option
//*
export function PollOption({ title, value, description }: TPollOption) {
    
    return (
        <>
            <div className="wrapper_poll_option">
                <Radio.Button className='poll_option' value={value} >
                    <div className='title_circle'>
                        {/* <img className='img_circle' src='src\Assets\circleWhite.png' width='30' height='30'/> */}
                        <div className='img_circle'/>
                    <h1>{title}</h1>
                        </div>
                    <h2>{description}</h2>
                </Radio.Button>
            </div>
            
        </>
    )
}
