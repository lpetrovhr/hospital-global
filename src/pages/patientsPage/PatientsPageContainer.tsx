import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Space } from 'antd';
import PatientCard from '../../components/common/patientCard/PatientCard';
import { User } from '../../store/types';

const PatientsPageContainer: React.FunctionComponent = (): JSX.Element => {
  const state = useSelector((state: User) => state);

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1>Patients: {state?.token}</h1>
          <PatientCard />
          <PatientCard />
        </Col>
      </Row>
    </>
  );
};

export default PatientsPageContainer;
