var express = require('express');

const router = express.Router();
const teacherController = require('../controllers/teacherController');
const auth =require('../middleware/auth')

router.get('/login',teacherController.teacher_login_get);
router.post('/login',teacherController.teacher_login_post);
router.get('/viewall',auth.teacherAuth,teacherController.teacher_viewall_get);
router.get('/edit/:id',auth.teacherAuth,teacherController.teacher_edit_get);
router.post('/edit/:id',auth.teacherAuth,teacherController.teacher_edit_post);
router.get('/delete/:id',auth.teacherAuth,teacherController.teacher_delete_get);
router.post('/add',auth.teacherAuth,teacherController.teacher_add_post);
router.get('/add',auth.teacherAuth,teacherController.teacher_add_get);
router.get('/logout',teacherController.teacher_logout);

module.exports = router;