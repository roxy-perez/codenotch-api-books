const router = require('express').Router();
const bookController = require('../controller/book.controller');

router.get("/books", bookController.getBooks);
router.get("/books/:book_id", bookController.getBook);
router.post('/books', bookController.createBook);

router.put("/books", bookController.updateBook);
router.delete("/books", bookController.deleteBook);

module.exports = router;