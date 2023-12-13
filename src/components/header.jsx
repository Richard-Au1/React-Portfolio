// imports
import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './navigation'

export default function Header() {
    return (
        <Navigation
            links={[
            <Link key={1} to='/'>About Me</Link>,
            <Link key={2} to='/portfolio'>Portfolio</Link>,
            <Link key={3} to='/resume'>Resume</Link>,
            <Link key={4} to='/contact'>Contact</Link>,
            ]}/>
    );
};