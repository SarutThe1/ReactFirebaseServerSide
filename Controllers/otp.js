const otpGenerator = require('otp-generator')

exports.generateOTP = async(req,res) => {
    try{
        const OTP = await otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
        res.send({code: OTP})
    }catch(err){
        res.status(500).send("Server Error!");
    }
}

exports.verifyOTP = async(req,res) => {
    try{
        const {code} = req.body;
        if(parseInt(OTP) === parseInt(code)){
            res.send({msg: 'Verify Successfully'})
        }else{
            res.send('Invalid OTP')
        }
    }catch(err){
        res.status(500).send("Server Error!");
    }
}