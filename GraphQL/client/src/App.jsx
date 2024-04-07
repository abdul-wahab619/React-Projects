import { useQuery, gql } from "@apollo/client";
// import "./App.css";

const GET_LOCATIONS = gql`
  query getTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;
function App() {
  let data;
  let loading = true;
  let error = null;

  try {
    ({ loading, error, data } = useQuery(GET_LOCATIONS));
  } catch (queryError) {
    console.error("Error in GraphQL query:", queryError);
    error = queryError;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed}</td>
              <td>{todo.user?.name}</td>
              <td>{todo.user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
