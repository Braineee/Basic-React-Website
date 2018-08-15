import React, { Component } from 'react';
import Navbar from '../components/Navabar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import '../css/About.css';

class About extends Component {
    render(){
        return(
            <div>
                <Navbar title="React Website"/>
                <Jumbotron headline="About!"/>
                <main className="container">
                    <h5>About</h5>
                    <p className="justify">
                        Cool Fancy Text Generator is a copy and paste font generator and font changer that creates Twitter, Facebook, 
                        Instagram fonts. It converts a normal text to different free cool fonts styles, such as tattoo fonts, calligraphy fonts, 
                        web script fonts, cursive fonts, handwriting fonts, old English fonts, word fonts, pretty fonts, font art... Facebook, Twitter, 
                        Instagram Fonts or Fonts for Instagram, Twitter, Facebook - If that is what you want then this tool is a perfect place to go because 
                        it provides more than that!
                        Basically, Cool Text Generator a cute copy and paste font generator online, font maker, font creator, font changer, special text maker, 
                        stylish text generator, weird text generator, word art generator, fancy letter generator, webfont generator, signature maker, signature 
                        creator, free text symbols generator, logo animation maker, font manager... This tool helps generate text symbols, cool Unicode fancy 
                        letters, fancy writing, fancy fonts, stylish fonts, cool symbols, cool symbol text, emoji, fancy letters, letter fonts, funky cool 
                        text, fancy chat message, fancy facebook status, fancy nick, love text, beautiful ASCII text art, text pictures, emoticons, emoji
                        text... with different serif, sans-serif font types.
                        Fancy Text Generator is fun and handy, just copy these stylish beautiful design text and paste them anywhere such as in Facebook,
                        Twitter, Whatsapp, Snapchat, Instagram Bio... with fancy fonts and impress your friends. If you are on mobile, you can also check 
                        out the fancy text ios app and fancy text android app.
                    </p>
                    
                </main>
                <Footer/>
            </div>
        );
    }
} 

export default About;