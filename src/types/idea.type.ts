export interface IdeaInput {
    title: string;
    description: string;
    tags: string[];
}

export interface Idea extends IdeaInput {
    id: number;
    createdAt: Date;
}