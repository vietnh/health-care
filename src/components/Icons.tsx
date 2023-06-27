import Image from 'next/image'

const DEFAULT_ICON_SIZE = 32;

interface BaseIconProps {
  name: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export interface IconProps extends Omit<BaseIconProps, 'name'> { }

const BaseIcon = ({ name, width = DEFAULT_ICON_SIZE, height = DEFAULT_ICON_SIZE, ...others }: BaseIconProps) => {
  return <Image src={`/${name}.svg`} alt={`${name} icon`} width={width} height={height} {...others} />
}

export const Logo: React.FC<IconProps> = (props) => {
  return <BaseIcon name='logo' {...props} />
}

export const Memo: React.FC<IconProps> = (props) => {
  return <BaseIcon name='memo' {...props} />
}

export const Challenge: React.FC<IconProps> = (props) => {
  return <BaseIcon name='challenge' {...props} />
}

export const Info: React.FC<IconProps> = (props) => {
  return <BaseIcon name='info' {...props} />
}

export const Menu: React.FC<IconProps> = (props) => {
  return <BaseIcon name='menu' {...props} />
}

export const Knife: React.FC<IconProps> = (props) => {
  return <BaseIcon name='knife' {...props} />
}

export const Cup: React.FC<IconProps> = (props) => {
  return <BaseIcon name='cup' {...props} />
}

export const Scroll: React.FC<IconProps> = (props) => {
  return <BaseIcon name='scroll' {...props} />
}