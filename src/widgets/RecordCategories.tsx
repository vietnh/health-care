import SmallButton from "@/components/Button/Small"
import { ImageCard } from "@/components/Card/ImageCard"
import Inter from "@/components/Text/Inter"
import { colors } from "@/theme"
import { Flex } from "@mantine/core"

const RecordCategories = () => {
  return (
    <Flex justify='center' align='stretch' gap={48}>
      <ImageCard imageProps={{
        src: "/my-recommend-1.png",
        alt: 'My Record',
        width: 240,
        height: 240
      }}
        bg={colors.primary[300]}
        p={24}
      >
        <Flex direction='column' align='center' m='auto' gap={5}>
          <Inter fz={25} fw={400} color={colors.primary[300]}>BODY RECORD</Inter>
          <SmallButton w={160} color={colors.primary[400]}>自分のカラダの記録</SmallButton>
        </Flex>
      </ImageCard>
      <ImageCard imageProps={{
        src: "/my-recommend-2.png",
        alt: 'My Record',
        width: 240,
        height: 240
      }}
        bg={colors.primary[300]}
        p={24}
      >
        <Flex direction='column' align='center' m='auto' gap={5}>
          <Inter fz={25} fw={400} color={colors.primary[300]}>MY EXERCISE</Inter>
          <SmallButton w={160} color={colors.primary[400]}>自分の運動の記録</SmallButton>
        </Flex>
      </ImageCard>
      <ImageCard imageProps={{
        src: "/my-recommend-3.png",
        alt: 'My Record',
        width: 240,
        height: 240
      }}
        bg={colors.primary[300]}
        p={24}
      >
        <Flex direction='column' align='center' m='auto' gap={5}>
          <Inter fz={25} fw={400} color={colors.primary[300]}>MY DIARY</Inter>
          <SmallButton w={160} color={colors.primary[400]}>自分の日記</SmallButton>
        </Flex>
      </ImageCard>
    </Flex>
  )
}

export default RecordCategories;