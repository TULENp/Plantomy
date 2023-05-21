import { useState } from 'react';
import './AdminCategoriesPage.scss';

export function AdminCategoriesPage(): JSX.Element {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([
        'Ампельные растения',
        'Бонсай',
        'Бромелиевые',
        'Декоративно-лиственные',
        'Деревья и кустарники',
        'Кактусы',
        'Луковичные',
        'Орхидеи'])

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (categories.includes(category)) {
            alert('Такая категория уже существует');
            return;
        }
        if (category !== '') {
            setCategories([...categories, category]);
            setCategory('');
        }
    }

    function removeCategory(category: string) {
        if (confirm(`Вы действительно хотите удалить категорию ${category}?`)) {
            const newAuthors = categories.filter(item => item !== category);
            setCategories(newAuthors);
        }
    }

    const categoriesItems = categories.map(item =>
        <div className='categoryCard' style={{maxWidth:350, display:'flex', 
        alignItems:'center', backgroundColor:'#EEE', borderRadius:8, padding:5, marginTop:20}}>
            <h1 style={{marginBottom:0}}>{item}</h1>
            <input style={{marginTop:10, marginBottom:10, maxWidth:100, backgroundColor:'#FF2400', color:'#FFF'}} type="button" value='Удалить' onClick={() => removeCategory(item)} />
        </div>
    )

    return (
        <article>
            <form onSubmit={handleFormSubmit}>
                <h1>Добавить категорию</h1>
                <input style={{height:50, marginBottom:15}} className='category' type="text" placeholder='Введите категорию' value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input style={{backgroundColor:'#F19173', color:'white', fontWeight:700,paddingTop:10,paddingBottom:10, fontSize:18}} type="submit" value={'Добавить'} title='Добавить' />
            </form>
            <section style={{display:'flex', alignContent:'center', flexWrap:'wrap', flexDirection:'column'}}>
                {categoriesItems}
            </section>
        </article >
    )
}
