const axios = require('axios');
exports.homeRoutes=(req,res)=>
{
    axios.get('http://localhost:8081/feedback_find')
    .then(function(response){ 
        res.render('index1',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.orderRoutes=(req,res)=>
{
    axios.get('http://localhost:8081/menu_find')
    .then(function(response){ 
        res.render('menu',{product:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.menuRoutes=(req,res)=>
{
    res.render('menu');
}

exports.contactusRoutes=(req,res)=>
{
    res.render('contactus');
}

exports.galleryRoutes=(req,res)=>
{
    res.render('gallery');
}

exports.feedbackRoutes=(req,res)=>
{
    res.render('feedback');
}

exports.OrderRoutes=(req,res)=>
{
    res.render('order');
}
/*exports.adminRoutes=(req,res)=>
{
    res.render('admin_feedback');
}*/
exports.adminRoutes=(req,res)=>
{
    axios.get('http://localhost:8081/feedback_find')
    .then(function(response){ 
        res.render('admin_feedback',{feedback:response.data});
    })
    .catch(err =>{
        res.send(err);
    }) 
}