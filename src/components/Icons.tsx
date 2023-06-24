import Image from 'next/image'

export interface IconProps {
  width?: number;
  height?: number;
}

export const Logo: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/logo.svg' alt="Logo Icon" width={width} height={height} />
}

export const Memo: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/memo.svg' alt="Memo Icon" width={width} height={height} />
}

export const Challenge: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/challenge.svg' alt="Challenge Icon" width={width} height={height} />
}

export const Info: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/info.svg' alt="Info Icon" width={width} height={height} />
}

export const Menu: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/menu.svg' alt="Menu Icon" width={width} height={height} />
}

export const Knife: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/knife.svg' alt="Knife Icon" width={width} height={height} />
}

export const Cup: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return <Image src='/cup.svg' alt="Cup Icon" width={width} height={height} />
}