import React from 'react';
import { Card } from 'antd';

const cardStyle = {
  width: '100%',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  marginBottom: '25px',
};

const PatientCard: React.FunctionComponent = (): JSX.Element => (
  <div className="patient-card">
    <Card style={cardStyle}>
      <p>Name: Card content</p>
      <p>Joined: Card content</p>
      <p>Last visit: Card content</p>
      <p>Completed: Card content</p>
    </Card>
  </div>
);

export default PatientCard;
