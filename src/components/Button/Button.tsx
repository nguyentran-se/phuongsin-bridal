import type { IButton } from 'types/IButton';
import React from 'react';
type Props = {
  style: React.CSSProperties;
};
const Button = ({ clicked, variant }: IButton) => {
  return <button onClick={clicked}>{variant}</button>;
};

export default Button;
