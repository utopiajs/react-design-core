import classNames from 'classnames';
import React, { useContext, type FC } from 'react';
import { ConfigContext } from '../config-provider';
import type { SizeType } from '../config-provider/SizeContent';
import SizeContext from '../config-provider/SizeContent';
import './style/index.less';

export interface CopyRightProps {
  prefixCls?: string;
  name: string;
  className?: string;
  size?: SizeType;
}

const CopyRight: FC<CopyRightProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    name = '',
    size: customizeSize,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const size = React.useContext(SizeContext);

  // size
  const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
  const sizeFullname = customizeSize || size;
  const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';

  const prefixCls = getPrefixCls('copy-right', customizePrefixCls);

  const classes = classNames(
    prefixCls,
    { [`${prefixCls}-${sizeCls}`]: sizeCls },
    className,
  );
  return <p className={classes}>{`©${new Date().getFullYear()} ${name}`}</p>;
};

export default CopyRight;
