import Inter from "@/components/Text/Inter";
import { colors } from "@/theme";
import { Card, Divider, Flex, Text } from "@mantine/core";

const RecommendedCategories = () => {
  return (
    <Flex justify="center" align="stretch" gap={32} px={8} py={24}>
      <Category title="RECOMMENDED COLUMN" content="オススメ" />
      <Category title="RECOMMENDED DIET" content="ダイエット" />
      <Category title="RECOMMENDED BEAUTY" content="美容" />
      <Category title="RECOMMENDED HEALTH" content="健康" />
    </Flex>
  );
};

const Category: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <Card bg={colors.dark[600]} radius={0} w={216} h={144}>
      <Flex direction="column" align="center" m="auto" gap={8}>
        <Inter align="center" fz={22} color={colors.primary[300]}>
          {title}
        </Inter>
        <Divider color="white" w={56} />
        <Text fz={18} color="white">
          {content}
        </Text>
      </Flex>
    </Card>
  );
};

export default RecommendedCategories;
