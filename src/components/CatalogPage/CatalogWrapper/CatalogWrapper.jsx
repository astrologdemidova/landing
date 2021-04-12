import * as React from 'react';
import { CatalogCard } from '../CatalogCard';
import { CatalogFooter } from '../CatalogFooter';
import { CatalogHeaderContainer, CatalogContainer, CatalogWrapperStyled } from './styles';
import Item1 from '../../../images/catalog/1.png'
import Item2 from '../../../images/catalog/2.png'
import Item3 from '../../../images/catalog/3.png'
import Item4 from '../../../images/catalog/4.png'
import Item5 from '../../../images/catalog/5.png'
import Item6 from '../../../images/catalog/6.png'
import Item7 from '../../../images/catalog/7.png'

export const CatalogWrapper = () => {
    const data = [
        {
            imgSrc: Item1,
            nameItem: 'БЫСТРЫЕ ДЕНЬГИ',
            nameItemSub: 'Руническая программа на быстрые деньги/стабильный доход',
            coast: '777',
            description: [
                `•К вам начинает течь мощнейший поток денег`,
                `•В вашу жизнь приходят полезные люди`,
                `•Вам начинает везти в деньгах`,
                `•Происходят события, создающие постоянный денежный поток`,
                `•Дает активные изменения к лучшему в деньгах и карьере`,
                `•Помогает сдвинуть с места, если есть застой`,
                `•Создаёт круговорот денежных средств: вы тратите, а они возвращаются`,
                `•Дает энергию на заработок`,
                `•Если вы транжира - поможет разумно подойти к процессу трат (а еще ее очень хорошо наносить на банковские счета, чтобы не рисковать деньгами или на кошелек, чтобы обезопасить от кражи и необдуманных трат)`
            ],
            linkPay: 'https://payform.ru/ea8li8/',
        },
        {
            imgSrc: Item2,
            nameItem: 'ПОТОК КЛИЕНТОВ',
            nameItemSub: 'Рунческая программа на поток клиентов «Магнетизм»',
            coast: '777',
            description: [
                `•Направляет к вам поток людей, которые ищут специалиста, как вы`,
                `•Разрушает все препятствия на пути клиентов к вам`,
                `•Убирает конкуренцию. Клиент просто не замечает другие услуги`,
                `•Создаются все условия, чтобы выбрали именно вас. В разы усиливается ваш магнетизм и людей необъяснимо тянет`,
                `•Люди выбирают именно вас среди конкурентов, вы яркие как солнце, заметные и привлекательные, что глаз не оторвать`,
                `•Даёт достойную оплату ваших услуг. Если у вас цены/зп ниже, чем вы достойны - в жизнь начинают приходить премии/доплаты`,
                `•Направляет к вам подарки судьбы и просто подарки`,
                `•Увеличивает поток клиентов в ваши проекты/ торговую точку`
            ],
            linkPay: 'https://payform.ru/ec8lia/',
        },
        {
            imgSrc: Item3,
            nameItem: 'Уверенность в себе',
            nameItemSub: 'Руническая программа «Мандала»: на увеличение самоценности, любви, уверенности в себе и ощущения, что ТЫ достойна всего самого лучшего',
            coast: '1111',
            description: [
                `Невероятная по своей мощности и многогранности программа :`,
                `•Делает нас яркими, харизматичными, полными огня в глазах, идей и жажды к жизни`,
                `•В чем сила женщины? В ее хорошем настроении! И этот став нам это даст! Чтобы все во благо, чтобы радость жизни, которая на самом деле не в глобальных целях, а в мелочах`,
                `•Даёт любовь к своему телу, усиливает сексуальность, умение получать удовольствие, отдыхать и наслаждаться жизнью здесь и сейчас`,
                `•Даёт заботу о себе, ласку и нежность к себе`,
                `•Вы начинаете ощущать, что достойны большего и лучшего`,
                `•Раскрывает сердечную чакру: Если нас не долюбила в детстве мать -мы сейчас сами можем себя долюбить, этот став в этом поможет`,
                `•Если нас не долюбил в детстве отец и не дал нам этот тыл, мы можем сами себя долюбить и создать безопасность - рунический став в этом поможет`,
                `•Усиливает вашу целеустремленность и уверенность`,
                `•Даёт энергию двигаться к цели и умение держать слово, данное себе и другим`,
                `•Вы, на уровне чувств начинаете ощущать свою ценность`,
                `•Ощущаете , как поднимается ваша самооценка и за ней, как следствие, улучшаются все сферы жизни`,
                `•Даёт внешний лоск, блеск, холеность и привлекательность`,
                `•Умение знать себе цену, расставлять границы`,
                `•Вы чувствуете себя королевой`,
                `•Знаете цену времени своей ЖИЗНИ и не тратите ее на плохих людей или нелюбимую работу. С такой самооценкой вас будет окружать только лучшее`,
                `•Создаёт глобальные изменения, перетаскивает нас на новый уровень осознания и новый уровень жизни`,
                `•Даёт умение брать свое, умение хранить свои тайны, знать свое могущество, владеть секретами других . Добавит томности и тайны нашей энергетике`,
                `•Усиливает интуицию, действия в потоке, предчувствия; тоже даёт сексуальность, но уже более мягкую. Хорошо работает на развитие третьего глаза`,
                `•Защита, чувство безопасности, самосохранности, отсутствие бессмысленного самопожертвования, убирает ненужные риски в любых жизненных ситуациях`,
                `*ВНИМАНИЕ! Здесь очень много рун, помогающих забеременеть, поэтому если это не входило в ваши планы - предохраняйтесь лучше!)))`,
            ],
            linkPay: 'https://payform.ru/ed8lib/',
        },
        {
            imgSrc: Item4,
            nameItem: 'Удача во всем',
            nameItemSub: 'Руническая программа «Батарейка»: на удачу и успех в делах, заряд бодрости и позитивных событий в жизни',
            coast: '777',
            description: [
                `•Даёт НЕВЕРОЯТНО мощный поток удачи во всем`,
                `•Дает исполнение желаний, материализацию: чтобы не просто в мыслях и планах, а прям в реальной жизни материализовалось`,
                `•Даёт трансформации и быстрое изменение ситуации, тормозящей нас и тянущей в противоположную сторону`,
                `•Изменения к лучшему происходят с очень быстрой скоростью`,
                `•Даёт умение договориться и согласовать все, что вам нужно`,
                `•Постоянное удачное стечение обстоятельств в вашей жизни`,
                `•Создаёт все условия, чтобы вы получали награду за свои заслуги`,
                `•Делает ваш путь гладким, устраняет препятствия на пути (главное точно знайте, что вы хотите, какая точка Б)`,
                `•Даёт удачу в призах, выигрышах`,
                `•К вам приходит много приятных бонусов от жизни`,
                `•Появляется заряд и энергии для реализации , чтобы быстрее-выше-сильнее`,
                `•Даёт удачу в результатах. Чтобы ваши действия не были напрасны`,
            ],
            linkPay: 'https://payform.ru/ee8lic/',
        },
        {
            imgSrc: Item5,
            nameItem: 'Чистка финансовых блоков',
            nameItemSub: 'Руническая программа «Динамит»: на чистку внутренних финансовых блоков и негативных установок, мешающих обретению богатства',
            coast: '777',
            description: [
                `•Работает , как молот, который разбивает все блоки, комплексы, страхи, установки, связанные с деньгами`,
                `•Вы начинаете , на уровне чувств, ощущать, что достойны денег и Изобилия`,
                `•Очищает наши негативные мысли на тему денег и того, насколько мы достойны богатства и Изобилия`,
                `•Вычищает страхи, связанные с деньгами из нашего подсознания`,
                `•Улучшает все ассоциации, связанные с деньгами (например установка «богатые - жадные и злые» тормозит нас от того, чтобы быть богатым, а этот рунический став поможет начать смотреть на мир иначе)`,
                `•Напитывает нас энергией, чтобы принять трансформации`,
                `•Дает ощущение радости от жизни, чтобы все было во благо и все изменение приносили удовольствие`,
            ],
            linkPay: 'https://payform.ru/ef8lid/',
        },
        {
            imgSrc: Item6,
            nameItem: 'Переход на новый уровень жизни',
            nameItemSub: 'Руническая программа для перехода на новый уровень жизни',
            coast: '0',
            description: [
                `•Дает ускорение процессов вашей трансформации и улучшение восприятия информации. «Золотой ключик», который отворяет двери мудрости и процветания`,
                `•Вы понимаете себя, чувствуете себя и осознаете , чего хотите и что вами происходит и как улучшить свою жизнь`,
                `•Дает степенность, умение усидеть на одном месте, основательность при восприятии информации`,
                `•Делает ваш мозг восприимчивым и открытым к новой информации. Создает крепкий фундамент на который ляжет все остальное. Из этого выстроится красивый новый дом нашей личности`,
                `•Дает усидчивость, умение делать дела и погружаться в процесс, умение потрудиться, улучшает мозговую деятельность.`,
                `•Умение видеть процесс целиком от «а» до «я» и работать не пропуская этапов , не бросая идти к цели на полпути и не прыгая с дела на дело`,
                `•Информация, которая в чистом виде будет проникать в сознание и лучше усваиваться, без искажений`,
            ],
            linkPay: 'https://github.com/astrologdemidova/landing/raw/main/runafile22/6JgodgfF/Ускорение%20трансформаций.pdf',
        },
        {
            imgSrc: Item7,
            nameItem: 'Очищение финансового потока',
            nameItemSub: 'Руническая программа на чистку финансового канала «Ёршик»',
            coast: '0',
            description: [
                `•Направляет к вам поток людей, которые ищут специалиста, как вы`,
                `•Разрушает все препятствия на пути клиентов к вам`,
                `•Убирает конкуренцию. Клиент просто не замечает другие услуги`,
                `•Создаются все условия, чтобы выбрали именно вас. В разы усиливается ваш магнетизм и людей необъяснимо тянет`,
                `•Люди выбирают именно вас среди конкурентов, вы яркие как солнце, заметные и привлекательные, что глаз не оторвать`,
                `•Даёт достойную оплату ваших услуг. Если у вас цены/зп ниже, чем вы достойны - в жизнь начинают приходить премии/доплаты`,
                `•Направляет к вам подарки судьбы и просто подарки`,
                `•Увеличивает поток клиентов в ваши проекты/ торговую точку`,
            ],
            linkPay: 'https://github.com/astrologdemidova/landing/raw/main/runafile22/7Hufsido/Чистка%20фин%20канала%20.pdf',
        },
    ]
    return (
        <CatalogWrapperStyled>
            <CatalogHeaderContainer>
                <h2>Astrolog Demidova</h2>
                <h1>Каталог товаров</h1>
            </CatalogHeaderContainer>

            <CatalogContainer>
                {data.map((item) => (
                    <CatalogCard
                        key={item.imgSrc}
                        imgSrc={item.imgSrc}
                        nameItem={item.nameItem}
                        nameItemSub={item.nameItemSub}
                        coast={item.coast}
                        description={item.description}
                        linkPay={item.linkPay}
                    />
                ))}
                
            </CatalogContainer>

            <CatalogFooter />
        </CatalogWrapperStyled>
    )
}