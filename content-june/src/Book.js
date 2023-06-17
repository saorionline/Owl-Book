import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Demo = [
    {
        Url: '/business-consulting',
        Image:  './images/demo/business-consulting.png',
        Title: 'Story 1'
    },
    {
        Url: '/business-consulting-2',
        Image:  './images/demo/business-consulting-2.png',
        Title: 'Story 2'
    },
    {
        Url: '/corporate',
        Image:  './images/demo/corporate.png',
        Title: 'Story 3'
    }    
]

const Book = () => {
    return (
        <>
            <main className ='page-wrapper'>
                <Header/>
            </main>
        </>
    )
}

export default Book;