import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ButtonReadme from 'components/button/button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';

import LinkReadme from 'components/button/link-README.md';
import LinkDocs from 'components/button/link-DOCS.md';
import { PrimaryButton, SecondaryButton, PrimaryButtonLink, SecondaryButtonLink, Row, Col } from 'index';

import { decorator } from '../../utils/decorator';

export default decorator('Button', ButtonDocs, ButtonReadme).add('Button component', () => (
  <>
    <Row>
      <Col s="12">
        <PrimaryButton.Large>Primary big</PrimaryButton.Large>
        <SecondaryButton.Large>Secondary big</SecondaryButton.Large>
        <PrimaryButton.Large>Primary big</PrimaryButton.Large>
        <SecondaryButton.Large>Secondary big</SecondaryButton.Large>
        <SecondaryButton.Large>Large</SecondaryButton.Large>
        <PrimaryButton.Large disabled>Disabled</PrimaryButton.Large>
        <SecondaryButton.Large disabled>Disabled</SecondaryButton.Large>
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <PrimaryButton>Primary small</PrimaryButton>
        <SecondaryButton>Secondary small</SecondaryButton>
        <PrimaryButton>Primary small</PrimaryButton>
        <SecondaryButton>Secondary small</SecondaryButton>
        <PrimaryButton disabled>Disabled</PrimaryButton>
        <SecondaryButton disabled>Disabled</SecondaryButton>
      </Col>
    </Row>
  </>
));

export const Links = decorator('Button', LinkDocs, LinkReadme).add('Link component', () => (
  <BrowserRouter>
    <>
      <Row>
        <Col s="12">
          <PrimaryButtonLink.Large to="/" disabled>
            Disabled
          </PrimaryButtonLink.Large>
          <SecondaryButtonLink.Large to="/" disabled>
            Disabled
          </SecondaryButtonLink.Large>
          <SecondaryButtonLink.Large to="/">Secondary large button link</SecondaryButtonLink.Large>
          <PrimaryButtonLink.Large to="/">Primary large button link</PrimaryButtonLink.Large>
          <PrimaryButtonLink.Large to="/">Primary button link</PrimaryButtonLink.Large>
        </Col>
      </Row>
      <Row>
        <Col s="12">
          <PrimaryButtonLink to="/" disabled>
            Disabled
          </PrimaryButtonLink>
          <SecondaryButtonLink to="/" disabled>
            Disabled
          </SecondaryButtonLink>
          <SecondaryButtonLink to="/">Secondary large button link</SecondaryButtonLink>
          <PrimaryButtonLink to="/">Primary large button link</PrimaryButtonLink>
          <PrimaryButtonLink to="/">Primary button link</PrimaryButtonLink>
        </Col>
      </Row>
    </>
  </BrowserRouter>
));
