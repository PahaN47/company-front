import React from 'react';

import { CustomLink } from '~/components/CustomLink';

const BlankPage = () => (
    <div>
        <h1>
            Вот наш новый <b>проект!</b>
        </h1>
        <p>
            Я тут че-то понаделал. Короче, фронт
            <br />В общем, клева, че.
        </p>
        <p>Надо эту страницу удалить будет, если че...</p>
        <CustomLink href="https://google.com">
            <button>Меня никто не любит, не ценит, не уважает!</button>
        </CustomLink>
    </div>
);

export default BlankPage;
