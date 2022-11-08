import React from 'react'
import News from '../components/News'
import PlantCard from '../components/PlantCard'
import SearchBar from '../components/SearchBar'

export default function MainPage(): JSX.Element {
    return (
        <>
            <div>MainPage</div>
            <SearchBar />
            <News />
            <section className='cards'>
                <PlantCard />
                <PlantCard />
                <PlantCard />
                <PlantCard />
            </section>
        </>
    )
}
