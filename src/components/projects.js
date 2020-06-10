import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  componentDidMount() {
    document.title = "Projects";
  }
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    return (
      <div className= "project_card_wrapper">
        <div className="project_card">
          {/* Project 1 */}
          <Card shadow={10} style={{ minWidth: '450px', margin: 'auto', textAlign: 'center', borderRadius: "10px"}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: "black", textAlign: "center" }}>Archer Fund</CardTitle>
            <CardText>
              A Landing Page for Client's Startup Company.
            </CardText>
            <CardActions border>
              <Button raised accent ripple href="https://archerfund.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="project_card">
          {/* Project 2 */}
          <Card shadow={10} style={{ minWidth: '450px', margin: 'auto', textAlign: 'center', borderRadius: "10px"}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: "black" }}>Business Made Simple</CardTitle>
            <CardText>
              A Landing Page for Client's New Business.
            </CardText>
            <CardActions border>
              <Button raised accent ripple href="https://www.businessmadesimple.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="project_card">
          {/* Project 3 */}
          <Card shadow={10} style={{ minWidth: '450px', margin: 'auto', textAlign: 'center', borderRadius: "10px" }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: "black" }}>Story Brand</CardTitle>
            <CardText>
              A Landing Page for Workshop Company.
            </CardText>
            <CardActions border>
              <Button raised accent ripple href="https://storybrand.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="project_card">
          {/* Project 4 */}
          <Card shadow={10} style={{ minWidth: '450px', margin: 'auto', textAlign: 'center', borderRadius: "10px" }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: "black" }}>Reboot Recovery</CardTitle>
            <CardText>
              A Landing Page for Client's Website.
            </CardText>
            <CardActions border>
              <Button raised accent ripple href="https://rebootrecovery.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="project_card">
          {/* Project 5 */}
          <Card shadow={10} style={{ minWidth: '450px', margin: 'auto', textAlign: 'center', borderRadius: "10px" }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: "black" }}>Laga iPhone</CardTitle>
            <CardText>
              A Landing Page for Client's Website.
            </CardText>
            <CardActions border>
              <Button raised accent ripple href="https://laga-iphone.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
<div className="project_card">
        {/* Project 6 */}
        <Card shadow={10} style={{ minWidth: '450px', margin: 'auto', textAlign: 'center', borderRadius: "10px" }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: "black" }}>Mattress Clarity</CardTitle>
          <CardText>
            A Landing Page for Client's Website.
            </CardText>
          <CardActions border>
            <Button raised accent ripple href="https://www.mattressclarity.com/" target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
        </div>


    )

  }



  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid>

    )
  }
}

export default Projects;
