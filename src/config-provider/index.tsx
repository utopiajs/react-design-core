import React, { type FC } from 'react';
import { useMemo } from '../_util/useMemo';
import { ConfigConsumer, ConfigConsumerProps, ConfigContext } from './context';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface ConfigProviderProps {
  sizeContext?: SizeType;
  prefixCls?: string;
  children?: React.ReactNode;
}

export { ConfigContext };

interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
}

const ProviderChildren: React.FC<ProviderChildrenProps> = (props) => {
  const { children, parentContext } = props;
  let childNode = children;

  const getPrefixCls = React.useCallback(
    (suffixCls?: string, customizePrefixCls?: string) => {
      const { prefixCls } = props;

      if (customizePrefixCls) return customizePrefixCls;

      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');

      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    },
    [parentContext.getPrefixCls, props.prefixCls],
  );

  const config = {
    ...parentContext,
    getPrefixCls,
  };

  const memoedConfig = useMemo(
    () => config,
    config,
    (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig) as Array<keyof typeof config>;
      const currentKeys = Object.keys(currentConfig) as Array<
        keyof typeof config
      >;
      return (
        prevKeys.length !== currentKeys.length ||
        prevKeys.some((key) => prevConfig[key] !== currentConfig[key])
      );
    },
  );

  return (
    <ConfigContext.Provider value={memoedConfig}>
      {childNode}
    </ConfigContext.Provider>
  );
};

const ConfigProvider: FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
} = (props) => {
  return (
    <ConfigConsumer>
      {(context) => <ProviderChildren parentContext={context} {...props} />}
    </ConfigConsumer>
  );
};

ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;
