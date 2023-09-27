import { Request, Response } from "express";
import { SuperHero, addSuperHero, deleteSuperHero, getAllSuperHero, updateSuperHero } from "../models/superHeroModel";

export function addSuperHeroController(req: Request, res: Response): void {
  const newSuperHero: SuperHero = req.body;
  const superHero = addSuperHero(newSuperHero);
  res.status(201).json(superHero);
}

export function getAllSuperHeroController(req: Request, res: Response){
  const superheroes = getAllSuperHero();
  res.json(superheroes);
}

export function deleteSuperHeroController(req: Request, res: Response){
    const superHeroId = Number(req.params.id);
    deleteSuperHero(superHeroId);
    res.status(200).json({message:"Herói Deletado"});
}

export function updateSuperHeroController(req: Request, res: Response){
    const superHeroId = Number(req.params.id);
    const newProps: Partial<SuperHero> = req.body;
    updateSuperHero(superHeroId, newProps);
    res.status(200).json({message:"Herói Atualizado"});
}