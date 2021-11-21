import * as React from 'react';
import {
    CatalogSubHeaderContainer,
    WhiteBackground,
    ListBlack,
    ListSeparate,
} from './styles';

export const SubHeader = () => {
    return (
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
    )
};
