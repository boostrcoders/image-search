import React, { Component } from "react";
import loadingImage from "./loading.gif";
import API from "./API";
import SearchForm from './compnents/SearchForm'
import SearccResults from './compnents/SearchResults'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "React JS - Image Search",
      loading: false,
      page: 1,
      totalPage: 0,
      searchInput: "",
      images: []
    };
  }

  formSubmitted(event) {
    event.preventDefault();

    this.loadImages(this.state.searchInput, 1);
  }
  loadImages(searchInput, page) {
    this.setState({
      loading: true,
      page: page
    });
    API.search(searchInput, page).then(images => {
      this.setState({
        loading: false,
        totalPage: images.totalHits < 21 ? 1 : images.totalHits / 20,
        images: images.hits
      });
    });
  }

  searchInputChanged(event) {
    this.setState({
      searchInput: event.target.value
    });
    console.log(this.state.searchInput);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({
      page: newPage
    });
    this.loadImages(this.state.searchInput, newPage);
  }
  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({
      page: newPage
    });
    this.loadImages(this.state.searchInput, newPage);
  }

  render() {
    const { title, searchInput, loading, images, page, totalPage } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        
        <SearchForm 
        images={images}
        formSubmitted={this.formSubmitted.bind(this)}
        searchInputChanged={this.searchInputChanged.bind(this)}
        searchInput={searchInput}
        page={page}
        totalPage={totalPage}
        prevPage={this.prevPage.bind(this)}
        nextPage={this.nextPage.bind(this)}
        />
        
        <SearccResults
        loading={loading}
        loadingImage={loadingImage}
        images={images}/>
        
      </div>
    );
  }
}

export default App;
