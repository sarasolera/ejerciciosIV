
module.exports = (res,res)=>{
    const { name = 'World' } = req.query
    res.status(200).send('Helo ${name}!')
}