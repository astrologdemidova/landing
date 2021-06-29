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
    DescriptionContainer,
    CatalogContainer,
    CatalogWrapperStyled,
    WhiteBackground,
    ListBlack,
    ListSeparate,
    MenuButtonWrapper,
    AboutContainer,
    CatalogHeaderContainerPhoto
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import BgPicture from '../../../images/red-min.jpg';
import { CustomCollapse } from '../CustomCollapse'
import { AboutBlock } from '../AboutBlock/AboutBlock'

export const contentTypeMenu = 'CONTENT_TYPE_MENU'
export const contentTypeRitual = 'CONTENT_TYPE_RUNY'
export const contentTypeMeditation = 'CONTENT_TYPE_MEDITATION'
export const contentTypeConsultation = 'CONTENT_TYPE_CONSULTATION'
// export const contentTypeStones = 'CONTENT_TYPE_STONES'

export const CatalogWrapper = () => {
    const [contentType, setContentType] = React.useState(contentTypeMenu)
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
                videoSrc={item.videoSrc}
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
                        <ListBlack><span>волшебства и магии не существует!</span></ListBlack>
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

                    <div id='anchor'></div>

                    <MenuButtonWrapper>
                        <a href='#anchor'><CustomButton onClick={() => setContentType(contentType === contentTypeMeditation ? contentTypeMenu : contentTypeMeditation)}>Медитации</CustomButton></a>
                    </MenuButtonWrapper>

                    {contentType === contentTypeMeditation &&
                        <DescriptionContainer>
                            <ul>
                                <li>МОИ МЕДИТАЦИИ НЕ ПРО ДУХОВНОСТЬ. ЭТО ЦЕЛЕНАПРАВЛЕННАЯ РАБОТА С ПОДСОЗНАНИЕМ.</li>
                                <li>ВНУТРИ КАЖДОГО ИЗ НАС УЖЕ ЕСТЬ ВСЕ ОТВЕТЫ : ЧЕМ Я ХОЧУ ЗАНИМАТЬСЯ/В ЧЕМ Я ПРЕУСПЕЮ/ЧТО МНЕ ПРИНЕСЁТ МНОГО ДЕНЕГ И РЕАЛИЗАЦИЮ.</li>
                                <li>Но логика очень мешает получить нам эти ответы. Поэтому мы с вами достучимся до истины через медитации</li>
                            </ul>
                        </DescriptionContainer>
                    }

                    {contentType === contentTypeMeditation && contentTypeHandler(contentType)}

                    <MenuButtonWrapper>
                        <a href='#anchor'><CustomButton onClick={() => setContentType(contentType === contentTypeConsultation ? contentTypeMenu : contentTypeConsultation)}>Консультации</CustomButton></a>
                    </MenuButtonWrapper>

                    {contentType === contentTypeConsultation &&
                        <ul style={{listStyle: 'none', padding: '0 40px'}}>
                            <li>
                                <b>*</b>После оплаты консультации я с вами свяжусь и мы подберем удобную дату и время для проведения онлайн-встречи.<br /><br />
                                У меня всегда запись приблизившись на месяц вперёд, но если вам очень нужно быстрее - обсудим✨
                            </li>
                        </ul>
                    }

                    {contentType === contentTypeConsultation && contentTypeHandler(contentType)}

                    <MenuButtonWrapper>
                        <a href='#anchor'><CustomButton onClick={() => setContentType(contentType === contentTypeRitual ? contentTypeMenu : contentTypeRitual)}>Ритуалы</CustomButton></a>
                    </MenuButtonWrapper>

                    {contentType === contentTypeRitual &&
                        <ul style={{listStyle: 'none', padding: '0 40px'}}>
                            <li><b>*</b>Все ритуалы можно использовать много раз. Они остаются с вами на всю жизнь!<br/><br/></li>
                            <li><b>*</b>Ритуалы для самостоятельного выполнения. Они легкие в исполнении, безопасные, при этом очень действенные</li>
                        </ul>
                    }

                    {contentType === contentTypeRitual && contentTypeHandler(contentType)}

                    {/* <MenuButtonWrapper>
                        <a href='#anchor'><CustomButton onClick={() => setContentType(contentType === contentTypeStones ? contentTypeMenu : contentTypeStones)}>Камни</CustomButton></a>
                    </MenuButtonWrapper> */}
                </CatalogContainer>

                {/* <CatalogContainer>
                    {contentType !== contentTypeMenu && contentTypeHandler(contentType)}
                </CatalogContainer> */}

                <CatalogHeaderContainer>
                    <h1>Обо мне</h1>
                    <h2>@astrolog_demidova</h2>
                </CatalogHeaderContainer>

                <AboutContainer>
                    <img className='red' src={BgPicture} alt="" />
                </AboutContainer>

                <CatalogHeaderContainerPhoto>
                    <h1>Яна Демидова.</h1>
                    <h2>Один из самых высокооплачиваемых<br />астрологов России.</h2>
                </CatalogHeaderContainerPhoto>

                <AboutBlock />

                <CustomMenuShop setContentType={setContentType} />
                {contentType !== contentTypeMenu && <CustomCollapse setContentType={setContentType} />}
            </CatalogWrapperStyled>
            <CatalogFooter />
        </>
    )
}
