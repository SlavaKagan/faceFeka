import React, { Component } from 'react';
import axiosFetch from '../../../utils/axiosSession';

import SearchResultsList from './search_results_list';

import { Visible } from '../../../utils/constants';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../utils/server_endpoints';
import LoadingSpinner from '../general_reusable/loading_spinner';

class SearchFriendsDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      results: [],
      term: this.props.searchTerm
    };

    this.getAllNonAlreadyFriends = this.getAllNonAlreadyFriends.bind(this);
  }

  getAllNonAlreadyFriends() {
    axiosFetch.get(`${UserPaths.Users}/${UserPaths.NonFriends}/${this.state.term}`)
      .then((result) => {
        console.log(result);
        this.setState( { results: result.data, isLoading: false } );
      }).catch((error) => {
      console.log(error.response);
    });
  };

  componentDidMount() {
    this.getAllNonAlreadyFriends();
  }

  updateResultsList() {
    if (this.state.term !== this.props.searchTerm) {
      this.setState( { term: this.props.searchTerm } , this.getAllNonAlreadyFriends);
    }
  }

  render() {
    const { isSearchFriendsVisible } = this.props;
    this.updateResultsList();

    const isLoadingOrResults = this.state.isLoading ?
      <LoadingSpinner /> : <SearchResultsList results = { this.state.results }/> ;

    return (
      <div className={ "search-friends-dropdown" + ((isSearchFriendsVisible) ? (` ${ Visible }`) : ('')) }>
        <div className="x-button-container" onClick = { () => this.props.onCloseXButton(true) } >
          <div className="x-button">
            <span>X</span>
          </div>
        </div>

        <div className = "results">
          { isLoadingOrResults }
        </div>
      </div>
    );
  }
}

export default SearchFriendsDropdown;