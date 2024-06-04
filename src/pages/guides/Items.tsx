import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Accent, I, P } from '@/components/ui/page';
import * as Items from '@/data/items';

const ItemCard = ({ item }: { item: Items.Item }) => {
  const text = [
    item.value ? item.value + ' coins' : null,
    item.weight ? item.weight + ' weight' : null,
    item.uses ? item.uses + ' uses' : null,
    item.damageDie
      ? `1d${item.damageDie}${item.bonus?.bonusDamage ? `${item.bonus.bonusDamage < 0 ? '' : '+'}${item.bonus.bonusDamage}` : ''}`
      : null,
    item.defense ? `${item.defense} defense` : null,
    item.bonus && (item.bonus.bonusRoll || item.bonus.tags)
      ? `adds a ${item.bonus.bonusRoll && item.bonus.bonusRoll > 0 ? '+' : ''}${item.bonus.bonusRoll} bonus to${item.bonus.tags ? ' ' + item.bonus.tags.join(' ') + ' skills' : null}${item.bonus.stats ? ' using ' + item.bonus.stats.join('/') : null}`
      : null,
    item.description,
  ].filter(i => i).join(', ').concat('.');

  return (
    <Card className="mb-8">
      <CardHeader></CardHeader>
      <CardContent>
        <P>
          <Accent>
            {item.name ? item.name : null}
            {item.variants
              ? item.variants.slice(0, -1).join(', ') +
                ', or ' +
                item.variants.slice(-1)[0]
              : null}
            :
          </Accent>
          {text}
        </P>
      </CardContent>
      <CardFooter>
              <CardFooter>
        {item.tags && <I>Tags: {item.tags.join(', ')}</I>}
      </CardFooter>
      </CardFooter>
    </Card>
  );
};

const ItemsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Items</PageHeaderHeading>
      </PageHeader>
      <div>
        {Items.ITEMS_ARR.map((s) => (
          <ItemCard item={s} />
        ))}
      </div>
    </>
  );
};

export default ItemsPage;
