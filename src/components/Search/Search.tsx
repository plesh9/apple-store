import { FC } from 'react';
import { SearchButton } from './SearchButton/SearchButton';

interface ISearch {
  className?: string
}

export const Search: FC<ISearch> = ({ className }) => {

  return (
    <div className={`${className || ''} search`}>
      <SearchButton />
      <input type="text" className='search__input' placeholder='Search' />
    </div>
  );
};
