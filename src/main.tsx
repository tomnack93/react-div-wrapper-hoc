import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface StyleProps {
  divClassName?: string;
}

export default <OriginalProps extends {}>(
    WrappedComponent: React.ComponentType<OriginalProps>
  ) => {
    type Props = OriginalProps & StyleProps;

    return class ExtraStyleHOC extends React.Component<Props, {}> {
      constructor(props: Props) {
        super(props);
      }

      public render(): JSX.Element {
        const divClassName = this.props.divClassName;
        return (
          divClassName
            ? <div className={divClassName}>
                <WrappedComponent {...this.props}/>
              </div>
            : <WrappedComponent {...this.props}/>
        );
      }
    };
  };
