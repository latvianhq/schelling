'use client';

import { Area, Bar, ComposedChart, ReferenceDot, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { date: '2021-07-01', mined: 0.3, mining: 0.3 },
  { date: '2021-06-01', mined: 0.4, mining: 0.4 },
  { date: '2021-05-01', mined: 0.6, mining: 0.6 },
  { date: '2021-04-01', mined: 0.9 },
  { date: '2021-03-01', mined: 1.3, commitment: 1.3 },
  { date: '2021-02-01', mined: 1.8 },
  { date: '2021-01-01', mined: 2.4 },
];

// this all is temporary solution for showcase
const miningIndex = data.reduce((acc, cur, index) => (cur.mining ? index : acc), 0);
const commitmentIndex = data.findIndex((d) => d.commitment);
const commitment = data[commitmentIndex].commitment!;

const ticks = [data[0].mined, commitment, data[data.length - 1].mined];

const minedReferenceSegment = [
  { x: data[0].date, y: commitment },
  { x: data[commitmentIndex].date, y: commitment },
];
const miningReferenceSegment = [
  { x: data[miningIndex].date, y: data[0].mining },
  { x: data[miningIndex].date, y: data[miningIndex].mining },
];
const miningReferenceDot = { x: data[miningIndex].date, y: data[miningIndex].mining };

export const Chart = () => {
  return (
    <div className='mt-6'>
      <ResponsiveContainer className='aspect-[1.5/1] md:aspect-auto'>
        <ComposedChart data={data} margin={{ left: 0, top: 20, right: 0, bottom: 20 }}>
          <defs>
            <linearGradient id='colorGradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='rgb(var(--color-primary))' stopOpacity={0.3} />
              <stop offset='95%' stopColor='rgb(var(--color-primary))' stopOpacity={0.01} />
            </linearGradient>

            <linearGradient id='colorGradient2' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='rgb(var(--color-primary))' stopOpacity={0.08} />
              <stop offset='95%' stopColor='rgb(var(--color-primary))' stopOpacity={0.01} />
            </linearGradient>

            <filter id='neonGlow' x='-50%' y='-50%' width='200%' height='200%'>
              <feGaussianBlur stdDeviation='3' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>

            <filter id='neonGlowBar' height='200%' width='500%' x='-200%' y='-100%'>
              <feGaussianBlur stdDeviation='2' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>

          <XAxis
            scale='point'
            dataKey='date'
            axisLine={{ stroke: 'rgb(var(--color-primary))' }}
            opacity={0.5}
            tickLine={false}
            label={{
              value: 'iCoin mined',
              position: 'insideTopRight',
              offset: 12,
              dx: 12,
              fill: 'rgb(var(--color-primary))',
            }}
            tick={<CustomizedXAxisTick />}
          />
          <YAxis
            label={{ value: '$', position: 'top', offset: 10, dx: 30, fill: 'rgb(var(--color-primary))' }}
            domain={['dataMin', 'dataMax']}
            axisLine={{ stroke: 'rgb(var(--color-primary))' }}
            opacity={0.5}
            tickLine={false}
            ticks={ticks}
            tick={<CustomizedYAxisTick />}
          />

          <Area
            type='monotone'
            dataKey='mined'
            strokeWidth={2}
            stroke='rgb(var(--color-primary))'
            filter='url(#neonGlow)'
            fill='url(#colorGradient2)'
          />

          <Area type='monotone' dataKey='mining' stroke='transparent' fill='url(#colorGradient)' />

          <Bar
            label={<BarLabel />}
            dataKey='commitment'
            barSize={2}
            filter='url(#neonGlowBar)'
            fill='rgb(var(--color-primary))'
          />

          <ReferenceLine
            segment={minedReferenceSegment}
            stroke='rgb(var(--color-primary))'
            opacity={0.2}
            strokeDasharray='3 3'
          />

          <ReferenceLine segment={miningReferenceSegment} stroke='rgb(var(--color-primary))' opacity={0.2} />
          <ReferenceDot
            r={6}
            fill='rgb(var(--color-secondary-darker))'
            {...miningReferenceDot}
            strokeWidth={2}
            stroke='rgb(var(--color-primary))'
            filter='url(#neonGlow)'
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizedYAxisTick = (props: any) => {
  const { x, y, payload, index } = props;

  const dy: Record<number, number> = {
    0: 0,
    1: 5,
    2: 10,
  };

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={dy[index]}
        textAnchor='end'
        alignmentBaseline='baseline'
        fill='#fff'
        fillOpacity={index === 1 ? 1 : 0.5}
      >
        ${payload.value}
      </text>
    </g>
  );
};

const CustomizedXAxisTick = (props: any) => {
  const { x, y, payload } = props;

  if (miningIndex !== payload.index) return null;

  return (
    <g transform={`translate(${x},${y})`}>
      <text fontSize={14} x={0} y={0} dy={13.5} textAnchor='middle' fill='#fff' fillOpacity={0.5}>
        <tspan x='0'>Mining</tspan>
        <tspan x='0' dy='1.2em'>
          progress
        </tspan>
      </text>
    </g>
  );
};

const BarLabel = (props: any) => {
  const { x, y, value, height } = props;

  if (!value) return null;

  return (
    <g transform={`translate(${x},${height + y})`}>
      <text fontSize={14} x={0} y={0} dy={22} textAnchor='middle' fill='#fff' fillOpacity={0.5}>
        <tspan x='0'>Capital</tspan>
        <tspan x='0' dy='1.2em'>
          commitments
        </tspan>
      </text>
    </g>
  );
};
