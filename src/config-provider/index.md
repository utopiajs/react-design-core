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
import React, { useState } from 'react';
import { ConfigProvider, CopyRight } from '@utopia/react-design-core';

const App = () => {
  const [componentSize, setComponentSize] = useState('middle');

  return (
    <div>
      <button onClick={() => setComponentSize('large')}>large</button>
      <button onClick={() => setComponentSize('middle')}>middle</button>
      <button onClick={() => setComponentSize('small')}>small</button>
      <ConfigProvider componentSize={componentSize}>
        <CopyRight name="utopia" />
      </ConfigProvider>
    </div>
  );
};

export default App;
```

### API

| 参数          | 说明               | 类型                           | 默认值 | 版本 |
| ------------- | ------------------ | ------------------------------ | ------ | ---- |
| componentSize | 设置 antd 组件大小 | `small` \| `middle` \| `large` | -      |      |
