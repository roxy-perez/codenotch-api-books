const User = require('../model/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: users
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const getUser = async (req, res) => {
    const id = req.params.user_id;
    try {
        const user = await User.findOne({
            where: { user_id: id }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: user
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    const { name, surname, email, photo } = req.body;
    try {
        const newUser = await User.create({
            name,
            surname,
            email,
            photo
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: newUser
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { user_id } = req.query;

        const user = await User.findOne({
            where: { user_id }
        });

        // actualiza sólo los datos que se le pasen en el body
        // no hace falta pasarlos todos
        user.set(req.body);

        // Guardando en BBDD
        await user.save();
        res.status(200).json({
            ok: true,
            status: 200,
            body: user
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.query;
        await User.destroy({ where: { user_id } });
        res.status(204).json({
            ok: true,
            status: 204,
            message: "Usuario eliminado correctamente"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            res.status(200).json({
                ok: true,
                status: 200,
                body: user
            });
        } else {
            res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }
    } catch (error) {

    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    loginUser
}