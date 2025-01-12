const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');

const router = require ('express').Router();

router.post('/users',userController.createUser)
router.post('/users/login',userController.login)

router.get('/users/appointments', verifyToken, userController.getAppointment)
router.get('/profile',verifyToken,userController.profile)
router.put('/updateprofile',verifyToken,userController.updateUser)
router.put('/updateprofile/payment',verifyToken,userController.updatePayment)


router.get('/admin/users', verifyToken, isAdmin, userController.getAllUsers)
router.post('/admin/roles', verifyToken, isAdmin, userController.addRole)
router.delete('/users/:id', verifyToken, isAdmin, userController.deleteUser)
router.get('/users/role/:id', verifyToken, isAdmin, userController.getUserRole)


router.post('/doctors',verifyToken, isDoctor, userController.createDoctor)
router.get('/admin/doctors', verifyToken, isDoctor, userController.getUser)
router.get('/doc/app', verifyToken, isDoctor, userController.getDocApp)






module.exports = router; 