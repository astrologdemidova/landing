import * as React from 'react'
import { ArrayContentTypeMeditation } from './ContentTypeMeditation'
import { CatalogCard } from '../CatalogCard'
import { CatalogFooter } from '../CatalogFooter'
import {
    CatalogHeaderContainer,
    CatalogSubHeaderContainer,
    CatalogContainer,
    CatalogWrapperStyled,
    DescriptionContainer,
    CatalogHeaderContainerPhoto,
    AboutContainer,
    WhiteBackground,
    ListBlack,
    ListSeparate,
    MenuButtonWrapper,
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import BgPicture from '../../../images/red-min.jpg';
import { AboutBlock } from '../AboutBlock/AboutBlock'
import { CustomButton } from '../../CustomButton'

export const contentTypeMeditation = 'CONTENT_TYPE_MEDITATION'

export const CatalogWrapper = () => {
    const [isAbout, setIsAbout] = React.useState(false);
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

                <AboutContainer>
                    <img className='red' src={BgPicture} alt="" />
                </AboutContainer>

                <CatalogHeaderContainerPhoto>
                    <h1>Яна Демидова.</h1>
                    <h2>Один из самых высокооплачиваемых<br /> астрологов России.</h2>
                </CatalogHeaderContainerPhoto>


                <MenuButtonWrapper style={{marginBottom: '50px'}}>
                    <CustomButton
                        onClick={() => setIsAbout(!isAbout)}
                    >Обо мне</CustomButton>
                </MenuButtonWrapper>

                {isAbout && <AboutBlock setIsAbout={setIsAbout}/>}

                <MenuButtonWrapper>
                    <CustomButton>Медитации</CustomButton>
                </MenuButtonWrapper>



                <CatalogContainer>
                    <DescriptionContainer>
                        <ul>
                            <li>МОИ МЕДИТАЦИИ НЕ ПРО ДУХОВНОСТЬ. ЭТО ЦЕЛЕНАПРАВЛЕННАЯ РАБОТА С ПОДСОЗНАНИЕМ.</li>
                            <li>ВНУТРИ КАЖДОГО ИЗ НАС УЖЕ ЕСТЬ ВСЕ ОТВЕТЫ : ЧЕМ Я ХОЧУ ЗАНИМАТЬСЯ/В ЧЕМ Я ПРЕУСПЕЮ/ЧТО МНЕ ПРИНЕСЁТ МНОГО ДЕНЕГ И РЕАЛИЗАЦИЮ.</li>
                            <li>Но логика очень мешает получить нам эти ответы. Поэтому мы с вами достучимся до истины через медитации</li>
                        </ul>
                    </DescriptionContainer>
                    {contentTypeHandler(contentTypeMeditation)}
                </CatalogContainer>

            </CatalogWrapperStyled>
            <CatalogFooter />
        </>
    )
}
