import type { Post } from '../interfaces/postsInterface'
import gridSystemCover from '../assets/img/posts/Grid-system-cover.webp'
import gridStructur from '../assets/img/posts/common-grid-structure.webp'
import gridParts from '../assets/img/posts/grid-parts.webp'
import nyt from '../assets/img/posts/nyt-example.webp'
import ritual from '../assets/img/posts/ritual-ex.webp'
import behance from '../assets/img/posts/behance-ex.webp'
import shrine from '../assets/img/posts/shrine-ex.webp'
import figma from '../assets/img/posts/grids-in-figma.webp'
import responsive from '../assets/img/posts/responsive-ex.webp'
import gutters from '../assets/img/posts/content-not-in-gutters.webp'
import apiStack from '../assets/img/posts/Api stack.webp'
import linear101 from '../assets/img/posts/Linear 101.webp'
import uxReview from '../assets/img/posts/ux-review.webp'
import billWalsh from '../assets/img/posts/Bill Walsh.webp'
import collaboration from '../assets/img/posts/Collaboration.webp'
import pm from '../assets/img/posts/PM.webp'
import Podcast from '../assets/img/posts/Podcast.webp'
import top10 from '../assets/img/posts/top-10 js fw.webp'
import wireframing from '../assets/img/posts/wireframing.webp'

export const allPosts: Post[] = [
  {
    id: '10',
    title: 'Designing Accessible Web Interfaces',
    coverImage:
      'https://www.hostinger.com/my/tutorials/wp-content/uploads/sites/45/2022/03/web-accessibility-1.webp',
    author: 'Aghyad Fanous',
    date: '2023-11-11',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Designing Accessible Web Interfaces'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Nisi fugiat velit elit non do do commodo ex anim. Occaecat ut magna aliqua amet dolore adipisicing consequat. Cillum adipisicing proident ea cupidatat velit Lorem. Aliquip nostrud mollit anim deserunt labore cupidatat consectetur in. Ipsum officia mollit nulla quis elit.Nulla pariatur anim excepteur aliquip quis elit officia nulla irure elit incididunt. Consequat incididunt do ex quis ex esse velit nostrud labore eiusmod ipsum anim do do. Duis qui consequat irure ad deserunt magna anim ullamco eu tempor sunt. Pariatur in adipisicing eu amet eiusmod veniam minim eu ea eu et cillum consectetur dolore. Eu ipsum veniam nostrud enim esse ut excepteur. Dolor et occaecat labore minim amet enim ea ullamco et qui magna. Nulla exercitation nulla anim fugiat elit in.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Est laboris qui ipsum occaecat consectetur. Laborum ut tempor fugiat duis culpa id esse anim id fugiat aliqua non duis. Irure elit adipisicing culpa ex deserunt mollit. Nulla eiusmod dolore amet velit et veniam nulla minim. Culpa mollit dolore qui voluptate do minim proident amet cupidatat labore nostrud qui sit eu.Lorem mollit commodo labore reprehenderit. Eu enim cillum laborum veniam dolore amet ex ullamco commodo enim magna velit irure. Occaecat exercitation nostrud ullamco quis adipisicing irure. Nulla reprehenderit commodo cillum minim occaecat consequat Lorem labore. Ipsum anim dolore ea cillum eu esse do culpa. Commodo anim velit aliqua eu ullamco sunt sint do exercitation adipisicing fugiat voluptate deserunt. Incididunt voluptate eu et reprehenderit et proident reprehenderit aute cillum.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Magna veniam laboris sunt cupidatat qui. Cillum laboris ex minim sit ea duis anim anim et elit et reprehenderit. In voluptate exercitation in aute non.Eu fugiat irure adipisicing adipisicing amet non ipsum ea sunt. Ullamco in mollit incididunt ex fugiat exercitation cupidatat. Labore ex sint occaecat non ea sunt commodo ex occaecat et aliqua sunt elit. Sunt sunt irure id adipisicing enim quis. Ad eu do minim sunt qui velit id occaecat magna eu occaecat magna est.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Ullamco ullamco qui aute deserunt minim. Adipisicing duis irure duis qui fugiat aute sit dolore ut aliquip anim cillum. Voluptate ullamco dolore sint id adipisicing sunt dolore et minim minim nostrud nulla. Aliqua nostrud proident et reprehenderit aliqua adipisicing consequat tempor in qui. Voluptate non culpa labore nisi quis ex nisi proident ut occaecat consectetur et.Fugiat anim tempor magna deserunt et proident ex Lorem cillum commodo ipsum ea. Commodo Lorem in do ut veniam commodo labore minim elit nisi dolore. Exercitation ea labore duis ea aute magna tempor sunt amet commodo tempor proident sit mollit. Consequat aliqua anim ipsum nulla elit ullamco adipisicing veniam amet.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '11',
    title: 'Introduction to Design Tokens',
    coverImage:
      'https://media.licdn.com/dms/image/v2/D5612AQH82rYpaQ9Hfg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709300238556?e=2147483647&v=beta&t=Qt9x4e1Zg2cCnUW_zPeQ-JZMpPp-70RmwYqRsBi7g5s',
    author: 'Aghyad Fanous',
    date: '2023-12-12',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Introduction to Design Tokens'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Esse nulla aliquip reprehenderit ullamco exercitation. Laboris mollit exercitation minim pariatur qui laborum. Voluptate aliquip cillum sit laboris ullamco ad.Excepteur aliquip eu in pariatur sunt incididunt ipsum ea nisi et elit. Quis dolore Lorem Lorem est eu cupidatat pariatur amet. Non nostrud sunt sint ipsum. Minim cillum minim dolore consequat tempor minim veniam fugiat ipsum quis magna mollit. Officia duis adipisicing esse incididunt ea ipsum occaecat.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Reprehenderit proident reprehenderit deserunt magna elit laboris occaecat nisi esse. Dolor est culpa esse duis non esse excepteur ipsum nulla est eu elit consequat. Voluptate consequat deserunt fugiat ullamco esse labore cillum eu mollit laborum. Elit exercitation consectetur exercitation incididunt exercitation eiusmod et sit. Aliqua esse nisi ut velit. Dolor ad excepteur cillum proident consequat occaecat. Irure ex labore minim commodo minim Lorem.Dolor pariatur laborum amet sunt ipsum in minim fugiat non sunt laborum. Laborum do dolore pariatur ut voluptate. Ut est sit esse et culpa. Eu mollit do deserunt eiusmod esse mollit. Dolor excepteur laboris eu Lorem quis et minim fugiat voluptate reprehenderit magna. Laborum amet amet nostrud pariatur officia voluptate aliquip ex consequat proident nulla.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Esse ut id ut proident adipisicing ut amet aute aliqua adipisicing nulla elit quis officia. Irure anim eu id anim duis ex proident et laborum laboris magna non labore. Aliquip velit minim non fugiat Lorem sunt voluptate anim dolore. Tempor consectetur nostrud consequat sint aliquip voluptate aliqua quis nostrud pariatur. Reprehenderit veniam duis adipisicing eiusmod qui do sunt ad sunt eiusmod magna ullamco. Qui esse nulla voluptate elit excepteur consectetur duis exercitation proident pariatur sint enim et. Nostrud qui ipsum aliqua ipsum cupidatat.Aliquip id eiusmod consequat esse veniam ex id ad aliqua sit. Officia irure laboris nostrud voluptate occaecat id in deserunt id duis cupidatat voluptate nisi. Proident elit sunt minim elit occaecat in enim dolor deserunt. Dolore elit voluptate enim anim fugiat eiusmod sunt. Est commodo ad qui dolor eu ad incididunt nostrud.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Ipsum commodo nostrud magna adipisicing incididunt. Minim esse veniam Lorem qui do ullamco in consequat quis ex amet in est minim. Fugiat non eu cupidatat sit cupidatat pariatur commodo ad eiusmod magna nisi. Labore pariatur dolore elit sunt in duis adipisicing eiusmod pariatur quis. Eu commodo ea duis duis minim velit in. Amet aliquip cupidatat cillum consectetur nulla laborum.Esse sint sint aliqua minim exercitation ea fugiat ullamco elit aute dolore in elit aute. Officia enim anim incididunt nulla nulla cupidatat laborum anim sunt. Aute exercitation ad fugiat veniam fugiat ea sit.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '12',
    title: 'How to Run Effective Design Sprints',
    coverImage:
      'https://miro.medium.com/v2/resize:fit:743/1*YOzrXAPRA51j2smUVxmaJw.jpeg',
    author: 'Aghyad Fanous',
    date: '2023-01-13',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'How to Run Effective Design Sprints'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Exercitation laborum commodo in est ad laborum sunt irure incididunt laboris. Consequat culpa reprehenderit do fugiat incididunt ullamco sunt magna do ad sit. Incididunt commodo nostrud ullamco fugiat labore mollit. Et labore non ex ullamco exercitation sint ut velit irure esse labore est anim tempor. Cupidatat commodo quis dolor magna minim elit commodo ad eu deserunt in magna eiusmod ullamco.Sit id sit dolor eiusmod. Cupidatat consequat velit consectetur incididunt sint sunt incididunt ipsum sunt labore esse nostrud voluptate. Sunt non veniam culpa elit Lorem est mollit excepteur aute officia velit cupidatat nostrud irure. Voluptate consectetur minim Lorem laborum minim sint deserunt incididunt amet qui id pariatur minim excepteur. Cillum id pariatur sint ad pariatur minim enim exercitation tempor excepteur. Proident incididunt labore proident laborum ut consectetur anim velit magna nostrud ullamco. Duis eu minim nostrud velit eu eu eu in consequat mollit officia consectetur.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Est occaecat nisi eiusmod pariatur do. Commodo sint fugiat adipisicing enim irure. Labore nisi laborum cillum laboris ipsum elit. Tempor non ex dolore non deserunt do ullamco. Tempor reprehenderit mollit laborum mollit qui Lorem aliquip fugiat qui laborum est. Elit exercitation veniam nisi pariatur dolore cupidatat sunt. Eu duis sit non cillum excepteur.Eu commodo laborum sunt eiusmod tempor mollit culpa exercitation anim occaecat eu exercitation veniam. Laboris cupidatat ullamco ea in ad. Magna qui elit eiusmod in dolor sit labore consectetur Lorem.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Velit magna cupidatat id amet exercitation enim exercitation quis. Nisi incididunt dolore eu reprehenderit excepteur labore mollit magna esse veniam cillum elit. Occaecat ex eu cupidatat qui consectetur nostrud excepteur irure cillum consequat incididunt eu. Elit sit esse enim est laboris ut velit eiusmod sint exercitation. Laboris aliquip aliqua est cupidatat ullamco. Sunt pariatur do id veniam ullamco laborum.Ullamco nulla elit laborum aute duis et labore non dolore cillum. Officia aute labore eiusmod nulla velit laboris aute id irure esse deserunt culpa ea. Aute irure eiusmod exercitation officia ipsum laboris ullamco fugiat anim qui ea. Quis in Lorem qui duis est ea nostrud cupidatat. Exercitation laborum proident adipisicing nulla et aliquip commodo sint.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Exercitation fugiat laborum eu aute eiusmod id aliquip. Pariatur ullamco qui qui dolore quis sit quis sit in cupidatat dolore consectetur. Nostrud anim amet laboris ad qui dolore veniam consectetur aute officia irure eu tempor culpa.Dolore est culpa cillum ipsum non do dolore ipsum. Excepteur quis do dolor aliqua mollit officia. Minim ad qui sunt officia reprehenderit laboris ad. Aute ullamco nulla pariatur qui sint voluptate velit aute. Nisi consequat nisi id velit pariatur velit tempor aute.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '13',
    title: 'Implementing Dark Mode in Web Apps',
    coverImage:
      'https://blog.pixelfreestudio.com/wp-content/uploads/2024/07/dark-mode-1024x539.jpg',
    author: 'Aghyad Fanous',
    date: '2023-02-14',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Implementing Dark Mode in Web Apps'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Sint ea consequat non cupidatat do. Commodo mollit ullamco aliqua ad veniam voluptate consectetur aliquip. Duis duis eiusmod aliqua aliqua Lorem consectetur id sit consequat ullamco excepteur laborum labore sint.Quis occaecat sunt reprehenderit aute laboris. Reprehenderit exercitation sunt exercitation dolor qui do consequat magna pariatur id fugiat. Magna sunt proident eiusmod excepteur consequat aliquip voluptate esse culpa fugiat esse. Nisi occaecat ex proident duis laboris. Pariatur ut aute elit amet irure consequat qui dolore et anim incididunt sunt dolore. Cillum nulla ea occaecat ipsum excepteur esse ut Lorem occaecat. Magna excepteur reprehenderit ex incididunt pariatur.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Consectetur labore minim mollit do officia ad est laboris duis. Minim do id irure irure reprehenderit minim. Officia cillum esse quis ullamco Lorem in tempor adipisicing. Aute et anim ex pariatur cupidatat officia esse velit labore sunt id.Magna dolore do elit eu ea qui labore amet sit reprehenderit. Tempor fugiat ipsum nulla laborum in enim cillum. Ullamco sunt qui qui cupidatat. Velit eiusmod esse reprehenderit aute mollit anim in pariatur aliqua in. Pariatur anim irure ipsum nulla magna ad. Consectetur reprehenderit veniam do et.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Occaecat pariatur irure nisi cupidatat nisi veniam aliqua culpa. Aliqua id enim consectetur ad magna non deserunt nisi sit. Quis laborum sint est aute non aute occaecat ut excepteur minim sit irure. Dolor do exercitation esse magna. Velit adipisicing voluptate est pariatur anim duis esse eiusmod est nulla nisi eu. Excepteur anim nisi aliquip occaecat aliquip commodo enim ad aliqua ex nisi cillum.Aliquip aliqua quis Lorem labore amet ex culpa adipisicing magna aliqua cillum do. Labore esse fugiat duis sint nostrud mollit aliquip Lorem nulla laborum occaecat non mollit. Esse minim sint aute laborum officia.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Mollit qui do fugiat in anim magna aliqua magna aliquip aliqua est labore et proident. Reprehenderit voluptate proident pariatur do reprehenderit sint eiusmod ad duis voluptate. Cupidatat non nostrud nulla in ad dolore do anim in dolor eiusmod in consectetur duis. Laborum elit in adipisicing cupidatat qui ut sint aliqua labore nulla non reprehenderit eiusmod nulla. Magna duis nostrud commodo incididunt irure velit labore aute culpa.Ut consectetur amet velit eu cillum cupidatat quis et elit fugiat pariatur. Eiusmod sint veniam elit nostrud eiusmod nisi. Veniam nisi commodo anim duis anim do dolore veniam elit occaecat. Consequat tempor esse deserunt sint magna laborum nostrud excepteur ipsum aute enim qui sunt ullamco. Sint nostrud anim do sit ex est dolore et. Ad incididunt magna enim officia consequat. Cupidatat esse tempor consequat aute dolore reprehenderit ea.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '14',
    title: 'The Power of Microinteractions',
    coverImage:
      'https://www.bigdropinc.com/wp-content/uploads/2024/05/The-Power-of-Micro-interactions_Article.png',
    author: 'Aghyad Fanous',
    date: '2023-03-15',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'The Power of Microinteractions'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Non magna incididunt enim culpa Lorem eu labore dolor excepteur excepteur voluptate esse culpa anim. Dolore elit non officia consequat dolor ipsum laboris reprehenderit ullamco ea eiusmod ullamco anim. Magna id ut anim ut.Tempor reprehenderit fugiat minim ipsum mollit duis in amet aliqua dolore. Minim do proident fugiat irure duis ex eu id cupidatat ut eu cupidatat est. Eiusmod consequat pariatur ea qui ullamco ipsum sint in magna nisi tempor. Elit aute occaecat cupidatat labore anim labore cupidatat minim eu deserunt.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Nisi culpa officia sint do nostrud. Esse Lorem consectetur in esse enim occaecat aliquip. Labore ex commodo labore do sunt deserunt. Aute enim eu nisi nostrud sit velit nostrud esse aliquip.Incididunt cupidatat adipisicing sunt mollit id ad sint esse mollit reprehenderit aute Lorem aliquip veniam. Velit esse veniam do mollit laborum occaecat officia duis ad commodo in commodo dolor enim. Minim cillum fugiat occaecat sit. Ut deserunt adipisicing duis aute et id quis cupidatat mollit voluptate nulla excepteur. Anim sunt laboris Lorem ullamco tempor elit dolor officia occaecat eu eiusmod dolore cupidatat elit. Consectetur pariatur ut id exercitation cillum ullamco sunt proident eu nisi id.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Dolore esse tempor esse dolore cupidatat sint aliquip cillum velit adipisicing. Magna do exercitation velit mollit ad minim quis. Laborum veniam aute enim elit esse sint. Fugiat in dolore do sit est esse. Ex quis ad aliqua nulla labore tempor laborum Lorem consectetur nulla sit consectetur in. Consequat cillum consectetur fugiat nostrud elit cupidatat eu pariatur fugiat in mollit ullamco. Cillum in consequat pariatur tempor eu id dolor.Aliquip laborum ipsum duis aliqua velit ut minim quis non. Ipsum minim velit minim proident. Laboris commodo irure tempor et. Non consequat ipsum minim ex. Ex enim duis elit occaecat.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Culpa ea cupidatat sint voluptate. Ex nisi in nisi duis quis eu in magna qui qui irure sit in. Sit in ipsum in excepteur aliquip magna proident. Fugiat pariatur tempor anim ea voluptate deserunt est deserunt tempor officia commodo magna anim. Cillum fugiat consectetur proident exercitation in. In aute esse dolore ut. Irure sit eu deserunt qui laborum aliqua laborum consectetur nostrud irure.Aliqua aute do magna eiusmod. Incididunt voluptate culpa reprehenderit ex qui adipisicing do. Dolore nulla elit ullamco Lorem. Cillum eiusmod labore labore proident consequat duis. Fugiat incididunt nulla elit cupidatat sit pariatur aliqua commodo voluptate incididunt ut elit commodo. Magna enim ullamco minim anim sunt cillum magna tempor exercitation cillum.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '15',
    title: 'Scaling Design Systems',
    coverImage:
      'https://cdn.prod.website-files.com/6490935b207504d52a01152c/6712d3b78158c37dc529dcca_67117eec82d5581d97884dd5_651d0f63693a968a9841a234_5ec2cf19-276a-43cb-ab9b-fde0497d12b7_Blog%25252BGraphic%25252B-%25252BDesign%25252BSystem%25252BComparison.jpeg',
    author: 'Aghyad Fanous',
    date: '2023-04-16',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Scaling Design Systems'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Eu in ad elit sit veniam. Laboris nisi est reprehenderit proident ex culpa sint excepteur non consectetur amet culpa. Cupidatat non consequat enim pariatur anim dolore sint mollit Lorem duis minim. Qui irure amet culpa velit do est eiusmod fugiat id voluptate Lorem.Reprehenderit commodo ea ipsum irure incididunt magna aliqua. Ad reprehenderit anim mollit quis. Labore aliquip Lorem occaecat qui officia in est laboris velit ad mollit. Aute fugiat cupidatat adipisicing nulla. Voluptate cupidatat magna pariatur consequat in ipsum ad esse Lorem deserunt reprehenderit est. Sint commodo ad elit nostrud cupidatat sit non irure in officia exercitation id magna reprehenderit.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Exercitation tempor Lorem esse anim id in magna. Culpa voluptate minim ut ea veniam in ad ipsum. Commodo duis nulla occaecat amet aliqua ea nostrud. Lorem ut commodo magna enim ullamco et. Commodo culpa ipsum ut voluptate nostrud ut. Id labore pariatur adipisicing ipsum nostrud dolore dolore pariatur minim elit elit. Laboris proident labore est culpa magna irure Lorem anim ea culpa proident pariatur incididunt.Velit Lorem tempor laborum commodo quis dolor aute minim cillum voluptate fugiat voluptate esse. Aute aliquip pariatur commodo consequat magna sit. Cillum do proident eiusmod amet irure excepteur. Ex cupidatat eu consectetur fugiat.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Id amet et id officia. Mollit anim consectetur mollit culpa Lorem. Culpa voluptate laboris cillum quis. Esse laboris amet fugiat eu voluptate ipsum do labore mollit aute Lorem velit tempor.Cillum pariatur sunt ex pariatur pariatur fugiat tempor enim velit ut eiusmod amet sit. Laborum ullamco enim nisi laboris officia pariatur cupidatat officia voluptate sunt. Labore officia esse excepteur non cupidatat reprehenderit aliquip dolor ex. Esse elit minim laborum elit quis occaecat voluptate cupidatat velit Lorem.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Eu voluptate cillum in voluptate et non et. Exercitation consectetur proident et proident do exercitation. Reprehenderit elit adipisicing ea deserunt sunt dolor culpa anim pariatur sint irure ad mollit officia.Commodo occaecat mollit et adipisicing proident do ipsum aliquip Lorem irure anim tempor laborum consectetur. Excepteur mollit non fugiat laborum consectetur minim laborum do nostrud enim. Mollit irure ipsum exercitation anim commodo. Sunt ex et dolore ipsum aute. Incididunt exercitation eu sit et occaecat labore aute. Cupidatat cupidatat ex veniam irure exercitation anim ex ullamco sint culpa. Voluptate ut qui Lorem ipsum quis laboris sunt irure nulla ad ea in.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '16',
    title: 'Creating Emotional Connections Through UI',
    coverImage: 'https://miro.medium.com/v2/resize:fit:1400/0*6jlXHLGqrdj5guek',
    author: 'Aghyad Fanous',
    date: '2023-05-17',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Creating Emotional Connections Through UI'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Consequat et voluptate ex elit veniam labore nisi voluptate ea. Aliquip laborum irure enim culpa mollit aliqua et eiusmod incididunt mollit laborum pariatur magna. Officia ut magna commodo ex deserunt id. Eu adipisicing cupidatat pariatur nulla veniam ad id ipsum aliquip sunt mollit ad eu. Nulla laboris voluptate commodo ut labore consequat anim nisi. Ullamco ut laboris id amet est nostrud anim magna officia in consectetur. Dolor officia ut velit laboris.Elit cillum veniam labore id do aute ea in ipsum eu dolor mollit. Ut nostrud minim consectetur sit et id aliquip nostrud minim enim. In eu ad qui anim dolor et laborum labore enim. Occaecat occaecat consequat velit elit dolor. Sunt eu adipisicing velit duis laborum exercitation non ullamco exercitation. Irure occaecat nisi aliqua ullamco anim ex elit eiusmod. Cupidatat incididunt nulla ea ea enim aute duis in est.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Tempor dolor Lorem minim nisi non anim enim do culpa eu non. Laborum sint labore Lorem nostrud occaecat occaecat officia nulla ex tempor. Quis adipisicing fugiat cupidatat ea tempor proident et dolor enim pariatur nisi est. Laborum exercitation minim quis irure et qui voluptate consectetur eiusmod nulla anim exercitation voluptate elit. Qui sunt amet sunt ipsum magna consectetur in do adipisicing. Deserunt reprehenderit duis Lorem incididunt ad mollit velit. Ea excepteur veniam commodo non aute.Qui nulla mollit magna est magna mollit. Do sunt ad dolor amet. Quis minim anim mollit exercitation veniam veniam fugiat excepteur ut exercitation quis. Irure aliqua consequat Lorem quis laborum commodo. Velit pariatur ad quis labore qui ea labore fugiat et exercitation. Cillum et occaecat cillum minim magna veniam anim id.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Exercitation veniam dolor eiusmod pariatur nisi nisi duis excepteur. Nulla in dolore mollit cillum sunt fugiat nulla. Aute ullamco exercitation dolor id esse ex reprehenderit fugiat mollit.Labore sint cillum anim aute amet ullamco occaecat nostrud aliqua mollit velit amet. Cillum do duis magna sunt aute aliqua occaecat occaecat deserunt ipsum aliquip aute dolore. Occaecat aliquip Lorem culpa dolore labore eiusmod. Magna adipisicing eiusmod id tempor incididunt laboris. Amet enim elit consequat adipisicing mollit laboris anim incididunt ipsum laboris laborum anim irure amet. Et proident cupidatat irure culpa cillum elit excepteur minim pariatur enim non. Occaecat nisi et incididunt ullamco qui dolor aliquip reprehenderit deserunt esse eiusmod officia consequat.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Exercitation ea dolore adipisicing eu sit consectetur deserunt aliquip consectetur culpa laborum pariatur aliquip. Ad ad exercitation aliqua velit. Ullamco enim deserunt ex id Lorem laborum ullamco. Laborum proident cillum ullamco nisi mollit tempor adipisicing sunt ea sunt anim sint eu sit.Eu laborum id excepteur ut laborum eiusmod mollit excepteur. Lorem sit consequat ea aute. Ipsum nisi ea est cillum amet quis dolore aliqua proident amet irure occaecat. Ullamco ullamco et ut duis laboris do tempor minim. Amet nostrud pariatur exercitation occaecat sit reprehenderit velit. Lorem non voluptate irure ipsum. Nostrud culpa deserunt consectetur nisi mollit enim.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '17',
    title: 'The Future of Headless CMS',
    coverImage:
      'https://www.webosaurus.co.uk/images/is-headless-cms-the-future-pop-1200x628-jpg.jpg',
    author: 'Aghyad Fanous',
    date: '2023-06-18',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'The Future of Headless CMS'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Consectetur ea et amet et in ex Lorem veniam. Duis enim nostrud voluptate pariatur sunt qui mollit mollit ad. Et magna nisi ad qui officia eu exercitation. Consectetur velit commodo commodo quis exercitation ullamco id ex exercitation cupidatat cupidatat occaecat Lorem. Nisi laboris nisi nulla in anim do ut ea excepteur.Commodo Lorem pariatur est ullamco. Eiusmod incididunt qui consequat ullamco fugiat officia. Ad do ad do cillum consequat proident cillum. Id nostrud officia sunt esse. Nisi excepteur non eiusmod et anim sit pariatur est ipsum. Voluptate ullamco ad exercitation enim veniam eu ex anim sunt voluptate. Eiusmod exercitation qui eiusmod consequat elit amet mollit consectetur sit enim fugiat ipsum.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Labore ad velit enim cupidatat consequat do. Nulla duis amet reprehenderit esse aliquip in laborum sunt esse. Ut quis dolore ullamco sunt officia officia. Nisi ad sint officia enim veniam eu. Aliquip Lorem occaecat labore anim cillum aliquip consequat eiusmod labore quis eu laboris ea cillum. Quis amet cillum voluptate occaecat sit.Irure ex ut dolore eiusmod culpa esse mollit magna officia. Minim anim amet deserunt magna sit et. Magna reprehenderit amet nostrud elit qui culpa. Proident minim minim sit ad Lorem incididunt enim commodo duis ut anim. Fugiat ullamco id commodo dolore labore reprehenderit officia. Consectetur Lorem non consectetur dolor laboris et ex ipsum. Amet non enim ullamco nostrud consequat.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Elit minim occaecat sit laborum eu ex consectetur pariatur aliquip elit nisi. Sit ea culpa velit excepteur nostrud ullamco qui est. Reprehenderit dolor et cupidatat ipsum et qui tempor magna excepteur. Sit aute labore deserunt ipsum enim deserunt nulla incididunt minim duis dolor eiusmod occaecat. Ullamco proident eiusmod amet voluptate ullamco minim et ullamco excepteur reprehenderit duis incididunt id proident. Pariatur quis aliqua laborum laborum occaecat. Veniam mollit dolor mollit reprehenderit anim.Do enim sit quis fugiat ullamco deserunt ea laborum Lorem consequat. Fugiat qui veniam sunt nisi aliqua pariatur anim voluptate ea incididunt deserunt nostrud Lorem anim. Laborum qui consectetur duis sunt Lorem exercitation aliqua non esse officia. Irure non do incididunt dolore mollit fugiat.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Sint pariatur reprehenderit aliqua ipsum officia irure. Exercitation incididunt in amet exercitation laboris fugiat incididunt officia sint Lorem cillum. Aliqua id nulla sit Lorem cupidatat cupidatat. Ea laborum officia reprehenderit sint in et anim elit anim incididunt laborum minim culpa.Veniam quis esse elit tempor adipisicing voluptate sit pariatur. Laborum labore Lorem reprehenderit ea velit ea non deserunt tempor nulla laborum id laborum. Sit cillum adipisicing aliquip amet. Ullamco ad aliqua reprehenderit non voluptate aliquip ad occaecat exercitation culpa ullamco labore id eu. Esse sint deserunt enim fugiat consectetur minim. Ea Lorem eu commodo ea et reprehenderit dolor exercitation est tempor reprehenderit consequat. Incididunt magna aliqua amet voluptate cillum ex laboris aliquip exercitation voluptate sint eiusmod.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '18',
    title: 'Typography in Digital Design',
    coverImage:
      'https://www.lcad.edu/wp-content/uploads/2023/12/vika-long-editorial-typography-design-graphic-design-and-digital-media-scaled.jpg',
    author: 'Aghyad Fanous',
    date: '2023-07-19',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Typography in Digital Design'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Aliqua dolor deserunt est id amet ut proident. Anim consectetur excepteur proident minim sint culpa nostrud est occaecat cillum. Aute magna do sunt consectetur esse culpa qui eu non aute laboris exercitation officia. Nostrud dolore eiusmod est aliqua nulla elit laborum. Aliqua eiusmod excepteur do nulla non sint amet ad. Ullamco minim minim qui occaecat officia irure enim incididunt adipisicing mollit dolore.Dolor irure aliqua anim in commodo est. Voluptate minim veniam cillum tempor eiusmod ullamco mollit ullamco fugiat do non. Id ipsum enim commodo velit.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.In occaecat ullamco do eu incididunt magna fugiat cillum aliqua do. Minim culpa laborum duis ut ullamco laborum duis aliquip quis esse esse do nostrud incididunt. Incididunt adipisicing aliquip anim consectetur ex voluptate consectetur mollit ea aliqua pariatur. Mollit nisi excepteur exercitation adipisicing duis qui minim. Nisi quis est pariatur ad dolor culpa voluptate. Laborum occaecat ut ipsum occaecat deserunt enim exercitation aliqua labore est reprehenderit aliqua duis cupidatat. Nisi ullamco pariatur qui excepteur aute officia veniam consectetur labore ex irure sunt amet.Voluptate elit quis qui ullamco voluptate mollit aliqua incididunt. Non magna ullamco est adipisicing eu officia mollit cupidatat. Labore duis ea labore reprehenderit occaecat est adipisicing. Consectetur laboris anim laboris proident sit nostrud eiusmod officia. Veniam id exercitation elit in ea est anim aliqua. Qui ullamco est incididunt aute nulla et ullamco elit et reprehenderit exercitation tempor sit. Esse Lorem do mollit laborum nisi consequat.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Voluptate eiusmod aliqua reprehenderit nulla quis laboris ad officia dolore incididunt cillum pariatur reprehenderit reprehenderit. Dolor sint commodo laboris aliquip ullamco officia laboris. Duis nulla consectetur duis cupidatat magna sint nisi. Do cillum Lorem nostrud amet minim nulla. Esse ex cupidatat minim ex ipsum nostrud incididunt id est.Deserunt cillum reprehenderit pariatur veniam minim voluptate Lorem reprehenderit voluptate aliqua elit. Culpa exercitation aute laborum eu magna in aliquip. Tempor non nostrud sint ad ut et anim non sunt ipsum velit ad ex ea. Cillum laboris adipisicing irure quis velit eiusmod ad. Eiusmod cupidatat proident id aliqua ipsum fugiat velit Lorem nulla mollit velit. Ea duis dolore consequat cupidatat cupidatat id amet et elit.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Ad incididunt reprehenderit qui non duis. Tempor id eu esse exercitation exercitation in duis consectetur laboris esse excepteur esse veniam. Eu deserunt ad adipisicing irure. Cillum sit officia ipsum eiusmod in cillum commodo aliquip laborum ad. Cupidatat est voluptate qui nisi cupidatat aliquip minim cillum deserunt deserunt velit.Enim sit sit labore laboris. Nulla exercitation ullamco cupidatat voluptate duis ea laboris sint esse quis labore deserunt in. Fugiat laborum ipsum do non irure aliqua Lorem reprehenderit exercitation. Ullamco aliqua reprehenderit id sit voluptate ex non quis consectetur adipisicing ea ex non aliqua.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '19',
    title: 'Integrating AI in UX Workflows',
    coverImage:
      'https://www.datocms-assets.com/16499/1700655357-the-image-features-a-designer-a-young-asian-male-sitting-at-a-desk-min.png?auto=format&dpr=0.45&w=1792',
    author: 'Aghyad Fanous',
    date: '2023-08-20',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Integrating AI in UX Workflows'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Eu Lorem mollit nisi irure commodo officia. Sit velit culpa quis incididunt adipisicing. Do ullamco Lorem excepteur enim aute deserunt eu excepteur reprehenderit elit cillum. Culpa nostrud quis sunt adipisicing incididunt id reprehenderit pariatur consectetur esse. Fugiat ex nulla labore consequat cupidatat labore. Proident mollit culpa dolor ea adipisicing cupidatat id dolor velit dolore labore ipsum nisi. Qui nostrud excepteur magna ad proident nisi proident reprehenderit officia.Esse et ex amet consectetur fugiat est. Ad ipsum cillum eu enim tempor sint pariatur ipsum consectetur anim id. Minim esse eiusmod qui fugiat quis ut ad. Adipisicing ex quis pariatur velit eiusmod Lorem sint commodo aliquip tempor magna exercitation. Esse ullamco dolor esse ut consequat.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Pariatur enim amet eu sint. Culpa commodo amet dolore dolore non eu culpa mollit aute exercitation sit labore exercitation. Ex sit tempor laborum in sint dolore Lorem laboris officia.Eu amet Lorem culpa nisi eiusmod eiusmod consectetur aliquip mollit dolor aliquip culpa. Ex amet magna aliqua eiusmod tempor duis tempor sint ipsum excepteur sunt nulla elit magna. Proident aute exercitation aute excepteur fugiat sit cupidatat dolor. Proident minim ut pariatur adipisicing quis cillum excepteur quis eu. Nostrud incididunt ea duis ullamco sunt. Consequat minim occaecat veniam quis velit elit non. Consectetur consectetur laborum deserunt proident deserunt consectetur fugiat.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Duis magna sint irure excepteur quis sunt fugiat. Duis reprehenderit velit cupidatat mollit sit Lorem veniam consequat culpa quis sint. Esse exercitation laboris aliquip laborum ea. Laborum Lorem commodo ad officia. Sunt aliquip nostrud mollit reprehenderit non incididunt aute occaecat qui in ex incididunt excepteur. Ut nostrud tempor ut veniam irure exercitation duis eu eu labore. Non ut qui nostrud dolor nostrud voluptate.Do non nulla cillum irure ad nostrud. Laboris amet aliquip pariatur proident. Laborum proident cupidatat quis id labore qui nisi ut adipisicing ullamco aute dolore excepteur. Velit dolore non velit laborum. Est dolore pariatur ea Lorem consectetur do ut anim aliqua anim fugiat proident ut cupidatat.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Eiusmod ea anim velit dolor velit. Officia sit tempor anim eiusmod reprehenderit occaecat nisi incididunt ea consectetur cupidatat. Ullamco excepteur proident enim amet anim ullamco fugiat consectetur reprehenderit officia. Deserunt elit ipsum incididunt cupidatat laborum enim ex dolor. Quis enim eu qui dolor ut dolor culpa occaecat tempor ut.Cupidatat officia ut cupidatat tempor occaecat dolor elit reprehenderit et duis nulla mollit cupidatat. Nisi ullamco aliqua et ea aliqua id eiusmod incididunt labore magna ex dolore incididunt. Sit veniam consequat ea laboris ad aute cupidatat voluptate proident proident adipisicing minim. Sunt officia anim reprehenderit amet.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '20',
    title: 'Design Ethics in Tech Products',
    coverImage:
      'https://prodgs-17455.kxcdn.com/photos/feddc9cf-c649-42f6-9c5c-dde46e8367d4/small',
    author: 'Aghyad Fanous',
    date: '2023-09-21',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Design Ethics in Tech Products'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.In duis elit ea dolor aliquip consequat adipisicing voluptate ullamco commodo laboris. Dolor cillum sunt est et reprehenderit in tempor fugiat dolore. In velit consequat adipisicing adipisicing aliqua adipisicing exercitation non eu laboris sint excepteur anim. Qui minim anim in proident officia quis eiusmod sit aliquip aliquip est id est ad. Consectetur aliquip id sit sint labore sunt commodo.Aliquip Lorem pariatur veniam elit nostrud excepteur ea. Commodo quis est minim et occaecat. Anim labore amet sint velit labore cupidatat proident amet consectetur dolore eiusmod qui sint veniam. Eu dolore elit anim nulla eiusmod mollit ex irure commodo tempor velit ut.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Occaecat reprehenderit exercitation velit occaecat id in sint do excepteur excepteur. Proident tempor ullamco mollit excepteur elit sunt dolore laborum reprehenderit exercitation aute. Ut eu aliqua aliqua voluptate ad ullamco ut minim. Tempor sit aute dolor adipisicing pariatur laboris ea sunt ullamco do irure laborum quis. In esse fugiat elit aute do quis aute occaecat. Proident do ipsum ut esse amet dolore.Ullamco dolore consequat ullamco velit aliqua. Cillum sunt ex officia anim esse cupidatat nostrud. Consequat officia culpa ipsum laborum id mollit officia voluptate esse minim. Excepteur eiusmod ex sunt est esse ut ut veniam laboris id anim fugiat occaecat. Amet nisi laborum ullamco ea est eiusmod officia laborum magna aute dolore sit. Ullamco ipsum exercitation aliquip in commodo est mollit esse id in nisi quis ad.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Deserunt Lorem anim minim nostrud aute excepteur pariatur id dolore quis culpa consequat veniam laboris. Anim voluptate irure culpa proident aliqua id. Esse dolor eu laborum officia tempor amet ad. Excepteur minim voluptate qui ipsum laborum esse do fugiat in commodo Lorem et. Magna adipisicing est voluptate amet proident commodo occaecat nostrud ipsum mollit eu aliquip.Amet ullamco est est eiusmod esse voluptate laboris nostrud non consectetur reprehenderit incididunt pariatur qui. Excepteur veniam pariatur duis ullamco est cupidatat. Exercitation qui ad adipisicing anim ad ipsum reprehenderit cillum et. Elit voluptate sunt adipisicing dolore eiusmod laboris est magna nulla in irure. Consequat tempor reprehenderit nisi aliquip cupidatat exercitation proident dolore enim incididunt. Exercitation culpa sint sit esse sint pariatur irure aliquip enim qui sit cillum labore. Quis eu aute mollit non velit laborum magna amet.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Amet laborum reprehenderit irure aliquip labore ex ullamco. Ex amet officia duis qui. Labore excepteur commodo enim cupidatat ullamco dolor pariatur non non enim. Lorem ad labore aute officia excepteur exercitation nostrud deserunt. Veniam et ipsum sit commodo consequat irure esse nisi.Occaecat proident adipisicing cillum cupidatat incididunt. Exercitation mollit pariatur est ipsum aliquip Lorem reprehenderit est aliquip ipsum incididunt. Id veniam sint adipisicing cillum excepteur irure labore adipisicing incididunt nostrud velit. Ut ipsum tempor irure ad.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '4',
    title: 'Bill Walsh Leadership Lessons',
    coverImage: billWalsh,
    author: 'Alec Whitten',
    date: '2023-05-05',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Bill Walsh Leadership Lessons'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Culpa elit eiusmod excepteur deserunt adipisicing tempor proident laboris dolore. Mollit nisi in ad nisi. Nulla ex irure aute officia quis cillum commodo. Enim enim aliqua proident aliqua. Anim sint nostrud cupidatat deserunt nisi commodo id velit consequat. Laborum esse officia incididunt pariatur magna reprehenderit est duis aliqua sint.Ea magna ut tempor proident ea voluptate. Proident labore incididunt dolore tempor incididunt incididunt irure mollit eu veniam ipsum id officia est. Exercitation ad velit ipsum consequat anim dolore tempor. Ex dolor velit dolor tempor commodo nulla pariatur eu aliquip irure elit. Fugiat anim ipsum eu dolore cillum aliqua eiusmod veniam laborum velit laborum. Consequat laboris voluptate dolore aute excepteur excepteur nisi deserunt mollit aliquip magna. Velit aliqua nulla culpa laborum laborum reprehenderit nostrud consequat aliquip.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Nisi officia voluptate sunt aliqua labore voluptate esse. Sit excepteur cupidatat fugiat minim fugiat cupidatat cupidatat. Labore id irure mollit nulla esse quis cupidatat exercitation cupidatat culpa. Incididunt adipisicing irure esse non sunt. Quis reprehenderit aute eiusmod amet anim qui dolore ad dolor nisi elit reprehenderit mollit in. Laboris non nulla anim amet laborum quis incididunt sint esse magna est aute tempor esse. Est laborum ut consectetur cillum do.Laboris ipsum minim mollit cupidatat commodo veniam. Voluptate dolor pariatur fugiat esse deserunt nulla. Irure nisi reprehenderit consectetur amet anim qui nostrud duis minim magna aliqua quis cillum. Quis deserunt voluptate enim proident nulla aliqua eu ea culpa non excepteur.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Tempor non sunt proident ex sit nulla adipisicing aliquip veniam magna. Occaecat deserunt voluptate cupidatat veniam sit id eu ex do laboris aute et nisi. Veniam enim est velit dolore excepteur magna. Exercitation sit dolor proident non do qui non labore sit eu sunt. Nulla adipisicing tempor culpa tempor irure occaecat veniam proident sunt cupidatat veniam. Ea Lorem incididunt deserunt duis. Dolore consequat dolor exercitation laborum sint velit voluptate et duis nisi ea excepteur.Nostrud dolor pariatur est fugiat aute. Quis minim consequat ut culpa ut non nisi. Culpa ex aliquip voluptate pariatur eu. Sunt excepteur elit sit minim eu anim adipisicing laboris consectetur ad laborum cillum culpa.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Sunt ullamco consequat nulla culpa ad ut. Quis incididunt dolor sint amet veniam commodo excepteur sit non cillum. Exercitation velit commodo consequat nisi ad ea commodo labore et veniam. Ex culpa enim voluptate est tempor tempor enim magna sit consectetur sint qui ex. Enim fugiat id laborum qui ullamco in adipisicing nostrud sit occaecat minim amet sunt adipisicing. Id occaecat sint exercitation id labore dolore eu commodo dolor magna consectetur fugiat. Laboris nisi excepteur aliquip pariatur tempor mollit dolor nostrud eu sint incididunt.Adipisicing sint occaecat labore voluptate sint aliquip quis enim excepteur consequat minim. Ut veniam amet esse magna. Cillum dolore eu ad dolor. Eu non ut occaecat ea cupidatat qui excepteur mollit occaecat id aliquip exercitation Lorem elit. Labore esse exercitation laboris magna proident laborum.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '5',
    title: 'PM Mental Models',
    coverImage: pm,
    author: 'Demi WIlkinson',
    date: '2023-06-06',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'PM Mental Models'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Esse mollit sunt anim officia tempor. Voluptate id aliqua nostrud voluptate do irure ullamco anim velit eu nostrud. Occaecat incididunt laboris aliqua ut et enim esse exercitation ad ullamco sit mollit. Aliqua deserunt eu veniam culpa proident adipisicing proident ullamco eu pariatur. Ex ipsum nulla anim sit minim dolore enim est consequat laborum in do duis.Magna nisi adipisicing ipsum ex ex ad laboris laborum. Nostrud amet consectetur qui ex aliqua. Culpa excepteur nisi ex reprehenderit duis incididunt cillum. Ipsum Lorem aute ex occaecat velit amet est. Minim aliquip nulla dolore nulla dolore culpa reprehenderit nostrud cupidatat qui ad qui non duis. Reprehenderit pariatur ex eu enim velit id consequat. Et minim nulla aute officia sunt exercitation Lorem.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Do in aute culpa in exercitation amet occaecat cupidatat consequat in dolore laboris nostrud. Dolore consequat eu veniam veniam enim sit sint irure enim ipsum sint. Tempor in consectetur sit aliqua. Reprehenderit Lorem mollit mollit sint sit excepteur est occaecat Lorem. Magna culpa dolore ex labore ex dolor veniam esse id deserunt dolore esse fugiat. Ea sint est sit est non elit cupidatat aute in labore ipsum aliquip. Aliquip dolor qui dolor reprehenderit.Est enim Lorem commodo consectetur. Ex voluptate reprehenderit cupidatat dolore pariatur cillum voluptate. Est officia irure anim et laborum aliqua aute qui do veniam ad. Dolore cillum aute nisi proident aliqua irure ex Lorem anim et nulla laboris. Nulla nisi cillum adipisicing id commodo dolore nostrud nisi do ipsum pariatur deserunt. Laboris culpa veniam laborum ad non ullamco ipsum. Nostrud minim exercitation magna dolor mollit ex et voluptate sit nisi enim irure.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Consectetur cupidatat ipsum velit nulla officia non occaecat sint aliqua aliqua anim consectetur culpa commodo. Amet nulla incididunt adipisicing nisi amet. Elit aute qui non pariatur sit aliqua officia ullamco excepteur non ullamco.Eu Lorem voluptate adipisicing cillum adipisicing. Nulla tempor quis eu reprehenderit qui qui. Ea veniam ad ut et nisi aliqua exercitation in non sunt tempor nostrud cillum. Tempor fugiat nulla excepteur consequat quis aliqua Lorem consectetur excepteur.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Voluptate adipisicing ipsum non laboris ad in est nostrud occaecat Lorem. Ea consectetur do amet duis fugiat excepteur. Pariatur aliqua anim qui incididunt fugiat minim sint do dolor id ullamco ea minim. Reprehenderit aliqua sint incididunt excepteur irure ea deserunt fugiat cillum dolore. Labore labore ad aliqua deserunt adipisicing Lorem cillum laborum eiusmod. Excepteur pariatur do consequat non excepteur.Sunt velit magna duis ut eiusmod excepteur excepteur sunt qui dolore eiusmod cupidatat esse consectetur. Duis cillum ea in nostrud commodo commodo laboris. Mollit et irure aliquip esse consectetur non quis labore incididunt ad tempor. Commodo anim proident ipsum ad officia occaecat dolor. Incididunt Lorem mollit incididunt enim.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '6',
    title: 'What is Wireframing?',
    coverImage: wireframing,
    author: 'Candice Wu ',
    date: '2023-07-07',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'What is Wireframing?'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Ea occaecat velit pariatur quis enim. Eiusmod anim occaecat ipsum non tempor laboris qui duis consequat. Adipisicing et amet velit veniam proident adipisicing minim proident ut non. Ea eu nostrud occaecat nisi deserunt id sit.Occaecat ex laboris ex consectetur do reprehenderit tempor aliqua pariatur. Esse qui eu nisi irure sit consequat dolore ex eiusmod occaecat irure aliquip aliquip. Non tempor deserunt fugiat cupidatat deserunt enim elit aliquip pariatur laboris sint duis. Mollit quis eu labore proident laborum laboris Lorem adipisicing ea ut aliqua. Incididunt quis excepteur aliquip dolore.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Consectetur consectetur et elit sunt aute ut adipisicing ullamco eiusmod aliquip ipsum proident. Minim aute nulla et tempor officia nulla id incididunt sunt deserunt. Quis qui consectetur excepteur tempor duis. Ullamco commodo ex occaecat occaecat veniam amet laborum fugiat labore excepteur proident Lorem. Incididunt fugiat est laboris commodo sit ea est laborum aliqua deserunt officia veniam aliqua ut.Commodo cillum non qui labore officia enim. Sint non laborum ipsum ad aliquip minim officia eu ea est irure reprehenderit. Id irure in mollit adipisicing nostrud consequat laboris magna eiusmod tempor tempor et Lorem. Esse nulla pariatur ad quis id dolore proident dolore labore adipisicing culpa dolore culpa nulla.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Sit consequat tempor ut nisi commodo adipisicing anim pariatur reprehenderit minim non anim eiusmod proident. Ullamco excepteur mollit esse aliqua fugiat sunt dolore proident. Ad fugiat cupidatat ut pariatur mollit occaecat laboris anim. Non enim voluptate deserunt ad cillum sunt laborum cupidatat ea. Irure cillum enim id ea ullamco amet pariatur sint incididunt veniam. Cupidatat non magna sunt mollit.Aute id sit excepteur consequat consequat. Enim occaecat irure pariatur nostrud nostrud proident. Ipsum ullamco voluptate consequat cupidatat ad elit aute sint occaecat aliqua sint nostrud irure.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Eiusmod nostrud elit exercitation qui ullamco nulla id pariatur excepteur. Tempor incididunt id aliqua ut deserunt et quis sint ullamco proident consectetur. Exercitation eiusmod reprehenderit minim officia magna.Eiusmod est consectetur velit magna irure exercitation in nostrud magna ea ullamco officia voluptate. Culpa tempor dolor irure consequat. Esse consectetur tempor ullamco eiusmod officia consectetur laboris voluptate in mollit in.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '7',
    title: 'How Collaboration Makes Us Better Designers',
    coverImage: collaboration,
    author: 'Natali Craig',
    date: '2023-08-08',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'How Collaboration Makes Us Better Designers'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Consequat est labore mollit quis ipsum velit magna minim aliqua ut sint. Ad magna dolor occaecat excepteur in dolor voluptate. Aliquip et mollit ullamco cupidatat enim deserunt cupidatat. Laboris ex laborum cillum et nulla voluptate ex consequat. Enim cupidatat fugiat magna sit amet veniam voluptate esse fugiat commodo.Labore Lorem culpa sit nisi amet. Consequat anim nisi dolor mollit enim aliqua non nostrud do minim consectetur. Excepteur laborum velit aliqua deserunt minim dolor sint aliquip ullamco voluptate. Sint incididunt Lorem in veniam sunt. Incididunt nisi dolor consectetur esse irure sit elit. Fugiat qui id occaecat voluptate est deserunt nostrud nulla qui Lorem ullamco in consectetur aute. Laborum dolore est non eiusmod dolor pariatur amet cillum duis pariatur.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Lorem dolor consectetur duis sint reprehenderit magna. Pariatur sunt minim exercitation consectetur cupidatat amet tempor labore. Dolore esse excepteur eiusmod exercitation enim do ullamco. Nostrud mollit duis aute irure sit do dolor cupidatat et esse eiusmod minim sunt aute. Veniam occaecat pariatur eu ex ullamco Lorem amet ut aute. Reprehenderit mollit ex exercitation commodo ipsum commodo. Occaecat exercitation officia fugiat incididunt ea.Occaecat est in enim mollit aute adipisicing sint commodo in consequat duis magna. Dolore Lorem non occaecat commodo ut velit nisi veniam ut aliqua esse qui. Non deserunt officia ullamco fugiat sint amet enim.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Qui reprehenderit dolore sunt excepteur tempor aliquip do proident. Deserunt sit sit deserunt voluptate qui non amet. Dolore pariatur deserunt culpa magna eiusmod irure nisi velit adipisicing dolore enim anim quis. Adipisicing nisi consectetur ullamco consectetur officia quis dolore duis. Amet occaecat officia qui occaecat elit qui laborum amet. Dolore anim velit magna ex. Voluptate pariatur cupidatat irure deserunt officia laboris.Minim minim sint non Lorem tempor sunt fugiat laborum consectetur et anim reprehenderit exercitation. Culpa eu ut ad labore esse nisi non. Magna cillum nostrud reprehenderit quis duis qui.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Minim adipisicing cillum ut Lorem amet incididunt sunt do magna. Consectetur reprehenderit magna adipisicing mollit nostrud amet quis aute ut officia minim sunt aliquip pariatur. Id in laborum duis anim nisi.Ad Lorem in nisi laborum laborum adipisicing eiusmod esse ex nostrud amet ad. Aute sint officia duis qui cupidatat laborum sint adipisicing officia eu cupidatat. Nulla velit minim est ex excepteur labore id.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '8',
    title: 'Our Top 10 JavaScript Frameworks to Use',
    coverImage: top10,
    author: 'Drew Cano',
    date: '2023-09-09',
    tags: ['Design', 'UX'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Our Top 10 JavaScript Frameworks to Use'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Sunt in duis adipisicing veniam ullamco minim sit cupidatat quis ipsum voluptate pariatur dolore. Esse consectetur adipisicing consectetur ea aute enim ullamco id magna. Quis ullamco velit fugiat in. Fugiat Lorem officia culpa nisi voluptate excepteur. Quis proident ut nostrud tempor ex enim aliquip sit adipisicing. Tempor fugiat nostrud velit esse nostrud sint. Ipsum minim eiusmod veniam magna voluptate dolor incididunt proident dolore anim voluptate laboris consectetur dolore.Exercitation nulla nisi Lorem esse ullamco elit. Consectetur est laborum Lorem nulla do. Eu proident cupidatat aliqua incididunt anim esse reprehenderit veniam irure exercitation dolore.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Ex incididunt ad deserunt est. Laboris aute excepteur nulla qui. Et duis minim exercitation commodo proident mollit labore laborum fugiat in pariatur elit proident. Laboris do ullamco officia dolore dolor. Anim duis adipisicing qui nisi amet pariatur deserunt nostrud nisi deserunt magna nisi.Veniam elit cillum quis qui consequat eiusmod. Est eiusmod elit labore eu consectetur. Quis laborum Lorem ut fugiat. Nulla sunt duis et mollit reprehenderit ad non magna eu esse. Officia consequat officia Lorem anim cillum. Pariatur est nulla aute elit irure. Commodo ipsum do est id dolore est adipisicing adipisicing consectetur enim ad veniam labore sunt.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Reprehenderit aute consequat consequat elit amet aliqua eu nisi ut nostrud. Nostrud dolore ea pariatur aliquip quis. Ut laborum ut aliquip duis eu tempor dolor velit mollit dolor eiusmod cupidatat consectetur mollit. In irure quis occaecat tempor culpa commodo enim minim velit proident amet consectetur reprehenderit. Aliqua magna qui sint anim sunt velit nulla consequat.Ex ex labore cillum laborum ullamco tempor. Nulla sit laborum laborum ex ullamco esse cillum laboris sit in ullamco eu. Irure in aute est eu duis. Voluptate consectetur qui ex aliquip aute sit sint ipsum magna laborum ipsum aliquip occaecat et. Proident labore mollit in eu pariatur ex veniam in id voluptate.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Fugiat minim aute labore reprehenderit magna voluptate fugiat incididunt in. Est elit dolor Lorem tempor consequat enim sit laboris tempor irure. Culpa commodo deserunt anim voluptate sint amet qui ad consectetur commodo.Adipisicing esse in eu reprehenderit anim qui anim. Nisi proident excepteur consectetur reprehenderit veniam et est et fugiat culpa nisi excepteur. Quis Lorem id anim et adipisicing ut magna quis eiusmod. Quis fugiat duis aliqua irure laborum cillum occaecat excepteur nulla occaecat. Eiusmod dolor nisi labore esse aliqua duis ea. Id sint sint aliqua anim labore ullamco laborum incididunt eiusmod aliqua ex.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '9',
    title: 'Podcast: Creating a Better CX Community',
    coverImage: Podcast,
    author: 'Orlando Diggs',
    date: '2023-10-10',
    tags: ['Development', 'Tools'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Podcast: Creating a Better CX Community'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Ea laborum ullamco voluptate nisi enim enim occaecat dolore excepteur. Tempor laborum Lorem laboris sit duis dolor fugiat consectetur non. Officia in ut irure dolor veniam proident irure ullamco. Eu id laboris incididunt deserunt nulla excepteur ad sint.Proident id velit Lorem culpa et dolor proident cupidatat. Eu amet excepteur eu labore ullamco mollit tempor. Deserunt irure ex dolor qui nulla cillum. Ea laboris aute ipsum ea et sint laborum ex sint eiusmod sit.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400concept',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Esse eu exercitation aute nisi duis eiusmod do veniam dolor irure est do ea ipsum. Occaecat dolor officia officia adipisicing Lorem consectetur ea. Irure aliqua incididunt occaecat qui esse exercitation laboris id eu aliqua dolore nostrud. Laboris veniam id velit amet in adipisicing.Id ea ullamco ea fugiat fugiat excepteur aliquip in tempor sunt proident labore. Qui nostrud elit reprehenderit reprehenderit aliqua. Magna aliqua ex voluptate nisi ex in officia. Nostrud irure consequat cillum commodo. Irure aute consectetur deserunt incididunt eiusmod ad eiusmod mollit cupidatat magna. Laborum amet aute fugiat qui excepteur duis ut.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400workflow',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Eu dolor nulla anim in aliqua. Exercitation elit commodo occaecat mollit. Non fugiat fugiat proident et labore ex exercitation veniam do amet enim quis do. Dolor consequat aliquip nulla tempor aute eu ad aliqua aliqua ad. Pariatur laboris deserunt nisi enim irure. Nulla cupidatat dolore aliqua esse ipsum officia aliqua. Exercitation anim est laboris dolore officia proident dolore eiusmod.Sint ea proident ea qui incididunt aliqua. Eu eu nulla do nisi in laborum sint magna officia ea sit est amet. Aliquip incididunt quis enim enim occaecat id officia nisi sunt in consequat tempor. Laboris elit ad minim voluptate excepteur labore eu non ex voluptate mollit do amet magna. In fugiat velit ex qui labore magna nostrud ea consectetur Lorem est ex Lorem. Quis in pariatur mollit aute minim excepteur nisi commodo ut et. Consequat laboris ex laboris aliquip consectetur ipsum aliqua nostrud non.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400tools',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Dolor exercitation aute deserunt et consequat pariatur laborum ex culpa deserunt duis anim magna labore. Ipsum officia laboris nulla tempor ullamco non ullamco id sint pariatur adipisicing aute commodo. Aliqua nostrud consequat enim consequat cillum dolor sit enim qui ipsum occaecat. Fugiat ipsum anim in aliqua excepteur do quis. Sint ullamco amet incididunt est exercitation anim consectetur veniam cupidatat anim tempor dolor laboris in.Nostrud ea nostrud enim nostrud cillum voluptate ea. Non ea officia aliquip excepteur elit eu laborum enim nisi. Deserunt officia tempor laboris nisi proident sit cillum consectetur deserunt eu. Qui culpa esse commodo duis deserunt non. Nisi aliqua occaecat dolore consequat est quis nulla labore eu amet in. Et deserunt nostrud non labore quis culpa ex excepteur et. Sunt enim et voluptate laboris officia officia Lorem in exercitation culpa ea laborum tempor excepteur.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400summary',
      },
    ],
  },
  {
    id: '1',
    title: 'UX Review Presentations',
    coverImage: uxReview,
    author: 'Olivia Rhye',
    date: '2023-02-02',
    tags: ['Design', 'Research', 'Presentation'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'UX Review Presentations'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Minim dolore ex amet ad nulla in dolore ut exercitation excepteur tempor veniam ut. Irure quis minim aliquip excepteur. Pariatur in eiusmod quis enim eu voluptate amet ex ad ipsum.Incididunt ullamco labore esse velit voluptate. Id aliquip ipsum dolor dolor ullamco culpa labore tempor anim veniam incididunt. Sint eiusmod ullamco sint quis commodo eu reprehenderit elit. Sunt dolor et pariatur officia occaecat sunt duis.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Elit laboris Lorem ut et ut ut eiusmod non minim eu aliquip aute. Quis nisi adipisicing id sit enim aliquip qui ea veniam mollit exercitation irure consequat. Esse qui do laboris esse consequat tempor deserunt mollit fugiat anim cupidatat labore non.Dolor sit sit ut labore qui non velit reprehenderit cupidatat culpa consectetur id. Exercitation magna laborum non consectetur ut dolor deserunt nulla labore deserunt. Occaecat sunt in nisi excepteur. Non veniam ea eiusmod reprehenderit consectetur sint mollit ad elit id elit. Veniam irure eu veniam ut voluptate. Ex nostrud exercitation officia esse consectetur enim exercitation voluptate eu adipisicing.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Aliquip eu ut culpa incididunt pariatur eiusmod magna esse aliquip Lorem ex in. Cillum mollit do ipsum minim sit et enim minim pariatur eu. Id incididunt elit aute amet excepteur veniam est velit laboris Lorem culpa laboris nisi. Pariatur magna pariatur laboris culpa commodo occaecat irure culpa. Mollit in est sunt veniam amet enim id incididunt tempor commodo id anim anim. Mollit nisi laboris esse duis adipisicing ad sint sint excepteur ea cupidatat occaecat cillum proident. Duis occaecat esse exercitation cupidatat aliquip sint officia dolore occaecat commodo.Cillum nisi pariatur eu ex commodo excepteur. Incididunt commodo cupidatat ea aliqua cupidatat deserunt in proident minim anim magna aliqua. Deserunt sint sit sint mollit Lorem consectetur sit nostrud cupidatat magna.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Voluptate cupidatat excepteur ex cillum. Consequat ex proident excepteur et tempor. Deserunt culpa proident do et quis voluptate ea adipisicing sit nulla esse ea fugiat. Amet velit et excepteur eiusmod ullamco dolore quis occaecat laboris. Duis enim fugiat minim anim aliqua mollit labore duis consectetur consequat reprehenderit nisi.Amet nulla minim minim ullamco et dolor eu voluptate. Aliquip laborum labore ea voluptate. Ex quis esse commodo amet. Nulla irure qui duis amet laborum dolore sunt irure. Tempor officia adipisicing occaecat qui adipisicing ex do mollit consectetur veniam consequat do id qui. Veniam veniam pariatur velit est non non incididunt do consequat quis duis duis adipisicing sit. Laboris nisi id incididunt amet amet pariatur irure incididunt commodo consectetur voluptate sit.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '2',
    title: 'Migrating to Linear 101',
    coverImage: linear101,
    author: 'Phoenix Baker',
    date: '2023-03-03',
    tags: ['Design', 'Research'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Migrating to Linear 101'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Duis mollit sunt sunt in ut est cillum et in do proident. Id exercitation qui ullamco ea elit commodo. Tempor id velit nisi ipsum laborum excepteur enim cupidatat.Laborum voluptate aute et eu. Minim nostrud adipisicing quis est Lorem aute excepteur elit ullamco adipisicing voluptate occaecat laborum. Laboris non qui duis enim sit elit duis labore.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Proident exercitation incididunt id ut proident pariatur voluptate tempor est nisi tempor. Quis dolor voluptate irure sunt labore dolore tempor. Anim aliqua veniam ipsum est irure deserunt ad non deserunt. Quis nisi ad quis exercitation irure proident nostrud consectetur. Velit ipsum aliqua cupidatat adipisicing laborum sint cillum ipsum eiusmod dolor incididunt.Magna esse id qui exercitation veniam incididunt minim anim ad voluptate. Eu ex dolor qui Lorem ad culpa aliqua cupidatat mollit. Sit et Lorem sunt incididunt minim culpa ad incididunt quis nostrud. Irure Lorem voluptate id ipsum consequat veniam.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Aute consectetur laborum ea amet quis dolore. Proident proident id cillum in aliqua sint deserunt. Tempor ex et velit mollit Lorem do dolore Lorem ipsum est. Magna labore consequat sunt tempor id aute reprehenderit Lorem elit pariatur nulla deserunt quis. Eu fugiat dolore incididunt dolor duis ad consectetur nostrud adipisicing ea. In non deserunt culpa duis ea quis dolor cillum voluptate aute aliquip aliqua non nostrud.Lorem Lorem fugiat incididunt elit id aliquip in id cillum consectetur eiusmod occaecat eu ad. Excepteur ex cillum voluptate incididunt sunt veniam fugiat aliquip reprehenderit voluptate. Aliquip laboris ullamco consectetur nisi fugiat adipisicing sunt enim et non ullamco elit.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Laboris Lorem labore proident non consectetur ea consectetur ea esse eu consequat eiusmod adipisicing. Aliquip veniam non qui pariatur dolore adipisicing do cillum laboris sint enim minim qui. Do do officia laboris consequat dolore esse excepteur commodo cupidatat voluptate esse ullamco. Proident commodo magna commodo consectetur amet duis quis.Commodo aliqua non nisi sint sint fugiat ut non sit eu mollit Lorem in. Irure labore ex tempor aliquip ut commodo cupidatat sint. Cupidatat ad ea sunt labore nostrud ipsum duis commodo excepteur ut.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '3',
    title: 'Building Your API Stack',
    coverImage: apiStack,
    author: 'Lana Steiner',
    date: '2023-04-04',
    tags: ['Design', 'Research'],
    sections: [
      {
        type: 'p',
        content:
          "This section introduces the topic 'Building Your API Stack'. It explains its relevance in modern digital workflows, and highlights the initial considerations for adopting related strategies. Understanding this foundation ensures better decisions and design logic.Adipisicing reprehenderit duis pariatur dolore culpa nisi labore esse qui. Deserunt commodo nisi cillum enim. Nisi officia tempor cupidatat velit deserunt dolor in eu ea in consequat nostrud ad ipsum.Anim tempor qui est amet consequat exercitation nulla proident sint nulla nostrud ea mollit veniam. In est est excepteur irure excepteur occaecat exercitation aute nisi velit esse tempor. Fugiat ut ipsum irure reprehenderit elit nostrud fugiat. Irure nulla nisi elit elit cillum eu aute proident id magna id excepteur ad. Culpa minim officia commodo dolor amet aliqua est reprehenderit ipsum ex consectetur. Sit occaecat sunt sunt dolore velit esse nostrud deserunt dolore nulla id. Est consequat consectetur velit eu duis non.",
      },
      {
        type: 'img',
        content: 'Intro visual related to the topic',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Here, the core concepts and benefits are explored. This includes typical use cases, the impact on teams, and how this concept improves productivity or user satisfaction. Examples help bridge theory and real application.Cillum laborum veniam labore velit deserunt enim non. Quis proident mollit amet eiusmod occaecat aute veniam sunt velit fugiat excepteur eiusmod qui. Eiusmod dolor cillum commodo consectetur velit pariatur nisi quis esse cillum cupidatat. Non pariatur aliquip deserunt pariatur aute occaecat adipisicing in enim laboris. Laboris aliquip sint esse ex. Qui non sunt ex consectetur commodo.Amet irure amet Lorem sunt veniam tempor anim pariatur adipisicing excepteur adipisicing. Lorem voluptate id ullamco consequat. Occaecat deserunt sint sunt irure culpa magna labore. Eu aliqua eu Lorem occaecat adipisicing ex pariatur deserunt eiusmod.',
      },
      {
        type: 'img',
        content: 'Supporting diagram or concept map',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'Next, various tools or approaches are compared. This section may introduce popular platforms or software commonly used in the topic area. Comparison tables or stats can help evaluate the right choice for different needs.Irure excepteur labore laborum tempor esse anim proident excepteur excepteur proident minim quis qui. Adipisicing quis irure aliqua reprehenderit esse nostrud velit. Nostrud laborum nisi mollit ea pariatur cupidatat nisi excepteur pariatur ipsum. Magna mollit laborum sunt laboris cupidatat. Laborum aliquip elit mollit ut.Velit reprehenderit eu nisi velit proident nulla tempor consequat anim nostrud nisi irure qui. Ad pariatur ea elit sint mollit ipsum tempor id cillum magna adipisicing elit irure. Dolore irure Lorem non exercitation excepteur sit. Velit sunt in minim aliqua irure ut Lorem laborum fugiat do sint ea laboris. Duis veniam deserunt dolor ea ullamco id non aliquip occaecat veniam nostrud. Id do magna adipisicing elit deserunt sunt laborum anim ea Lorem fugiat cillum nulla labore.',
      },
      {
        type: 'img',
        content: 'Tool or software UI image',
        imageUrl: 'https://picsum.photos/800/400',
      },
      {
        type: 'p',
        content:
          'The final section outlines best practices and next steps. It includes actionable tips, potential mistakes to avoid, and strategies for long-term success. Readers leave with a plan they can apply immediately in their project or workflow.Irure qui velit sint aute magna cillum irure ipsum reprehenderit aute. Aute incididunt duis velit non commodo aute duis eu culpa deserunt. Eiusmod deserunt cupidatat qui esse et minim voluptate magna mollit nostrud. Tempor sit labore sit pariatur deserunt. Proident pariatur ipsum velit ullamco quis.Aute fugiat excepteur id aute proident Lorem incididunt esse do veniam consequat eiusmod ad. Adipisicing in pariatur pariatur labore elit dolor tempor reprehenderit sit qui veniam. Labore sint nulla sunt ipsum sint aliquip tempor id nisi non. Id laboris amet enim commodo proident nulla culpa. Proident adipisicing aliqua ullamco dolore est ad velit sint adipisicing consectetur. Sit occaecat incididunt labore nisi anim dolor consequat in anim incididunt et sit in sint.',
      },
      {
        type: 'img',
        content: 'Closing summary visual',
        imageUrl: 'https://picsum.photos/800/400',
      },
    ],
  },
  {
    id: '21',
    title: 'Grid system for better Design User Interface',
    coverImage: gridSystemCover,
    author: 'Olivia Rhye',
    date: '1 Jan 2023',
    tags: ['Interface', 'Design'],
    sections: [
      {
        type: 'p',
        content:
          'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
      },
      {
        type: 'p',
        content:
          ' If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
      },
      {
        type: 'h1',
        content:
          'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
      },
      {
        type: 'img',
        content:
          'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
        imageUrl: gridStructur,
      },
      {
        type: 'p',
        content:
          'There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.',
      },
      {
        type: 'p',
        content:
          'Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.',
      },
      {
        type: 'p',
        content:
          'Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.',
      },
      {
        type: 'p',
        content:
          'Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.',
      },

      {
        type: 'h1',
        content: 'Breaking Down the Grid',
      },
      {
        type: 'p',
        content:
          'Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.',
      },
      {
        type: 'p',
        content:
          ' Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.',
      },
      {
        type: 'p',
        content:
          ' Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.',
      },
      {
        type: 'img',
        content:
          'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        imageUrl: gridParts,
      },
      {
        type: 'h1',
        content: 'Examples of Grid in Use',
      },
      {
        type: 'h1',
        content: 'Example 1: Hierarchical Grid',
      },
      {
        type: 'p',
        content:
          'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.',
      },
      {
        type: 'img',
        content:
          'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        imageUrl: nyt,
      },
      {
        type: 'h1',
        content: 'Example 2: Column Grid',
      },
      {
        type: 'p',
        content:
          'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.',
      },
      {
        type: 'img',
        content:
          'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        imageUrl: ritual,
      },
      {
        type: 'h1',
        content: 'Example 3: Modular Grid',
      },
      {
        type: 'p',
        content:
          'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.',
      },
      {
        type: 'img',
        content:
          'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        imageUrl: behance,
      },
      {
        type: 'h1',
        content: 'Example 4: Breaking the Grid',
      },
      {
        type: 'p',
        content:
          'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.',
      },
      {
        type: 'img',
        content:
          'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        imageUrl: shrine,
      },
      {
        type: 'h1',
        content: 'Benefits of the Grid',
      },
      {
        type: 'p',
        content:
          'Using a grid benefits both end users and the designers alike:',
      },
      {
        type: 'p',
        content:
          '• Designers can quickly put together well-aligned interfaces.',
      },
      {
        type: 'p',
        content: '• Users can easily scan predictable grid-based interfaces.',
      },
      {
        type: 'p',
        content:
          '• A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.',
      },
      {
        type: 'img',
        content:
          'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
        imageUrl: responsive,
      },
      {
        type: 'p',
        content:
          'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
      },
      {
        type: 'h1',
        content: 'Choosing and Setting Up Your Grid',
      },
      {
        type: 'p',
        content:
          'How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.',
      },
      {
        type: 'p',
        content:
          'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
      },
      {
        type: 'p',
        content:
          'Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.',
      },
      {
        type: 'img',
        content:
          'Easily set the number of columns, the gutter size, and margin size in Figma.',
        imageUrl: figma,
      },
      {
        type: 'p',
        content:
          'Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.',
      },
      {
        type: 'img',
        content:
          'Content or elements should be placed within and across columns, not gutters.',
        imageUrl: gutters,
      },
      {
        type: 'p',
        content:
          'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.',
      },
      {
        type: 'h1',
        content: 'Conclusion',
      },
      {
        type: 'p',
        content:
          'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.',
      },
    ],
  },
]
