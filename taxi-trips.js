module.exports = (pool) => {
    const totalTripCount = async () => {
        let trips = await pool.query('select count(*) from trip')
        return trips.rows[0].count
    }

    const findAllRegions = async () => {
        let regions = await pool.query('select region_name from region')
        return regions.rows
    }

    const findTaxisForRegion = async (region) => {
        let id = await pool.query('select region_id from region where region_name = $1',[region])
        let regionId = id.rows[0].region_id
        let taxis = await pool.query('select reg_num from taxi where region_ref = $1', [regionId])
        return taxis.rows
    }

    const findTripsByRegNumber = async (reg) => {
        let trips = await pool.query('select taxi_id from taxi where reg_num = $1', [reg])
        let taxiId= id.rows[0].taxi_id
        let route = await pool.query('select route_ref from trip where taxi_ref = $1', [taxiId])
        let routeId = route.rows.route_ref
        let trips = await pool.query('select route_name from route where route_id=$1', [routeId])
        return trips.rows
    }

    const findTripsByRegion = async () => {

    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber
    }
}