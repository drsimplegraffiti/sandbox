import { v4 as uuidv4 } from 'uuid';

let users = [];
export const getAllUsers = (req, res) => {
    try {
        return res.status(200).json({
            status: 'success',
            message: users
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail'
        })
    }
}

export const createUser = (req, res) => {
    try {

        const user = req.body;
        users.push({...user, id: uuidv4() })
        return res.status(200).json({
            status: 'success',
            message: `user with the name ${user.name} added to the database`
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail'
        })
    }
}

export const getSingleUser = (req, res) => {
    try {
        const { id } = req.params;
        const getUser = users.find((user) => user.id === id);
        console.log(getUser);
        return res.status(200).json({
            status: 'success',
            message: `${id} gotten successfully`,
            data: getUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail'
        })
    }
}

export const deleteUser = (req, res) => {
    try {

        const { id } = req.params;
        users = users.filter((user) => user.id !== id);
        return res.status(200).json({
            status: 'success',
            message: `User with ${id} deleted successfully`,
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail'
        })
    }
}

export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, occupation, age } = req.body;
        const user = users.find((user) => user.id === id);

        if (name) user.name = name;
        if (occupation) user.occupation = occupation;
        if (age) user.age = age;
        return res.status(200).json({
            status: 'success',
            message: `user with the id ${id} updated successfully`,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail'
        })
    }
}