import React from 'react';

import GridReadme from 'components/grid/README.md';
import GridDocs from 'components/grid/DOCS.md';

import { Row, Col } from 'index';

import { decorator } from '../../utils/decorator';

const Column = () => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      height: '16px',
      border: '1px solid #0065ff',
      fontSize: '12px',
    }}
  />
);

export default decorator('Grid', GridDocs, GridReadme).add('Grid component', () => (
  <>
    <Row>
      <Col s="6">
        <Column />
      </Col>
      <Col s="6">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col s="5">
        <Column />
      </Col>
      <Col s="2">
        <Column />
      </Col>
      <Col s="5">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col s="4">
        <Column />
      </Col>
      <Col s="4">
        <Column />
      </Col>
      <Col s="4">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col s="3">
        <Column />
      </Col>
      <Col s="6">
        <Column />
      </Col>
      <Col s="3">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col s="2">
        <Column />
      </Col>
      <Col s="8">
        <Column />
      </Col>
      <Col s="2">
        <Column />
      </Col>
    </Row>
  </>
));
