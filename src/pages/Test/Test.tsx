import { ChangeEvent, useContext, KeyboardEvent } from 'react';
import { SearchGlobalContext } from '../../contexts/searchGlobalContext';

import './Test.scss';

const Test = () => {
  const searchGlobalContext = useContext(SearchGlobalContext);

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    searchGlobalContext?.setSearchText(event.currentTarget?.value);
  };

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchGlobalContext?.setHandleSearch(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Test placeholder"
        onChange={searchChangeHandler}
        onKeyDown={handleSearch}
        value={searchGlobalContext?.searchText}
      />
    </div>
  );
};

export default Test;
