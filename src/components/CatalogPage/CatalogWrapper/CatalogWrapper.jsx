import * as React from 'react'
import { ArrayContentTypeRitual } from './ContentTypeRitual'
import { ArrayContentTypeConsultation } from './ContentTypeConsultation'
// import { ArrayContentTypeStones } from './ContentTypeStones'
import { ArrayContentTypeMeditation } from './ContentTypeMeditation'
import { CatalogCard } from '../CatalogCard'
import { CatalogFooter } from '../CatalogFooter'
import { CustomMenuShop } from '../CustomMenuShop'
import { CustomButton } from '../../CustomButton'
import {
    CatalogHeaderContainer,
    CatalogSubHeaderContainer,
    CatalogContainer,
    CatalogWrapperStyled,
    WhiteBackground,
    ListBlack,
    ListSeparate,
    MenuButtonWrapper,
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import { CustomCollapse } from '../CustomCollapse'

export const contentTypeMenu = 'CONTENT_TYPE_MENU'
export const contentTypeRitual = 'CONTENT_TYPE_RUNY'
export const contentTypeMeditation = 'CONTENT_TYPE_MEDITATION'
export const contentTypeConsultation = 'CONTENT_TYPE_CONSULTATION'
// export const contentTypeStones = 'CONTENT_TYPE_STONES'

export const CatalogWrapper = () => {
    const [contentType, setContentType] = React.useState(contentTypeMeditation)
    const data = new Map([
        [contentTypeRitual, ArrayContentTypeRitual],
        [contentTypeMeditation, ArrayContentTypeMeditation],
        [contentTypeConsultation, ArrayContentTypeConsultation],
        // [contentTypeStones, ArrayContentTypeStones],
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
                contentType={contentType}
            />
        ))
    }

    return (
        <>
            <CatalogWrapperStyled>
                <CatalogHeaderContainer>
                    <h1>Магазин волшебства</h1>
                    <h2>от @astrolog_demidova</h2>
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

                {/* {contentType === contentTypeMenu && (
                
            )} */}

                <CatalogContainer>
                    <MenuButtonWrapper>
                        <CustomButton onClick={() => setContentType(contentType === contentTypeMeditation ? contentTypeMenu : contentTypeMeditation)}>Медитации</CustomButton>
                    </MenuButtonWrapper>

                    {contentType === contentTypeMeditation && contentTypeHandler(contentType)}

                    <MenuButtonWrapper>
                        <CustomButton onClick={() => setContentType(contentType === contentTypeConsultation ? contentTypeMenu : contentTypeConsultation)}>Консультации</CustomButton>
                    </MenuButtonWrapper>

                    {contentType === contentTypeConsultation && contentTypeHandler(contentType)}

                    <MenuButtonWrapper>
                        <CustomButton onClick={() => setContentType(contentType === contentTypeRitual ? contentTypeMenu : contentTypeRitual)}>Ритуалы</CustomButton>
                    </MenuButtonWrapper>

                    {contentType === contentTypeRitual && contentTypeHandler(contentType)}

                    {/* <MenuButtonWrapper>
                        <CustomButton onClick={() => setContentType(contentTypeStones)}>Камни</CustomButton>
                    </MenuButtonWrapper> */}
                </CatalogContainer>

                {/* <CatalogContainer>
                    {contentType !== contentTypeMenu && contentTypeHandler(contentType)}
                </CatalogContainer> */}

                <CustomMenuShop setContentType={setContentType} />
                {contentType !== contentTypeMenu && <CustomCollapse setContentType={setContentType} />}
            </CatalogWrapperStyled>
            <CatalogFooter />
        </>
    )
}
