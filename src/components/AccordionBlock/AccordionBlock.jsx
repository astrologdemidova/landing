import React, { useState } from "react"
import { 
    AccordionWrapper,
    CardWrapper,
    CardHeader,
    CardContent,
} from './styles'

export const AccordionBlock = () => {
    const [activeTabs, setActiveTabs] = useState([]);
    const [data, setData] = useState([
        {
            title: 'ДЕНЬ 1: ЛЕГЕНДАРНАЯ ДЕНЕЖНАЯ МЕДИТАЦИЯ',
            description: [
                'Испытаете на себе медитацию, которая изменит вашу жизнь и откроет поток денежной энергии',
                'Сделаете задания и поймёте, сколько денег вам нужно на самом деле',
                'Начнёте визуализировать свои будущие покупки'
            ],
            isOpen: false,
        },
        {
            title: 'ДЕНЬ 2: ОГРАНИЧИВАЮЩИЕ УБЕЖДЕНИЯ',
            description: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.'
            ],
            isOpen: false,
        },
        {
            title: 'ДЕНЬ 3: СТОП-СЛОВА И ДЕНЕЖНЫЕ "НЕТ"',
            description: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.'
            ],
            isOpen: false,
        },
        {
            title: 'ДЕНЬ 4: ПРОРАБОТКА ОКРУЖЕНИЯ',
            description: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.'
            ],
            isOpen: false,
        },
        {
            title: 'ДЕНЬ 5: ЖИЗНЬ В ИЗОБИЛИИ',
            description: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit.'
            ],
            isOpen: false,
        },
    ])

    const clickHandler = (idItem) => {
        activeTabs.includes(idItem)
        ? setActiveTabs(prevState => {
            const newState = [...prevState];
            const index = newState.indexOf(idItem);
            newState.splice(index, 1);
            return newState
        })
        : setActiveTabs(prevState => [...prevState, idItem])
    }
    return (
        <AccordionWrapper>
            {data.map((item, index) => (
                <CardWrapper key={item.title}>
                    <CardHeader onClick={() => clickHandler(index)}>
                        {item.title}
                        <span></span>
                    </CardHeader>
                    <CardContent isOpen={activeTabs.includes(index)}>
                        {item.description.map((str, ind) => (
                            <p key={ind}>
                                <span></span>
                                {str}
                            </p>
                        ))}
                    </CardContent>
                </CardWrapper>
            ))}
        </AccordionWrapper>
    )
}