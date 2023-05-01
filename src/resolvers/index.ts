import { personas } from './personas';
import { personasEdgy } from './personasEdgy';
import { AddPersona } from './AddPersona'

export const resolvers = {
  Query: {
    personas,
    personasEdgy
  },
  Mutation: {
    AddPersona
  }
};
