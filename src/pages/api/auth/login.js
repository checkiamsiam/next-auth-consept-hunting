export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if ((email === "issiam02415@gmail.com" && password === "siamsiam") || (email === "shaman02415@gmail.com" && password === "shamanshaman")) {
      res.status(200).json({ success: true, data: { email, password, name: "Siam" }, message: "Login Success" });
    }else{
      res.status(200).json({ success: false, message: "Login Failed" });
    }
  } else {
    res.status(200).json({ success: false, message: "Login Failed" });
  }
}
