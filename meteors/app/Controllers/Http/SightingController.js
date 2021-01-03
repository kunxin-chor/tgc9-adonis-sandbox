'use strict'

class SightingController {
  index({ request, response }) {
    response.json({
      "sightings": [
        {
          "date": "22/01/2020",
          "coordinate": {
            "lat": 1.07,
            "lng": 2.02
          }
        }
      ]
    })
  }
  about({view}) {
    return view.render('sighting-index')
  }
  create({view}) {
    return view.render('sighting-create')
  }
  processCreate({request, response}) {
    response.json(request.post())
  }
}

module.exports = SightingController
