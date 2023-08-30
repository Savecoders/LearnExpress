import { faker } from "@faker-js/faker";
import { notFound, conflict } from "@hapi/boom";

export class CategoriesService {
  constructor() {}
  async create(data) {
    return data;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}
