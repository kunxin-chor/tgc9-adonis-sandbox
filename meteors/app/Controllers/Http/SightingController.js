'use strict'
const Sighting  = use('App/Models/Sighting')
const Country = use('App/Models/Country')
class SightingController {
  async index({view }) {
    let allSightings = await Sighting.all();
    return view.render('sighting-index', {
      sightings: allSightings.toJSON()
    })
  }
  about({view}) {
    return view.render('sighting-index')
  }
  async create({view}) {
    const countries = await Country.all();
    return view.render('sighting-create', {
      countries: countries.toJSON()
    })
  }
  async processCreate({request, response}) {
    // response.json(request.post())
    const s = new Sighting();
    let body = request.post();
    s.datetime = body.date;
    s.lat = body.lat;
    s.lng = body.lng;
    s.country_id = body.country_id
    await s.save();
    response.json(s.toJSON());
  }
  async update({view, params}) {
    let sighting = (await Sighting.find(params.sighting_id));
    return view.render('sighting-update', {
      sighting: {
        ...sighting.toJSON(),
        datetime: sighting.datetime.toISOString().slice(0, 10)
      }
    })
  }
  async processUpdate({request, response, params}) {
    let sighting = (await Sighting.find(params.sighting_id));
    let body = request.body;

    sighting.datetime = body.date;
    sighting.lat = body.lat;
    sighting.lng = body.lng;
    sighting.country_id = body.country_id
    await sighting.save();

    response.route('SightingController.index')

  }
}

module.exports = SightingController
