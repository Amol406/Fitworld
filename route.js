const router = require('express').Router();
const User = require('./models/User');


router.get('/',(req, res)=> {
    res.render('index');
});

router.get('/start',(req, res)=> {
    res.render('start');
});

router.get('/male',(req, res)=> {
    res.render('male');
});

router.get('/female',(req, res)=> {
    res.render('female');
});

router.get('/male-gym',(req, res)=> {
    res.render('male-gym');
});

router.get('/male-fitness',(req, res)=> {
    res.render('male-fitness');
});

router.get('/male-yoga',(req, res)=> {
    res.render('male-yoga');
});

router.get('/female-gym',(req, res)=> {
    res.render('female-gym');
});

router.get('/female-fitness',(req, res)=> {
    res.render('female-fitness');
});

router.get('/female-yoga',(req, res)=> {
    res.render('female-yoga');
});

router.get('/profile',(req, res)=> {
    res.render('profile');
});

router.get('/measurement',(req, res)=> {
    res.render('measurement');
});

router.get('/setting',(req, res)=> {
    res.render('setting');
});

router.get('/workouts',(req, res)=> {
    res.render('workouts');
});

router.get('/login',(req, res)=> {
    res.render('login');
});

router.get('/login-success',(req, res)=> {
    res.render('login-success');
});
router.post('/login', async (req, res)=> {
    const {body}=req
    if (body.Username&&body.Password){
        const user = await User.findOne({Username: body.Username, Password: body.Password})
        if (user) { return  res.redirect ("/start")}
    }
  return res.redirect("/error");
});

router.get('/signup',(req, res)=> {
    res.render('signup');
});

router.post('/signup-success',  async (req, res)=> {
    const user = await User.create(req.body);
    res.redirect('/signup-success');
});

router.get('/signup-success',  async (req, res)=> { 
    res.render('signup-success');
});

router.get('/error',(req, res)=> {
    res.render('error');
});
module.exports = router;