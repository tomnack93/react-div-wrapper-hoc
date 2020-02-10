import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import divWrapperHoC from '../main';

configure({ adapter: new Adapter() });

describe('<divWrapperHoc />', () => {

  it('should render div only when divClassName props is passed to', () => {
    const WrappedComponent = divWrapperHoC(() => <span />);

    const rendered = mount(
      <WrappedComponent />
    );

    expect(rendered.getDOMNode().tagName).toBe('SPAN');
    expect(rendered.childAt(0).hasClass('extraClass')).toBeTruthy;
  });

  it('should render base component when divClassName props is not passed to', () => {
    const WrappedComponent = divWrapperHoC(() => 
      <span id={'target'} className={'baseClass'}></span>
    );

    const rendered = mount(
      <WrappedComponent divClassName={'extraClass'} />
    );

    expect(rendered.getDOMNode().tagName).toBe('DIV');
    expect(rendered.childAt(0).hasClass('extraClass')).toBeTruthy;
  });
});
