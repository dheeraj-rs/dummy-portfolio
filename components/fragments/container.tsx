import "../../styles/components/container.scss";

interface ContainerProps {
  align?: string;
  flex?: string;
  justify?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
  column?: boolean;
  row?: boolean;
  theme?: {
    bgColor?: string;
    alignItem?: string;
    justifyContent?: string;
  };
  props?: any;
}

const Container: React.FC<ContainerProps> = ({
  align,
  flex,
  justify,
  padding,
  margin,
  column,
  row,
  width,
  fullWidth,
  height,
  fullHeight,
  children,
  ...props
}) => {
  const classNames = [
    'container',
    column && 'container--column',
    row && 'container--row',
    fullWidth && 'container--full-width',
    fullHeight && 'container--full-height'
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classNames}
      data-flex={flex}
      data-align={align}
      data-justify={justify}
      data-padding={padding}
      data-margin={margin}
      data-width={width}
      data-height={height}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;