import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

function List({ showDetails }) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [activeElements, setActiveElements] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setList(data);
        setActiveElements(
          data.map((item) => {
            return { id: item.id, active: false };
          })
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const setActiveItem = (id) => {
    showDetails(id);
    setActiveElements(
      activeElements.map((item) => {
        if (item.id === id) {
          return { id: item.id, active: true };
        } else {
          return { id: item.id, active: false };
        }
      })
    );
  };

  return (
    <ul className="list-group">
      {loading ? "Loading..." : null}
      {list && activeElements
        ? list.map((i) => (
            <ListItem
              key={i.id}
              activeItem={setActiveItem}
              active={
                activeElements.filter((item) => item.id === i.id)[0].active
              }
              id={i.id}
            >
              {i.name}
            </ListItem>
          ))
        : null}
    </ul>
  );
}

export default List;

List.propTypes = {
  showDetails: PropTypes.func,
};

List.defaultProps = {
  showDetails: () => {},
};
