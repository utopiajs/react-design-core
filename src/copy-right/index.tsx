import classNames from 'classnames';
import React, { useContext, type FC } from 'react';
import { ConfigContext } from '../config-provider';
import './style/index.less'

export interface CopyRightProps {
  prefixCls?: string;
  name?: string;
  className?: string;
}

const CopyRight: FC<CopyRightProps> = (props) => {
  const { prefixCls: customizePrefixCls, className } = props;
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('copy-right', customizePrefixCls);

  const classes = classNames(prefixCls, className);
  return <p className={classes}>{`©${new Date().getFullYear()} ${props.name}`}</p>;
};

export default CopyRight;
