import { colors } from "@/theme";
import { Badge as MantineBag, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, active: boolean) => ({
  root: {
    width: 56,
    height: 24,
    fontSize: 15,
    fontWeight: 300,
    borderRadius: 11,
    backgroundColor: active ? colors.primary[300] : "white",
  },
}));

export interface BadgeProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Badge: React.FC<BadgeProps> = ({ label, active, onClick }) => {
  const { classes } = useStyles(active);
  return (
    <MantineBag
      variant="filled"
      c={active ? "white" : colors.primary[300]}
      onClick={onClick}
      classNames={classes}
    >
      {label}
    </MantineBag>
  );
};

export default Badge;
