import { I, P } from "../ui/page";

export const RetainerExplainer = () => {
  return (
    <>
      <P>
        Retainers are sums of money paid weekly to nobles or merchants of the
        realm, usually collected by taxes or by businesses. Retainers are
        calculated by the prosperity of the settlement which is paying the
        retainer.
      </P>

      <P>
        Every week, for every settlement you have a retainer in, roll
        <I> (retainer size) * (prosperity die) * (size die)</I> and gain that
        many coins.
      </P>
    </>
  );
};
