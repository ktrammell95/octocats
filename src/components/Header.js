import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <a href="https://octodex.github.com/">
            <img
              alt="GitHub logo"
              src="https://octodex.github.com/ui/logo.png"
            />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="http://feeds.feedburner.com/Octocats">RSS</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq.html">FAQ</a>
            </li>
            <li>
              <a href="http://www.github.com/">Back to GitHub</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
