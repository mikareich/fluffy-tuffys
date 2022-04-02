import { ILandingPage, IPage } from './interface';

const pages: (ILandingPage | IPage)[] = [
  {
    title: 'Fluffy Tuffys',
    metaDescription: 'knekjnkjs',
    slug: 'index',
    content: null,
  },
  {
    title: 'Players',
    slug: 'players',
    metaDescription: 'All players of the server',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit commodo mauris ac accumsan. Nam at dapibus enim, sed iaculis orci. In in pharetra odio. Donec sit amet porta tortor. Nullam id eros vitae purus tempus volutpat sed at risus. Integer neque ante, pulvinar a sem sit amet, sodales imperdiet magna. Integer in efficitur eros, sed hendrerit dui. Donec in lacus tincidunt, efficitur ligula ultricies, fringilla mi. Cras pharetra elementum tempus. Quisque interdum dui vel semper vulputate. Nam tristique quis elit quis tincidunt. Donec mollis mi a sem consectetur varius. Mauris ut sagittis erat. Maecenas sed nulla nisi.',
  },
  {
    title: 'Rules',
    slug: 'rules',
    metaDescription: 'Rules of the server',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit commodo mauris ac accumsan. Nam at dapibus enim, sed iaculis orci. In in pharetra odio. Donec sit amet porta tortor. Nullam id eros vitae purus tempus volutpat sed at risus. Integer neque ante, pulvinar a sem sit amet, sodales imperdiet magna. Integer in efficitur eros, sed hendrerit dui. Donec in lacus tincidunt, efficitur ligula ultricies, fringilla mi. Cras pharetra elementum tempus. Quisque interdum dui vel semper vulputate. Nam tristique quis elit quis tincidunt. Donec mollis mi a sem consectetur varius. Mauris ut sagittis erat. Maecenas sed nulla nisi.',
  },
]

export default pages