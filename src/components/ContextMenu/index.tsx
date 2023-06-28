import { colors } from "@/theme";
import { Menu, MenuProps, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  dropdown: {
    border: "none",
    borderRadius: 0,
    padding: 0,
    backgroundColor: colors.gray[400],
  },
  item: {
    height: 72,
    fontSize: 18,
    paddingLeft: 32,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: colors.primary[300],
    },
  },
  divider: {
    margin: 0,
    backgroundColor: colors.dark[600],
    height: 3,
    opacity: 0.25,
  },
}));

export interface ContextMenuItemProps {
  label: string;
  onClick?: () => void;
}

export interface ContextMenuProps extends MenuProps {
  target: React.ReactNode;
  items: ContextMenuItemProps[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  target,
  items,
  ...others
}) => {
  const { classes } = useStyles();

  return (
    <Menu {...others} classNames={classes}>
      <Menu.Target>{target}</Menu.Target>

      <Menu.Dropdown>
        {items.map((item) => (
          <>
            <Menu.Item key={item.label} color="white" onClick={item.onClick}>
              {item.label}
            </Menu.Item>
            <Menu.Divider />
          </>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ContextMenu;
