import React from 'react'
import styles from './Title.less'

const Title = (text) => {
    return (
        <h5 className={styles.text}>{text.text}</h5>
    )
}
export default Title;