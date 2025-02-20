let Loop = (users) => {
  '<ul>
    {users.map(user => <li>{user.name}</li>)}
  </ul>'
};
export default Loop;