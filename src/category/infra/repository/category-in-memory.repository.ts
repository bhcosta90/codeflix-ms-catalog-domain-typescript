import { CategoryEntity } from "../../domain/entity/category.entity";
import { InMemorySearchableRepository } from "../../../@shared/domains/repository/in-memory.repository";
import { CategoryRepository } from "../../domain/repository/category.repository";

export class CategoryInMemoryRepository
  extends InMemorySearchableRepository<CategoryEntity, CategoryFilter>
  implements CategoryRepository {}

type CategoryFilter = {
  name?: string;
};

const x = new CategoryInMemoryRepository();
x.search({
  page: 1,
  per_page: 1,
  filter: {}
});
