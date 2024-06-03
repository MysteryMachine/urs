import { Reward } from '@/components/game/reward';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Accent, I, P, Ul } from '@/components/ui/page';
import * as Experiences from '@/data/experiences'
import { ITEMS } from '@/data/items';
import { SKILLS } from '@/data/skills';

const renderRequire = (r: Experiences.Requirement) => {
  if (r.type === Experiences.REQUIREMENT_TYPE.ITEM) {
    return `${r.amount} ${ITEMS[r.id]?.name} ${r.amount > 1 ? 's' : ''}`
  } else if (r.type === Experiences.REQUIREMENT_TYPE.STAT) {
    return `${r.amount} ${r.stat}`
  } else if (r.type === Experiences.REQUIREMENT_TYPE.SKILL) {
    return `the ${SKILLS[r.id]?.name} skill`
  } else {
    return r.description
  }
}

  const ExperienceCard = ({ experience }: { experience: Experiences.Experience }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <P>
          <I>Requires: {experience.requires.map(renderRequire).join(', ')}.</I>
        </P>
        <P>
          <Accent>{experience.name}: </Accent> {experience.description}.
        </P>
      </CardHeader>
      <CardContent>
        <Ul full>
          {experience.reward.map((r) => (
            <Reward reward={r} />
          ))}
        </Ul>
      </CardContent>
      <CardFooter>
        {experience.tags && <I>Tags: {experience.tags.join(', ')}</I>}
      </CardFooter>
    </Card>
  );
};

const ExperiencesPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Experiences</PageHeaderHeading>
      </PageHeader>
      <div>
        {Experiences.EXPERIENCES.map((s) => (
          <ExperienceCard experience={s} />
        ))}
      </div>
    </>
  );
}

export default ExperiencesPage;