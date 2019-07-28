import { HomeSVG, ProfileSVG, FriendsSVG, LogoutSVG } from '../main/components/svgs/nav_bar_svgs';
import { AddPhotosSVG, SharePostSVG, VisibleToSVG } from '../main/components/svgs/create_post_svgs';
import { EveryoneSVG, OnlyMeSVG } from '../main/components/svgs/visibility_svgs';
import { LikeSVG, CommentSVG } from '../main/components/svgs/newsfeed_post_svgs';

export const RightNavBarPagesEnum = {
  Home: {
    name: 'Home',
    svg: HomeSVG,
    href: ""
  },
  Profile: {
    name: 'Game',
    svg: ProfileSVG,
    href: "localhost:8000/index.html"
  },
  Friends: {
    name: 'Friends',
    svg: FriendsSVG
  },
  Logout: {
    name: 'Logout',
    svg: LogoutSVG
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
  }
};

export const InputTypesEnum = {
  First: {
    type: 'text',
    name: 'first',
    label: 'First Name'
  },
  Last: {
    type: 'text',
    name: 'last',
    label: 'Last Name'
  },
  Email: {
    type: 'text',
    name: 'email',
    label: 'Email Address'
  },
  Password: {
    type: 'password',
    name: 'password',
    label: 'Password'
  }
};

export const CloudinaryFieldsEnum = {
  Endpoint: 'https://api.cloudinary.com/v1_1/yossisaadi/image/upload',
  UploadPreset: 'cldnry_facefeka'
};