---
nav:
  title: 组件
  order: 1
group:
  title: 其它
  order: 3
---

# ConfigProvider

为组件提供统一的全局化配置。

### 使用

ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```jsx
import React from 'react';
import { ConfigProvider, CopyRight } from '@utopia/react-design-core';

export default () => (
  <ConfigProvider componentSize='small'>
    <CopyRight name='utopia' />
  </ConfigProvider>
);
```
