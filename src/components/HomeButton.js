import { useHistory } from 'react-router-dom';

function HomeButton() {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  }

  return (
    <button
      className="go-home-button"
      tabIndex={0}
      role="button"
      onClick={goHome}
      onKeyPress={goHome}
    >
      Back Home
    </button>
  )
}

export default HomeButton;