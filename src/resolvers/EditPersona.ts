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
    const UpdatedPersona = await db.sequelize.models.persona.findByPk(args.id)

    if(UpdatedPersona)
    {
        // Update the Persona record
        await UpdatedPersona.update({
          nombre: args.nombre,
          apellido: args.apellido,
          email: args.email,
          telefono: args.telefono
          }
        );
        await UpdatedPersona.save();
        console.log(UpdatedPersona);
    }

    return UpdatedPersona;
};
