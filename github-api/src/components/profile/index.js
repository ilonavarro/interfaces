import * as S from './styled'
import useGithub from '../../hooks/github-hooks'

const Profile = () => {
  const { githubState } = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar}
        alt={`${githubState.user.name}'s GitHub Avatar`}
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username: </h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company: </h3>
            <span>{githubState.user.company || 'Company not set'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location: </h3>
            <span>{githubState.user.location || 'Location not set'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog: </h3>
            <span>
              {githubState.user.blog ? (
                <a
                  href={githubState.user.blog}
                  target="_blank"
                  rel="noreferrer"
                >
                  {githubState.user.blog}
                </a>
              ) : (
                'Blog not set'
              )}
            </span>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Follower</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
