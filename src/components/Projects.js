import React from 'react'
import { projects } from '../JSFiles/projects'

class Projects extends React.Component {
  render() {
    return (
      <div className="section" id="projects">
        <div className="services_wrap">
          <div className="container">
            <div className="title_holder">
              <h3>Projects</h3>
              <span>Glimpses of My Work</span>
            </div>
            <div className="list_wrap">
              <ul>
                {
                  projects.map(eachProject => {
                    return (
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <img className="svg" src={eachProject.image} alt="" />
                          </div>
                          <div className="title_service">
                            <a href={eachProject.link} style={{ textDecoration: 'none' }} target={'_blank'}><h3>{eachProject.name}</h3></a>
                          </div>
                          <div className="text">
                            <p>{eachProject.desctiption}</p>
                          </div>
                          <br />
                          <div className="projectTimeline">
                            <p>Timeline: ({eachProject.from + ' - ' + eachProject.to})</p>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects