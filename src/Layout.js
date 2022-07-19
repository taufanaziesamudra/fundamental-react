import React from 'react'
import logo from './logo.svg';

const Layout = (props) => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React QUBISA</h1>
            </header>
            <main className='App-body'>{props.children}</main>
            <footer className='App-footer'>
                <div className='link'>
                    <a href='https://github.com/taufanaziesamudra'>
                        <img
                            width={24}
                            height={24}
                            src="https://img.icons8.com/metro/26/000000/github.png"
                            alt=""
                        ></img>
                        Github
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Layout