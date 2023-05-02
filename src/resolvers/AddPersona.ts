import { iContext } from '../index';
import { iPersona } from '../types/interfaces/persona';

export const AddPersona = async (
  parent: any,
  args: { nombre: string,
          apellido: string,
          email: string,
          telefono: string},
  { db }: iContext,
  info: any
) => {

  const newPersona: Omit<iPersona, 'id'> = {
    nombre: args.nombre,
    apellido: args.apellido,
    email: args.email,
    telefono: args.telefono
  };

  const persona = await db.sequelize.models.persona.create(newPersona);

  return persona;
};
