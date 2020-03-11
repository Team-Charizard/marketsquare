const db = require('../models/db.js');

const GroupController = {};

GroupController.createGroup = (req, res, next) => {
  console.log('made it to createGroup!');
  const queryString =
    'INSERT INTO Groups (group_name, group_admin_id) VALUES ($1, $2) RETURNING *';
  const values = [req.body.group_name, req.params.id];

  res.locals.group_name = req.body.group_name;
  // user ID via parameterized query
  res.locals.user_id = req.params.id;

  // db.query to add group row to Groups table
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: {
          err: 'Error in database query. Check log for more information.',
        },
      });
    }
    console.log(
      'res.locals.group_id createGroup',
      response.rows[0].group_admin_id,
    );
    console.log('res.locals.user_id createGroup', res.locals.user_id);
    res.locals.group_id = response.rows[0].group_admin_id;
    console.log(`${res.locals.group_name} has been created.`);
    return next();
  });
};

GroupController.addAdmin = (req, res, next) => {
  console.log('made it to GroupController.addAdmin!');
  console.log('res.locals.group_id addAdmin', res.locals.group_id);
  console.log('res.locals.user_id addAdmin', res.locals.user_id);
  const queryString = 'INSERT INTO Members (user_id, group_id) VALUES ($1, $2)';
  const values = [res.locals.user_id, res.locals.group_id];

  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: 'Error in database query. Check log for more information',
      });
    }
    return console.log(
      `User_id ${res.locals.user_id} added as member of ${res.locals.group_name}`,
    );
  });
};

GroupController.deleteGroup = (req, res, next) => {
  console.log('made it to GroupController.deleteGroup!');
  // only admin of group should be able to delete it
};

GroupController.findMemberId = (req, res, next) => {
  console.log('made it to groupController.findMemberId!');
  const queryString = 'SELECT id FROM Users WHERE email = $1';
  const values = [req.body.email];

  // db.query to get user_id of the given email
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: 'Error in database query. Check log for more information.',
      });
    }
    res.locals.user_id = response.rows[0].id;
    console.log('user_id ', response.rows[0].id);
    return next();
  });
};

GroupController.findGroupId = (req, res, next) => {
  console.log('made it to findGroupId!');
  const queryString =
    'SELECT id FROM Groups WHERE group_admin_id = $1 AND group_name = $2';
  const values = [req.params.id, req.body.group_name];

  res.locals.email = req.body.email;
  res.locals.group_name = req.body.group_name;

  // db.query to get group_id from given group_name
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: 'Error in database query. Check log for more information.',
      });
    }
    res.locals.group_id = response.rows[0].id;
    console.log('response second query', response.rows[0].id);
    return next();
  });
};

GroupController.checkIfAlreadyExists = (req, res, next) => {
  console.log('made it to checkIfAlreadyExists');
  const queryString =
    'SELECT * FROM MEMBERS WHERE user_id = $1 AND group_id = $2';
  const values = [res.locals.user_id, res.locals.group_id];

  // db.query to check if entry already exists in Members table
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: 'Error in database query. Check log for more information.',
      });
    }
    if (response.rows.length > 0) {
      console.log(`User is already in ${res.locals.group_name}`);
      return res.send(`User is already in ${res.locals.group_name}`);
    }
    return next();
  });
};

GroupController.addMember = (req, res, next) => {
  console.log('made it to addMember');
  const queryString = 'INSERT INTO Members (user_id, group_id) VALUES ($1, $2)';
  const values = [res.locals.user_id, res.locals.group_id];

  console.log('values', values);

  // db.query to add member's user_id and group_id to Members table
  db.query(queryString, values, (error, response) => {
    if (error) {
      return next({
        log: error,
        message: 'Error in database query. Check log for more information.',
      });
    }
    // res.locals.group_id = response.rows[0].id;
    console.log('response addMember', response);
    console.log('res.locals.user_id', res.locals.user_id);
    console.log('res.locals.group_id', res.locals.user_id);
    console.log(
      `User with email ${res.locals.email} has been added to ${res.locals.group_name}`,
    );
    return next();
  });
};

GroupController.deleteMember = (req, res, next) => {
  console.log('made it to deleteMember!');
  // only the member themselves or the admin should be able to delete a member
};

module.exports = GroupController;
