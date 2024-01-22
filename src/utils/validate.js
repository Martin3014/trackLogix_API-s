'use strict'

const bcrypt = require('bcrypt')

exports.encrypt = async(password)=>{
    try{
        return bcrypt.hashSync(password, 10);
    }catch(err){
        console.error(err);
        return err;
    }
}

exports.checkPassword = async(password, hash)=>{
    try{
        return await bcrypt.compare(password, hash);
    }catch(err){
        console.error(err);
        return err;
    }
}