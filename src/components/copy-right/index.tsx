import React, { type FC } from 'react';

const CopyRight: FC<{ name: string }> = (props) => <p>{`copyright(c)${props.name}`}</p>;

export default CopyRight;
