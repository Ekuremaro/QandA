/** @jsxImportSource @emotion/react **/
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { css } from '@emotion/react';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from './Styles';
import Header from './Header';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
