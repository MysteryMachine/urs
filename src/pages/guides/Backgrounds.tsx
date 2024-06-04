import { Reward } from '@/components/game/reward';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Accent, I, P, Ul } from '@/components/ui/page';
import * as Backgrounds from '@/data/backgrounds';

const BackgroundCard = ({
  background,
}: {
  background: Backgrounds.Background;
}) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <P>
          <Accent>{background.name}: </Accent> {background.description}
        </P>
      </CardHeader>
      <CardContent>
        <Ul full>
          {background.reward.map((r) => <Reward reward={r} />)}
        </Ul>
      </CardContent>
      <CardFooter>
        {background.tags && <I>Tags: {background.tags.join(', ')}</I>}
      </CardFooter>
    </Card>
  );
};

const BackgroundsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Backgrounds</PageHeaderHeading>
      </PageHeader>
      <div>
        {Backgrounds.BACKGROUNDS_ARR.map((s) => (
          <BackgroundCard background={s} />
        ))}
      </div>
    </>
  );
};

export default BackgroundsPage;
