import { useState, useEffect } from 'react';

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('List Component');
    setItems(getItems());
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
