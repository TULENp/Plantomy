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
        <div className='categoryCard'>
            <h1>{item}</h1>
            <input type="button" value='Удалить' onClick={() => removeCategory(item)} />
        </div>
    )

    return (
        <article>
            <form onSubmit={handleFormSubmit}>
                <h1>Добавить категорию</h1>
                <input className='category' type="text" placeholder='Введите категорию' value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="submit" value={'Добавить'} title='Добавить' />
            </form>
            <section>
                {categoriesItems}
            </section>
        </article >
    )
}
