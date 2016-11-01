import React from "react"
import { Link } from 'react-router';

/* css */
import styles from '../styles/app.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.actions.didMount();
  }

  render() {
    const { meta } = this.props;

    return (
      <div className="app-component">
        <ul className={styles.nav}>
          <li><Link to="/">localhost:8080</Link></li>
          <li><Link to="/detail">localhost:8080/detail</Link></li>
          <li><Link to="/apply">localhost:8080/apply</Link></li>
        </ul>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>meta.title</th>
              <td>{meta.title}</td>
            </tr>
            <tr>
              <th>meta.description</th>
              <td>{meta.description}</td>
            </tr>
            <tr>
              <th>meta.img</th>
              <td>{meta.img}</td>
            </tr>
            <tr>
              <th>meta.url</th>
              <td>{meta.url}</td>
            </tr>
          </tbody>
        </table>
        {this.props.children}
      </div>
    );
  }
}