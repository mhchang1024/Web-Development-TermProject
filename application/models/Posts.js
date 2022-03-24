var db = require('../config/database.js');
const PostModel = {};

PostModel.create = ( title, description, photopath, thumbnail, fk_userId) => {
    let baseSQL = 'INSERT INTO post (title, description, photopath, thumbnail, created, fk_userid) VALUE(?,?,?,?, now(),?);;';
    return db.execute(baseSQL,[title, description, photopath, thumbnail, fk_userId])
    .then(([results, feilds]) => {
        return Promise.resolve(results && results.affectedRows)
    })
    .catch((err) => Promise.reject(err));
}

PostModel.search = (searchTerm) => {

    let baseSQL = "SELECT id, title, description, thumbnail, concat_ws('', title, description) AS haystack \
        FROM post \
        HAVING haystack like ?;";

    let sqlReadySearchTerm = "%"+searchTerm+"%";

    return db.execute(baseSQL, [sqlReadySearchTerm])
    .then(([results, fields]) => {
        return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
}

PostModel.getNRecentPosts= (numberOfPost) => {
    let baseSQL = 'SELECT id, title, description, thumbnail, created FROM post ORDER BY created DESC LIMIT 8';
    return db.execute(baseSQL,[])
    .then(([results, feilds]) => {
        return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
}

PostModel.getPostById = (postId) =>{
    let baseSQL =  `SELECT u.id, u.username, p.title, p.description, p.photopath, p.created 
    FROM users u 
    JOIN post p 
    ON u.id=fk_userid 
    WHERE p.id=?;`;
    return db.execute(baseSQL,[postId])
    .then(([results, feilds]) =>{
       
       return Promise.resolve(results);
        
    })
    .catch((err) => Promise.reject(err));
}
module.exports = PostModel;