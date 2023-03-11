const Book = require('../model/book.model');

const getBooks = async (req, res) => {
    const user_id = req.query.user_id;
    try {
        const books = await Book.findAll({ where: { user_id } });
        res.status(200).json({
            ok: true,
            status: 200,
            books: books
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


const getBook = async (req, res) => {
    const user_id = req.params.user_id;
    const book_id = req.params.book_id;

    try {
        const book = await Book.findOne({
            where: { user_id, book_id  }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            book: book
        });

        if(res.body === null){
            res.json({
                message: "El usuario no tiene libros que mostrar"
            });  
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const createBook = async (req, res) => {
    const { user_id, title, author, price, cover,  photo } = req.body;
    try {
        const newBook = await Book.create({
            user_id,
            title,
            author,
            price,
            cover,
            photo
        });
        res.status(201).json({
            ok: true,
            status: 201,
            book: newBook
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const { book_id } = req.query;

        const book = await Book.findOne({
            where: { book_id }
        });

        // actualiza sólo los datos que se le pasen en el body
        // no hace falta pasarlos todos
        book.set(req.body);

        // Guardando en BBDD
        await book.save();
        res.status(200).json({
            ok: true,
            status: 200,
            body: book
        });


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const { book_id } = req.query;
        await Book.destroy({ where: { book_id } });
        res.status(204).json({
            ok: true,
            status: 204,
            message: "Libro eliminado correctamente"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}