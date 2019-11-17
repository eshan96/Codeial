const Post = require('../models/post')

console.log('Post controller iniitiated')

module.exports.create = function(req, res) {
    
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
        if(err){
            console.log('error in creating the post')
            return
        }
        console.log('Post created')
        return res.redirect('back')
        
    })

    
}