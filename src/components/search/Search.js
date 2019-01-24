import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
  state = {
    searchText: '',
    apiUrl: 'https://images-api.nasa.gov',
    apiKey: 'QPFkPXq5fET1G2U1hhQbT2bqitgxSPaL8AxqGo0S',
    // amount: 5,
    images: []
  };

  onTextChange = (e) => {
    const val = e.target.value
    this.setState({ [e.target.name]: val}, () => {
      if (val === ''){
        this.setState({images: []});
      } else {
      axios.get(`${this.state.apiUrl}/search?q=${this.state.searchText}&media_type=image`)
          .then(res => this.setState({images: res.data.collection.items}))
          .catch(err => console.log(err));
        }
    });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <TextField 
          name ="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          label="Search for Space Shiz"
          fullWidth={true}
        />
        <br/>
        {/* <Select
          name="amount"
          label="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} >5</MenuItem>
          <MenuItem value={10} >10</MenuItem>
          <MenuItem value={20} >20</MenuItem>
          <MenuItem value={50} >50</MenuItem>
        </Select> */}
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
      </div>
    );
  }
}

export default Search;