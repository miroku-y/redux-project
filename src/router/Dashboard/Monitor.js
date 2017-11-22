import React from 'react'
import styles from './Monitor.less'
import Title from '../../components/commont/Title'

class Monitor extends React.Component{
    render(){
        return(
            <div className={styles.monitor}>
                <Title text="监控页面！！！"/>
                
            </div>
        )
    }
}
export default Monitor;