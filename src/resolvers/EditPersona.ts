import { iContext } from '../index';
import { iPersona } from '../types/interfaces/persona';

export const EditPersona = async (
  parent: any,
  args: {id: number,
        nombre?: string,
        apellido?: string,
        email?: string,
        telefono?: string},
  { db }: iContext,
  info: any
) => {
  try {
    const persona = await db.sequelize.models.persona.findByPk(args.id);
    if (!persona) {
      return persona;
      //throw new Error(`Persona with ID ${args.id} not found`);
    }

    // Update the Persona record
    persona.set({
      nombre: args.nombre,
      apellido: args.apellido,
      email: args.email,
      telefono: args.telefono
      }
    );

 //   console.log(persona.email)

    const updatedPersona = await persona

    return updatedPersona;
  } catch (error) {
    console.error(error);
    //throw new Error('Failed to update Persona record');
  }
};
