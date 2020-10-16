import React from "react";

function About() {
  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img
            className='profile-pic'
            src='images/profilepic.jpg'
            alt='profile pic'
          />
        </div>
        <div className='nine columns main-col'>
          <h2>About Me</h2>
          <p>
            My name is Ashley Lerma often called by my middle name, Scout.
            Outside of work and class, I am a full time cat mom with a passion
            for travel and the outdoors. I am also one of the lucky few to be
            born, raised and based in the wonderful city of Austin, Texas. With
            years of experience working in a fast-paced enviorment where every
            detail matters, I am excited to grow my skills in this new endeavor.
          </p>
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>Ashley Lerma</span>
                <br />
                <span>Austin, TX 78741</span>
                <br />
                <span>(512)636-3282</span>
                <br />
                <span>lerma.scout@gmail.com</span>
              </p>
            </div>
            <div className='columns download'>
              <p>
                <a
                  target='blank'
                  href='https://drive.google.com/file/d/1yqm-7zoOtKFR2wpOrcLn1n43C9lMZVBZ/view?usp=sharingf'
                  download='AshleyLermaResume'
                  className='button'
                >
                  <i className='fa fa-download' />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
