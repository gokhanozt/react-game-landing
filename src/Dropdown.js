import React, {useState} from 'react';

function CharacterDropDown() {
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [value, setValue] = React.useState("R2-D2");
    React.useEffect(() => {
      let unmounted = false;
      async function getCharacters() {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people"
        );
        const body = await response.json();
        if (!unmounted) {
          setItems(
            body.results.map(({ name }) => ({ label: name, value: name }))
          );
          setLoading(false);
        }
      }
      getCharacters();
      return () => {
        unmounted = true;
      };
    }, []);
    return (
      <select
        disabled={loading}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
  
  export default CharacterDropDown;
