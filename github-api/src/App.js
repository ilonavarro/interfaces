import Layout from './components/layout'
import Profile from './components/profile'
import Repositories from './components/repositories'
import useGithub from './hooks/github-hooks'
import NoSearch from './components/no-search'

const App = () => {
  const { githubState } = useGithub()
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
