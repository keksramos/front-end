const express= require('express')
const router = express.Router();
const userController = require('../controllers/users')

/**
 * @swagger
 * /users/getAll:
 *  get:
 *      summary: read all users data
 *      tags:
 *          - users
 *      description: read ALL users data
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *      responses:
 *          200: 
 *              description: user data in json and status message
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties: 
 *                              data: 
 *                                  type: object
 *                                  properites: 
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *                              msg:
 *                                  type: string
 *                                  example: "update successfull"     
 */
router.get('/', userController.getAll)


/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: read users data by id
 *      tags:
 *          - users
 *      description: read users data by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *      responses:
 *          200: 
 *              description: user data in json and status message
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties: 
 *                              data: 
 *                                  type: object
 *                                  properites: 
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *                              msg:
 *                                  type: string
 *                                  example: "update successfull"     
 */
router.get('/:id', userController.get)

/**
 * @swagger 
 * /users/{id}:
 *  put:
 *      summary: update a user by id
 *      tags:
 *          - users
 *      description: update a user by id (podemos describir de forma más extensa lo que significan los parametros y requerimientos del código)
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *      responses:
 *          200: 
 *              description: user data in json and status message
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties: 
 *                              data: 
 *                                  type: object
 *                                  properites: 
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *                              msg:
 *                                  type: string
 *                                  example: "update successfull"     
 *          404:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: users db not found
 *                              error:
 *                                  type: string
 *                                  example: message error                                 
 *          403:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: users db not found
 *                              error:
 *                                  type: string
 *                                  example: message error
 */
router.put('/:id', userController.put)

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: delete a user by id
 *      tags:
 *          - users
 *      description: delete a user by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *      responses:
 *          200: 
 *              description: user data in json and status message
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties: 
 *                              data: 
 *                                  type: object
 *                                  properites: 
 *                                  id:
 *                                      type: string
 *                                      example: 2
 *                                  first_name:
 *                                      type: string
 *                                      example: Bettye
 *                                  last_name:
 *                                      type: string
 *                                      example: Rollin
 *                                  email:
 *                                      type: string
 *                                      example: email@email.com
 *                                  gender:
 *                                      type: sting
 *                                      example: female
 *                                  password:
 *                                      type: string
 *                                      example: hegerfhsdiofh2900j
 *                              msg:
 *                                  type: string
 *                                  example: "update successfull"     
 *          404:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: users db not found
 *                              error:
 *                                  type: string
 *                                  example: message error                                 
 *          403:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: users db not found
 *                              error:
 *                                  type: string
 *                                  example: message error
 */
router.delete('/:id', userController.delete)

module.exports= router