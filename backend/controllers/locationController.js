import Location from "../models/locations.js";

export const getLocations = async (req, res, next) => {
    try{
        const locations = await Location.find();
        res.json(locations);
    }catch(err){
        next(err);
    }
}    