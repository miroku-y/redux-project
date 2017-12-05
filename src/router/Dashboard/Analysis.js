import React from 'react'
import styles from './Anaylsis.less'
import Title from '../../components/commont/Title'
import echarts from 'echarts'
import '../../../node_modules/echarts/map/js/china'
// import bmap from 'echarts/extension/bmap/bmap';
// import ReactEcharts from 'echarts-for-react'; 
import {oneLeftOptions} from '../../components/commont/Options'

class Analysis extends React.Component{
    componentDidMount(){
        const oneLeftChart = echarts.init(document.getElementById('floor_one_left'));
        const oneRightChart = echarts.init(document.getElementById('floor_one_right'));
        // console.log(oneLeftOptions,'99999');
        oneLeftChart.setOption(oneLeftOptions,true);
        
        var oneRightOption = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };
        
        setInterval(function () {
            oneRightOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            oneRightChart.setOption(oneRightOption, true);
        },2000);
    }
    render(){
        return(
            <div className={styles.analysis}>
                <Title text="分析页面！！！"/>
                <div className={styles.echarts}>
                    <div className={styles.floor_one}>
                        <div className={styles.floor_one_left} id="floor_one_left"></div>
                        {/* <ReactEcharts 
                            className={styles.floor_one_left}
                            option={oneLeftOptions}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                        /> */}
                        <div className={styles.floor_one_right} id="floor_one_right"></div>
                    </div>
                    <div className={styles.floor_two}></div>
                </div>
            </div>
        )
    }
}
export default Analysis;