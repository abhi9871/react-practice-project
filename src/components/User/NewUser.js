import UserForm from './UserForm';
import Card from '../UI/Card';
import './NewUser.css';

const NewUser = (props) => {
    const saveUserDataHandler = (user) => {
        const userData = {...user, id: Math.random().toString()};
        props.onAddUser(userData);
    }

    return (
        <Card className='new-user'>
            <UserForm userData = {saveUserDataHandler} />
        </Card>
    )
}

export default NewUser;