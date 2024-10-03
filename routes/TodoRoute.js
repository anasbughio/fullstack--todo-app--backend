const {Router} = require('express');
const {saveTodo, getTodo, updateTodo,deleteTodo}  = require('../controllers/TodoCOntroller');
const router = Router();

router.get('/',getTodo);
router.post('/save',saveTodo);
router.post('/update',updateTodo);
router.post('/delete',deleteTodo);




module.exports = router