'use strict'
const Sighting  = use('App/Models/Sighting')
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
  create({view}) {
    return view.render('sighting-create')
  }
  async processCreate({request, response}) {
    // response.json(request.post())
    const s = new Sighting();
    let body = request.post();
    s.datetime = body.date;
    s.lat = body.lat;
    s.lng = body.lng;
    await s.save();
    response.json(s.toJSON());
  }
}

module.exports = SightingController
