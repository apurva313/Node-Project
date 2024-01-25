const express=require('express');
const router=express.Router();
const Person=require("./../module/Person")

//post route the add a person
router.post('/', async (req,res)=>{

    try{

      //assuming the request body conatains the person data
        const data=req.body;

        //create a new person document using the Mongoose model
        const newPerson=new Person(data);

        //save the new person to the databases
        const response=await newPerson.save();
        console.log('Data Saved!');
        res.status(200).json(response);


    }catch(err){
          console.log(err);
          res.sendStatus(500).json({error: 'Internal Server Error'});
    }
})

router.get('/', async (req ,res)=>{
    try{
      const data= await Person.find();
      console.log('Data Fetched Sucessfully..!');
      res.status(200).json(data);

    }catch(err){
      console.log(err);
      res.sendStatus(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:workType', async (req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef' || workType=='waiter' || workType=='manager'){
        const response= await Person.find({work: workType});
        console.log('Response Fetched..!!');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invalid work type'});
      }

    }catch(err){
      console.log(err)
      res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports=router;
