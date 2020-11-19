import { withRouter } from 'react-router-dom'

const BackToHome = (props) => {
  return (
    <button
      onClick={() => {
        props.history.push("/");
      }}
    >
      Home page
    </button>
  );
};

export default withRouter(BackToHome)