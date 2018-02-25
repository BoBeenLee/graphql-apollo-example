import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const config = {
  headers: {
    "Content-Type": "application/json",
    authorization: process.env.REACT_APP_TOKEN
  }
};

const getQueryBy = `{
    viewer {
      allPortfolios(where: {name: {eq: "buxi"}}) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }  
`;
class NoApolloApp extends Component {
  static propTypes = {};
  static defaultProps = {};

  _getPorfolio = async () => {
    const res = await axios.post(
      "https://us-west-2.api.scaphold.io/graphql/myspace",
      {
        query: getQueryBy
      },
      config
    );
    console.log(res);
  };

  componentDidMount() {
    this._getPorfolio();
  }

  render() {
    return <div>Hello</div>;
  }
}

export default NoApolloApp;
