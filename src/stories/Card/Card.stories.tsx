import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template : ComponentStory<typeof Card> = (args) =><Card {...args} />

export const Default = Template.bind({});
Default.args = {
  movie : {
    backdrop_path: "https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    id: 1,
    original_title: "Spider-Man: No Way Home",
    vote_average: 8.4,
    release_date: "2021/04/10",
    popularity: 1400,
  },
  maxWidth: "40rem",
}