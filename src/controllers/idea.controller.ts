import { Request, Response } from 'express'
import { createIdea, getAllIdeas } from "../services/idea.service";

export const createIdeaController = (req: Request, res: Response) => {
    const { title, description, tags } = req.body;

    if (!title || !description){
        res.status(400).json({
            message: "title and description are required"
        })
    }

    const idea = createIdea({title, description, tags});
    return res.status(200).json(idea);
}

export const getIdeasController = (req: Request, res: Response) => {
    const allIdeas = getAllIdeas();
    return res.status(200).json(allIdeas);
};