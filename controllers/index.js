const router = require("express").Router();

const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');

// router.use('/dashboard', dashboardRoutes);
// router.use('/home', homeRoutes);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/api', apiRoutes);

module.exports = router;