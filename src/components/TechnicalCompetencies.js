import React from 'react'
import { leftTechnologies, rightTechnologies } from '../JSFiles/technicalCompetencies'
import { calculateExperience } from '../JSFiles/utils'

class TechnicalCompetencies extends React.Component {
  render() {
    return (
      <div className="section" id='technicalCompetencies'>
        <div className="skills_wrap">
          <div className="container">
            <div className="title_holder">
              <h3>Technical Competencies</h3>
              <span>Some of Technical Specialization</span>
            </div>
            <div className="inner_wrap">
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="progress_wrap" data-size="small" data-round="c" data-strip="off">
                    {
                      leftTechnologies.map(eachTechnology => {
                        return (
                          <div className="progress" data-value="95" data-color="#000">
                            <span>
                              <span className="label">
                                {eachTechnology.technologyName} - <span className="experience">{calculateExperience(new Date(eachTechnology.date))} of Experience</span>
                              </span>
                              <span className="number">{eachTechnology.expertise}</span>
                            </span>
                            <div className="bar_bg">
                              <div className="bar_wrap open">
                                <div className="bar" style={{ width: eachTechnology.expertise, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="progress_wrap" data-size="small" data-round="c" data-strip="off">
                    {
                      rightTechnologies.map(eachTechnology => {
                        return (
                          <div className="progress" data-value="95" data-color="#000">
                            <span>
                              <span className="label">
                                {eachTechnology.technologyName} - <span className="experience">{calculateExperience(new Date(eachTechnology.date))} of Experience</span>
                              </span>
                              <span className="number">{eachTechnology.expertise}</span>
                            </span>
                            <div className="bar_bg">
                              <div className="bar_wrap open">
                                <div className="bar" style={{ width: eachTechnology.expertise, backgroundColor: 'rgb(0, 0, 0)' }}></div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalCompetencies