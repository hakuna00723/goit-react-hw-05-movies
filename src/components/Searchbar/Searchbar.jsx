import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Notify } from 'notiflix';
import css from './Searchbar.module.css';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      Notify.failure('Enter a query name.');
      return;
    }
    setSearchParams({ query });
    setQuery('');
  };
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        type="text"
        name="name"
        value={query}
        onChange={handleNameChange}
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
      <button className={css.searchFormButton} type="submit">
        <MdSearch size={25} />
      </button>
    </form>
  );
};
