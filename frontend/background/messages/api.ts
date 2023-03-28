import type { PlasmoMessaging } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const response = await fetch("http://localhost:5050/posts/latest");
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export default handler;