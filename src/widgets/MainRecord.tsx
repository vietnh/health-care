import ContainerCard from "@/components/Card/ContainerCard";
import LineChart from "@/components/Chart/Line";
import useGetChartData from "@/hooks/useGetChartData";

const MainRecord: React.FC = () => {
  const data = useGetChartData("month");

  return (
    <ContainerCard w={740} h={316} py={12} px={48}>
      <LineChart
        data={data}
        period="month"
        margin={{ top: 0, right: 50, bottom: 30, left: 10 }}
      />
    </ContainerCard>
  );
};

export default MainRecord;
