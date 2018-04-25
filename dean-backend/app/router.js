'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/table/info', controller.table.info.get);
  router.post('/lesson', controller.lesson.post)
  router.get('/lesson', controller.lesson.get)
  router.post('/person', controller.person.post)
  router.get('/person', controller.person.get)
  router.post('/teach', controller.teach.post)
  router.get('/teach', controller.teach.get)
  router.post('/choice', controller.choice.post)
  router.get('/choice', controller.choice.get)
  router.get('/score', controller.score.get)
  router.post('/score', controller.score.post)
}
