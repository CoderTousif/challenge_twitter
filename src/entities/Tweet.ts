import { Field, ID, Int, ObjectType } from 'type-graphql'
import LikeRetweetAuthor from './LikeRetweetAuthor'
import Media from './Media'
import Preview from './Preview'
import TweetUserInfo from './TweetUserInfo'
import TweetStats from './TweetUserInfo'
import User from './User'

export enum TweetTypeEnum {
  TWEET = 'tweet',
  RETWEET = 'retweet',
  COMMENT = 'comment',
}

export enum TweetVisibilityEnum {
  PUBLIC = 'public',
  FOLLOWERS = 'followers',
}

@ObjectType()
class Tweet {
  @Field()
  id: number

  @Field()
  body: string

  @Field()
  visibility: TweetVisibilityEnum

  @Field(() => Tweet, { nullable: true })
  parent?: Tweet

  @Field({ nullable: true })
  parent_id?: number

  @Field()
  type: TweetTypeEnum

  @Field()
  user: User

  like_author?: string

  retweet_author?: string

  @Field(() => LikeRetweetAuthor, { nullable: true })
  likeAuthor?: LikeRetweetAuthor

  @Field(() => LikeRetweetAuthor, { nullable: true })
  retweetAuthor?: LikeRetweetAuthor

  @Field(() => Media, { nullable: true })
  media?: Media

  user_id: number

  @Field()
  retweetsCount: number

  @Field()
  commentsCount: number

  @Field()
  likesCount: number

  @Field()
  bookmarksCount: number

  @Field(() => TweetUserInfo, { nullable: true })
  tweetUserInfos?: TweetUserInfo

  original_tweet_id?: number

  @Field({ nullable: true })
  preview?: Preview

  @Field()
  created_at: Date

  @Field()
  updated_at: Date
}

export default Tweet
