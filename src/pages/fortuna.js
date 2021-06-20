import * as React from 'react'
import { Helmet } from "react-helmet";
import { FortunaTextWinner } from '../components/FortunaTextWinner';
import { FortunaWheel } from '../components/FortunaWheel';
import { CatalogFooter } from '../components/CatalogPage/CatalogFooter';

const Fortuna = () => {
    const [typePrize, setType] = React.useState();

    return (
        <>
            <Helmet title='Колесо Фортуны от Яны Демидовой' />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <div style={{
                    width: '100%',
                    padding: '50px 0 100px',
                    background: 'rgb(63,94,251)',
                    background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(14,4,128,1) 100%)'
                }}>
                    <FortunaWheel setType={setType} />
                    <FortunaTextWinner typePrize={typePrize} />
                </div>
                
              
                <CatalogFooter />
            </div>
        </>
    )
}

export default Fortuna;