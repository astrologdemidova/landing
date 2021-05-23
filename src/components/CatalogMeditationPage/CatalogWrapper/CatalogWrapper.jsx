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
                    <ul>
                        <li>Как бы это грустно не было - скажу сразу :</li>
                        <ListBlack>волшебства и магии не существует!</ListBlack>
                        <ListSeparate />
                        <li>
                            Все это есть, но не потому что «волшебство», а потому
                    </li>
                        <li>
                            что <span>квантовая физика и нейрофизиология</span>
                        (наука,
                    </li>
                        <li>изучающая работу мозга).</li>
                        <ListSeparate />
                        <li>
                            Именно эти <span>науки объясняют почему работает</span>{' '}
                        сила
                    </li>
                        <li>мысли и сила слова, почему исполняются загаданные</li>
                        <li>желания и как работает магия</li>
                        <ListSeparate />
                        <li>
                            Вы <span>можете убедиться</span> в этом, начав смотреть
                        опыты
                    </li>
                        <li>квантовых физиков (например «эффект наблюдателя»)</li>
                        <li>или прочитав бестселлер Джо Диспенза : «Сила</li>
                        <li>подсознания».</li>
                        <ListSeparate />
                        <li>
                            Так вы поймёте почему «все это»{' '}
                            <span>действительно</span>
                        </li>
                        <li>
                            <span>работает</span> и тогда у вас не останется и тени
                        сомнения в
                    </li>
                        <li>том, какая мощь заложена в «волшебных» товарах,</li>
                        <li>
                            которые я так долго собирала и создавала по крупицам
                    </li>
                        <ListSeparate />
                    </ul>
                    <h4>
                        С любовью, Яна<span>❤</span>
                    </h4>
                    <WhiteBackground />
                </CatalogSubHeaderContainer>

                <CatalogContainer>

                    {contentTypeHandler(contentTypeMeditation)}

                </CatalogContainer>

            </CatalogWrapperStyled>
            <CatalogFooter />
        </>
    )
}
