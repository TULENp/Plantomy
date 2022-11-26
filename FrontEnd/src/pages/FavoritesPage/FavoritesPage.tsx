import React from 'react'
import { Products } from '../../components/Products'
import { data } from '../../zDataExamples/Data'

export function FavoritesPage(): JSX.Element {
    return (
        <>
            <h1>Избранное</h1>
            <Products productType='plant' />
        </>
    )
}
