import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from "../assets/PP512.png";

class Landing extends Component {

  componentDidMount() {
    document.title = "Omar's Proftfolio";
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src={profile}
                alt="avatar"
                className="avatar-img"
              />

              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr />

                <p>HTML/CSS | SaSS | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                <div className="social-links">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/muhammad-omar-farooq-shah-752448121/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="https://github.com/omarshah0" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  {/* Freecodecamp */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                  </a>

                  {/* Youtube */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default Landing;
