
import { Button } from '../../../components/ui/button'
import UserTable from './components/userTable'

function Users() {
  return (
    <div>
        <div className='px-5 py-2 flex items-center justify-between bg-white rounded-lg'>
            <h1 className='font-bold text-2xl'>User Management</h1>
            <Button className='bg-ha-primary1 text-white hover:bg-blue-600'>Add User</Button>
        </div>
        <div className='px-5 py-2 flex items-center mt-5 bg-white rounded-lg'>
            <UserTable/>
        </div>
    </div>
  )
}

export default Users