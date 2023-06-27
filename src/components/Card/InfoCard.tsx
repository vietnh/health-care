import { Paper, PaperProps, Space, Text, createStyles } from "@mantine/core"
import Inter from "@/components/Text/Inter"

const useStyles = createStyles((theme) => ({
  root: {
    border: '2px solid',
    borderColor: '#707070'
  }
}));

export interface InfoCardProps extends PaperProps {
  title?: string[];
  content: string[];
}


const InfoCard: React.FC<InfoCardProps> = ({ title = [], content = [], ...others }) => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.root} {...others}>
      {title.map((t, index) => (<Inter fz={18} fw={400} key={index}>{t}</Inter>))}
      <Space h={8} />
      {content.map((c, index) => (<Text fz={12} fw={400} key={index}>{c}</Text>))}
    </Paper>
  )
}

export default InfoCard;