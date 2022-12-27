import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Accessories } from '../../components/Accessories';
import { ProductCard } from '../../components/ProductCard';
import { GetProduct } from '../../store/reducers/ActionCreators';
import { TProduct } from '../../types';
import './ProductPage.scss';

export function ProductPage(): JSX.Element {

    const [product, setProduct] = useState<TProduct>();
    const [isLoading, setIsLoading] = useState(true);

    //scroll to top on page render
    window.scrollTo(0, 0);

    //scroll to various section on ProductPage
    const refCachepot = useRef(null);
    const refInfoProduct = useRef(null);
    const refCareProduct = useRef(null);

    //FIXME change any type 
    const ScrollToSection = (sectionTo: any) => {
        sectionTo.current.scrollIntoView();
    }

    // get product id from page url params
    const { id } = useParams();
    const productID: number = id ? (+id.split(":")[1]) : -1; //FIXME

    async function GetProd() {
        const prod: TProduct = await GetProduct(productID);
        setProduct(prod);
        setIsLoading(false);
    }

    useEffect(() => {
        GetProd();
    }, [id])

    return (
        <article>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {!product
                        ?
                        <h1>Данный товар не найден</h1>
                        :
                        <>
                            <ProductCard product={product} cardType={'big'} />

                            <div className='wrapepr_sticky_radio'>
                                <hr className='line1'></hr>
                                <div className='radio_info_product'>
                                    <input className='radio__input_product' onClick={() => { ScrollToSection(refCachepot) }} type='radio' value="cachepot" name='myInfoProduct' id='Anchor1' />
                                    <label className='radio__label_product' htmlFor='Anchor1'>
                                        <div className='img_pot_test' /><a href='#id_accessories'>Кашпо</a></label>
                                    <input className='radio__input_product' onClick={() => { ScrollToSection(refInfoProduct) }} type='radio' value="info" name='myInfoProduct' id='Anchor2' />
                                    <label className='radio__label_product' htmlFor='Anchor2'>
                                        <div className='img_info_test' />Информация</label>
                                    <input className='radio__input_product' onClick={() => { ScrollToSection(refCareProduct) }} type='radio' value="care" name='myInfoProduct' id='Anchor3' />
                                    <label className='radio__label_product' htmlFor='Anchor3'>
                                        <div className='img_care_test' />Уход</label>
                                </div>
                                <hr className='line2'></hr>
                            </div>

                            <div className='plant_all_info'>
                                <div className='section_accessories'>
                                    <div className='h_caspho ' ref={refCachepot} id='id_accessories'>
                                        {product?.type === 'plant'
                                            ?
                                            <>
                                                <img width='50' height='50' src='cachepot.svg'></img>
                                                <h3>Подходящие кашпо</h3>
                                            </>
                                            :
                                            <>
                                                <img width='50' height='50' src='plant.svg'></img>
                                                <h3>Подходящие растения</h3>
                                            </>
                                        }
                                    </div>
                                    <div className='cont_accessories'>
                                        {<Accessories size={product.size} type={product.type} />}
                                    </div>
                                </div>
                                <div className='section_info' ref={refInfoProduct}>
                                    <div className='h_info'>
                                        <img width='50' height='50' src='infoBrown.png'></img>
                                        <h3>Информация</h3>
                                    </div>
                                    <div className='cont_info'>
                                        <p>Ампельная бегония формирует красивые кусты c повисающими побегами, придающими им ещё больший объём и декоративность. Такие растения можно держать на окнах, располагать на специальных подставках или подвешивать над подоконником. Чаще всего подобными кустиками украшают спальни, гостиные или детские комнаты. Не менее эффектно будут смотреться бегонии, высаженные в балконные ящики или украшающие садовую веранду или беседку. </p>
                                    </div>
                                </div>
                                <div className='section_care' ref={refCareProduct}>
                                    <div className='h_care'>
                                        <img width='50' height='50' src='careBlue.png'></img>
                                        <h3>Уход</h3>
                                    </div>
                                    <div className='cont_care'>
                                        <p>Уход за ампельной бегонией не слишком отличается от заботы о прочих декоративно-цветущих видах этого растения. Для нормального развития кустики следует высаживать в питательную почву, следить за уровнем влажности воздуха, а также по мере необходимости пересаживать кусты.</p>
                                        <h4>Освещение</h4>
                                        <p>Ампельная бегония любит хорошее освещение, но плохо переносит прямые палящие лучи, поэтому горшок с ней следует держать в слегка затенённом месте с рассеянным светом. Для этого подойдёт восточная или западная сторона дома или южная на небольшом удалении от окон. Если кустик держат в саду или на балконе, место для него подбирают по тем же правилам. Зимой, чтобы растение не вытянулось и не утратило декоративность, ему следует обеспечить дополнительную подсветку. Нехватка света приведёт к утрате яркости окраски листвы, а летом может привести к проблемам с цветением.</p>
                                        <h4>Температура</h4>
                                        <p>Оптимальным для ампельных бегоний считается умеренное тепло — до 26 градусов летом и около 17 градусов зимой. Очень жаркую погоду цветок переносит не слишком хорошо. Зимовать на улице бегония точно не сможет — не стоит подвергать растение понижению температуры менее 10 градусов. Если бегонию выращивают в саду, с наступлением прохладных дней ёмкость с цветком следует занести в дом.</p>
                                        <h4>Полив</h4>
                                        <p>Чтобы вода лучше пропитала почвенный ком, поливать ампельную бегонию рекомендуют нижним способом — опуская горшок в ёмкость с отстоянной водой или заливая жидкость в специальный поддон. Спустя некоторое время лишнюю влагу из него сливают. В период активного роста поливы домашних бегоний можно проводить через день, уличные цветы в горшках в сухую погоду придётся поливать ежедневно.</p>
                                        <h4>Уровень влажности</h4>
                                        <p>Для улучшения декоративности кустика ему рекомендуется обеспечить повышенный уровень влажности. Чтобы капли воды от опрыскивания не попадали на цветочки, рядом с ампельной бегонией можно поставить открытую ёмкость с водой. Зимой, когда воздух в комнате высушивается отопительными приборами, их можно периодически накрывать влажной тканью.</p>
                                        <h4>Почва</h4>
                                        <p>Для обильного цветения ампельной бегонии требуется одновременно лёгкая и плодородная почвенная смесь. Её можно приобрести в готовом виде или самостоятельно перемешать листовой перегной с торфом и чернозёмом (2:1:1). Для улучшения качества в полученный грунт добавляют крупнозернистый песок. Его же можно насыпать на дно горшка поверх дренажного слоя. Сам горшок должен быть широким и не слишком глубоким.</p>
                                        <h4>Период покоя</h4>
                                        <p>Темпы роста ампельной бегонии начинают снижаться уже к середине осени. С этого периода растение стараются держать в нежарком месте, где держится 16-24 градуса. Число поливов при этом слегка понижают, но влажность стараются поддерживать на среднем уровне, особенно, если горшок стоит недалеко от батареи.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </>
            }
        </article>
    )
}
