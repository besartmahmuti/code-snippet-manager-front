import React from 'react';
import { Alert } from 'react-bootstrap';

const NothingFound = () => {
  return (
    <Alert variant="info">
      <Alert.Heading>No data found!</Alert.Heading>
      <p>
        Sorry, there is no data available to display at the moment. Please try again later.
      </p>
    </Alert>
  );
};

export default NothingFound;
