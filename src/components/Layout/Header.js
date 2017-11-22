import React from 'react'
import styles from './Layout.less'
import elk from '../../images/elk.png'

class Header extends React.Component{
    render(){
        return(
            <div className={styles.header}>
                <div className={styles.auths}>
                    <b>
                        <img src={elk}/>
                    </b>
                    <span>Auth</span>
                </div>
            </div>
        )
    }
}
export default Header;