import React from "react";
import { useQuery, gql } from "@apollo/client";
import Lazyloading from "./Lazyloading";
const Person = gql`
query getPerson {
  Person {
    name
    address
    phone
    email
  }
}
`;
function PersonComponent() {
  const { data, loading, error } = useQuery(Person);
  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return <Lazyloading data={data.Person} />
}

export default PersonComponent;
