import * as React from 'react'
import { Helmet } from "react-helmet";
import { FortunaTextWinner } from '../components/FortunaTextWinner';
import { FortunaWheel } from '../components/FortunaWheel';
import {CatalogFooter} from '../components/CatalogPage/CatalogFooter';

const Fortuna = () => {
    const [typePrize, setType] = React.useState();

    return (
        <>
            <Helmet title='Колесо Фортуны от Яны Демидовой' />
            
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                <FortunaWheel setType={setType} />
                <FortunaTextWinner typePrize={typePrize} />
                <CatalogFooter />
            </div>
        </>
    )
}

export default Fortuna;
