export interface InputState {
  disabled: boolean;
  error: boolean;
  size?: InputSize;
}

export interface InputStyle {
  width: string | number;
  color: string;
  zIndex: number;
  margin?: string | number;
} 

export enum InputSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
} 

export type MuiSize = 'small' | 'medium' | undefined; 