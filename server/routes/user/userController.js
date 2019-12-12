async function statusCheck(req, res, next) {
  await console.log("Checking status...");
  res.status(200).json({ message: "Status check complete: 200." });
}

module.exports = { statusCheck };
