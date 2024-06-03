import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Accent, P } from '@/components/ui/page';
import * as Properties from '@/data/properties'

const PropertyCard = ({ property }: { property: Properties.Property }) => {
  return (
    <Card className="mb-8">
      <CardHeader/>
      <CardContent>
        <P>
          <Accent>{property.name}: </Accent>
          {property.value ? `${property.value} coins. ` : null}
          {property.description}
        </P>
      </CardContent>
    </Card>
  );
};

const PropertiesPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Properties</PageHeaderHeading>
      </PageHeader>
      <div>
        {Properties.PROPERTIES.map((s) => (
          <PropertyCard property={s} />
        ))}
      </div>
    </>
  );
}

export default PropertiesPage;