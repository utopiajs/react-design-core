import React, { createContext, type FC } from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
interface SizeContextProps {
  size?: SizeType;
  children?: React.ReactNode;
}

const SizeContext = createContext<SizeType>(undefined);

export const SizeContextProvider: FC<SizeContextProps> = ({
  children,
  size
}) => (
  <SizeContext.Consumer>
    {(originSize) => (
      <SizeContext.Provider value={size || originSize}>
        {children}
      </SizeContext.Provider>
    )}
  </SizeContext.Consumer>
);

export default SizeContext;
