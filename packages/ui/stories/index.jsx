import React from 'react';

import { storiesOf } from '@storybook/react';

import './styles.scss';

import ButtonsStory from './buttons';
import GridStory from './grid';

storiesOf('Button', <ButtonsStory />);

storiesOf('Grid', <GridStory />);
