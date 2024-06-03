import { RetainerExplainer } from '@/components/game/properties';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Accent, I, P } from '@/components/ui/page';
import * as Services from '@/data/services';

const ServiceCard = ({ service }: { service: Services.Service }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <P>
          <Accent>{service.name}: </Accent>{' '}
          {service.size ? `size ${service.size[0]}-${service.size[1]} ` : null}
          {service.billed && service.cost
            ? `costs ${service.cost} coins, billed every ${service.billed} day${service.billed > 1 ? 's' : ''}. `
            : null}
          {service.billed === 0 && service.cost
            ? `costs ${service.cost} coins. `
            : null}
          {service.description ? service.description + '' : null}
        </P>
      </CardHeader>
      {service.size ? (
        <CardContent>
          <RetainerExplainer />
        </CardContent>
      ) : null}
      <CardFooter>
        {service.tags && <I>Tags: {service.tags.join(', ')}</I>}
      </CardFooter>
    </Card>
  );
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Services</PageHeaderHeading>
      </PageHeader>
      <div>
        {Services.SERVICES.map((s) => (
          <ServiceCard service={s} />
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
