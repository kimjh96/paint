import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

type IconProps = {
  type: keyof typeof Icons;
  color?: string;
};

function Icon({ type, color }: IconProps) {
  // @ts-ignore
  return <FontAwesomeIcon icon={Icons[type]} color={color} />;
}

export default Icon;
