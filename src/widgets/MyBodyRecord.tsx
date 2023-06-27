import ContainerCard from "@/components/Card/ContainerCard";
import Inter from "@/components/Text/Inter";

const MyBodyRecord: React.FC = () => {
  return (
    <ContainerCard w={960} h={304} px={32} py={16}
      title={[
        <Inter fz={15} w={96} sx={{ lineHeight: '18px' }}>BODY RECORD</Inter>,
        <Inter fz={22} sx={{ lineHeight: '27px' }}>2021.05.21</Inter>
      ]}>
    </ContainerCard>
  );
}

export default MyBodyRecord;