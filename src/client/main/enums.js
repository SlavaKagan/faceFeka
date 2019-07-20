import { HomeSVG, ProfileSVG, FriendsSVG, NotificationsSVG } from './components/svgs/nav_bar_svgs';
import { AddPhotosSVG, SharePostSVG, VisibleToSVG } from './components/svgs/create_post_svgs';
import { EveryoneSVG, OnlyMeSVG } from './components/svgs/visibility_svgs';
import { LikeSVG, CommentSVG, ShareSVG } from './components/svgs/newsfeed_post_svgs';

export const RightNavBarPagesEnum = {
  Home: {
    name: 'Home',
    svg: HomeSVG,
    href: ""
  },
  Profile: {
    name: 'Profile',
    svg: ProfileSVG,
    href: "sign.html"
  },
  Friends: {
    name: 'Friends',
    svg: FriendsSVG,
    href: null
  },
  Notifications: {
    name: 'Notifications',
    svg: NotificationsSVG,
    href: null
  }
};

export const NewPostOptionsEnum = {
  AddPhotos: {
    tooltip: 'Add Photos',
    svg: AddPhotosSVG
  },
  SharePost: {
    tooltip: 'Share Your Post!',
    svg: SharePostSVG,
    label: 'Post',
  },
  VisibleTo: {
    tooltip: 'Visible to',
    svg: VisibleToSVG
  }
};

export const PrivacyOptionsEnum = {
  Global: {
    name: 'Global',
    svg: EveryoneSVG
  },
  Private: {
    name: 'Private',
    svg: OnlyMeSVG
  }
};

export const PostStatOptionsEnum = {
  Likes: {
    name: 'Likes',
    svg: LikeSVG
  },
  Comments: {
    name: 'Comments',
    svg: CommentSVG
  },
  Shares: {
    name: 'Shares',
    svg: ShareSVG
  }
};