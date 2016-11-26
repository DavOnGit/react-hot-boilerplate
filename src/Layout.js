import styles from './css/layout.css';
import React from 'react';

export default function Layout({ children }) {
    return (
        <div className={ styles.root }>
            <h1 className={ styles.text }>Hello, world!</h1>
            {children}
        </div>
  )
}
