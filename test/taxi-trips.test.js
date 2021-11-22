let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Minenhle!28@localhost:5432/taxi_trips';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(18, await taxiTrips.totalTripCount());

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{'region_name': 'Durban'}, {'region_name': 'Cape Town'}, {'region_name': 'Gauteng'}], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{ reg_num: 'NUZ123123' },{ reg_num: 'NUR123123' },{ reg_num: 'NN123123' }], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([{ reg_num: 'CA123123' },{ reg_num: 'CA234234' },{ reg_num: 'CA345345' }], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([{ reg_num: 'GP123AB' },{ reg_num: 'GP234BC' },{ reg_num: 'GP345CD' }], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual([ { route_name: 'Cape Town-Khayelitsha' } ], await taxiTrips.findTripsByRegNumber('CA123123'));
        assert.deepStrictEqual([ {route_name: 'Durban-KwaMashu'} ], await taxiTrips.findTripsByRegNumber('NUZ123123'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});