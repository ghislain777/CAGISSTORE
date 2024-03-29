import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { useTheme } from '@material-ui/core/styles'

const Graphe = ({ height = 400, lasource ={label: [], data:[]}  }) => {

 lasource.data.unshift(lasource.label)
    const s = lasource.data
    console.log(lasource.data)
    const { palette } = useTheme()

    const option = {
        grid: {
            left: '6%',
            bottom: '10%',
            right: '1%',
        },
        legend: {
            //data: "Female",
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        color: [
            palette.primary.dark,
            palette.primary.light,
            palette.secondary.light,
            palette.error.light,
        ],
        barMaxWidth: '10px',
        tooltip: {},
        title: {
           // text: lasource.label[1],
           // subtext: lasource.label[1],
            textAlign: "center",
            left: "5%"
          },
        dataset: {
            // source: [
            //     ['Month', 'Sites internets', 'App', 'Linux', 'Windows'],
            //     ['Jan', 2200, 1200, 950, 800],
            //     ['Feb', 800, 500, 1500, 600],
            //     ['Mar', 700, 1350, 800, 700],
            //     ['Apr', 1500, 1250, 950, 900],
            //     ['May', 2450, 450, 950, 500],
            //     ['June', 1700, 1250, 1500, 800],
            // ],

            source: s

        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            // {
            //     type: 'bar',
            //     itemStyle: {
            //         barBorderRadius: [10, 10, 0, 0],
            //     },
            // },
            // {
            //     type: 'bar',
            //     itemStyle: {
            //         barBorderRadius: [10, 10, 0, 0],
            //     },
            // },
            // {
            //     type: 'bar',
            //     itemStyle: {
            //         barBorderRadius: [10, 10, 0, 0],
            //     },
            // },
        ],
    }

    return <ReactEcharts style={{ height: height }} option={option} />
}

export default Graphe
