import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

type IconProps = {
  type: keyof typeof Icons;
};

function Icon({ type }: IconProps) {
  // @ts-ignore
  return <FontAwesomeIcon icon={Icons[type]} />;
}

export default Icon;
