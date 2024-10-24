import Serie from "./classes/Series";
import Episode from "./classes/Episode";
import Actor from "./classes/Actor";

const printSeriesInfo = (series: Serie) => {
    console.log(`
        Title: ${series._title}
        Description: ${series._description}
        Start Year: ${series._startYear}
        Number of Episodes: ${series._episodes.length}

        Actors:
        - ${actor_1._firstName} ${actor_1._lastName}
            - Birthday: ${actor_1._birthday}
            - Gender: ${actor_1._gender}
        - ${actor_2._firstName} ${actor_2._lastName}
            - Birthday: ${actor_2._birthday}
            - Gender: ${actor_2._gender}
        - ${actor_3._firstName} ${actor_3._lastName}
            - Birthday: ${actor_3._birthday}
            - Gender: ${actor_3._gender}
        - ${actor_4._firstName} ${actor_4._lastName}
            - Birthday: ${actor_4._birthday}
            - Gender: ${actor_4._gender}
        `);
}


const actor_1 = new Actor(
    'Adam',
    'Scott',
    'April 3, 1973',
    'Male'
)

const actor_2 = new Actor(
    'Patricia',
    'Arquette',
    'April 8, 1968',
    'Female'
)

const actor_3 = new Actor(
    'John',
    'Turturro',
    'February 28, 1957',
    'Male'
)

const actor_4 = new Actor(
    'Britt',
    'Lower',
    'August 2, 1985',
    'Female'
)

const episode_1 = new Episode(
    'Good News About Hell',
    '57 minutes',
    'Mark Scout, a severed worker at Lumon Industries, leads a team in the “Macrodata Refinement” department. The introduction of a new employee and a series of unusual occurrences cause Mark to question the nature of his work and the true purpose of severance.',
    [actor_1, actor_2, actor_3, actor_4]

)

const episode_2 = new Episode(
    'Half Loop',
    '49 minutes',
    'Mark struggles to cope with the ongoing demands of work and the strange behavior of his new colleague, Helly. Outside the office, a chance encounter forces Mark to confront aspects of his personal life that seem out of reach.',
    [actor_1, actor_2, actor_3, actor_4]

)

const episode_3 = new Episode(
    'In Perpetuity',
    '51 minutes',
    `Helly begins to act out against the confines of her severed life. Mark discovers the company's mysterious Perpetuity Wing, which contains unsettling displays of Lumon’s history, leading him deeper into the company's hidden agenda.`,
    [actor_1, actor_2, actor_3, actor_4]

)

const episode_4 = new Episode(
    'The You You Are',
    '45 minutes',
    'Irving and Burt grow closer, while Helly struggles to escape her severed life. Mark learns more about his predecessor, Petey, whose actions hint at a much larger conspiracy within Lumon.',
    [actor_1, actor_2, actor_3, actor_4]

)

const serie_1 = new Serie(
    'Severance',
    'In Severance, a sinister corporation named Lumon Industries offers employees the option to undergo a medical procedure known as "severance," which surgically divides their work and personal memories. This means that when they’re at work, they have no recollection of their personal lives, and vice versa. The story follows Mark Scout, who begins to question the purpose and morality behind this procedure and uncovers dark truths about the company.',
    2022,
    'Still ongoing (as of 2024)',
    [episode_1, episode_2, episode_3, episode_4]
);

printSeriesInfo(serie_1);
