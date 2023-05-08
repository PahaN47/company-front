import React, { useState } from 'react';

import { BasePage } from '~/components/BasePage';
import { CustomButton } from '~/components/CustomButton';
import { CustomInput } from '~/components/CustomInput';
import { CustomLink } from '~/components/CustomLink';
import { FancyButton } from '~/components/FancyButton';

const BlankPage = () => {
    const [valid, setValid] = useState(true);

    return (
        <BasePage>
            <div>
                <h1>
                    Вот наш новый <b>проект!</b>
                </h1>
                <p>
                    Я тут че-то понаделал. Короче, фронт
                    <br />В общем, клева, че.
                </p>
                <p>Надо эту страницу удалить будет, если че...</p>
                <p>
                    <CustomLink href="https://google.com">Меня никто не любит, не ценит, не уважает!</CustomLink>
                </p>
                <p>
                    <CustomButton customStyle="primary" size="large" onClick={() => setValid((prev) => !prev)}>
                        УВАЖАЮ!!!!!!
                    </CustomButton>
                    <CustomButton customStyle="secondary" size="medium" onClick={() => setValid((prev) => !prev)}>
                        ОЧЕНЬ!!!!!
                    </CustomButton>
                    <CustomButton customStyle="outline" size="small" onClick={() => setValid((prev) => !prev)}>
                        СИЛЬНО!!!!
                    </CustomButton>
                </p>
                <div>
                    <div style={{ fontWeight: 400 }}>Текст</div>
                    <div style={{ fontWeight: 500 }}>Текст</div>
                    <div style={{ fontWeight: 600 }}>Текст</div>
                    <div style={{ fontWeight: 700 }}>Текст</div>
                    <div style={{ fontWeight: 800 }}>Текст</div>
                    <div style={{ fontWeight: 900 }}>Текст</div>
                </div>
                <p>
                    <CustomInput valid={valid} type="input" placeholder="Текст..." />
                </p>
                <p>
                    <CustomInput valid={valid} type="textarea" placeholder="Много текста..." rows={3} />
                </p>
                <FancyButton style={{ width: '100px' }} />
                <FancyButton style={{ width: '100px' }} buttonType="cross" />
            </div>
        </BasePage>
    );
};

export default BlankPage;
