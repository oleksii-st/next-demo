import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabsSection() {
  return (
    <Tabs defaultValue="rabbit" className="container w-full sm:max-w-[800px] my-5 sm:my-8">
      <TabsList className="flex w-full bg-[#f4f4f4] tabs-list">
        <TabsTrigger className="w-[25%] data-[state=active]:bg-white tab" value="rabbit">
          Rabbit
        </TabsTrigger>
        <TabsTrigger className="w-[25%] data-[state=active]:bg-white tab" value="squirrel">
          Squirrel
        </TabsTrigger>
        <TabsTrigger className="w-[25%] data-[state=active]:bg-white tab" value="hamster">
          Hamster
        </TabsTrigger>
        <TabsTrigger className="w-[25%] data-[state=active]:bg-white tab" value="kitten">
          Kitten
        </TabsTrigger>
      </TabsList>
      <TabsContent value="rabbit">
        <Card>
          <CardHeader>
            <CardTitle>Rabbit Samurai</CardTitle>
            <CardDescription>
              With swift leaps and razor-sharp instincts, the rabbit samurai uses its long ears to
              sense danger and its nimble paws to outmaneuver even the fiercest foes. Armed with a
              katana as light as moonlight, it defends its warren with unwavering honor. By day, it
              trains in the art of evasion, honing its speed and agility in open fields. By night,
              it patrols the meadow under the stars, alert to every rustle and shadow. The rabbit
              samurai is a master of stealth, blending into the tall grasses as if it were never
              there. It moves so gracefully that even the wind cannot hear its steps. Despite its
              small size, its courage rivals that of the fiercest warriors. Its loyalty to its
              fellow rabbits is unshakable, always ready to defend them from predators. The rabbit
              samurai believes that strength comes not from size but from the heart. It serves as a
              reminder that even the smallest creature can have a heroic spirit.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>

      <TabsContent value="squirrel">
        <Card>
          <CardHeader>
            <CardTitle>Squirrel Samurai</CardTitle>
            <CardDescription>
              Agile and daring, the squirrel samurai leaps from treetop to treetop, wielding its
              tiny blade with unmatched precision while guarding the forest from intruders. Its
              bushy tail serves as a balancing tool and a signal to its allies in the canopy. No
              invader can escape its watchful eyes, as it defends its woodland home with clever
              ambushes and lightning-fast strikes. Its armor is woven from leaves and bark, offering
              protection while keeping it light enough to move swiftly. The squirrel samurai spends
              its mornings training with the rising sun, perfecting its acrobatic moves. In the
              afternoon, it scouts the forest, ensuring its safety for all creatures that live
              there. When the wind whispers of danger, it gathers its squirrel clan to strategize
              and prepare for battle. Its sharp claws double as tools and weapons, making it
              versatile in any fight. It cherishes the harmony of the forest, fighting not for glory
              but for the balance of nature. Brave, clever, and nimble, the squirrel samurai is a
              true protector of the treetops.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>

      <TabsContent value="hamster">
        <Card>
          <CardHeader>
            <CardTitle>Hamster Samurai</CardTitle>
            <CardDescription>
              Small but mighty, the hamster samurai carries a heart as big as its courage, rolling
              into action inside its magical armored ball to protect the village. By day, it appears
              harmless, munching on seeds and storing supplies in its cheeks. But when danger looms,
              it becomes a spinning whirlwind of bravery, surprising foes with its unmatched
              determination. Its armor is forged from fragments of forgotten treasures, giving it
              both style and strength. The hamster samurai trains tirelessly in secret, mastering
              techniques passed down through generations. It is known for its ability to think
              quickly under pressure, often outsmarting enemies many times its size. Its tiny paws
              are deceptively strong, capable of wielding miniature weapons with precision. Despite
              its size, it inspires awe and respect among the other warriors. Its burrow serves as
              both a home and a hidden dojo, filled with scrolls of ancient wisdom. The hamster
              samurai proves that even the smallest hero can make the biggest difference.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>

      <TabsContent value="kitten">
        <Card>
          <CardHeader>
            <CardTitle>Kitten Samurai</CardTitle>
            <CardDescription>
              Graceful and fearless, the kitten samurai blends charm with stealth, its silky fur
              hiding the sharpest claws and the keenest of minds. It practices silent stalking in
              the moonlight, its amber eyes glowing with focus. Though young, it carries the wisdom
              of generations, always ready to pounce and defend its home with a delicate yet fierce
              touch. Its sword, small but sharp, gleams like a star in the dim light. The kitten
              samurai’s playful demeanor masks its disciplined nature, surprising those who
              underestimate it. Each morning, it sharpens its reflexes by chasing leaves and
              shadows, perfecting its speed and accuracy. It listens to the whispers of the wind,
              using them to guide its movements. With a soft paw and a steady heart, it walks the
              line between innocence and power. The kitten samurai values both honor and kindness,
              ensuring its blade is used only for protection. Its journey is just beginning, but its
              potential is as boundless as the horizon.{' '}
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
