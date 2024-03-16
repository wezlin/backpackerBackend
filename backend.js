const express = require('express');
const cors = require('cors');

const newsObjectsFromBackend = {
    obj1 : {
        genString : "this is obj1Gen String", 
        originalString : "this is obj1Original String"
    },
    obj2 : {
        genString : "this is obj2Gen String", 
        originalString : "this is obj2Original String"
    },
    obj3 : {
        genString : "this is obj3Gen String", 
        originalString : "this is obj3Original String"
    },
    obj4 : {
        genString : "this is obj4Gen String", 
        originalString : "this is obj4Original String"
    },

}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    // if (req && req.length > 0 ){
        console.log(req);
        res.status(200).json(newsObjectsFromBackend);
    // }
});


app.listen('8080', ()=>{
    console.log('listen on port 8080' );
});