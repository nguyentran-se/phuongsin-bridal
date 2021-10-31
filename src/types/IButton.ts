export type IButton = {
  clicked: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: 'contained' | 'outlined';
};
