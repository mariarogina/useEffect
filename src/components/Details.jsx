import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Details({ id }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setDetails(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <img src={details.avatar} className="card-img-top" alt="avatar" />
          <div className="card-body">
            <h5 className="card-title">{details.name}</h5>
          </div>
          <div className="list-group">
            <li className="list-group-item">City: {details.details.city}</li>
            <li className="list-group-item">
              Company: {details.details.company}
            </li>
            <li className="list-group-item">
              Position: {details.details.position}
            </li>
          </div>
        </div>
      )}
    </>
  );
}

Details.propTypes = {
  id: PropTypes.number,
};

Details.defaultProps = {
  id: "",
};
