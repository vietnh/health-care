import Image from "next/image";

const DEFAULT_ICON_SIZE = 32;

interface BaseIconProps {
  name: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface IconProps extends Omit<BaseIconProps, "name"> {}

export const BaseIcon = ({
  name,
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  ...others
}: BaseIconProps) => {
  return (
    <Image
      src={`/${name}.svg`}
      alt={`${name} icon`}
      width={width}
      height={height}
      {...others}
    />
  );
};
