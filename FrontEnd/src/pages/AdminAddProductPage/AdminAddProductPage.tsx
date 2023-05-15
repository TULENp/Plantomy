import { useState } from 'react';
import { LazyLoading } from '../../components/LazyLoading';
import { TChars, TProduct } from '../../types';
import './AdminAddProductPage.scss';
import { questions } from '../../PollData/PollQuestions';
import { Radio } from 'antd';

const productInit: TProduct = {
    id: 0,
    type: 'plant',
    category: '',
    size: 'S',
    image: '',
    title: '',
    price: 0,
    date: '',
    count: 0,
    cartCount: 0
}

const charsInit: TChars = {
    watering: 1,
    lighting: 1,
    temperature: 1,
    humidity: 0,
    fertilization: 1,
    size: 1,
    preferences: 0,
    cost: 0
}

const productInfoInit = {
    info: '',
    watering: '',
    lighting: '',
    temperature: '',
    humidity: '',
    fertilization: '',
    size: '',
    preferences: '',
    cost: ''
}

export function AdminAddProductPage(): JSX.Element {

    const [product, setProduct] = useState<TProduct>(productInit);
    const [chars, setChars] = useState<TChars>(charsInit);
    const [productInfo, setProductInfo] = useState(productInfoInit);
    const [isLoading, setIsLoading] = useState(false);
    // const [type, setType] = useState(0);
    const handleProductInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    }

    const handleCharsInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setChars(prevState => ({ ...prevState, [name]: value }));
    }

    const handleInfoInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductInfo(prevState => ({ ...prevState, [name]: value }));
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64String = reader.result?.toString();
                setProduct(prevState => ({ ...prevState, image: base64String || "" }));
            };
        }
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    const charsItems1: JSX.Element[] = questions.slice(0, -1).map((question, index) => {
        const { id, image, info, options, title, value, name } = question;
        return (
            <>
                {index <=3 &&
                    <section className='chars_select'>
                        <h1>{name}</h1>
                        {/* @ts-ignore */}
                        <select id={value} name={value} value={chars[value]} onChange={handleCharsInputChange} required>
                            {options.map(option => {
                                return (
                                    <option value={option.value}>{option.title}</option>
                                )
                            })}
                        </select>
                    </section >
                }
            </>
                
            
            
        )
    })

    const charsItems2: JSX.Element[] = questions.slice(0, -1).map((question, index) => {
        const { id, image, info, options, title, value, name } = question;
        return (
            <>
                {index <=3 &&
                    <section className='chars_select'>
                        <h1>{name}</h1>
                        {/* @ts-ignore */}
                        <select id={value} name={value} value={chars[value]} onChange={handleCharsInputChange} required>
                            {options.map(option => {
                                return (
                                    <option value={option.value}>{option.title}</option>
                                )
                            })}
                        </select>
                    </section >
                }
            </>
                
            
            
        )
    })

    return (
        <article>
            {isLoading
                ?
                <LazyLoading type='spin' />
                :
                <form onSubmit={handleFormSubmit}>
                    <section className='productCard'>
                        <div className='cont_main_info_plant'>
                            <div className='wrap_img_product'>
                                {product.image
                                    ?
                                    <img className='img_product' src={product.image} alt={product.title} />
                                    :
                                    <input className='addImage' type="file" id="image" onChange={handleImageUpload} />
                                }
                            </div>
                            <div className='cont_product_info'>
                                <input className='admin_title' type="text" name='title' placeholder='Введите название' value={product.title} onChange={handleProductInputChange} required />
                                <textarea id="description" name="description" placeholder='Введите описание' value={product.description} onChange={handleProductInputChange} required />
                                <div className='cont_price_pot admin_text_input'>
                                    <h3 className='admin_h1'>Цена: </h3>
                                    <input className='admin_input' type="number" id="price" name="price" min="0" value={product.price} onChange={handleProductInputChange} required />
                                    <h3 className='admin_h1'>₽</h3>
                                </div>
                                <div className='cont_price_pot admin_text_input'>
                                    <h3 className='admin_h1'>Кол-во товара: </h3>
                                    <input className='admin_input' type="number" id="count" name="count" min="0" value={product.count} onChange={handleProductInputChange} required />
                                </div>
                                <Radio.Group style={{marginTop:15}} onChange={(e) => setProduct(prevState => ({ ...prevState, type: e.target.value }))} defaultValue={'plant'}>
                                    <Radio.Button value='plant' className='radio_plant_filter'>
                                        {/* <img className='img_plant' src="/plant.svg" /> */}
                                        Растения
                                    </Radio.Button>
                                    <Radio.Button value='cachepot' className='radio_cachepot_filter'>
                                        {/* <img className='img_cachepot' src="/cachepot.svg" /> */}
                                        Кашпо
                                    </Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                    </section>
                    {product?.type === 'plant' &&
                        <>
                            <hr className='line2'></hr>
                                <div className='admin_prod_chars'>
                                    <div className='first_items' style={{marginBottom:20}}>
                                        <section style={{marginLeft:15}}>
                                            <h1>Категория</h1>
                                            <select id='category' name='category' value={product.category} onChange={handleProductInputChange} required>
                                                <option value='0'>Ампельные растения</option>
                                                <option value='1'>Бонсай</option>
                                                <option value='2'>Бромелиевые</option>
                                                <option value='3'>Декоративно-лиственные</option>
                                                <option value='4'>Деревья и кустарники</option>
                                                <option value='5'>Кактусы</option>
                                                <option value='6'>Луковичные</option>
                                                <option value='7'>Орхидеи</option>
                                            </select>
                                        </section >
                                        {charsItems1}
                                    </div>
                                    <div className='first_items'>
                                        {charsItems2}
                                    </div>
                                </div>
                            <hr className='line2'></hr>
                            <div className='section_info'>
                                <div className='h_info'>
                                    <img width='50' height='50' src='/infoBrown.png'></img>
                                    <h3>Информация</h3>
                                </div>
                                <div className='cont_info'>
                                    <textarea id="info" name="info" value={productInfo.info} onChange={handleInfoInputChange} required />
                                </div>
                            </div>
                            <div className='section_care'>
                                <div className='h_care'>
                                    <img width='50' height='50' src='/careBlue.png'></img>
                                    <h3>Уход</h3>
                                </div>
                                <div className='cont_care'>
                                    <h4>Освещение</h4>
                                    <textarea id="lighting" name="lighting" value={productInfo.lighting} onChange={handleInfoInputChange} required />
                                    <h4>Температура</h4>
                                    <textarea id="temperature" name="temperature" value={productInfo.temperature} onChange={handleInfoInputChange} required />
                                    <h4>Полив</h4>
                                    <textarea id="watering" name="watering" value={productInfo.watering} onChange={handleInfoInputChange} required />
                                    <h4>Уровень влажности</h4>
                                    <textarea id="humidity" name="humidity" value={productInfo.humidity} onChange={handleInfoInputChange} required />
                                    <h4>Почва</h4>
                                    <textarea id="fertilization" name="fertilization" value={productInfo.fertilization} onChange={handleInfoInputChange} required />
                                </div>
                            </div>
                        </>
                    }
                    <input className='admin_button' type="submit" title='Добавить товар' />
                </form>
            }
        </article >
    )
}
