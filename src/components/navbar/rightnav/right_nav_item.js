import React from 'react';
// import SvgPicture from '../../../../resources/img/navbar/{name}.svg';

const RightNavItem = ({name}) => {
  // const {img} = import(`../../../../resources/img/navbar/${name}.svg`);
  const SvgPicture = import(`../../../../resources/img/navbar/${name}.svg`);

  return(
    <div>
      <SvgPicture />
      <span>{name}</span>
    </div>
  );
};

export default RightNavItem;