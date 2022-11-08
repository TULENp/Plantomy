import React from 'react'
import News from '../components/News'
import PlantCard_mini from '../components/PlantCard_mini'
import SearchBar from '../components/SearchBar'

export default function MainPage(): JSX.Element {
    return (
        <>
            <div>MainPage</div>
            <SearchBar />
            <News />
            <section className='cards'>
                <PlantCard_mini />
                <PlantCard_mini />
                <PlantCard_mini />
                <PlantCard_mini />
            </section>
        </>
    )
}
