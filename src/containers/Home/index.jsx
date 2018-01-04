import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Nav from 'components/Nav';

import './index.scss';

@inject('rootStore')
@observer
export default class Home extends Component {
  render() {
    const { config } = this.props.rootStore;

    return (
      <div className="home">
        <Nav navs={config.navs}/>
      </div>
    );
  }
}