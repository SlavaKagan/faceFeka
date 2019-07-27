import React, { Component } from 'react';
import axios from 'axios';

import SearchResultsList from './search_results_list';

import { Visible } from '../../utils/constants';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../server/utils/enums'
import { getFromStorage } from '../../../sign/utils/storageMethods';
import { TokenStorageKey } from '../../../sign/utils/constants';
import LoadingSpinner from '../general_reusable/loading_spinner';

class SearchFriendsDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      results: []
    };

    this.getAllNonAlreadyFriends = this.getAllNonAlreadyFriends.bind(this);
  }

  getAllNonAlreadyFriends() {
    const { token } = getFromStorage(TokenStorageKey);
    axios.get(`${UserPaths.Users}/${UserPaths.NonFriends}`, { headers: { "Authorization": `Bearer ${ token }` } })
      .then((result) => {
        console.log(result);
        this.setState( { results: result.data } , this.setState( { isLoading: false } ) );
      }).catch((error) => {
      console.log(error);
    });
  };

  componentDidMount() {
    this.getAllNonAlreadyFriends();
  }

  render() {
    const { isSearchFriendsVisible } = this.props;

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