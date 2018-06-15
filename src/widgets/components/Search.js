import React from 'react';
import './search.css';

/**
 * Esta es una forma de hacer lo mismo de abajo.
 */
/*function Search(props){
	return(
		<form action=""></form>
	)
}*/

const Search = () => (
	<form className="Search">
		<input type="text" className="Search-input" placeholder="Busca tu video favorito" />
	</form>
)

export default Search;