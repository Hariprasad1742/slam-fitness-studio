import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid contact data" });
    }
  });

  app.get("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
