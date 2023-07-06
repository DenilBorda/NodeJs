const products = require('../products/data.json')

exports.createProduct = async (req,res)=>{
    const product = req.body;
    products.push(product);
    res.json({product,msg:'new product added.....'})
}

exports.getAllProduct = async (req,res)=>{
    res.status(200).json(products);
}

exports.specificProduct = async (req,res)=>{
    const id = +req.params.id;
    const product = products.find((p)=>p.id === id)
    res.status(200).json(product); 
}

exports.replaceProduct = async (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1 ,{...req.body})
    res.status(200).json({product:'product replaced...'});
}

exports.updateProduct = async (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id === id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(200).json({product:'product updated...'});
}

exports.deleteProduct = async (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id === id)
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(200).json({product,msg:'product deleted...'});
}
