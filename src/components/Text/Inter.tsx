import { inter } from "@/app/fonts";
import { Text, TextProps } from "@mantine/core";

const Inter: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text {...props} className={inter.className}>
      {children}
    </Text>
  );
}

export default Inter;