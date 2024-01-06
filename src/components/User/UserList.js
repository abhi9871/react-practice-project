import Card from "../UI/Card";
import './UserList.css';

const UserList = (props) => {
    return (
            <ul>
              {
                    props.users.map((user) => {
                      let age = (+(user.age) === 1) ? 'year old' : 'years old';
                       return (
                          <li key={user.id}>
                            <Card className='user-list'>
                            {user.collegeName} - {user.name} ({user.age} {age})
                            </Card>
                            </li>
                       )
                    })
              }
            </ul>
    )
}

export default UserList;