import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Arrow,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Accent,
  B,
  H1,
  H2,
  H3,
  I,
  Indent,
  Li,
  P,
  PTight,
  SimpleListItem,
  Ul,
  UlDotless,
  UlItalic,
} from '@/components/ui/page';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import * as Skills from '@/data/skills';
import { useState } from 'react';

const Us = [
  'Untitled',
  'Ubiquitously',
  'Ultimately',
  'Unabashedly',
  'Unanimously',
  'Unbearably',
  'Unceasingly',
  'Uncertainly',
  'Unchangingly',
  'Uncomfortably',
  'Uncommonly',
  'Unconditionally',
  'Unconsciously',
  'Uncontrollably',
  'Uncritically',
  'Undeniably',
  'Understandably',
  'Unexpectedly',
  'Unfailingly',
  'Unfavorably',
  'Unforgettably',
  'Unfortunately',
  'Unhappily',
  'Unilaterally',
  'Unintentionally',
  'Uniquely',
  'Universally',
  'Unjustly',
  'Unknowingly',
  'Unlawfully',
  'Unnaturally',
  'Unnecessarily',
  'Unquestionably',
  'Unwillingly',
  'Unwisely',
  'Upwardly',
];

const Rs = [
  'Racing',
  'Radiating',
  'Raging',
  'Raising',
  'Raking',
  'Ransacking',
  'Rapping',
  'Rattling',
  'Razing',
  'Reaching',
  'Reading',
  'Reaping',
  'Receiving',
  'Reciting',
  'Recognizing',
  'Recoiling',
  'Recording',
  'Recounting',
  'Recovering',
  'Recreating',
  'Recycling',
  'Redefining',
  'Redirecting',
  'Reducing',
  'Referring',
  'Reflecting',
  'Refusing',
  'Regaining',
  'Regarding',
  'Regretting',
  'Reigning',
  'Rejoicing',
  'Relating',
  'Relaxing',
  'Relaying',
  'Releasing',
  'Relenting',
  'Relishing',
  'Remaining',
  'Reminding',
  'Removing',
  'Renaming',
  'Rendering',
  'Renewing',
  'Renting',
  'Repairing',
  'Repeating',
  'Repenting',
  'Replacing',
  'Replaying',
  'Replying',
  'Reporting',
  'Representing',
  'Reproducing',
  'Requesting',
  'Rescuing',
  'Resembling',
  'Reserving',
  'Residing',
  'Resisting',
  'Resolving',
  'Respecting',
  'Responding',
  'Resting',
  'Restoring',
  'Restraining',
  'Restructuring',
  'Resulting',
  'Resuming',
  'Retaining',
  'Retaliating',
  'Retiring',
  'Retreating',
  'Retrieving',
  'Retreating',
  'Returning',
  'Reuniting',
  'Revealing',
  'Reverberating',
  'Reversing',
  'Reviewing',
  'Reviving',
  'Revoking',
  'Revolving',
  'Rewarding',
  'Rewinding',
  'Ripping',
  'Rising',
  'Risking',
  'Roaming',
  'Roaring',
  'Rocking',
  'Rolling',
  'Romancing',
  'Rooting',
  'Rotating',
  'Routing',
  'Rubbing',
  'Ruling',
  'Running',
  'Roleplaying',
];

const Ss = [
  'Sun',
  'Sky',
  'Sea',
  'Sand',
  'Star',
  'Ship',
  'Street',
  'Smile',
  'Song',
  'Story',
  'Sister',
  'Son',
  'School',
  'Student',
  'Scientist',
  'System',
  'State',
  'Society',
  'Space',
  'Surface',
  'Spirit',
  'Strength',
  'Success',
  'Style',
  'Substance',
  'Sugar',
  'Sight',
  'Sound',
  'Sense',
  'Solution',
  'Support',
  'Strategy',
  'Schedule',
  'Session',
  'Sector',
  'Sector',
  'Stadium',
  'Sculpture',
  'Serenity',
  'Symphony',
  'Selection',
  'Sensation',
  'Satisfaction',
  'Suspicion',
  'Survival',
  'Symbol',
  'Sanctuary',
  'Synthesis',
  'Satisfaction',
  'Suppression',
  'System',
];

const splitString = (str: string) => {
  if (str.length === 0) return ['', ''];
  const firstLetter = str.charAt(0);
  const restOfWord = str.slice(1);
  return [firstLetter, restOfWord];
};

const HeaderWord = ({ word }: { word: string }) => {
  const [big, small] = splitString(word);
  return (
    <>
      <span className="text-red-500 text-7xl font-extrabold mr-1">{big}</span>
      <span className="text-s pr-5">{small}</span>
    </>
  );
};

export default function Dashboard() {
  const [{ U, R, S }] = useState({
    U: Us[Math.floor(Math.random() * Us.length)],
    R: Rs[Math.floor(Math.random() * Rs.length)],
    S: Ss[Math.floor(Math.random() * Ss.length)],
  });

  const [armorOpen, setArmorOpen] = useState(false);
  const [hpOpen, setHPOpen] = useState(false);
  const [carryOpen, setCarryOpen] = useState(false);
  const [injuriesOpen, setInjuriesOpen] = useState(false);
  const [consequencesOpen, setConsequencesOpen] = useState(false);
  const [physMentOpen, setPhysMenOpen] = useState(false);
  const [bonusOpen, setBonusOpen] = useState(false);
  const [advantageOpen, setAdvantageOpen] = useState(false);
  const [tokensOpen, setTokensOpen] = useState(false);
  const [skillTagsOpen, setSkillTagsOpen] = useState(false);
  const [difficultyModifiersOpen, setDifficultyModifiersOpen] = useState(false);

  return (
    <div className="w-3/4">
      <PageHeader>
        <PageHeaderHeading>
          <HeaderWord word={U}></HeaderWord>
          <HeaderWord word={R}></HeaderWord>
          <HeaderWord word={S}></HeaderWord>
        </PageHeaderHeading>
      </PageHeader>

      <P className="w-1/2 mb-10">
        <Accent>URS</Accent> is a classless, low-fantasy roleplay game that
        focuses on giving players identity through lived experiences, and on
        creating dynamic hand to hand combat that is interesting, flavorful, and
        complex from the beginning. It is a 2d6 system.
      </P>
      <H1 id="characters" href="#characters">
        Characters
      </H1>

      <P className="w-3/4">
        Creating a character in <Accent>URS</Accent> is a pretty quick process.
        To start a game, a character needs to do two things, allocate their{' '}
        <Accent href="#base-stats">Base Stats</Accent>, select a{' '}
        <Accent href="#character-bge">Background</Accent>, and calculate their{' '}
        <Accent href="#derived-stats">Derived Stats</Accent>.
      </P>

      <H2 id="base-stats" href="#base-stats">
        Base Stats
      </H2>

      <P>
        In URS base stats directly determine your bonuses to rolls. A stats of 0
        represents the average human being. Every point represents being a
        standard deviation above or below in that stat.
      </P>

      <Ul>
        <Li>
          <Accent>Strength:</Accent> The ability to move explosively and
          powerfully. Strong people are good sprinters, can swing weapons hard,
          lift heavy things, and can physically overpower others.
        </Li>
        <Li>
          <Accent>Dexterity:</Accent> The ability to move accurately and
          gracefully. Dextrous individuals can balance on tight ropes, perform
          precise operations with small instruments, and strike at precise weak
          points.
        </Li>
        <Li>
          <Accent>Endurance:</Accent> The ability to endure pain and persevere
          physically. People with endurance are good long distance runners, can
          fight for a long time, and can endure blows and keep moving.
        </Li>

        <Li>
          <Accent>Intelligence:</Accent> The ability to learn and think.
          Intelligent people are capable of recalling information and problem
          solving. Intelligent individuals also have the easiest time grasping
          and using magic.
        </Li>
        <Li>
          <Accent>Willpower:</Accent> The ability to be mentally tough and
          disciplined. People with a strong will can focus on problems, are more
          perceptive to their surroundings. Those with strong willpower often
          find themselves gaining the favor of the gods due to their discipline.
        </Li>
        <Li>
          <Accent>Charisma:</Accent> The ability to charm and deceive.
          Charismatic people naturally find people more likely to agree with
          them, lie and barter better, and are generally better treated by
          others. Charismatic individuals find it easier to bargain for power
          with different planar beings.
        </Li>
      </Ul>

      <P>
        When chreating a character, start at -2 for all stats. You are able to
        allocate 12 points, with no stat being allowed to go over 1.
      </P>

      <H2 id="character-bge" href="#character-bge">
        Background and Experiences
      </H2>

      <P>
        In lieu of a class system, URS uses a background and experiences system,
        building a character history over time as your character grows and ages.{' '}
        <Accent href="#backgrounds-and-experiences">
          Backgrounds and Experiences
        </Accent>{' '}
        will add additional stats to the player, give them a base set of items,
        and will give them some additional skills. When creating a character,
        select a <Accent href="#backgrounds">Background</Accent>.
      </P>

      <H2 id="derived-stats" href="#derived-stats">
        Derived Stats and Injuries
      </H2>

      <P className="w-3/4 mb-10">
        Derived stats are stats that are determined by your base stats, as well
        as experiences. Injuries are long term effects that are difficult, if
        not impossible, to heal. Click on the entries below to expand for more
        information.
      </P>

      <Collapsible open={hpOpen} onOpenChange={setHPOpen}>
        <CollapsibleTrigger>
          Hit Points
          <Arrow open={hpOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            <Accent>
              Your base hit points are 12 + two times your Endurance modifier.
            </Accent>{' '}
            When a character reaches 0 hit points, players can choose to let
            their character die, or allow them to be rendered unconscious and in
            critical condition for the rest of combat. See the{' '}
            <Accent href="/skills#stabilize">Stabilize</Accent> campaign action
            for more details.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={carryOpen} onOpenChange={setCarryOpen}>
        <CollapsibleTrigger>
          Carry Capacity
          <Arrow open={carryOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            <Accent>
              Your carry capacity is 8 + two times your Strength modifier.
            </Accent>{' '}
            When a character is over carry capacity, they are encumbered, and
            take disadvantage on any Strength, Dexterity, or Constitution rolls.
            You can not carry more than twice your carrying capacity.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={armorOpen} onOpenChange={setArmorOpen}>
        <CollapsibleTrigger>
          Armor
          <Arrow open={armorOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          When taking damage, reduce it by the character’s armor value.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={injuriesOpen} onOpenChange={setInjuriesOpen}>
        <CollapsibleTrigger>
          Injuries
          <Arrow open={injuriesOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            An injury directly reduces a character’s stats or otherwise impedes
            them. If an injury is permanent, it cannot be healed through mundane
            means. Injuries can be used as severe consequences for failures, and
            are sometimes explicitly called for as a consequence for failing an
            action. Here are some examples of injuries you might give your
            players.
          </P>
          <Ul>
            <Li>
              <Accent>Strength:</Accent> broken bones, damaged muscles, lost
              limbs
            </Li>
            <Li>
              <Accent>Dexterity:</Accent> broken fingers, nerve damage to hand,
              lost hands or fingers
            </Li>
            <Li>
              <Accent>Constitution:</Accent> breathing issues, heart problems,
              fevers
            </Li>
            <Li>
              <Accent>Willpower:</Accent> concussions, lost eyes
            </Li>
            <Li>
              <Accent>Intelligence:</Accent> concussions, memory loss
            </Li>
            <Li>
              <Accent>Charisma:</Accent> scars, bruises, cut tongue
            </Li>
          </Ul>

          <P>
            You and your players can impose as severe or as forgiving a penalty
            as you like, from entirely non-mechanical, to flat minuses to stats,
            to disadvantage with stats using that roll.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <H1 id="skills" href="#skills">
        Skills
      </H1>

      <P>
        URS is a 2d6 system, meaning unless otherwise indicated, all skills roll
        a 2d6. URS skills do not crit. Anything below a 6 suffers a consequence.
        Anything between a 6-9 succeeds, but with a consequence. Anything 10 and
        above succeeds. If a skill requires a stat, you add that stat to the
        result, annotated as “roll +Stat”. If a skill requires multiple stats,
        you add all bonuses, annotated as “roll +Stat1/Stat2”.
      </P>

      <H2 id="skills-glossry" href="#skills-glossary">
        Glossary
      </H2>

      <P>Click to expand information on the terms below.</P>

      <Collapsible open={consequencesOpen} onOpenChange={setConsequencesOpen}>
        <CollapsibleTrigger>
          Consequences
          <Arrow open={consequencesOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            Many skills specify that the player will suffer a consequence.
            Sometimes, the consequences are specifically noted on the skill.
            Sometimes, consequences are left up to the Storyteller. The
            Storyteller is encouraged to make consequences harder or softer
            based on the difficulty of the encounter, how poorly the players are
            rolling, the stakes, and so on. If the story would no longer make
            sense if a player failed something, give a softer consequence and
            allow them to continue to attempt the skill the story needs. Some
            sample consequences are,
          </P>
          <UlItalic>
            <li>Deal damage to the player </li>
            <li>Kill a friendly NPC</li>
            <li>Destroy one of the player’s equipped items</li>
            <li>Isolate the player</li>
            <li>Split up the party</li>
            <li>
              Consume one of the players items in exchange for the skill
              succeeding
            </li>
            <li>
              Give disadvantage to either mental or physical skills for their
              next turn
            </li>
            <li>Draw unwanted attention</li>
          </UlItalic>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={physMentOpen} onOpenChange={setPhysMenOpen}>
        <CollapsibleTrigger>
          Physical & Mental Skills
          <Arrow open={physMentOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            Any skills using Strength, Dexterity, or Endurance are physical
            skills. Any skills using Intelligence, Willpower, or Charisma are
            mental skills.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={advantageOpen} onOpenChange={setAdvantageOpen}>
        <CollapsibleTrigger>
          Advantage & Disadvantage
          <Arrow open={advantageOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            When a dice roll is made with n advantage, roll 2+n d6 and take the
            2 best dice. When a dice roll is made with n disadvantage, roll 2+n
            d6 and take the 2 worst.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={bonusOpen} onOpenChange={setBonusOpen}>
        <CollapsibleTrigger>
          Bonus
          <Arrow open={bonusOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            When a dice roll is made with n bonus, add n to the result of the
            roll.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={tokensOpen} onOpenChange={setTokensOpen}>
        <CollapsibleTrigger>
          Tokens
          <Arrow open={tokensOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            Some skills grant tokens, and allow you to spend those tokens. Mark
            on your character sheet that you have the token, and spend it as the
            skill allows you to.
          </P>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={skillTagsOpen} onOpenChange={setSkillTagsOpen}>
        <CollapsibleTrigger>
          Skills Tags
          <Arrow open={skillTagsOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            Some skills have tags, they are denoted in italics. Tags are mostly
            used by other skills. For example, if a skill reads “when you do a
            <I>Melee Combat</I> skill” it would trigger if a skill used by the
            player had both the <I>Melee</I> and <I>Combat</I> skills. Some
            special tags are:
          </P>
          <UlDotless>
            <li>
              Melee: skill can target creatures in about a 3 meter radius.
              Requires a weapon with the Melee tag.{' '}
            </li>
            <li>
              Short Range: can target creatures in about a 50 meter radius.
              Requires a weapon with the Thrown, Short Range, or Long Range tag.
            </li>
            <li>
              Long Range: can target any creatures that one could see. Requires
              a weapon with the Long Range tag.
            </li>
            <li>
              Skill: can be used on a player’s turn. Unless otherwise stated, a
              player can only use one skill per turn.
            </li>
            <li>
              Bonus: can be used on a player’s turn. Unless otherwise stated, a
              player can only use one bonus skill per turn.
            </li>
            <li>
              Reaction: can be triggered in reaction to a specific condition or
              skill.
            </li>
            <li>
              Stealth: can only be triggered if the target is not aware of the
              player.
            </li>
          </UlDotless>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={difficultyModifiersOpen}
        onOpenChange={setDifficultyModifiersOpen}
      >
        <CollapsibleTrigger>
          Difficulty Modifiers
          <Arrow open={difficultyModifiersOpen} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <P>
            When a skill the player wants to undertake is unlikely, the
            Storyteller or the rules may add a difficulty modifier to their
            roll. This modifier reduces the player’s roll by the value of the
            modifier. Do not use difficulty modifiers that add to a player’s
            role. If you need a negative modifier, consider just allowing the
            player skill to succeed without a roll.
          </P>
          <Table className="centered w-1/3">
            <TableHeader>
              <TableRow>
                <TableHead>Modifier</TableHead>
                <TableHead>Expected Difficulty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>0</TableCell>
                <TableCell>Fifty-fifty Shot</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1-2</TableCell>
                <TableCell>Unlikely</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3-4</TableCell>
                <TableCell>Very Difficult</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5-6</TableCell>
                <TableCell>Nearly Impossible</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CollapsibleContent>
      </Collapsible>

      <H2 id="base-skills" href="#base-skills">
        Base Skills
      </H2>

      <P>
        All skills under base skills are skills the players have access to at
        the start of the game regardless of experience or background.
      </P>

      <H3 id="improvise" href="#improvise">
        Improvise
      </H3>

      <P>
        URS is intended to be played in a very freeform way. Players are free to
        try to innovate skills as they play. When they do this, the Storyteller
        will tell them to roll for improvisation. All players have access to
        improvisation. If an existing skill does not exist to allow a player to
        do something they want to do, the Storyteller is encouraged to use
        improvisation, alongside difficulty modifiers. Improvisation should not
        be something players explicitly tell the Storyteller they want to do.
        The player should narrate what their character wants to attempt, and the
        Storyteller will tell the player if and what they have to roll for. It
        is worth mentioning that not all skills require rolling improvisation.
        If the skill could be done by someone with enough time, not under
        duress, and that player is currently not under duress, just allow them
        to do the skill without a roll. Improvisation represents behaviors that
        a character likely has not trained. Therefore, the consequences for
        rolling a 6-9 should be higher than for non-natural skills, which were
        likely the result of training.
      </P>
      <Indent>
        <PTight>
          <Accent>Strength: </Accent> When a player needs to do something
          requiring a burst of speed or force, they roll +Str,
          <Indent>
            Examples: running fast to catch something, lifting or throwing a
            heavy object, holding something strong down for a short period of
            time
          </Indent>
        </PTight>
        <PTight>
          <Accent>Dexterity: </Accent> When a player needs to do something that
          requires careful movements they roll +Dex,
          <Indent>
            Examples: disarming a trap, sneaking, accurately throwing an object
            a short distance away
          </Indent>
        </PTight>
        <PTight>
          <Accent>Constitution: </Accent> When a player needs to do something
          that requires withstanding a blow or performing physical labor for an
          extended period of time, they roll +End,
          <Indent>
            Examples: using a shield, running long distance, grappling or
            restraining someone of lesser strength for a long time
          </Indent>
        </PTight>
        <PTight>
          <Accent>Intelligence: </Accent> When a player needs to think quickly,
          roll +Int,
          <Indent>
            Examples: figuring out how something complex works, coming up with a
            plan in a split second
          </Indent>
        </PTight>
        <PTight>
          <Accent>Willpower:</Accent> When a player needs to perceive something
          in a moment of duress, or maintain discipline in a tough situation,
          roll +Wil,
          <Indent>
            Examples: noticing traps and ambushes, being able to complete
            complex or taxing tasks under distraction or stress
          </Indent>
        </PTight>
        <PTight>
          <Accent>Charisma:</Accent> When a player needs to deceive or convince
          someone, roll +Cha,
          <Indent>
            Examples: lying or persuading someone in a high stakes situation.
          </Indent>
        </PTight>
      </Indent>

      <H3 id="combat-skills" href="#combat-skills">
        Combat Skills
      </H3>

      <P>
        As a low magic game, players can expect to deal with most fights through
        mundane means. As such, players are granted base combat skills to
        undertake, with at least one for each stat. Visit the{' '}
        <Accent href="/skills/base#combat">Base Combat</Accent> section of the
        Skills Page to see them all.
      </P>

      <H3 id="dialogue-skills" href="#dialogue-skills">
        Dialogue Skills
      </H3>

      <P>
        When players attempt to persuade an NPC to do something, it triggers a
        Persuasion Event. Most conversations will not require a skill check to
        navigate. Reserve Persuasion Events for when what is being asked of the
        NPC is more than can be smoothed over with simple good manners or a
        small fee.
      </P>

      <P>
        When players begin attempting to convince the NPC, the Storyteller will
        set a difficulty for the Persuasion Event using this table, selecting a
        modifier that best describes their disposition towards their own ideas
        or beliefs. This Difficulty Modifier is applied to all skills tagged as
        Persuasion. As long as players do not deeply offend the NPC, they can
        keep attempting to persuade the NPC. If the players resolve the event
        before the Difficulty goes below 0, they have fully convinced the NPC of
        their point. If the Difficulty goes below 0, the NPC will be convinced,
        but will still have their reservations.
      </P>

      <Table className="centered w-2/9">
        <TableHeader>
          <TableRow>
            <TableHead>Modifier</TableHead>
            <TableHead>Disposition Towards Belief</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>0</TableCell>
            <TableCell>Non-commital</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1-2</TableCell>
            <TableCell>Generally Convinced</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3-4</TableCell>
            <TableCell>Strongly Convinced</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5-6</TableCell>
            <TableCell>Deep and Personal</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <H1 id="backgrounds-and-experiences" href="#backgrounds-and-experiences">
        Backgrounds & Experiences
      </H1>

      <P>
        A character consists of their Background and their Experiences. These
        two things modify their stats, give them additional skills to use, and
        give them special items. A character can have only one background. They
        gain Experiences as they adventure.
      </P>

      <H2 id="backgrounds" href="#backgrounds">
        Backgrounds
      </H2>

      <P>
        Before deciding to set out on adventure, you had a life, which molded
        who you are today. Backgrounds provide starting items, skills,
        additional stats, and other things that will help give your character a
        sense of belonging and place in the world. Like most things in this
        system, it is encouraged to homebrew whatever makes sense. Story and
        immersion should always take a precedence over balance.
      </P>

      <P>
        You can see a list of premade Backgrounds in the{' '}
        <Accent href="/backgrounds">Backgrounds Page</Accent>
      </P>

      <H2 id="experiences" href="#experiences">
        Experiences
      </H2>

      <P>
        <Accent>URS</Accent> does not contain the concept of classes. When
        characters do something notable, the game invites them to spend one to
        two weeks resting in a settlement. During this time, depending on their
        stats, items, and other requirements, they may be eligible for different
        Experiences.
      </P>

      <P>
        Experiences might be relatively mundane, like working at a shop, or
        special events like being knighted. Experiences will grant the player
        items, skills, coins, and even stats on rare occassions.
      </P>

      <P>
        You can see a list of premade Experiences in the{' '}
        <Accent href="/experiences">Experiences Page</Accent>
      </P>

      <H1 id="goods-properties-services" href="#goods-properties-services">
        Goods, Property & Services
      </H1>

      <P className="w-3/4">
        Players will spend their hard earned money on three things in{' '}
        <Accent>URS</Accent>, goods, property, and services. These may be items
        they wear on their person, supplies, houses, or the services of other
        NPCs. What a player owns or is able to purchase heavily affects their
        level of power.
      </P>

      <H2 id="goods" href="#goods">
        Goods
      </H2>

      <P>
        Goods are things adventurers can equip or hold in their inventories. A
        shrewd reader might notice a conspicuous lack of metal plate armors.
        These armors are restricted to being obtained through experiences, and
        most body armor in the game can not be magically enchanted.
      </P>

      <P>
        You can see a list of all goods in the{' '}
        <Accent href="/goods">Goods Page</Accent>
      </P>

      <H2 id="property" href="#property">
        Property
      </H2>

      <P>
        Properties are assets the party can own, but are not things they can
        keep in their inventory, and can be bought from all settlements unless
        otherwise stated. They include things like houses, animals, or titles.
      </P>

      <P>
        You can see a list of all properties in the{' '}
        <Accent href="/properties">Properties Page</Accent>
      </P>

      <H2 id="services" href="#services">
        Services
      </H2>

      <P>
        Players can pay NPCs a fee in order to retain their services. Most
        services are paid for on a weekly or daily basis. Most services involve
        bringing another NPC in the players party to obtain the said benefits.
        Those NPCs will need to be fed and sheltered.
      </P>

      <P>
        You can see a list of all services in the{' '}
        <Accent href="/services">Services Page</Accent>
      </P>

      <H1 id="world" href="#world">
        World
      </H1>

      <P className="w-3/4">
        The world in <Accent>URS</Accent> is comprised of settlements tagged
        with different tags indicating their size, economic status, and
        specialty things within the settlement. Additionally, conflicts are
        defined that change those settlements.
      </P>

      <H2 id="conflicts" href="#conflicts">
        Conflicts
      </H2>

      <P>
        A conflict represents a development in the world that the party may
        choose to affect. When the party ignores a conflict, it may develop
        after about a month of adventuring, at the Storytellers discretion.
      </P>

      <H2 id="settlements" href="#settlements">
        Settlements
      </H2>

      <P>
        Settlements are the villages, towns, keeps, and cities of the world.
        They are defined by their tags. One Prosperity, Size, Growth, Attitude,
        and Defense tag is required. It is recommended to add a problem. By
        default, towns contain the following tags:
      </P>

      <UlDotless>
        <Li>
          <Accent>Village:</Accent> <I>Poor, Small, Stable, Militia, Neutral</I>
        </Li>
        <Li>
          <Accent>Town:</Accent>{' '}
          <I>Comfortable, Medium, Stable, Watch, Neutral</I>
        </Li>
        <Li>
          <Accent>City:</Accent>{' '}
          <I>Comfortable, Large, Stable, Guard, Neutral</I>
        </Li>
        <Li>
          <Accent>Capital:</Accent>{' '}
          <I>Prosperous, Giant, Stable, Army, Neutral</I>
        </Li>
      </UlDotless>

      <H3 href="#prosperity" id="prosperity">
        Prosperity
      </H3>

      <P>
        A settlement's prosperity determines the players' ability to find goods
        and services, as well as the prices of those goods and services.
        Additionally, the players will be able to find more better items in more
        prosperous settlements.
      </P>

      <UlDotless>
        <Li>
          <Accent>Poor:</Accent> No access to goods except for tools and food.
          There are plenty of people looking for work. Adventurers will find
          goods are more expensive, but labor is cheaper.{' '}
          <B>Your prosperity die is a d4.</B>
        </Li>
        <Li>
          <Accent>Comfortable:</Accent> Access to basic adventuring supplies and
          simple weapons and armor. Labor is available.{' '}
          <B>Your prosperity die is a d6.</B>
        </Li>
        <Li>
          <Accent>Prosperous</Accent>: Access to specialized goods and labor.
          Labor is more expensive. <B>Your prosperity die is a d8</B>. When
          searching for specialized labor or goods that the town does not have a
          guild or a specialized shop for, roll a 2d(size die),
          <Indent>
            <B>On a 10+:</B> You find what you are looking for.
          </Indent>
          <Indent>
            <B>Otherwise:</B> You are unable to locate what you are looking for.
          </Indent>
        </Li>
      </UlDotless>

      <P>
        When deciding if the party is able to find an item in a settlement,
        consult the item’s tags. Items with the <I>Poor</I> tag can be found in
        all settlements. Items with the <I>Comfortable</I> tag are only found in
        <I>Comfortable</I> or <I>Prosperous</I> settlements. Items with the{' '}
        <I>Prosperous</I> tag are only found in <I>Prosperous</I> settlements.
      </P>

      <H3 href="#settlement-size" id="settlement-size">
        Size
      </H3>

      <P>
        Size is used to represent the amount of people living in a settlement.
        It is used by certain experiences, properties, and skills.
      </P>

      <UlDotless>
        <Li>
          <Accent>Abandoned:</Accent> 0-10 people. <B>Your size die is a d0.</B>
        </Li>
        <Li>
          <Accent>Small:</Accent> 10 to 100 people.{' '}
          <B>Your size die is a d2.</B>
        </Li>
        <Li>
          <Accent>Medium:</Accent> 100 to 1000 people.{' '}
          <B>Your size die is a d4.</B>
        </Li>
        <Li>
          <Accent>Large:</Accent> 1000 to 10000 people.{' '}
          <B>Your size die is a d6.</B>
        </Li>
        <Li>
          <Accent>Giant:</Accent> 10000 + people. <B>Your size die is a d8.</B>
        </Li>
      </UlDotless>

      <H3 href="#settlement-growth" id="settlement-growth">
        Growth
      </H3>

      <P>
        Growth determines the ease characters have finding labor. Additionally,
        Growth is affected by Conflicts to change a settlement.
      </P>

      <UlDotless>
        <Li>
          <Accent>Shrinking:</Accent> When searching for unspecialized labor,
          roll 2d6. On 10+, you find what you are looking for.
        </Li>
        <Li>
          <Accent>Stable:</Accent> When searching for unspecialized labor, roll
          2d6. On 6+, you find what you are looking for.
        </Li>
        <Li>
          <Accent>Booming: </Accent>You are always able to find unspecialized
          labor.
        </Li>
      </UlDotless>

      <P>
        When a city reduces its growth due to a problem, if the growth is
        <I>Shrinking</I>, select 2 consequences from reducing <B>Economics</B>{' '}
        by one, reducing <B>Size</B> by one, reducing <B>Defense</B> by one, or
        removing a<B>Specialization and Guilds</B> tag, and set the growth back
        to <I>Stable</I>.
      </P>

      <H3 href="#settlement-defense" id="settlement-defense">
        Defense
      </H3>

      <UlDotless>
        {[
          'None: No defense to speak of.',
          'Militia: Basic militia of pitchfork and other tool brandishing town-folk.',
          'Watch: A small armed watch.',
          'Guard: An organized force that regularly patrols the streets.',
          'Army: A massive force, with specialized soldiers like mages, priests, and archers.',
          'Specialized: Reserved for settlements with strange defenses that do not fit the normal definition of a defense.',
        ].map(SimpleListItem)}
      </UlDotless>

      <H3 id="settlement-attitude" href="#settlement-attitude">
        Attitude
      </H3>

      <UlDotless>
        {[
          'Hostile: Guards will attack the party on sight.',
          'Cautious: The people of this settlement do not permit you to linger, and require you to leave after conducting your business.',
          'Neutral: The people of this town do not hold an opinion of you.',
          'Positive: The people regard you warmly, and are more likely to grant the party favors.',
        ].map(SimpleListItem)}
      </UlDotless>

      <H3 id="settlement-problems" href="#settlement-problems">
        Problems
      </H3>

      <UlDotless>
        <Li>
          <Accent>{'<Monster> Infestation'}</Accent> When conflicts advance,
          reduce the <B>Growth</B> of this city by 1 stage.
        </Li>
        <Li>
          <Accent>Political Unrest:</Accent>When conflicts advance, reduce
          <B>Attitude</B> by 1 stage.
        </Li>
        <Li>
          <Accent>Warring:</Accent> When conflicts advance, reduce{' '}
          <B>Defense</B> by 1 stage.
        </Li>
      </UlDotless>

      <H3 id="settlement-sng" href="#settlement-sng">
        Specialization and Guilds
      </H3>

      <UlDotless>
        <Li>
          <Accent>Magic Shop: </Accent> When the party shops here, they may
          <Accent href={`/skills/${Skills.BROWSE_MAGIC_SHOP_SKILL_ID}`}>
            {' '}
            Browse the Magic Shop{' '}
          </Accent>
          .
        </Li>
        <Li>
          <Accent>Adventurers Guild: </Accent> Recruit <B>Adventurers</B> and
          <B>Scouts</B> in this settlement without searching them out.
        </Li>
        {[
          'Port: Required to buy and board ships.',
          'Armorer: Required by some Experiences.',
          '<Profession> Guild: Required by some Experiences.',
          'Church of <Deity>: Required by some Experiences.',
          'Cult of <Being>: Required by some Experiences.',
          'College: Required by some Experiences.',
          'Carpenter’s Hall: Required by some Experiences.',
        ].map(SimpleListItem)}
      </UlDotless>
    </div>
  );
}
