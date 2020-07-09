class Cors{
    
    static intercept(req,res, next): void{
        res.header('Access-Control-Allow-Origin','*');
        res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
        next();
    }

}

export default Cors;