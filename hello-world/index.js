exports.helloWorld = (req, res) => {
  let message = process.env.MESSAGE || 'Hello World, I have no secret.';
  res.status(200).send(message);
};