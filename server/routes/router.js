const express=require('express');
const feedback_controller = require('../controller/feedback');
const product_controller=require('../controller/product');
const order_controller=require('../controller/order');

//const app=express()=> this wil create another express application
//Allows to create diff router in seperate file
const route=express.Router();

const services=require('../services/render');

//ROUTES
//Root Route with get method
route.get('/',services.homeRoutes);
// route.get('/menu',services.menuRoutes);
route.get('/contactus',services.contactusRoutes);
route.get('/gallery',services.galleryRoutes);
//route.get('/order',services.OrderRoutes);
route.post('/order',order_controller.place_order);

route.get('/feedback',services.feedbackRoutes);
route.post('/feedback',feedback_controller.feedback_create);
route.get('/feedback_find',feedback_controller.find);

//route.post('/menu',feedback_controller.product_create);
route.get('/menu',product_controller.findproduct);

// route.get('/admin',services.adminRoutes);
module.exports=route;

//route.get('/',(req,res)=>
//{
  //STATIC VALUE
  //res.send("HELLO");

  //EJS FILE
  //res.render('index1');

  //HTML FILE
  //res.sendFile(path.join(__dirname+'/index1.html'));
//})
/*
route.get('/menu',(req,res)=>
{
  res.render('menu');
})

route.get('/contactus',(req,res)=>
{
  res.render('contactus');
})

route.get('/gallery',(req,res)=>
{
  res.render('gallery');
})

route.get('/feedback',(req,res)=>
{
  res.render('feedback');
})
*/