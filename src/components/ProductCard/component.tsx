import React from 'react'

export default function ProductCard(): JSX.Element {
    return (
        <section className='productCard'>
            <img src="" alt="Img" />
            <h3>Бегония ампельная</h3>
            <h4>Группа клубневых бегоний, отличающихся длинными побегами, свисающими из горшка. Такие кустики используют в качестве комнатных растений. </h4>
            <div>
                <h3>979 р</h3>
                <div>
                    <img src="" alt="potImg" />
                    <h4>В стоимость входит горшок</h4>
                </div>
            </div>
            <div>
                <button>В корзину</button>
                <div className="addToFavorites">сердечко</div>
            </div>
        </section>
    )
}
