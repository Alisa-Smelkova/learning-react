import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Ok, today I start learning React</h1>
        <p>This is my first website built with React and Gatsby. This is the hero banner and a pretty stupid text in it.</p>
        <Link to="/page-2/">That's it for now</Link>
        <div className="Logos">
          <img src={require('../images/logo.png')} width='50'/>
          <img src={require('../images/logo.png')} width='50'/>
          <img src={require('../images/logo.png')} width='50'/>
          <img src={require('../images/logo.png')} width='50'/>
          <img src={require('../images/logo.png')} width='50'/>
          <img src={require('../images/logo.png')} width='50'/>
        </div>
        <svg width="100%" height="496" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" 
            
            values="M260.25 12.75L0.25 272.75V545.643H1465.25V146.5L1405.25 86.5L1285.88 205.875L1196.5 116.5L1090.25 222.75L867.75 0.25L645.25 222.75L550.875 128.375L463.375 215.875L260.25 12.75Z;

            M201.813 110.064L0.365417 382.564V655.457H1465.37V256.314L1322.14 0.691447L1209.81 284.469L1112.27 154.404L988.113 315.689L787.104 110.064L550.623 315.689L473.766 178.052L352.57 315.689L201.813 110.064Z;

            M260.25 12.75L0.25 272.75V545.643H1465.25V146.5L1405.25 86.5L1285.88 205.875L1196.5 116.5L1090.25 222.75L867.75 0.25L645.25 222.75L550.875 128.375L463.375 215.875L260.25 12.75Z
            "
            />
          </path>
        </svg>

      </div>
    </div>
    <div className="Cards">
      <h2>Big title for cards components</h2>
      <div className="CardGroup">
        <Card 
          title="Wow-wow I can change component with props!"
          text="And this too!"
          image={require('../images/1.png')} />

        <Card 
          title="And this is reusable!"
          text="Impressive!"
          image={require('../images/2.png')} />

        <Card 
          title="Today life became easier!"
          text="Simple text!"
          image={require('../images/3.png')} />

        <Card 
          title="Lazy to change it!"
          text="Origato!"
          image={require('../images/4.png')} />
      </div>
    </div>
  </div>
)

export default IndexPage



