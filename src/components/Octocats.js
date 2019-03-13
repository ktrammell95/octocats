import React, { Component } from 'react'
import OctocatData from '../octocats.json'

class Octocats extends Component {
  render() {
    return (
      <div className="octocats">
        {OctocatData.map((Octodetail, index) => {
          return (
            <div className="octocat-wrapper">
              <div className="octocat">
                <a href={Octodetail.href}>
                  <img alt={Octodetail.img_alt} src={Octodetail.img_url} />
                </a>
                <div className="cat-info">
                  <div className="cat-id"># {Octodetail.id}</div>
                  <div className="cat-creator">
                    <span>
                      the <a href={Octodetail.href}>{Octodetail.name}</a> by
                    </span>
                    <span>
                      <a target="_blank" href={Octodetail.author_github}>
                        <img
                          className="author"
                          alt="author"
                          src={Octodetail.author}
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Octocats
