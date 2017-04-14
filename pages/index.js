import React from 'react';
import 'isomorphic-fetch';
import Feed from '../components/Feed';

const postEndpoint = `http://twnsndco.dropmark.com/396720.json`;

export default class Index extends React.Component {
  static async getInitialProps() {
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