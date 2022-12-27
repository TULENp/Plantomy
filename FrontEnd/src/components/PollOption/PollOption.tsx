import { ConfigProvider, Radio } from 'antd';
import { TPollOption } from '../../types';

//* Function of this component:
//*
//* Display poll question option
//*
export function PollOption({ questionCounter, option }: { questionCounter: number, option: TPollOption }) {
    const { title, description, value } = option
    // const [isActive,setIsActive] = useState(false);
    // const isActive = React.useRef(false);
    // if(isActive.current) {
    //     console.log(isActive.current);
    // }


    return (
        <>
            <div className={questionCounter === 6 ? "wrapper_poll_option question7" : "wrapper_poll_option"} >
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Montserrat',
                            colorPrimary: '#F19173'
                        },
                    }}>
                    <Radio.Button className='poll_option' value={value}>
                        <div className='title_circle'>
                            {/* <img className='img_circle' src='circleWhite.png' width='30' height='30'/> */}
                            {/* <div className='img_circle'/> */}
                            <h1>{title}</h1>
                        </div>
                        <h2>{description}</h2>
                    </Radio.Button>
                </ConfigProvider>
            </div>

        </>
    )
}
