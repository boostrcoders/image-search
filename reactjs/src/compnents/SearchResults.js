import React from 'react';
import LoadingImage from './LoadingImage';
import ResultImages from './ResultImages'
import '../App.css';

const SearchResults = (props) =>{
    return(
        <div>
            {props.loading ? (
          
          <LoadingImage source={props.loadingImage} />
        ) : (
          
        <ResultImages images={props.images}/>
        )}
        </div>
    )
}

export default SearchResults;