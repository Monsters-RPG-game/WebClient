import React, { useEffect, useState } from 'react';
import * as animation from '../../../animations/index.js';
import { Container, ContainerBody, Table } from '../../customs/index.js';
import { getAllUsers } from '../controller.js';
import * as hooks from '../../../redux/index.js'
import { ENotificationType } from '../../../enums/notifications.js';
import { useMainDispatch } from '../../../redux/hooks.js';
import { IUser } from '../../../types/user.js';

const Users = (): React.JSX.Element => {
    const dispatch = useMainDispatch()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data)
        }).catch((_err) => {
            dispatch(hooks.addNotification({ message: "Failed to fetch users", type: ENotificationType.Default }))
        })
    }, [])

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <h2>Users page</h2>
        <Table>
            <tr>
                <th>Id</th>
                <th>Login</th>
            </tr>
        {users.map(u => {
        return <tr>
                <th>{u._id}</th>
                <th>{u.login}</th>
            </tr>
        })}
        </Table>
      </ContainerBody>
    </Container>
  );
};

export default Users;
