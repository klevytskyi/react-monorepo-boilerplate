import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme, withDocs } from 'storybook-readme';

export const decorator = (title, doc, readme) =>
  storiesOf(title, module)
    .addDecorator(withKnobs)
    .addDecorator(withDocs(doc))
    .addDecorator(withReadme(readme));
