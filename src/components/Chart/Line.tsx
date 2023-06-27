import { colors } from "@/theme";
import { LineSvgProps, ResponsiveLine } from "@nivo/line";

const LineChart: React.FC<LineSvgProps> = ({ data, margin, ...others }) => (
  <ResponsiveLine
    data={data}
    colors={{ datum: "color" }}
    margin={margin}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    gridXValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
    axisBottom={{
      tickSize: 5,
      tickPadding: 4,
      tickRotation: 0,
      format: (value: number) => `${value}月`,
    }}
    axisLeft={null}
    enableGridY={false}
    pointSize={8}
    useMesh={true}
    theme={{
      grid: {
        line: {
          stroke: colors.gray[400],
          strokeWidth: 1,
        },
      },
      textColor: "white",
      fontFamily: "Noto Sans JP",
      fontSize: 12,
      tooltip: {
        container: {
          color: colors.dark[600],
        },
      },
    }}
    {...others}
  />
);

export default LineChart;