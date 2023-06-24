import { Flex, Text } from "@mantine/core"

export interface MenuItemProps {
  icon: React.ReactNode,
  text: string,
  onClick?: () => void
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => {
  return <Flex align='center' p={8} gap={8} sx={{ cursor: 'pointer' }} onClick={() => onClick && onClick()}>
    {icon}
    <Text color='white' w='6rem'>{text}</Text>
  </Flex>
}