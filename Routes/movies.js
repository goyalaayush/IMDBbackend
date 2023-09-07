const router=require('express').Router();

const Movie = require('../models/movie');
const movies=require('../config/movies.json');



router.get('/movies',async(req,res)=>{

      try{
            const page=parseInt(req.query.page)-1||0;
            const limit=parseInt(req.query.limit)||5;
            const search=req.query.search||"";
            let sort=req.query.sort||"rating";
            let genre=req.query.genre||"All";
 const options=[
    "Action","Romance","Fantasy","Drama",
    "Crime","Adventure","Thriller","Sci-fi",
    "Music","Family"

 ];
   genre==="All"?(genre=[...options]):genre=req.query.genre.split(',');

   req.query.sort?(sort=req.query.sort.split(',')):(sort=[sort])

  let sortby={};

  if(sort[1])
  {
    sortby[sort[0]]=sort[1];
  }else{
     sortby[sort[0]]="asc";
  }
        
  const movies=await Movie.find({name:{$regex:search,$options:"i"}})
  .where("genre").in([...genre]).sort(sortby).skip(page*limit)
  .limit(limit);
        
        

        const total=await Movie.countDocuments({
            genre:{$in:[...genre]},
           name:{$regex:search,$options:"i"},})


    const resp={

error:false,
total,
page:page+1,
limit,
genres:options,
movies

    }

  res.status(200).json(resp);

        }


      catch(err){
         console.log('err')
         res.status(500).json({error:true,message:"internal err"})
      }

})






module.exports=router;