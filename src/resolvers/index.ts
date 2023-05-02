import { personas } from './personas';
import { personasEdgy } from './personasEdgy';
import { AddPersona } from './AddPersona'
import { EditPersona } from './EditPersona'
import { DeletePersonaByID } from './DeletePersonaByID'

export const resolvers = {
  Query: {
    personas,
    personasEdgy
  },
  Mutation: {
    AddPersona,
    EditPersona,
    DeletePersonaByID
  }
};
