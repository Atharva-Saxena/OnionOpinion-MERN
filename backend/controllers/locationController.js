import Location from "../models/locations.js";
import locations from "../data/locations.js";

export const getLocations = async (req, res, next) => {
    try {
        // Try to get locations from database
        const dbLocations = await Promise.race([
            Location.find(),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Database timeout')), 3000)
            )
        ]);
        
        res.json(dbLocations);
    } catch (err) {
        console.log('Falling back to static location data:', err.message);
        // Fallback to static data if database is not available
        res.json(locations);
    }
}