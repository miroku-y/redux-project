import React from 'react'
import styles from './BasicTable.less'
import Mock from 'mockjs'
import Title from '../../components/commont/Title'

class BasicTable extends React.Component{
    state = {
        result:{}
    }
    componentWillMount(){
        // const result = Mock.mock(
        //     'http://table/list',{
        //         "username":'@name',
        //         "content":'@cparagraph()',
        //         "age|0-12":'12',
        //         "age|0-1":'1',
        //         "date"     : "@date('yyyy-MM-dd')",
        //         "content":'是'
        //     }
        // )
        const result = Mock.mock({
            "list|10":[
                {
                    "id|+1":1,
                    "describe":'@cparagraph(true)',
                    "count|0-12":'1',
                    "status":Mock.Random.integer(0, 1),
                    "date":'@date("yyyy-mm-dd")',
                    "content":'是'
                }
            ]
        })
        this.setState({
            result:result,
        });
    }
    returnLi = (item) => {
    }
    render(){
        return(
            <div className={styles.basicTable}>
                <Title text="基础表格页面！！！"/>
                <div className={styles.table}>
                    <ul className={styles.table_header}>
                        <li><span>规则编号</span></li> 
                        <li><span>描述</span></li>
                        <li><span>服务调用次数</span></li>
                        <li><span>状态</span></li>
                        <li><span>更新时间</span></li>
                        <li><span>操作</span></li>
                    </ul>
                    {
                        this.state.result.list.map((item,index) => (
                            <ol className={styles.table_body} key={item.id}>
                                <li><span>{item.id}</span></li>
                                <li><span>{item.describe}</span></li>
                                <li><span>{item.count}</span></li>
                                <li><span>{item.status}</span></li>
                                <li><span>{item.date}</span></li>
                                <li><span>{item.content}</span></li>
                            </ol>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default BasicTable;