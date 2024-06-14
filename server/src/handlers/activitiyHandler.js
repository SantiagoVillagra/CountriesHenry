const {getActivityControl, postActivitiesControl} = require("../controllers/activityController")

const getActivitiesHand = async (req,res) =>{
    
    try {
        const response = await getActivityControl()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postActivitiesHand = async (req,res) => {
    const info = req.body
    try {
        const response = await postActivitiesControl(info)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports = {
    getActivitiesHand,
    postActivitiesHand
}