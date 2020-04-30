import { ResponsiveBar } from '@nivo/bar'

const colors = {
  'total_cases': '#b2b2b2',
  'active_cases': '#f09040',
  'recovered': '#25dd44',
  'deaths': '#ee1212'
}

const NgBarChart = ({ data, maxValue }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={[ 'total_cases', 'active_cases', 'recovered', 'deaths', ]}
      indexBy="state_name"
      margin={{ top: 20, right: 130, bottom: 80, left: 60 }}
      padding={0.3}
      minValue={0}
      maxValue={maxValue || 100}
      groupMode="grouped"
      layout="vertical"
      enableGridX={false}
      enableGridY={true}
      // colors={{ scheme: 'nivo' }}
      colors={bar => colors[bar.id]}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'total_cases'
          },
          id: 'total_cases'
        },
        {
          match: {
            id: 'active_cases'
          },
          id: 'active_cases'
        }
      ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 45,
        legend: 'state',
        legendPosition: 'middle',
        legendOffset: 60
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: 'case',
        legendPosition: 'middle',
        legendOffset: -50
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

export default NgBarChart
