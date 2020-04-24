import React from 'react';
import PropTypes from 'prop-types';

import { HeaderDiv, Container, Row, Div } from './styles';

export default function Header(props) {
  return (
    <HeaderDiv>
      <Container className="container">
        <Row>
          <Div>
            <h1>{props.headerTitle}</h1>
            <p>{props.headerText}</p>
          </Div>
        </Row>
      </Container>
    </HeaderDiv>
  );
}

/**
 * Define Header proptypes
 */
Header.propTypes = {
  headerTitle: PropTypes.string,
  headerText: PropTypes.string,
};

/**
 * Define default props
 */
Header.defaultProps = {
  headerTitle: 'Lorem Ipsum',
  headerText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis vestibulum tincidunt. Praesent libero lorem, maximus non diam vel, aliquam suscipit tortor. Quisque ornare egestas magna, nec sollicitudin velit gravida sed. Duis volutpat orci massa, sit amet dapibus mi placerat non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
};
