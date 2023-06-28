import { Box } from "@mantine/core";
import { Circle } from "./Circle";
import { Info } from "./Info";
import Inter from "../Text/Inter";

export interface IconWithNotificationProps {
  icon: React.ReactNode;
  notificationCount: number;
}

export const IconWithNotification = ({
  icon,
  notificationCount,
}: IconWithNotificationProps) => {
  return (
    <Box pos="relative">
      {icon}
      <Circle
        width={16}
        height={16}
        style={{
          position: "absolute",
          top: -4,
          right: -4,
        }}
      />
      <Inter
        fz={10}
        color="white"
        style={{
          position: "absolute",
          top: -3,
          right: 2,
        }}
      >
        {notificationCount}
      </Inter>
    </Box>
  );
};