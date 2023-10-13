const express= require('express')
const router = express.Router();
const userController = require('../controllers/users');
const Users = require('../models/users');

// /**
//  * @swagger
//  * /users/getAll:
//  *  get:
//  *      summary: read all users data
//  *      tags:
//  *          - users
//  *      description: read ALL users data
//  *      requestBody:
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      type: object
//  *                      properties:
//  *                          data:
//  *                              type: object
//  *                              properties:
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *      responses:
//  *          200: 
//  *              description: user data in json and status message
//  *              content:
//  *                  application/json:
//  *                      schema: 
//  *                          type: object
//  *                          properties: 
//  *                              data: 
//  *                                  type: object
//  *                                  properites: 
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *                              msg:
//  *                                  type: string
//  *                                  example: "update successfull"     
//  */
// router.get('/', userController.getAll)


// /**
//  * @swagger
//  * /users/{id}:
//  *  get:
//  *      summary: read users data by id
//  *      tags:
//  *          - users
//  *      description: read users data by id
//  *      parameters:
//  *        - in: path
//  *          name: id
//  *          required: true
//  *      requestBody:
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      type: object
//  *                      properties:
//  *                          data:
//  *                              type: object
//  *                              properties:
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *      responses:
//  *          200: 
//  *              description: user data in json and status message
//  *              content:
//  *                  application/json:
//  *                      schema: 
//  *                          type: object
//  *                          properties: 
//  *                              data: 
//  *                                  type: object
//  *                                  properites: 
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *                              msg:
//  *                                  type: string
//  *                                  example: "update successfull"     
//  */
// router.get('/:id', userController.get)

// /**
//  * @swagger 
//  * /users/{id}:
//  *  put:
//  *      summary: update a user by id
//  *      tags:
//  *          - users
//  *      description: update a user by id (podemos describir de forma más extensa lo que significan los parametros y requerimientos del código)
//  *      parameters:
//  *        - in: path
//  *          name: id
//  *          required: true
//  *      requestBody:
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      type: object
//  *                      properties:
//  *                          data:
//  *                              type: object
//  *                              properties:
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *      responses:
//  *          200: 
//  *              description: user data in json and status message
//  *              content:
//  *                  application/json:
//  *                      schema: 
//  *                          type: object
//  *                          properties: 
//  *                              data: 
//  *                                  type: object
//  *                                  properites: 
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *                              msg:
//  *                                  type: string
//  *                                  example: "update successfull"     
//  *          404:
//  *              description: not found
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          type: object
//  *                          properties:
//  *                              msg:
//  *                                  type: string
//  *                                  example: users db not found
//  *                              error:
//  *                                  type: string
//  *                                  example: message error                                 
//  *          403:
//  *              description: not found
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          type: object
//  *                          properties:
//  *                              msg:
//  *                                  type: string
//  *                                  example: users db not found
//  *                              error:
//  *                                  type: string
//  *                                  example: message error
//  */
// router.put('/:id', userController.put)

// /**
//  * @swagger
//  * /users/{id}:
//  *  delete:
//  *      summary: delete a user by id
//  *      tags:
//  *          - users
//  *      description: delete a user by id
//  *      parameters:
//  *        - in: path
//  *          name: id
//  *          required: true
//  *      requestBody:
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      type: object
//  *                      properties:
//  *                          data:
//  *                              type: object
//  *                              properties:
//  *                                  id:
//  *                                      type: string
//  *                                      example: 2
//  *                                  first_name:
//  *                                      type: string
//  *                                      example: Bettye
//  *                                  last_name:
//  *                                      type: string
//  *                                      example: Rollin
//  *                                  email:
//  *                                      type: string
//  *                                      example: email@email.com
//  *                                  gender:
//  *                                      type: sting
//  *                                      example: female
//  *                                  password:
//  *                                      type: string
//  *                                      example: hegerfhsdiofh2900j
//  *      responses:
//  *          200: 
//  *              description: user data in json and status message
//  *              content:
//  *                  application/json:
//  *                      schema: 
//  *                          type: object
//  *                          properties: 
//  *                              msg: 
//  *                              type: object
//  *          404:
//  *              description: not found
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          type: object
//  *                          properties:
//  *                              msg:
//  *                                  type: string
//  *                                  example: users db not found
//  *                              error:
//  *                                  type: string
//  *                                  example: message error                                 
//  *          403:
//  *              description: not found
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          type: object
//  *                          properties:
//  *                              msg:
//  *                                  type: string
//  *                                  example: users db not found
//  *                              error:
//  *                                  type: string
//  *                                  example: message error
//  */
// router.delete('/:id', userController.delete)

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Get all users
 *      tags:
 *          - users
 *      description: retrive all users from db
 *      responses:
 *          200:
 *              description: return a message and all data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: User found
 *                              data:
 *                                  type: string
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 6524cacdad03e6f697632ae0
 *                                      first_name:
 *                                          type: string
 *                                          example: Name
 *                                      last_name:
 *                                          type: string
 *                                          example: Last Name
 *                                      email:
 *                                          type: string
 *                                          example: email@mail.com
 *                                      gender:
 *                                          type: string
 *                                          example: Male
 *                                      password:
 *                                          type: string
 *                                          example: ojdhf87a5sd8fu
 *                                      date_birth:
 *                                          type: date
 *                                          example: '03-15-1989'
 */
router.get('/', userController.get)

/**
 * @swagger
 * /users/id:
 *  get:
 *      summary: Get user by id
 *      tags:
 *          - users
 *      description: retrive user by id
 *      responses:
 *          200:
 *              description: return a message and data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properites:
 *                                          _id:
 *                                              type: string
 *                                              example: "6524cacdad03e6f697632ae0"
 *                                          first_name:
 *                                              type: string
 *                                              example: Name
 *                                          last_name:
 *                                              type: string
 *                                              example: Last Name
 *                                          email:
 *                                              type: string
 *                                              example: email@mail.com
 *                                          gender:
 *                                              type: string
 *                                              example: Male
 *                                          password:
 *                                              type: string
 *                                              example: ojdhf87a5sd8fu
 *                                          date_birth:
 *                                              type: date
 *                                              example: '03-15-1989'
 *                              msg: 
 *                                  type: string
 *                                  example: User found
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
 */
router.get('/:id', userController.getById)

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Create new user
 *      tags:
 *          - users
 *      description: endpoint to create a user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name:
 *                              type: string
 *                              example: Name
 *                          last_name:
 *                              type: string
 *                              example: Last Name
 *                          email:
 *                              type: string
 *                              example: email@mail.com
 *                          gender:
 *                              type: string
 *                              example: Male
 *                          password:
 *                              type: string
 *                              example: ojdhf87a5sd8fu
 *                          date_birth:
 *                              type: date
 *                              example: '03-15-2023'
 *      responses:
 *          201:
 *              description: return a message and data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: User created
 *                              data:
 *                                  type: string
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 6524cacdad03e6f697632ae0
 *                                      first_name:
 *                                          type: string
 *                                          example: Name
 *                                      last_name:
 *                                          type: string
 *                                          example: Last Name
 *                                      email:
 *                                          type: string
 *                                          example: email@mail.com
 *                                      gender:
 *                                          type: string
 *                                          example: Male
 *                                      password:
 *                                          type: string
 *                                          example: ojdhf87a5sd8fu
 *                                      date_birth:
 *                                          type: date
 *                                          example: '03-15-1989'
 * 
 */
router.post('/', userController.post)

/**
 * @swagger
 * /users/id:
 *  put:
 *      summary: Update user
 *      tags:
 *          - users
 *      description: endpoint to update a user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name:
 *                              type: string
 *                              example: Name
 *                          last_name:
 *                              type: string
 *                              example: Last Name
 *                          email:
 *                              type: string
 *                              example: email@mail.com
 *                          gender:
 *                              type: string
 *                              example: Male
 *                          password:
 *                              type: string
 *                              example: ojdhf87a5sd8fu
 *                          date_birth:
 *                              type: date
 *                              example: '03-15-2023'
 *      responses:
 *          201:
 *              description: return a message and data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: User created
 *                              data:
 *                                  type: string
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 6524cacdad03e6f697632ae0
 *                                      first_name:
 *                                          type: string
 *                                          example: Name
 *                                      last_name:
 *                                          type: string
 *                                          example: Last Name
 *                                      email:
 *                                          type: string
 *                                          example: email@mail.com
 *                                      gender:
 *                                          type: string
 *                                          example: Male
 *                                      password:
 *                                          type: string
 *                                          example: ojdhf87a5sd8fu
 *                                      date_birth:
 *                                          type: date
 *                                          example: '03-15-1989'
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
 * 
 */
router.put('/:id', userController.put)

/**
 * @swagger
 * /users/id:
 *  delete:
 *      summary: Update user
 *      tags:
 *          - users
 *      description: endpoint to update a user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          _id:
 *                              type: string
 *                              example: 6524cacdad03e6f697632ae0
 *      responses:
 *          201:
 *              description: return a message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: User deleted
 *          404:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: user db not found
 *                              error:
 *                                  type: string
 *                                  example: message error   
 */
router.delete('/:id', userController.delete)

module.exports= router