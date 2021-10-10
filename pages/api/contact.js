import { MongoClient } from "mongodb";

// Server-side 작동

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invlaid input",
      });
      return;
    }
    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://seo_abel2:6x3E2V9RPjGjc9Qi@cluster0.npqye.mongodb.net/next-blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Connection Failed with some reason." });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection("contact_messages")
        .insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Message stored successfully", message: newMessage });
  }
}

export default handler;
