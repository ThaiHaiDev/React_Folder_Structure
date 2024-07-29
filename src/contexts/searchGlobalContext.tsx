import { createContext, useState } from 'react';

interface ISearchContext {
  searchText: string;
  setSearchText: (searchText: string) => void;
  handleSearch: boolean;
  setHandleSearch: (check: boolean) => void;
}

const SearchGlobalContext = createContext<ISearchContext | null>(null);

const SearchGlobalProvider = ({ children }: any) => {
  const [searchText, setSearchText] = useState<string>('');
  const [handleSearch, setHandleSearch] = useState<boolean | undefined>(false);

  const value = {
    searchText,
    setSearchText,
    handleSearch,
    setHandleSearch,
  };

  return <SearchGlobalContext.Provider value={value as ISearchContext}>{children}</SearchGlobalContext.Provider>;
};

export { SearchGlobalContext, SearchGlobalProvider };
