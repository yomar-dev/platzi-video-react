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

const Search = (props) => (
	<form className="Search" onSubmit={props.handleSubmit}>
		<input 
			ref={props.setRef}
			type="text"
			name="search"
			className="Search-input"
			placeholder="Busca tu video favorito"
			onChange={props.handleChange}
			value={props.value}
		/>
	</form>
)

export default Search;