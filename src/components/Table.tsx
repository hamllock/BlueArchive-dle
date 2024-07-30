import Cell from './Cell';
import local from '../data/localization.json';
import { Students, Student, Localization } from '../types';

const getArmorTypeColor = (armor: string) => {
  switch (armor) {
    case 'LightArmor':
      return 'text-BlueArchiveRED';
    case 'HeavyArmor':
      return 'text-BlueArchiveYELLOW';
    case 'Unarmed':
      return 'text-BlueArchiveBLUE';
    case 'ElasticArmor':
      return 'text-BlueArchivePURPLE';
  }
};

const getBulletTypeColor = (bullet: string) => {
  switch (bullet) {
    case 'Explosion':
      return 'text-BlueArchiveRED';
    case 'Pierce':
      return 'text-BlueArchiveYELLOW';
    case 'Mystic':
      return 'text-BlueArchiveBLUE';
    case 'Sonic':
      return 'text-BlueArchivePURPLE';
  }
};
const Table: React.FC<{ studentList: Students; randStudent: Student }> = ({
  studentList,
  randStudent
}) => {
  const localization = local as Localization; // Add this line

  return (
    <>
      <div className="flex flex-col gap-4">
        {studentList.map((student, index) => (
          <div key={index} className="flex flex-row gap-1">
            <Cell image={`./icon/${student.Id}.webp`} />
            <Cell
              content={`${student.FamilyName} ${student.Name}`}
              state={
                randStudent.Name === student.Name && randStudent.FamilyName === student.FamilyName
                  ? 'green'
                  : 'red'
              }
            />
            <Cell
              content={`${localization.SchoolLong[student.School]}`}
              state={randStudent.School === student.School ? 'green' : 'red'}
            />
            <Cell
              content={`${localization.Club[student.Club]}`}
              state={randStudent.Club === student.Club ? 'green' : 'red'}
            />
            <Cell
              content={`${localization.SquadType[student.SquadType]}`}
              state={randStudent.SquadType === student.SquadType ? 'green' : 'red'}
            />
            <Cell
              content={`${localization.TacticRole[student.TacticRole]}`}
              state={randStudent.TacticRole === student.TacticRole ? 'green' : 'red'}
            />
            <Cell
              content={`${localization.BulletType[student.BulletType]}`}
              state={randStudent.BulletType === student.BulletType ? 'green' : 'red'}
              textColor={getBulletTypeColor(student.BulletType)}
            />
            <Cell
              content={`${localization.ArmorTypeLong[student.ArmorType]}`}
              state={randStudent.ArmorType === student.ArmorType ? 'green' : 'red'}
              textColor={getArmorTypeColor(student.ArmorType)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
