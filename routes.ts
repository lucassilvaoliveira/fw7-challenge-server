import Router from "express";
import { CreateShortenUrlController } from "./core/usecases/create-shorten-url/CreateShortenUrlController";
import { CreateShortenUrlUseCase } from "./core/usecases/create-shorten-url/CreateShortenUrlUseCase";
import { MemoryDatabase } from "./infra/implementation/memory/MemoryDatabase";
import { CreateShortenUrlImpl } from "./infra/implementation/CreateShortenUrlImpl";
import { SearchShortedUrlController } from "./core/usecases/search-shorted-url/SearchShortedUrlController";
import { SearchShortedUrlUseCase } from "./core/usecases/search-shorted-url/SearchShortedUrlUseCase";
import { SearchShortedUrlImpl } from "./infra/implementation/SearchShortedUrlImpl";

const router = Router();

router.post("/create-shorten-url", async (request, response) => {
    const createShortenUrlController = 
    new CreateShortenUrlController(new CreateShortenUrlUseCase(new CreateShortenUrlImpl(new MemoryDatabase())))
    await createShortenUrlController.handle(request, response);
});

router.get("/search-shorted-url", async (request, response) => {
    const searchShortedUrlController = 
    new SearchShortedUrlController(new SearchShortedUrlUseCase(new SearchShortedUrlImpl(new MemoryDatabase())))
    await searchShortedUrlController.handle(request, response);
})

export { router }