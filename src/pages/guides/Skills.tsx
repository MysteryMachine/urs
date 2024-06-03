import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Accent, B, I, Indent, Li, P, Ul, UlDotless } from '@/components/ui/page';
import * as Skills from '@/data/skills'
import * as Stats from '@/data/stats';


const getRollText = (roll: Skills.Roll | undefined) => {
  if (roll) {
    if (typeof roll === 'string') {
      if (roll === Stats.ANY) {
        return 'roll 2d6 + a stat determined by the Storyteller';
      } else {
        return 'roll 2d6';
      }
    } else if (roll.length === 1) {
      return `roll +${roll[0]}`;
    } else {
      return `roll +${roll[0]}/${roll[1]}`;
    }
  }
}

const SkillCard = ({ skill }: { skill: Skills.Skill }) => {
  const rollText = getRollText(skill.roll)
  const optionalRollText = getRollText(skill.optionalRoll);
  return (
    <Card className="mb-8">
      <CardHeader>
        <P>
          <Accent>{skill.name}</Accent> {skill.description}
          {rollText && `, ${rollText}`}
          {optionalRollText && `, else ${optionalRollText}`}.
        </P>
      </CardHeader>
      <CardContent>
        {skill.addOptions && (
          <Ul full>
            {skill.addOptions.options.map((o) => (
              <Li>{o}</Li>
            ))}
          </Ul>
        )}
        {skill.success && skill.failure && skill.fullSuccess && (
          <UlDotless full>
            <Li>
              <B>On a 10+: </B>
              {skill.fullSuccess}
            </Li>
            {skill.options && (
              <Indent>
                <Ul full>
                  {skill.options.map((o) => (
                    <Li>{o}</Li>
                  ))}
                </Ul>
              </Indent>
            )}
            <Li>
              <B>On a 6-9: </B>
              {skill.success}
            </Li>
            {skill.successOptions && (
              <Indent>
                <Ul full>
                  {skill.successOptions.map((o) => (
                    <Li>{o}</Li>
                  ))}
                </Ul>
              </Indent>
            )}
            <Li>
              <B>Otherwise: </B>
              {skill.failure}
            </Li>
          </UlDotless>
        )}
        {skill.additionalInfo && <P>{skill.additionalInfo}</P>}
      </CardContent>
      <CardFooter>
        {skill.tags && <I>Tags: {skill.tags.join(', ')}</I>}
      </CardFooter>
    </Card>
  );
}

const SkillsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          Skills
        </PageHeaderHeading>
      </PageHeader>
      <div>
        {Skills.SKILLS.map((s) => <SkillCard skill={s} />)}
      </div>
    </>
  );
}

export default SkillsPage;