import Comment from "../models/comment.model.js";
import {CommentPOST, CommentPATCH} from "../validations/comment.validation.js"; 

async function findAll (req,res) {
    try{
        let All = await Comment.findAll()
        if(!All){
            return res.status(404).json({message: "Not Fount Comment"})
        }
        res.status(200).json({data:All});

    }catch(e){
        res.status(401).json({message: e.message})
        console.log(e);
    }
};
async function findOne (req,res) {
    try{
        let {id} = req.params;
    let data = await Comment.findByPk(id)
    if(!data){
        return res.status(200).json({data});
    }
    }catch(e){
        res.status(401).json({message: e.message})
        console.log(e);
    }
};
async function findBySeorch (req,res) {
    try{
        let query = req.query;
        let key = Object.keys(query);
        let value = Object.values(query);
        let newquery = {}
    
        value.forEach((val, index)=>{
            if(val){
                newquery[key[index]] = val
            }
        })
        let data = await Comment.findAll({where:newquery});
        res.status(200).json({data})
    }catch(e){
        res.status(401).json({message: e.message})
        console.log(e);
    }
}
async function create (req,res) {
    try{
        let {error, value} = CommentPOST.validate(req.body) 
        if(error){
            res.status(401).json({message: error.message});
            console.log(error);
            return
        }
        let Createdata = await Comment.create(value);
        if(!Createdata){
        return res.status(500).json({message: "Bazaga saqlashda hatolig bor"});
        };
        res.status(200).json({message: "creyted",data: Createdata});
    }catch(e){
        res.status(401).json({message: e.message})
        console.log(e);
    }
};
async function update (req,res) {
    try{
        let {id} = req.params;
        let newData = req.body;
    
        let {error, value} = CommentPATCH.validate(newData);
        if(error){
            res.status(401).json({message: error.message});
            console.log(error);
            return
        }
        let [data] = await Comment.update(value, {where:{id}},)
        if(!data){
            return res.status(401).json({message: "wrong update"})
        }
        res.status(200).json({message: "Comment update"})
    }catch(e){
        res.status(401).json({message: e.message})
        console.log(e);
    }
};
async function remove (req,res) {
   try{
    let {id} = req.params;
    let remove = await Comment.destroy({where:{id}});
    if(!remove){
        return res.status(401).json({message: "whrong delete"})
    }
    res.status(200).json({message: "Comment delete"});    
   }catch(e){
    res.status(401).json({message: e.message})
    console.log(e);
   }
};

export {findAll, findOne, findBySeorch, create, update, remove};