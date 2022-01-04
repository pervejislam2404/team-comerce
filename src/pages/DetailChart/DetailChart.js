import React from 'react';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Legend,
    ComposedChart,
    CartesianGrid,
    XAxis,
    Tooltip,
    Area,
    Line,
    YAxis,
    Bar
} from 'recharts';

const data = [
  { name: 'products', value: 553 },
  { name: 'Sales', value: 4920 },
  { name: 'Delivery', value: 3899 },
  { name: 'Increase', value: '25%'},
  // { name: 'Group D', value: 200 },
  // { name: 'Group D', value: 200 },
  // { name: 'Group D', value: 200 },
];


const anotherData = [
  {
    year: '2016',
    growth: 590,
    sale: 800,
    average: 700,
  },
  {
    year: '2017',
    growth: 768,
    sale: 967,
    average: 1206,
  },
  {
    year: '2018',
    growth: 1397,
    sale: 1098,
    average: 1089,
  },
  {
    year: '2019',
    growth: 1480,
    sale: 1200,
    average: 1228,
  },
  {
    year: '2020',
    growth: 1520,
    sale: 1608,
    average: 1400,
  },
  {
    year: '2021',
    growth: 2000,
    sale: 1960,
    average: 1960,
  },
];


const DetailChart = () => {
    return (
      <div className="overflow-hidden p-5">
        <div className="row ">
            <div className="col-12 col-md-12 col-lg-5">
              <div style={{ width: '95%', height: 350 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie dataKey="value" data={data} fill="#125D98" label />
                    <Legend/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

        {/* another-one-chart */}

       <div className="col-12 col-md-12 col-lg-7">
           <div style={{ width: "95%", height: 350 }}>
              <ResponsiveContainer>
                <ComposedChart
                  width={500}
                  height={400}
                  data={anotherData}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="year" scale="band" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="average" fill="#8884d8" stroke="#8884d8" />
                  <Bar dataKey="sale" barSize={25} fill="#34BE82" />
                  <Line type="monotone" dataKey="growth" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
       </div>
        </div>
        </div>
    );
};

export default DetailChart;