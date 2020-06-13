import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import profile from "../assets/PP512.png";


class Resume extends Component {
  componentDidMount() {
    document.title = "Resume";
  }
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}} className="resume_Avatar">
              <img
                src={ profile }
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0em'}}>Omar Farooq Shah</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi there, My name is <span style={{fontSize: '15px', fontWeight: "bolder"}}>Omar</span>. I make wesbites. I live in Pakistan but I call many places my home. A palm reader in Pakistan once told me I will live the life of a magical gypsy and it's important for the world that I tell the stories of the many people I encounter on my journeys. That's what I am doing. As you are here, I want to confess something; Michael Keaton was my favourite Batman and Toyota Supra is overrated.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5 style={{fontWeight: "bolder"}}>Address</h5>
            <p>House #2, Mohsin Town, Dera Ghazi Khan</p>
            <h5>Phone</h5>
            <p>92 335 123 0333</p>
            <h5 style={{fontWeight: "bolder"}}>Email</h5>
            <p>oamrfarooqshah100@gmail.com</p>
            <h5 style={{fontWeight: "bolder"}}>Web</h5>
            <a href="https://cv-omar.web.app/" target="_blank">https://cv-omar.web.app/</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="COMSATS University, Islamabad"
              schoolDescription="I studied BS SOFTWARE ENGINEERING in this University for 4 year and still dont know how to center DIV in CSS. Later I went to Udemy and as of today I have strong skills on CSS, SaSS, ReactJs (Front-End). PS: My CGPA was 2.43 / 4"
               />

               <Education
                 startYear={2015}
                 endYear={"Continue"}
                 schoolName="Udemy, Youtube, StackOverflow, Github, Google, Coursera"
                 schoolDescription="These 6 platforms are my Alma Mater"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Wordpress Theme Development / Customization"
              jobDescription="I coded Responsive Wordpress Themes and added custom code to existing theme files."
              />

              <Experience
                startYear={2018}
                endYear={"Continue"}
                jobName="React Applications"
                jobDescription="I developed Dashboards for Companies and Landing Page for Startups using ReactJs."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="ReactJs"
                progress={92}
                />
                <Skills
                  skill="SaSS/CSS"
                  progress={95}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="Web Designing"
                      progress={87}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
