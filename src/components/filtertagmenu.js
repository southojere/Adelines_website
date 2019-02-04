import React, { Component } from 'react'
import filterStore from '../store/store'
import { view } from 'react-easy-state'

const style = {
  listStyleType: 'none',
  position:'fixed',
  bottom:0,
  left:0,
  color: '#f59bb0',
}

class FilterTagMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: props.store,
    }
  }

  render() {
    return (
      <div>
        <ul style={style}>
          <li onClick={() => this.state.store.changeFilter('')}><p>all</p></li>
          <li onClick={() => this.state.store.changeFilter('print')}>print</li>
          <li onClick={() => this.state.store.changeFilter('branding')}>
            branding
          </li>
          <li onClick={() => this.state.store.changeFilter('illustration')}>
            illustration
          </li>
        </ul>
      </div>
    )
  }
}

export default view(FilterTagMenu)
