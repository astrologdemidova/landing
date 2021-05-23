import * as React from 'react'
import { ArrayContentTypeMeditation } from './ContentTypeMeditation'
import { CatalogCard } from '../CatalogCard'
import { CatalogFooter } from '../CatalogFooter'
import {
    CatalogHeaderContainer,
    CatalogSubHeaderContainer,
    CatalogContainer,
    CatalogWrapperStyled,
    WhiteBackground,
    ListBlack,
    ListSeparate,
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import BgPicture from '../../../images/red-min.jpg';
import { AboutBlock } from '../AboutBlock/AboutBlock'

export const contentTypeMeditation = 'CONTENT_TYPE_MEDITATION'

export const CatalogWrapper = () => {
    const data = new Map([
        [contentTypeMeditation, ArrayContentTypeMeditation],
    ])

    const contentTypeHandler = (contentTypeVar) => {
        return data.get(contentTypeVar).map((item, ind) => (
            <CatalogCard
                key={item.id}
                id={item.id}
                imgSrc={item.imgSrc}
                nameItem={item.nameItem}
                nameItemSub={item.nameItemSub}
                coast={item.coast}
                coast2={item.coast2}
                coastStrike={item.coastStrike}
                description={item.description}
                faq={item.faq}
                linkPay={item.linkPay}
                buttonName={item.buttonName}
                installment={item.installment}
                installment2={item.installment2}
                period={item.period}
                period2={item.period2}
                contentType={contentTypeMeditation}
            />
        ))
    }

    return (
        <>
            <CatalogWrapperStyled>
                <CatalogHeaderContainer>
                    <h1>Легендарные медитации от одного из самых высокооплачиваемых астрологов России - Яны Демидовой</h1>
                    <h2>(@astrolog_demidova)</h2>
                    <img src={emoji} alt="" />
                </CatalogHeaderContainer>

                <CatalogSubHeaderContainer>
                    <img className='red' src={BgPicture} alt="" />
                </CatalogSubHeaderContainer>

                <CatalogHeaderContainer>
                    <h1>Яна Демидова.</h1>
                    <h2>Один из самых высокооплачиваемых астрологов России.</h2>
                </CatalogHeaderContainer>

                <AboutBlock />

                <CatalogContainer>
                    {contentTypeHandler(contentTypeMeditation)}
                </CatalogContainer>

            </CatalogWrapperStyled>
            <CatalogFooter />
        </>
    )
}
