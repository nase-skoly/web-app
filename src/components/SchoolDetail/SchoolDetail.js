import React, { PropTypes } from 'react';
import MetaData from '../../containers/MetaData/MetaData';
import UnitDetail from '../UnitDetail/UnitDetail';
import ComparisonButton from '../ComparisonButton/ComparisonButton';
import styles from './SchoolDetail.less';
import SchoolsMap from '../SchoolsMap/SchoolsMap';

const SchoolDetail = ({
  school
}) => {
  if (!school) {
    return (
      <div className={styles.detail}>
        {'Načítám informace o škole...'}
      </div>
    );
  }

  const { metadata, units } = school;
  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <span className={'pull-right'}>
          <ComparisonButton school={school} />
        </span>
      </div>
      <div className={styles.body}>
        <MetaData data={metadata} />
        <div className={styles.map}>
          <SchoolsMap schools={[ school ]} center={school.metadata.address.location} allowZoom={false} />
        </div>
        {units.map(unit => <UnitDetail schoolMetadata={metadata} unit={unit} key={unit.IZO} />)}
      </div>
    </div>
  );
};

SchoolDetail.propTypes = {
  school: PropTypes.object
};

export default SchoolDetail;
