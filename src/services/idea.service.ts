import { ideas } from "../db/idea.db";
import { Idea, IdeaInput } from "../types/idea.type";

export const createIdea = (input: IdeaInput) : Idea => {
    const newIdea : Idea = {
        id: ideas.length + 1,
        ...input,
        tags: input.tags ?? [],
        createdAt: new Date
    }

    ideas.push(newIdea);

    return newIdea;
}

export const getAllIdeas = () : Idea[] => {
    return ideas;
}