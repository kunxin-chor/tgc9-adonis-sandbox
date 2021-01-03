'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/about-us', ()=>"about us");

Route.get('/edit-record/:record_id', (req)=>{
  return req.params;
})

Route.get('/sightings/', 'SightingController.index');
Route.get('/sightings/about', 'SightingController.about');
Route.get('/sightings/create', 'SightingController.create');
Route.post('/sightings/create', 'SightingController.processCreate')
