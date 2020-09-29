
import React from "react";
import {render} from "react-dom";
import './index.less';

import { RendererContainer } from './containers/renderer-container/RendererContainer';

export const App = (): JSX.Element => (
    <RendererContainer/>
);

document.addEventListener('DOMContentLoaded', () => render(
  <App />, document.getElementById('app')
));
