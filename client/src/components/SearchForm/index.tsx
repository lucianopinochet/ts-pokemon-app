import React, { Dispatch } from "react"

type Props = {
  handleSearch:Dispatch<React.SetStateAction<string>>
}
const SearchForm: React.FC<Props> = ({handleSearch}) => {
  
  
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      pokemonName: {value:string}
    }
    handleSearch(target.pokemonName.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="pokemonName" 
        type="text"
      />
      <input type="submit" />
    </form>
  )
}

export default SearchForm