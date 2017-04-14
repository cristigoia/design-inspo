import React from 'react';
import 'isomorphic-fetch';
import Feed from '../components/Feed';
import fs from 'fs';
require('dotenv').config();

const postEndpoint = `https://mihailgaberov.dropmark.com/414652.json?key=${process.env.DROPMARK_KEY}`;

export default class Index extends React.Component {

  static async getInitialProps() {
    console.log('>>> ', postEndpoint);
    const response = await fetch(postEndpoint);
    const json = await response.json();
    return {
      data: json.items
    };
  }

  render() {
    return (
      <main>
        <header>
          <h1>My design inspiration board</h1>
        </header>
        <Feed data={this.props.data}/>
      </main>
    );
  }
}