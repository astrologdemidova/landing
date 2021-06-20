import React, { useState } from 'react';
import { CustomButton } from '../CustomButton';
import { Wrapper } from './styles';

export const Rassrochka = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <Wrapper>
            <h4 onClick={() => setIsVisible(!isVisible)}>Если Тинькофф банк не одобрил вам рассрочку &#128072;</h4>

            {isVisible && (
                <>
                    <p>
                        Я позаботилась и подготовила для вас ещё одну возможность перейти на новый финансовый уровень.
                        Эта возможность- рассрочка через другие банки. Все, что вам нужно - просто заполнить анкету со своими данными.
                    </p>
                    <p>
                        *эта анкета будет отправляться сразу в несколько банков, для того , чтобы в разы увеличить вероятность одобрения рассрочки для вас
                    </p>
                    <p>
                        Заполняйте анкету и начинаем ваш переход на новый уровень жизни и дохода! До встречи в марафоне !
                    </p>

                    <div>
                        <a href='https://aktivcredit.ru/ak/izobilie/' target='_blank'>
                            <CustomButton>
                                Заявка на рассрочку
                            </CustomButton>
                        </a>
                    </div>
                </>
            )}

        </Wrapper>
    )
}
