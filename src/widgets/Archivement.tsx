import Inter from "@/components/Text/Inter"
import { formatDate } from "@/utils/date"
import { Box, Flex, RingProgress } from "@mantine/core"

const Archivement = () => {
  return <Box w={540} h={316} sx={{
    backgroundImage: `url('/d01.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Flex align='center'>
      <RingProgress
        size={180}
        thickness={4}
        sections={[
          { value: 75 , color: 'white' },
          { value: 25, color: 'transparent' },
        ]}
        label={
          <Inter size={18} fw={400} color='white' align="center" sx={{ pointerEvents: 'none', textShadow: '0px 0px 6px #fca500', letterSpacing: 0, lineHeight: 30 }}>
            {formatDate(new Date, "MM/DD")} <Inter span size={25}>75%</Inter>
          </Inter>
        }
      />
    </Flex>
  </Box>
}

export default Archivement;