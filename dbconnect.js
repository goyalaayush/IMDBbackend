
const mongoose=require('mongoose')

const dbconnect=()=>{

    const params={useNewUrlParser:true};

    mongoose.connect('mongodb+srv://imdb:jMKyzxyOyBAIiCXI@cluster0.07ogioi.mongodb.net/imdb',params);

    mongoose.connection.on('connected',()=>{

        console.log('connected to db')
    })

    mongoose.connection.on('error',()=>{

        console.log('error db')
    })

}

module.exports=dbconnect;