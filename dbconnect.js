
const mongoose=require('mongoose')

const dbconnect=()=>{

    const params={useNewUrlParser:true};
      const url=process.env.DB
    mongoose.connect(url,params);

    mongoose.connection.on('connected',()=>{

        console.log('connected to db')
    })

    mongoose.connection.on('error',()=>{

        console.log('error db')
    })

}

module.exports=dbconnect;