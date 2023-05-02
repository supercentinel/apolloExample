import { iContext } from '../index';
import { iPersona } from '../types/interfaces/persona';

export const DeletePersonaByID = async (
  parent: any,
  args: { id: number },
  { db }: iContext,
  info: any
) => {
  const ddelPersona = await db.sequelize.models.persona.findByPk(args.id)

  if(ddelPersona)
   {
      await db.sequelize.models.persona.destroy({
        where: { id: args.id  },
      });
   }
  return ddelPersona;
};

