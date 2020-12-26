import logo from './logo.svg';
import React, {useState, useEffect} from 'react'

import {Cards, Chart, CountryPicker} from './components';

import { fetchData } from './api';

import coronaImage from './images/image.png';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {
    console.log(country)

    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const {data, country} = this.state;


    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }


  
}


export default App;
