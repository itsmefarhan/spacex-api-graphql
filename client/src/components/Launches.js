import React, { Fragment } from "react";
import { LaunchesQuery } from "./Queries";
import { useQuery } from "@apollo/react-hooks";

import LaunchItem from "./LaunchItem";
import MissonKey from "./MissionKey";

const Launches = () => {
  const { loading, error, data } = useQuery(LaunchesQuery);

  if (loading) {
    return <h3 className="text-center mt-5">Loading ...</h3>;
  }

  if (error) console.log(error);

  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissonKey />
      {data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  );
};

export default Launches;
