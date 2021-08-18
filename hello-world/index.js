exports.helloWorld = (req, res) => {
  let message = process.env.MESSAGE || 'Hello World, this is the default message.';
  res.status(200).send(message);
};
