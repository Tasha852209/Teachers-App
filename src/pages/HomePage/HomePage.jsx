import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHomeSection, SubmitHeroButton } from './HomePage.styled';
import HeroImage from '../../assets/hero-img.png';

const HomePage = () => {
  return (
    <StyledHomeSection>
      <div className="hero-wrap">
        <div className="hero-content">
          <h1 className="title">
            Unlock your potential with the best{' '}
            <span className="painted">language</span> tutors
          </h1>
          <p className="hero-text">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <NavLink to="/teachers">
            <SubmitHeroButton>Get started</SubmitHeroButton>
          </NavLink>
        </div>
        <img className="hero-img" src={HeroImage} alt="Hero" />
      </div>
      <div className="results">
        <div className="results-item">
          <p className="item-number">32,000&nbsp;+</p>
          <p className="item-text">Experienced tutors</p>
        </div>
        <div className="results-item">
          <p className="item-number">300,000&nbsp;+</p>
          <p className="item-text">5-star tutor reviews</p>
        </div>
        <div className="results-item">
          <p className="item-number">120&nbsp;+</p>
          <p className="item-text">Subjects taught</p>
        </div>
        <div className="results-item">
          <p className="item-number">200&nbsp;+</p>
          <p className="item-text">Tutor nationalities</p>
        </div>
      </div>
    </StyledHomeSection>
  );
};

export default HomePage;
