import { useState } from 'react';
import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введите запрос в поле поиска');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <button type="submit" className={css.formButton}>
          <SearchIcon fill="grey" />
        </button>

        <input
          className={css.input}
          type="text"
          value={query}
          onChange={handleChangeInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChangeInput = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmitForm = e => {
//     e.preventDefault();
//     if (this.state.query.trim() === '') {
//       alert('Введите запрос в поле поиска');
//     }

//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmitForm}>
//           <button type="submit" className={css.formButton}>
//             <SearchIcon fill="grey" />
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             value={this.state.query}
//             onChange={this.handleChangeInput}
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
