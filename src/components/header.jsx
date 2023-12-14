// imports
import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './navigation'

export default function Header() {
    return (
        <Navigation 
            links={[
            <Link style={{margin: '20px'}} key={1} to='/'>About Me</Link>,
            <Link style={{margin: '20px'}} key={2} to='/portfolio'>Portfolio</Link>,
            <Link style={{margin: '20px'}} key={3} to='/resume'>Resume</Link>,
            <Link style={{margin: '20px'}} key={4} to='/contact'>Contact</Link>,
            ]}/>
    );
};