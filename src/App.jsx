import { mySvgs } from './assets/Images'
import { URLS } from './assets/utils/consts'
import './assets/Style/main/App.css'

import { ApolloClient, InMemoryCache, ApolloProvider, gql , useQuery} from '@apollo/client';



function App() {
  const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  });

  client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

  return (
    <div className="App">
      <div>
        <a href={URLS.reactjsURL} target="_blank">
          <img src={mySvgs.viteLogo} className="logo" alt="Vite logo" /> 
        </a>
        <a href={URLS.vitejsURL} target="_blank">
          <img src={mySvgs.bitcoinLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dashboard component goes here</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
