import React from 'react';
import "../App.css";

const SearchForm = (props) =>{
    return(
        <div>
            <form onSubmit={props.formSubmitted}>
          <label htmlFor="searchInput">Search</label>
          <input
            className="u-full-width"
            type="text"
            id="searchInput"
            name="searchInput"
            onChange={props.searchInputChanged}
            value={props.searchInput}
          />
          <button className="button-primary" type="submit">
            Search
          </button>
          {props.images.length === 0 ? (
            ""
          ) : (
            <div className="prevNext">
              <button
                disabled={props.page <= 1 ? "disabled" : ""}
                id="prev"
                type="button"
                onClick={props.prevPage}
              >
                &#171;
              </button>
              <button
                disabled={props.page === props.totalPage ? "disabled" : ""}
                id="next"
                type="button"
                onClick={props.nextPage}
              >
                &#187;
              </button>
            </div>
          )}
        </form>
        </div>
    )
}

export default SearchForm;