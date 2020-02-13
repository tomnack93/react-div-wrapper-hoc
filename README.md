# react-div-wrapper-hoc
skinny-thin component wrapper hoc for atomic design

## usage
`react-div-wrapper-hoc` generates wrapped component with props named `divClassName` .
when this props was passed to, original DOM will be wrapped with extra <div> tag with given className.
this might help you in case you need to reuse component with additional styling behaviour.

```tsx
import * as React from 'react';
import divWrapperHoC from 'react-div-wrapper-hoc';

const Component = (props: Props): JSX.Element => {
  <span />
}

const WrappedComponent = divWrapperHoC(Component);

() => <WrappedComponent divClassName='addedClass'>
/*
 * this renders
 * <div class='addedClass'>
 *   <span></span>
 * </div>
 */
```
