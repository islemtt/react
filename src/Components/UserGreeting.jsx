import propsTypes from 'prop-types';
function UserGreeting(props) {
  // if(props.isLoggedIn) {
  //   return <h1>Welcome back {props.username}</h1>
  // } else {
  //   return <h1>Welcome Guest</h1>
  // }
  const welcomeMsg=<h1 className="welcome">Welcome back {props.username}</h1>

  const loginMsg=<h1 className="log">Please log in</h1>
  return(props.isLoggedIn? welcomeMsg
    :loginMsg)
}
UserGreeting.propsTypes={
  isLoggedIn:propsTypes.bool,
  username:propsTypes.string
}
UserGreeting.defaultProps={
  isLoggedIn:false,
  username:"Guest"
}
export default UserGreeting;