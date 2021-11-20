import { RouteComponentProps } from '@reach/router';
import React from 'react';

import {
  FaSearch,
} from 'react-icons/fa';

interface Props extends RouteComponentProps {}

const Search = () => (
  <div className="search">
    <input
      className="search-input"
      type="text"
      placeholder="Search..."
    />
    <FaSearch
      size="18"
      className="text-secondary my-auto"
    />
  </div>
);
export const Orders: React.FC<Props> = () => (
  <div>
    Orders page
    <Search />
  </div>
);
