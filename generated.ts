//@ts-nocheck
/* eslint-disable */

// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

export interface Question {
  id: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers: string[];
  userId: string;
  user: User;
  originalQuestionId: Maybe<string>;
  originalQuestion: Maybe<Question>;
  childrens: Question[];
  createdAt: undefined;
  updatedAt: undefined;
  examquestions: ExamQuestion[];
  _count: QuestionCountOutputType;
}

export interface ExamAnswer {
  id: string;
  examId: string;
  exam: Exam;
  grade: number;
  finishCalculation: boolean;
  examSessionId: Maybe<string>;
  examSession: Maybe<ExamSession>;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface ExamQuestion {
  id: string;
  questionId: string;
  question: Question;
  examId: string;
  exam: Exam;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface ExamSession {
  id: string;
  name: string;
  openAt: Maybe<undefined>;
  closeAt: Maybe<undefined>;
  maxPlayer: Maybe<number>;
  password: Maybe<string>;
  userId: string;
  user: User;
  examAnswers: ExamAnswer[];
  _count: ExamSessionCountOutputType;
}

export interface Exam {
  id: string;
  name: string;
  userId: string;
  user: User;
  createdAt: undefined;
  updatedAt: undefined;
  examquestions: ExamQuestion[];
  examAnswers: ExamAnswer[];
  _count: ExamCountOutputType;
}

export interface PrivateChat {
  id: string;
  fromId: string;
  from: User;
  toId: string;
  to: User;
  contentType: ContentType;
  content: string;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Notification {
  id: string;
  picturePath: Maybe<string>;
  title: string;
  message: string;
  isRead: boolean;
  followUpContext: Maybe<string>;
  followUpData: Maybe<string>;
  userId: string;
  user: User;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: Maybe<string>;
  address: Maybe<string>;
  profilePicturePath: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  provinceId: string;
  province: Province;
  regencyId: string;
  regency: Regency;
  isAdmin: boolean;
  role: Roles;
  balance: number;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  identityNumberVerifiedAt: Maybe<undefined>;
  verifykey: Maybe<string>;
  verifyType: VerifyType;
  identityFiles: IdentityFile[];
  questions: Question[];
  examinations: Exam[];
  examsessions: ExamSession[];
  privateChats: PrivateChat[];
  myPrivateChats: PrivateChat[];
  notifications: Notification[];
  myTokens: Token[];
  tokenClaims: TokenClaim[];
  _count: UserCountOutputType;
}

export interface TokenClaim {
  id: string;
  tokenId: string;
  token: Token;
  userId: string;
  claimer: User;
  expiredAt: Maybe<undefined>;
}

export interface Token {
  id: string;
  token: string;
  userId: string;
  owner: User;
  tokenClaims: TokenClaim[];
  maxClaim: Maybe<number>;
  _count: TokenCountOutputType;
}

export interface IdentityFile {
  id: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
  userId: string;
  user: User;
}

export interface Regency {
  id: string;
  name: string;
  provinceId: string;
  province: Province;
  users: User[];
  _count: RegencyCountOutputType;
}

export interface Province {
  id: string;
  name: string;
  regencies: Regency[];
  createdAt: undefined;
  updatedAt: undefined;
  users: User[];
  _count: ProvinceCountOutputType;
}

export interface Auth {
  /** JWT token*/
  token: Maybe<string>;
  success: Maybe<boolean>;
  message: Maybe<string>;
  user: Maybe<User>;
}

export interface VerificationResponse {
  success: Maybe<boolean>;
  message: Maybe<string>;
}

export interface BatchPayload {
  count: number;
}

export enum ProvinceScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum RegencyScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Provinceid = 'provinceId',
}
export enum IdentityFileScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Url = 'url',
  Type = 'type',
  Number = 'number',
  Userid = 'userId',
}
export enum TokenScalarFieldEnum {
  Id = 'id',
  Token = 'token',
  Userid = 'userId',
  Maxclaim = 'maxClaim',
}
export enum TokenClaimScalarFieldEnum {
  Id = 'id',
  Tokenid = 'tokenId',
  Userid = 'userId',
  Expiredat = 'expiredAt',
}
export enum UserScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Email = 'email',
  Password = 'password',
  Phonenumber = 'phoneNumber',
  Address = 'address',
  Profilepicturepath = 'profilePicturePath',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Nisn = 'nisn',
  Nrg = 'nrg',
  Provinceid = 'provinceId',
  Regencyid = 'regencyId',
  Isadmin = 'isAdmin',
  Role = 'role',
  Balance = 'balance',
  Emailverifiedat = 'emailVerifiedAt',
  Phonenumberverifiedat = 'phoneNumberVerifiedAt',
  Identitynumberverifiedat = 'identityNumberVerifiedAt',
  Verifykey = 'verifykey',
  Verifytype = 'verifyType',
}
export enum NotificationScalarFieldEnum {
  Id = 'id',
  Picturepath = 'picturePath',
  Title = 'title',
  Message = 'message',
  Isread = 'isRead',
  Followupcontext = 'followUpContext',
  Followupdata = 'followUpData',
  Userid = 'userId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum PrivateChatScalarFieldEnum {
  Id = 'id',
  Fromid = 'fromId',
  Toid = 'toId',
  Contenttype = 'contentType',
  Content = 'content',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ExamScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Userid = 'userId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ExamSessionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Openat = 'openAt',
  Closeat = 'closeAt',
  Maxplayer = 'maxPlayer',
  Password = 'password',
  Userid = 'userId',
}
export enum ExamQuestionScalarFieldEnum {
  Id = 'id',
  Questionid = 'questionId',
  Examid = 'examId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ExamAnswerScalarFieldEnum {
  Id = 'id',
  Examid = 'examId',
  Grade = 'grade',
  Finishcalculation = 'finishCalculation',
  Examsessionid = 'examSessionId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum QuestionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Type = 'type',
  Contenttype = 'contentType',
  Content = 'content',
  Answertype = 'answerType',
  Answers = 'answers',
  Userid = 'userId',
  Originalquestionid = 'originalQuestionId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}
export enum IdentityFileType {
  Ktp = 'KTP',
  Kk = 'KK',
  Sim = 'SIM',
  Passport = 'PASSPORT',
  Other = 'OTHER',
}
export enum Roles {
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  Parent = 'PARENT',
}
export enum VerifyType {
  Phone = 'PHONE',
  Mail = 'MAIL',
  Identity = 'IDENTITY',
}
export enum ContentType {
  Text = 'TEXT',
  Image = 'IMAGE',
  Video = 'VIDEO',
  Audio = 'AUDIO',
}
export enum QuestionType {
  Multiple_choice = 'MULTIPLE_CHOICE',
  True_or_false = 'TRUE_OR_FALSE',
  Fill_in_the_blank = 'FILL_IN_THE_BLANK',
  Multiple_answer = 'MULTIPLE_ANSWER',
}
export interface ProvinceWhereInput {
  AND?: ProvinceWhereInput[];
  OR?: ProvinceWhereInput[];
  NOT?: ProvinceWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  regencies?: RegencyListRelationFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  users?: UserListRelationFilter;
}

export interface ProvinceOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  regencies?: RegencyOrderByRelationAggregateInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  users?: UserOrderByRelationAggregateInput;
}

export interface ProvinceWhereUniqueInput {
  id?: string;
}

export interface ProvinceOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ProvinceCountOrderByAggregateInput;
  _max?: ProvinceMaxOrderByAggregateInput;
  _min?: ProvinceMinOrderByAggregateInput;
}

export interface ProvinceScalarWhereWithAggregatesInput {
  AND?: ProvinceScalarWhereWithAggregatesInput[];
  OR?: ProvinceScalarWhereWithAggregatesInput[];
  NOT?: ProvinceScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface RegencyWhereInput {
  AND?: RegencyWhereInput[];
  OR?: RegencyWhereInput[];
  NOT?: RegencyWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  users?: UserListRelationFilter;
}

export interface RegencyOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  users?: UserOrderByRelationAggregateInput;
}

export interface RegencyWhereUniqueInput {
  id?: string;
}

export interface RegencyOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
  _count?: RegencyCountOrderByAggregateInput;
  _max?: RegencyMaxOrderByAggregateInput;
  _min?: RegencyMinOrderByAggregateInput;
}

export interface RegencyScalarWhereWithAggregatesInput {
  AND?: RegencyScalarWhereWithAggregatesInput[];
  OR?: RegencyScalarWhereWithAggregatesInput[];
  NOT?: RegencyScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  provinceId?: StringWithAggregatesFilter;
}

export interface IdentityFileWhereInput {
  AND?: IdentityFileWhereInput[];
  OR?: IdentityFileWhereInput[];
  NOT?: IdentityFileWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  url?: StringFilter;
  type?: EnumIdentityFileTypeFilter;
  number?: StringFilter;
  userId?: StringFilter;
  user?: UserWhereInput;
}

export interface IdentityFileOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  type?: SortOrder;
  number?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
}

export interface IdentityFileWhereUniqueInput {
  id?: string;
}

export interface IdentityFileOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  type?: SortOrder;
  number?: SortOrder;
  userId?: SortOrder;
  _count?: IdentityFileCountOrderByAggregateInput;
  _max?: IdentityFileMaxOrderByAggregateInput;
  _min?: IdentityFileMinOrderByAggregateInput;
}

export interface IdentityFileScalarWhereWithAggregatesInput {
  AND?: IdentityFileScalarWhereWithAggregatesInput[];
  OR?: IdentityFileScalarWhereWithAggregatesInput[];
  NOT?: IdentityFileScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  url?: StringWithAggregatesFilter;
  type?: EnumIdentityFileTypeWithAggregatesFilter;
  number?: StringWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
}

export interface TokenWhereInput {
  AND?: TokenWhereInput[];
  OR?: TokenWhereInput[];
  NOT?: TokenWhereInput[];
  id?: StringFilter;
  token?: StringFilter;
  userId?: StringFilter;
  owner?: UserWhereInput;
  tokenClaims?: TokenClaimListRelationFilter;
  maxClaim?: IntNullableFilter;
}

export interface TokenOrderByWithRelationInput {
  id?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
  owner?: UserOrderByWithRelationInput;
  tokenClaims?: TokenClaimOrderByRelationAggregateInput;
  maxClaim?: SortOrder;
}

export interface TokenWhereUniqueInput {
  id?: string;
}

export interface TokenOrderByWithAggregationInput {
  id?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
  maxClaim?: SortOrder;
  _count?: TokenCountOrderByAggregateInput;
  _avg?: TokenAvgOrderByAggregateInput;
  _max?: TokenMaxOrderByAggregateInput;
  _min?: TokenMinOrderByAggregateInput;
  _sum?: TokenSumOrderByAggregateInput;
}

export interface TokenScalarWhereWithAggregatesInput {
  AND?: TokenScalarWhereWithAggregatesInput[];
  OR?: TokenScalarWhereWithAggregatesInput[];
  NOT?: TokenScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  token?: StringWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  maxClaim?: IntNullableWithAggregatesFilter;
}

export interface TokenClaimWhereInput {
  AND?: TokenClaimWhereInput[];
  OR?: TokenClaimWhereInput[];
  NOT?: TokenClaimWhereInput[];
  id?: StringFilter;
  tokenId?: StringFilter;
  token?: TokenWhereInput;
  userId?: StringFilter;
  claimer?: UserWhereInput;
  expiredAt?: DateTimeNullableFilter;
}

export interface TokenClaimOrderByWithRelationInput {
  id?: SortOrder;
  tokenId?: SortOrder;
  token?: TokenOrderByWithRelationInput;
  userId?: SortOrder;
  claimer?: UserOrderByWithRelationInput;
  expiredAt?: SortOrder;
}

export interface TokenClaimWhereUniqueInput {
  id?: string;
}

export interface TokenClaimOrderByWithAggregationInput {
  id?: SortOrder;
  tokenId?: SortOrder;
  userId?: SortOrder;
  expiredAt?: SortOrder;
  _count?: TokenClaimCountOrderByAggregateInput;
  _max?: TokenClaimMaxOrderByAggregateInput;
  _min?: TokenClaimMinOrderByAggregateInput;
}

export interface TokenClaimScalarWhereWithAggregatesInput {
  AND?: TokenClaimScalarWhereWithAggregatesInput[];
  OR?: TokenClaimScalarWhereWithAggregatesInput[];
  NOT?: TokenClaimScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  tokenId?: StringWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  expiredAt?: DateTimeNullableWithAggregatesFilter;
}

export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  email?: StringFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  profilePicturePath?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  nisn?: StringNullableFilter;
  nrg?: StringNullableFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  regencyId?: StringFilter;
  regency?: RegencyWhereInput;
  isAdmin?: BoolFilter;
  role?: EnumRolesFilter;
  balance?: FloatFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  phoneNumberVerifiedAt?: DateTimeNullableFilter;
  identityNumberVerifiedAt?: DateTimeNullableFilter;
  verifykey?: StringNullableFilter;
  verifyType?: EnumVerifyTypeFilter;
  identityFiles?: IdentityFileListRelationFilter;
  questions?: QuestionListRelationFilter;
  examinations?: ExamListRelationFilter;
  examsessions?: ExamSessionListRelationFilter;
  privateChats?: PrivateChatListRelationFilter;
  myPrivateChats?: PrivateChatListRelationFilter;
  notifications?: NotificationListRelationFilter;
  myTokens?: TokenListRelationFilter;
  tokenClaims?: TokenClaimListRelationFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  regencyId?: SortOrder;
  regency?: RegencyOrderByWithRelationInput;
  isAdmin?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  identityFiles?: IdentityFileOrderByRelationAggregateInput;
  questions?: QuestionOrderByRelationAggregateInput;
  examinations?: ExamOrderByRelationAggregateInput;
  examsessions?: ExamSessionOrderByRelationAggregateInput;
  privateChats?: PrivateChatOrderByRelationAggregateInput;
  myPrivateChats?: PrivateChatOrderByRelationAggregateInput;
  notifications?: NotificationOrderByRelationAggregateInput;
  myTokens?: TokenOrderByRelationAggregateInput;
  tokenClaims?: TokenClaimOrderByRelationAggregateInput;
}

export interface UserWhereUniqueInput {
  id?: string;
  verifykey?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _avg?: UserAvgOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
  _sum?: UserSumOrderByAggregateInput;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  email?: StringWithAggregatesFilter;
  phoneNumber?: StringNullableWithAggregatesFilter;
  address?: StringNullableWithAggregatesFilter;
  profilePicturePath?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  nisn?: StringNullableWithAggregatesFilter;
  nrg?: StringNullableWithAggregatesFilter;
  provinceId?: StringWithAggregatesFilter;
  regencyId?: StringWithAggregatesFilter;
  isAdmin?: BoolWithAggregatesFilter;
  role?: EnumRolesWithAggregatesFilter;
  balance?: FloatWithAggregatesFilter;
  emailVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  phoneNumberVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  identityNumberVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  verifykey?: StringNullableWithAggregatesFilter;
  verifyType?: EnumVerifyTypeWithAggregatesFilter;
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[];
  OR?: NotificationWhereInput[];
  NOT?: NotificationWhereInput[];
  id?: StringFilter;
  picturePath?: StringNullableFilter;
  title?: StringFilter;
  message?: StringFilter;
  isRead?: BoolFilter;
  followUpContext?: StringNullableFilter;
  followUpData?: StringNullableFilter;
  userId?: StringFilter;
  user?: UserWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface NotificationOrderByWithRelationInput {
  id?: SortOrder;
  picturePath?: SortOrder;
  title?: SortOrder;
  message?: SortOrder;
  isRead?: SortOrder;
  followUpContext?: SortOrder;
  followUpData?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface NotificationWhereUniqueInput {
  id?: string;
}

export interface NotificationOrderByWithAggregationInput {
  id?: SortOrder;
  picturePath?: SortOrder;
  title?: SortOrder;
  message?: SortOrder;
  isRead?: SortOrder;
  followUpContext?: SortOrder;
  followUpData?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: NotificationCountOrderByAggregateInput;
  _max?: NotificationMaxOrderByAggregateInput;
  _min?: NotificationMinOrderByAggregateInput;
}

export interface NotificationScalarWhereWithAggregatesInput {
  AND?: NotificationScalarWhereWithAggregatesInput[];
  OR?: NotificationScalarWhereWithAggregatesInput[];
  NOT?: NotificationScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  picturePath?: StringNullableWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
  message?: StringWithAggregatesFilter;
  isRead?: BoolWithAggregatesFilter;
  followUpContext?: StringNullableWithAggregatesFilter;
  followUpData?: StringNullableWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface PrivateChatWhereInput {
  AND?: PrivateChatWhereInput[];
  OR?: PrivateChatWhereInput[];
  NOT?: PrivateChatWhereInput[];
  id?: StringFilter;
  fromId?: StringFilter;
  from?: UserWhereInput;
  toId?: StringFilter;
  to?: UserWhereInput;
  contentType?: EnumContentTypeFilter;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface PrivateChatOrderByWithRelationInput {
  id?: SortOrder;
  fromId?: SortOrder;
  from?: UserOrderByWithRelationInput;
  toId?: SortOrder;
  to?: UserOrderByWithRelationInput;
  contentType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PrivateChatWhereUniqueInput {
  id?: string;
}

export interface PrivateChatOrderByWithAggregationInput {
  id?: SortOrder;
  fromId?: SortOrder;
  toId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: PrivateChatCountOrderByAggregateInput;
  _max?: PrivateChatMaxOrderByAggregateInput;
  _min?: PrivateChatMinOrderByAggregateInput;
}

export interface PrivateChatScalarWhereWithAggregatesInput {
  AND?: PrivateChatScalarWhereWithAggregatesInput[];
  OR?: PrivateChatScalarWhereWithAggregatesInput[];
  NOT?: PrivateChatScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  fromId?: StringWithAggregatesFilter;
  toId?: StringWithAggregatesFilter;
  contentType?: EnumContentTypeWithAggregatesFilter;
  content?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ExamWhereInput {
  AND?: ExamWhereInput[];
  OR?: ExamWhereInput[];
  NOT?: ExamWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  userId?: StringFilter;
  user?: UserWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  examquestions?: ExamQuestionListRelationFilter;
  examAnswers?: ExamAnswerListRelationFilter;
}

export interface ExamOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  examquestions?: ExamQuestionOrderByRelationAggregateInput;
  examAnswers?: ExamAnswerOrderByRelationAggregateInput;
}

export interface ExamWhereUniqueInput {
  id?: string;
}

export interface ExamOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ExamCountOrderByAggregateInput;
  _max?: ExamMaxOrderByAggregateInput;
  _min?: ExamMinOrderByAggregateInput;
}

export interface ExamScalarWhereWithAggregatesInput {
  AND?: ExamScalarWhereWithAggregatesInput[];
  OR?: ExamScalarWhereWithAggregatesInput[];
  NOT?: ExamScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ExamSessionWhereInput {
  AND?: ExamSessionWhereInput[];
  OR?: ExamSessionWhereInput[];
  NOT?: ExamSessionWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  openAt?: DateTimeNullableFilter;
  closeAt?: DateTimeNullableFilter;
  maxPlayer?: IntNullableFilter;
  userId?: StringFilter;
  user?: UserWhereInput;
  examAnswers?: ExamAnswerListRelationFilter;
}

export interface ExamSessionOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  examAnswers?: ExamAnswerOrderByRelationAggregateInput;
}

export interface ExamSessionWhereUniqueInput {
  id?: string;
}

export interface ExamSessionOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  userId?: SortOrder;
  _count?: ExamSessionCountOrderByAggregateInput;
  _avg?: ExamSessionAvgOrderByAggregateInput;
  _max?: ExamSessionMaxOrderByAggregateInput;
  _min?: ExamSessionMinOrderByAggregateInput;
  _sum?: ExamSessionSumOrderByAggregateInput;
}

export interface ExamSessionScalarWhereWithAggregatesInput {
  AND?: ExamSessionScalarWhereWithAggregatesInput[];
  OR?: ExamSessionScalarWhereWithAggregatesInput[];
  NOT?: ExamSessionScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  openAt?: DateTimeNullableWithAggregatesFilter;
  closeAt?: DateTimeNullableWithAggregatesFilter;
  maxPlayer?: IntNullableWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
}

export interface ExamQuestionWhereInput {
  AND?: ExamQuestionWhereInput[];
  OR?: ExamQuestionWhereInput[];
  NOT?: ExamQuestionWhereInput[];
  id?: StringFilter;
  questionId?: StringFilter;
  question?: QuestionWhereInput;
  examId?: StringFilter;
  exam?: ExamWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ExamQuestionOrderByWithRelationInput {
  id?: SortOrder;
  questionId?: SortOrder;
  question?: QuestionOrderByWithRelationInput;
  examId?: SortOrder;
  exam?: ExamOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamQuestionWhereUniqueInput {
  id?: string;
}

export interface ExamQuestionOrderByWithAggregationInput {
  id?: SortOrder;
  questionId?: SortOrder;
  examId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ExamQuestionCountOrderByAggregateInput;
  _max?: ExamQuestionMaxOrderByAggregateInput;
  _min?: ExamQuestionMinOrderByAggregateInput;
}

export interface ExamQuestionScalarWhereWithAggregatesInput {
  AND?: ExamQuestionScalarWhereWithAggregatesInput[];
  OR?: ExamQuestionScalarWhereWithAggregatesInput[];
  NOT?: ExamQuestionScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  questionId?: StringWithAggregatesFilter;
  examId?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ExamAnswerWhereInput {
  AND?: ExamAnswerWhereInput[];
  OR?: ExamAnswerWhereInput[];
  NOT?: ExamAnswerWhereInput[];
  id?: StringFilter;
  examId?: StringFilter;
  exam?: ExamWhereInput;
  grade?: FloatFilter;
  finishCalculation?: BoolFilter;
  examSessionId?: StringNullableFilter;
  examSession?: ExamSessionWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ExamAnswerOrderByWithRelationInput {
  id?: SortOrder;
  examId?: SortOrder;
  exam?: ExamOrderByWithRelationInput;
  grade?: SortOrder;
  finishCalculation?: SortOrder;
  examSessionId?: SortOrder;
  examSession?: ExamSessionOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamAnswerWhereUniqueInput {
  id?: string;
}

export interface ExamAnswerOrderByWithAggregationInput {
  id?: SortOrder;
  examId?: SortOrder;
  grade?: SortOrder;
  finishCalculation?: SortOrder;
  examSessionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ExamAnswerCountOrderByAggregateInput;
  _avg?: ExamAnswerAvgOrderByAggregateInput;
  _max?: ExamAnswerMaxOrderByAggregateInput;
  _min?: ExamAnswerMinOrderByAggregateInput;
  _sum?: ExamAnswerSumOrderByAggregateInput;
}

export interface ExamAnswerScalarWhereWithAggregatesInput {
  AND?: ExamAnswerScalarWhereWithAggregatesInput[];
  OR?: ExamAnswerScalarWhereWithAggregatesInput[];
  NOT?: ExamAnswerScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  examId?: StringWithAggregatesFilter;
  grade?: FloatWithAggregatesFilter;
  finishCalculation?: BoolWithAggregatesFilter;
  examSessionId?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface QuestionWhereInput {
  AND?: QuestionWhereInput[];
  OR?: QuestionWhereInput[];
  NOT?: QuestionWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  type?: EnumQuestionTypeFilter;
  contentType?: EnumContentTypeFilter;
  content?: StringFilter;
  answerType?: EnumContentTypeFilter;
  answers?: StringNullableListFilter;
  userId?: StringFilter;
  user?: UserWhereInput;
  originalQuestionId?: StringNullableFilter;
  originalQuestion?: QuestionWhereInput;
  childrens?: QuestionListRelationFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  examquestions?: ExamQuestionListRelationFilter;
}

export interface QuestionOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  type?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  answerType?: SortOrder;
  answers?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  originalQuestionId?: SortOrder;
  originalQuestion?: QuestionOrderByWithRelationInput;
  childrens?: QuestionOrderByRelationAggregateInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  examquestions?: ExamQuestionOrderByRelationAggregateInput;
}

export interface QuestionWhereUniqueInput {
  id?: string;
}

export interface QuestionOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  type?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  answerType?: SortOrder;
  answers?: SortOrder;
  userId?: SortOrder;
  originalQuestionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: QuestionCountOrderByAggregateInput;
  _max?: QuestionMaxOrderByAggregateInput;
  _min?: QuestionMinOrderByAggregateInput;
}

export interface QuestionScalarWhereWithAggregatesInput {
  AND?: QuestionScalarWhereWithAggregatesInput[];
  OR?: QuestionScalarWhereWithAggregatesInput[];
  NOT?: QuestionScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  type?: EnumQuestionTypeWithAggregatesFilter;
  contentType?: EnumContentTypeWithAggregatesFilter;
  content?: StringWithAggregatesFilter;
  answerType?: EnumContentTypeWithAggregatesFilter;
  answers?: StringNullableListFilter;
  userId?: StringWithAggregatesFilter;
  originalQuestionId?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ProvinceCreateInput {
  id?: string;
  name: string;
  regencies?: RegencyCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateInput {
  id?: string;
  name: string;
  regencies?: RegencyUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
}

export interface ProvinceCreateManyInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ProvinceUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface RegencyCreateInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutRegenciesInput;
  users?: UserCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUncheckedCreateInput {
  id?: string;
  name: string;
  provinceId: string;
  users?: UserUncheckedCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutRegenciesInput;
  users?: UserUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutRegencyInput;
}

export interface RegencyCreateManyInput {
  id?: string;
  name: string;
  provinceId: string;
}

export interface RegencyUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
}

export interface IdentityFileCreateInput {
  id?: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
  user: UserCreateNestedOneWithoutIdentityFilesInput;
}

export interface IdentityFileUncheckedCreateInput {
  id?: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
  userId: string;
}

export interface IdentityFileUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  url?: StringFieldUpdateOperationsInput;
  type?: EnumIdentityFileTypeFieldUpdateOperationsInput;
  number?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutIdentityFilesInput;
}

export interface IdentityFileUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  url?: StringFieldUpdateOperationsInput;
  type?: EnumIdentityFileTypeFieldUpdateOperationsInput;
  number?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
}

export interface IdentityFileCreateManyInput {
  id?: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
  userId: string;
}

export interface IdentityFileUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  url?: StringFieldUpdateOperationsInput;
  type?: EnumIdentityFileTypeFieldUpdateOperationsInput;
  number?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
}

export interface TokenCreateInput {
  id?: string;
  token: string;
  owner: UserCreateNestedOneWithoutMyTokensInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutTokenInput;
  maxClaim?: number;
}

export interface TokenUncheckedCreateInput {
  id?: string;
  token: string;
  userId: string;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutTokenInput;
  maxClaim?: number;
}

export interface TokenUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  owner?: UserUpdateOneRequiredWithoutMyTokensInput;
  tokenClaims?: TokenClaimUpdateManyWithoutTokenInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutTokenInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenCreateManyInput {
  id?: string;
  token: string;
  userId: string;
  maxClaim?: number;
}

export interface TokenUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenClaimCreateInput {
  id?: string;
  token: TokenCreateNestedOneWithoutTokenClaimsInput;
  claimer: UserCreateNestedOneWithoutTokenClaimsInput;
  expiredAt?: undefined;
}

export interface TokenClaimUncheckedCreateInput {
  id?: string;
  tokenId: string;
  userId: string;
  expiredAt?: undefined;
}

export interface TokenClaimUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  token?: TokenUpdateOneRequiredWithoutTokenClaimsInput;
  claimer?: UserUpdateOneRequiredWithoutTokenClaimsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface TokenClaimUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  tokenId?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface TokenClaimCreateManyInput {
  id?: string;
  tokenId: string;
  userId: string;
  expiredAt?: undefined;
}

export interface TokenClaimUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  tokenId?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface UserCreateInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface UserCreateManyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
}

export interface NotificationCreateInput {
  id?: string;
  picturePath?: string;
  title: string;
  message: string;
  isRead?: boolean;
  followUpContext?: string;
  followUpData?: string;
  user: UserCreateNestedOneWithoutNotificationsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NotificationUncheckedCreateInput {
  id?: string;
  picturePath?: string;
  title: string;
  message: string;
  isRead?: boolean;
  followUpContext?: string;
  followUpData?: string;
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NotificationUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  picturePath?: NullableStringFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  message?: StringFieldUpdateOperationsInput;
  isRead?: BoolFieldUpdateOperationsInput;
  followUpContext?: NullableStringFieldUpdateOperationsInput;
  followUpData?: NullableStringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutNotificationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NotificationUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  picturePath?: NullableStringFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  message?: StringFieldUpdateOperationsInput;
  isRead?: BoolFieldUpdateOperationsInput;
  followUpContext?: NullableStringFieldUpdateOperationsInput;
  followUpData?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NotificationCreateManyInput {
  id?: string;
  picturePath?: string;
  title: string;
  message: string;
  isRead?: boolean;
  followUpContext?: string;
  followUpData?: string;
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NotificationUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  picturePath?: NullableStringFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  message?: StringFieldUpdateOperationsInput;
  isRead?: BoolFieldUpdateOperationsInput;
  followUpContext?: NullableStringFieldUpdateOperationsInput;
  followUpData?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatCreateInput {
  id?: string;
  from: UserCreateNestedOneWithoutMyPrivateChatsInput;
  to: UserCreateNestedOneWithoutPrivateChatsInput;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatUncheckedCreateInput {
  id?: string;
  fromId: string;
  toId: string;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  from?: UserUpdateOneRequiredWithoutMyPrivateChatsInput;
  to?: UserUpdateOneRequiredWithoutPrivateChatsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  toId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatCreateManyInput {
  id?: string;
  fromId: string;
  toId: string;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  toId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamCreateInput {
  id?: string;
  name: string;
  user: UserCreateNestedOneWithoutExaminationsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutExamInput;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamInput;
}

export interface ExamUncheckedCreateInput {
  id?: string;
  name: string;
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput;
  examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamInput;
}

export interface ExamUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExaminationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutExamInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamInput;
}

export interface ExamUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutExamInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamInput;
}

export interface ExamCreateManyInput {
  id?: string;
  name: string;
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamSessionCreateInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  user: UserCreateNestedOneWithoutExamsessionsInput;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedCreateInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  userId: string;
  examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExamsessionsInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionCreateManyInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  userId: string;
}

export interface ExamSessionUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
}

export interface ExamQuestionCreateInput {
  id?: string;
  question: QuestionCreateNestedOneWithoutExamquestionsInput;
  exam: ExamCreateNestedOneWithoutExamquestionsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionUncheckedCreateInput {
  id?: string;
  questionId: string;
  examId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  question?: QuestionUpdateOneRequiredWithoutExamquestionsInput;
  exam?: ExamUpdateOneRequiredWithoutExamquestionsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  questionId?: StringFieldUpdateOperationsInput;
  examId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionCreateManyInput {
  id?: string;
  questionId: string;
  examId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  questionId?: StringFieldUpdateOperationsInput;
  examId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerCreateInput {
  id?: string;
  exam: ExamCreateNestedOneWithoutExamAnswersInput;
  grade?: number;
  finishCalculation?: boolean;
  examSession?: ExamSessionCreateNestedOneWithoutExamAnswersInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerUncheckedCreateInput {
  id?: string;
  examId: string;
  grade?: number;
  finishCalculation?: boolean;
  examSessionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  exam?: ExamUpdateOneRequiredWithoutExamAnswersInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  examSession?: ExamSessionUpdateOneWithoutExamAnswersInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  examId?: StringFieldUpdateOperationsInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  examSessionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerCreateManyInput {
  id?: string;
  examId: string;
  grade?: number;
  finishCalculation?: boolean;
  examSessionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  examId?: StringFieldUpdateOperationsInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  examSessionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface QuestionCreateInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  user: UserCreateNestedOneWithoutQuestionsInput;
  originalQuestion?: QuestionCreateNestedOneWithoutChildrensInput;
  childrens?: QuestionCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutQuestionInput;
}

export interface QuestionUncheckedCreateInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  userId: string;
  originalQuestionId?: string;
  childrens?: QuestionUncheckedCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutQuestionInput;
}

export interface QuestionUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  user?: UserUpdateOneRequiredWithoutQuestionsInput;
  originalQuestion?: QuestionUpdateOneWithoutChildrensInput;
  childrens?: QuestionUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutQuestionInput;
}

export interface QuestionUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  userId?: StringFieldUpdateOperationsInput;
  originalQuestionId?: NullableStringFieldUpdateOperationsInput;
  childrens?: QuestionUncheckedUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutQuestionInput;
}

export interface QuestionCreateManyInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  userId: string;
  originalQuestionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface QuestionUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  userId?: StringFieldUpdateOperationsInput;
  originalQuestionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface RegencyListRelationFilter {
  every?: RegencyWhereInput;
  some?: RegencyWhereInput;
  none?: RegencyWhereInput;
}

export interface DateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}

export interface RegencyOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ProvinceCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ProvinceMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ProvinceMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface ProvinceRelationFilter {
  is?: ProvinceWhereInput;
  isNot?: ProvinceWhereInput;
}

export interface RegencyCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
}

export interface RegencyMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
}

export interface RegencyMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
}

export interface EnumIdentityFileTypeFilter {
  equals?: IdentityFileType;
  in?: IdentityFileType[];
  notIn?: IdentityFileType[];
  not?: NestedEnumIdentityFileTypeFilter;
}

export interface UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

export interface IdentityFileCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  type?: SortOrder;
  number?: SortOrder;
  userId?: SortOrder;
}

export interface IdentityFileMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  type?: SortOrder;
  number?: SortOrder;
  userId?: SortOrder;
}

export interface IdentityFileMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  type?: SortOrder;
  number?: SortOrder;
  userId?: SortOrder;
}

export interface EnumIdentityFileTypeWithAggregatesFilter {
  equals?: IdentityFileType;
  in?: IdentityFileType[];
  notIn?: IdentityFileType[];
  not?: NestedEnumIdentityFileTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumIdentityFileTypeFilter;
  _max?: NestedEnumIdentityFileTypeFilter;
}

export interface TokenClaimListRelationFilter {
  every?: TokenClaimWhereInput;
  some?: TokenClaimWhereInput;
  none?: TokenClaimWhereInput;
}

export interface IntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface TokenClaimOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface TokenCountOrderByAggregateInput {
  id?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
  maxClaim?: SortOrder;
}

export interface TokenAvgOrderByAggregateInput {
  maxClaim?: SortOrder;
}

export interface TokenMaxOrderByAggregateInput {
  id?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
  maxClaim?: SortOrder;
}

export interface TokenMinOrderByAggregateInput {
  id?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
  maxClaim?: SortOrder;
}

export interface TokenSumOrderByAggregateInput {
  maxClaim?: SortOrder;
}

export interface IntNullableWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _avg?: NestedFloatNullableFilter;
  _sum?: NestedIntNullableFilter;
  _min?: NestedIntNullableFilter;
  _max?: NestedIntNullableFilter;
}

export interface TokenRelationFilter {
  is?: TokenWhereInput;
  isNot?: TokenWhereInput;
}

export interface DateTimeNullableFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeNullableFilter;
}

export interface TokenClaimCountOrderByAggregateInput {
  id?: SortOrder;
  tokenId?: SortOrder;
  userId?: SortOrder;
  expiredAt?: SortOrder;
}

export interface TokenClaimMaxOrderByAggregateInput {
  id?: SortOrder;
  tokenId?: SortOrder;
  userId?: SortOrder;
  expiredAt?: SortOrder;
}

export interface TokenClaimMinOrderByAggregateInput {
  id?: SortOrder;
  tokenId?: SortOrder;
  userId?: SortOrder;
  expiredAt?: SortOrder;
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter;
}

export interface RegencyRelationFilter {
  is?: RegencyWhereInput;
  isNot?: RegencyWhereInput;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface EnumRolesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesFilter;
}

export interface FloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface EnumVerifyTypeFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeFilter;
}

export interface IdentityFileListRelationFilter {
  every?: IdentityFileWhereInput;
  some?: IdentityFileWhereInput;
  none?: IdentityFileWhereInput;
}

export interface QuestionListRelationFilter {
  every?: QuestionWhereInput;
  some?: QuestionWhereInput;
  none?: QuestionWhereInput;
}

export interface ExamListRelationFilter {
  every?: ExamWhereInput;
  some?: ExamWhereInput;
  none?: ExamWhereInput;
}

export interface ExamSessionListRelationFilter {
  every?: ExamSessionWhereInput;
  some?: ExamSessionWhereInput;
  none?: ExamSessionWhereInput;
}

export interface PrivateChatListRelationFilter {
  every?: PrivateChatWhereInput;
  some?: PrivateChatWhereInput;
  none?: PrivateChatWhereInput;
}

export interface NotificationListRelationFilter {
  every?: NotificationWhereInput;
  some?: NotificationWhereInput;
  none?: NotificationWhereInput;
}

export interface TokenListRelationFilter {
  every?: TokenWhereInput;
  some?: TokenWhereInput;
  none?: TokenWhereInput;
}

export interface IdentityFileOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface QuestionOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ExamOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ExamSessionOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface PrivateChatOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface NotificationOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface TokenOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  verifykey?: SortOrder;
  verifyType?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  balance?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  verifykey?: SortOrder;
  verifyType?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  verifykey?: SortOrder;
  verifyType?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  balance?: SortOrder;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface EnumRolesWithAggregatesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumRolesFilter;
  _max?: NestedEnumRolesFilter;
}

export interface FloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface EnumVerifyTypeWithAggregatesFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumVerifyTypeFilter;
  _max?: NestedEnumVerifyTypeFilter;
}

export interface NotificationCountOrderByAggregateInput {
  id?: SortOrder;
  picturePath?: SortOrder;
  title?: SortOrder;
  message?: SortOrder;
  isRead?: SortOrder;
  followUpContext?: SortOrder;
  followUpData?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface NotificationMaxOrderByAggregateInput {
  id?: SortOrder;
  picturePath?: SortOrder;
  title?: SortOrder;
  message?: SortOrder;
  isRead?: SortOrder;
  followUpContext?: SortOrder;
  followUpData?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface NotificationMinOrderByAggregateInput {
  id?: SortOrder;
  picturePath?: SortOrder;
  title?: SortOrder;
  message?: SortOrder;
  isRead?: SortOrder;
  followUpContext?: SortOrder;
  followUpData?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface EnumContentTypeFilter {
  equals?: ContentType;
  in?: ContentType[];
  notIn?: ContentType[];
  not?: NestedEnumContentTypeFilter;
}

export interface PrivateChatCountOrderByAggregateInput {
  id?: SortOrder;
  fromId?: SortOrder;
  toId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PrivateChatMaxOrderByAggregateInput {
  id?: SortOrder;
  fromId?: SortOrder;
  toId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface PrivateChatMinOrderByAggregateInput {
  id?: SortOrder;
  fromId?: SortOrder;
  toId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface EnumContentTypeWithAggregatesFilter {
  equals?: ContentType;
  in?: ContentType[];
  notIn?: ContentType[];
  not?: NestedEnumContentTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumContentTypeFilter;
  _max?: NestedEnumContentTypeFilter;
}

export interface ExamQuestionListRelationFilter {
  every?: ExamQuestionWhereInput;
  some?: ExamQuestionWhereInput;
  none?: ExamQuestionWhereInput;
}

export interface ExamAnswerListRelationFilter {
  every?: ExamAnswerWhereInput;
  some?: ExamAnswerWhereInput;
  none?: ExamAnswerWhereInput;
}

export interface ExamQuestionOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ExamAnswerOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ExamCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamSessionCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  userId?: SortOrder;
}

export interface ExamSessionAvgOrderByAggregateInput {
  maxPlayer?: SortOrder;
}

export interface ExamSessionMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  userId?: SortOrder;
}

export interface ExamSessionMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  userId?: SortOrder;
}

export interface ExamSessionSumOrderByAggregateInput {
  maxPlayer?: SortOrder;
}

export interface QuestionRelationFilter {
  is?: QuestionWhereInput;
  isNot?: QuestionWhereInput;
}

export interface ExamRelationFilter {
  is?: ExamWhereInput;
  isNot?: ExamWhereInput;
}

export interface ExamQuestionCountOrderByAggregateInput {
  id?: SortOrder;
  questionId?: SortOrder;
  examId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamQuestionMaxOrderByAggregateInput {
  id?: SortOrder;
  questionId?: SortOrder;
  examId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamQuestionMinOrderByAggregateInput {
  id?: SortOrder;
  questionId?: SortOrder;
  examId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamSessionRelationFilter {
  is?: ExamSessionWhereInput;
  isNot?: ExamSessionWhereInput;
}

export interface ExamAnswerCountOrderByAggregateInput {
  id?: SortOrder;
  examId?: SortOrder;
  grade?: SortOrder;
  finishCalculation?: SortOrder;
  examSessionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamAnswerAvgOrderByAggregateInput {
  grade?: SortOrder;
}

export interface ExamAnswerMaxOrderByAggregateInput {
  id?: SortOrder;
  examId?: SortOrder;
  grade?: SortOrder;
  finishCalculation?: SortOrder;
  examSessionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamAnswerMinOrderByAggregateInput {
  id?: SortOrder;
  examId?: SortOrder;
  grade?: SortOrder;
  finishCalculation?: SortOrder;
  examSessionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ExamAnswerSumOrderByAggregateInput {
  grade?: SortOrder;
}

export interface EnumQuestionTypeFilter {
  equals?: QuestionType;
  in?: QuestionType[];
  notIn?: QuestionType[];
  not?: NestedEnumQuestionTypeFilter;
}

export interface StringNullableListFilter {
  equals?: string[];
  has?: string;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface QuestionCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  type?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  answerType?: SortOrder;
  answers?: SortOrder;
  userId?: SortOrder;
  originalQuestionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface QuestionMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  type?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  answerType?: SortOrder;
  userId?: SortOrder;
  originalQuestionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface QuestionMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  type?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  answerType?: SortOrder;
  userId?: SortOrder;
  originalQuestionId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface EnumQuestionTypeWithAggregatesFilter {
  equals?: QuestionType;
  in?: QuestionType[];
  notIn?: QuestionType[];
  not?: NestedEnumQuestionTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumQuestionTypeFilter;
  _max?: NestedEnumQuestionTypeFilter;
}

export interface RegencyCreateNestedManyWithoutProvinceInput {
  create?: RegencyCreateWithoutProvinceInput[];
  connectOrCreate?: RegencyCreateOrConnectWithoutProvinceInput[];
  createMany?: RegencyCreateManyProvinceInputEnvelope;
  connect?: RegencyWhereUniqueInput[];
}

export interface UserCreateNestedManyWithoutProvinceInput {
  create?: UserCreateWithoutProvinceInput[];
  connectOrCreate?: UserCreateOrConnectWithoutProvinceInput[];
  createMany?: UserCreateManyProvinceInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface RegencyUncheckedCreateNestedManyWithoutProvinceInput {
  create?: RegencyCreateWithoutProvinceInput[];
  connectOrCreate?: RegencyCreateOrConnectWithoutProvinceInput[];
  createMany?: RegencyCreateManyProvinceInputEnvelope;
  connect?: RegencyWhereUniqueInput[];
}

export interface UserUncheckedCreateNestedManyWithoutProvinceInput {
  create?: UserCreateWithoutProvinceInput[];
  connectOrCreate?: UserCreateOrConnectWithoutProvinceInput[];
  createMany?: UserCreateManyProvinceInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface RegencyUpdateManyWithoutProvinceInput {
  create?: RegencyCreateWithoutProvinceInput[];
  connectOrCreate?: RegencyCreateOrConnectWithoutProvinceInput[];
  upsert?: RegencyUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: RegencyCreateManyProvinceInputEnvelope;
  set?: RegencyWhereUniqueInput[];
  disconnect?: RegencyWhereUniqueInput[];
  delete?: RegencyWhereUniqueInput[];
  connect?: RegencyWhereUniqueInput[];
  update?: RegencyUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: RegencyUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: RegencyScalarWhereInput[];
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: undefined;
}

export interface UserUpdateManyWithoutProvinceInput {
  create?: UserCreateWithoutProvinceInput[];
  connectOrCreate?: UserCreateOrConnectWithoutProvinceInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: UserCreateManyProvinceInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: UserUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface RegencyUncheckedUpdateManyWithoutProvinceInput {
  create?: RegencyCreateWithoutProvinceInput[];
  connectOrCreate?: RegencyCreateOrConnectWithoutProvinceInput[];
  upsert?: RegencyUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: RegencyCreateManyProvinceInputEnvelope;
  set?: RegencyWhereUniqueInput[];
  disconnect?: RegencyWhereUniqueInput[];
  delete?: RegencyWhereUniqueInput[];
  connect?: RegencyWhereUniqueInput[];
  update?: RegencyUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: RegencyUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: RegencyScalarWhereInput[];
}

export interface UserUncheckedUpdateManyWithoutProvinceInput {
  create?: UserCreateWithoutProvinceInput[];
  connectOrCreate?: UserCreateOrConnectWithoutProvinceInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: UserCreateManyProvinceInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: UserUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface ProvinceCreateNestedOneWithoutRegenciesInput {
  create?: ProvinceUncheckedCreateWithoutRegenciesInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutRegenciesInput;
  connect?: ProvinceWhereUniqueInput;
}

export interface UserCreateNestedManyWithoutRegencyInput {
  create?: UserCreateWithoutRegencyInput[];
  connectOrCreate?: UserCreateOrConnectWithoutRegencyInput[];
  createMany?: UserCreateManyRegencyInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface UserUncheckedCreateNestedManyWithoutRegencyInput {
  create?: UserCreateWithoutRegencyInput[];
  connectOrCreate?: UserCreateOrConnectWithoutRegencyInput[];
  createMany?: UserCreateManyRegencyInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface ProvinceUpdateOneRequiredWithoutRegenciesInput {
  create?: ProvinceUncheckedCreateWithoutRegenciesInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutRegenciesInput;
  upsert?: ProvinceUpsertWithoutRegenciesInput;
  connect?: ProvinceWhereUniqueInput;
  update?: ProvinceUncheckedUpdateWithoutRegenciesInput;
}

export interface UserUpdateManyWithoutRegencyInput {
  create?: UserCreateWithoutRegencyInput[];
  connectOrCreate?: UserCreateOrConnectWithoutRegencyInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutRegencyInput[];
  createMany?: UserCreateManyRegencyInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutRegencyInput[];
  updateMany?: UserUpdateManyWithWhereWithoutRegencyInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface UserUncheckedUpdateManyWithoutRegencyInput {
  create?: UserCreateWithoutRegencyInput[];
  connectOrCreate?: UserCreateOrConnectWithoutRegencyInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutRegencyInput[];
  createMany?: UserCreateManyRegencyInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutRegencyInput[];
  updateMany?: UserUpdateManyWithWhereWithoutRegencyInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutIdentityFilesInput {
  create?: UserUncheckedCreateWithoutIdentityFilesInput;
  connectOrCreate?: UserCreateOrConnectWithoutIdentityFilesInput;
  connect?: UserWhereUniqueInput;
}

export interface EnumIdentityFileTypeFieldUpdateOperationsInput {
  set?: IdentityFileType;
}

export interface UserUpdateOneRequiredWithoutIdentityFilesInput {
  create?: UserUncheckedCreateWithoutIdentityFilesInput;
  connectOrCreate?: UserCreateOrConnectWithoutIdentityFilesInput;
  upsert?: UserUpsertWithoutIdentityFilesInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutIdentityFilesInput;
}

export interface UserCreateNestedOneWithoutMyTokensInput {
  create?: UserUncheckedCreateWithoutMyTokensInput;
  connectOrCreate?: UserCreateOrConnectWithoutMyTokensInput;
  connect?: UserWhereUniqueInput;
}

export interface TokenClaimCreateNestedManyWithoutTokenInput {
  create?: TokenClaimCreateWithoutTokenInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutTokenInput[];
  createMany?: TokenClaimCreateManyTokenInputEnvelope;
  connect?: TokenClaimWhereUniqueInput[];
}

export interface TokenClaimUncheckedCreateNestedManyWithoutTokenInput {
  create?: TokenClaimCreateWithoutTokenInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutTokenInput[];
  createMany?: TokenClaimCreateManyTokenInputEnvelope;
  connect?: TokenClaimWhereUniqueInput[];
}

export interface UserUpdateOneRequiredWithoutMyTokensInput {
  create?: UserUncheckedCreateWithoutMyTokensInput;
  connectOrCreate?: UserCreateOrConnectWithoutMyTokensInput;
  upsert?: UserUpsertWithoutMyTokensInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutMyTokensInput;
}

export interface TokenClaimUpdateManyWithoutTokenInput {
  create?: TokenClaimCreateWithoutTokenInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutTokenInput[];
  upsert?: TokenClaimUpsertWithWhereUniqueWithoutTokenInput[];
  createMany?: TokenClaimCreateManyTokenInputEnvelope;
  set?: TokenClaimWhereUniqueInput[];
  disconnect?: TokenClaimWhereUniqueInput[];
  delete?: TokenClaimWhereUniqueInput[];
  connect?: TokenClaimWhereUniqueInput[];
  update?: TokenClaimUpdateWithWhereUniqueWithoutTokenInput[];
  updateMany?: TokenClaimUpdateManyWithWhereWithoutTokenInput[];
  deleteMany?: TokenClaimScalarWhereInput[];
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface TokenClaimUncheckedUpdateManyWithoutTokenInput {
  create?: TokenClaimCreateWithoutTokenInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutTokenInput[];
  upsert?: TokenClaimUpsertWithWhereUniqueWithoutTokenInput[];
  createMany?: TokenClaimCreateManyTokenInputEnvelope;
  set?: TokenClaimWhereUniqueInput[];
  disconnect?: TokenClaimWhereUniqueInput[];
  delete?: TokenClaimWhereUniqueInput[];
  connect?: TokenClaimWhereUniqueInput[];
  update?: TokenClaimUpdateWithWhereUniqueWithoutTokenInput[];
  updateMany?: TokenClaimUpdateManyWithWhereWithoutTokenInput[];
  deleteMany?: TokenClaimScalarWhereInput[];
}

export interface TokenCreateNestedOneWithoutTokenClaimsInput {
  create?: TokenUncheckedCreateWithoutTokenClaimsInput;
  connectOrCreate?: TokenCreateOrConnectWithoutTokenClaimsInput;
  connect?: TokenWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutTokenClaimsInput {
  create?: UserUncheckedCreateWithoutTokenClaimsInput;
  connectOrCreate?: UserCreateOrConnectWithoutTokenClaimsInput;
  connect?: UserWhereUniqueInput;
}

export interface TokenUpdateOneRequiredWithoutTokenClaimsInput {
  create?: TokenUncheckedCreateWithoutTokenClaimsInput;
  connectOrCreate?: TokenCreateOrConnectWithoutTokenClaimsInput;
  upsert?: TokenUpsertWithoutTokenClaimsInput;
  connect?: TokenWhereUniqueInput;
  update?: TokenUncheckedUpdateWithoutTokenClaimsInput;
}

export interface UserUpdateOneRequiredWithoutTokenClaimsInput {
  create?: UserUncheckedCreateWithoutTokenClaimsInput;
  connectOrCreate?: UserCreateOrConnectWithoutTokenClaimsInput;
  upsert?: UserUpsertWithoutTokenClaimsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutTokenClaimsInput;
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: undefined;
}

export interface ProvinceCreateNestedOneWithoutUsersInput {
  create?: ProvinceUncheckedCreateWithoutUsersInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput;
  connect?: ProvinceWhereUniqueInput;
}

export interface RegencyCreateNestedOneWithoutUsersInput {
  create?: RegencyUncheckedCreateWithoutUsersInput;
  connectOrCreate?: RegencyCreateOrConnectWithoutUsersInput;
  connect?: RegencyWhereUniqueInput;
}

export interface IdentityFileCreateNestedManyWithoutUserInput {
  create?: IdentityFileCreateWithoutUserInput[];
  connectOrCreate?: IdentityFileCreateOrConnectWithoutUserInput[];
  createMany?: IdentityFileCreateManyUserInputEnvelope;
  connect?: IdentityFileWhereUniqueInput[];
}

export interface QuestionCreateNestedManyWithoutUserInput {
  create?: QuestionCreateWithoutUserInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutUserInput[];
  createMany?: QuestionCreateManyUserInputEnvelope;
  connect?: QuestionWhereUniqueInput[];
}

export interface ExamCreateNestedManyWithoutUserInput {
  create?: ExamCreateWithoutUserInput[];
  connectOrCreate?: ExamCreateOrConnectWithoutUserInput[];
  createMany?: ExamCreateManyUserInputEnvelope;
  connect?: ExamWhereUniqueInput[];
}

export interface ExamSessionCreateNestedManyWithoutUserInput {
  create?: ExamSessionCreateWithoutUserInput[];
  connectOrCreate?: ExamSessionCreateOrConnectWithoutUserInput[];
  createMany?: ExamSessionCreateManyUserInputEnvelope;
  connect?: ExamSessionWhereUniqueInput[];
}

export interface PrivateChatCreateNestedManyWithoutToInput {
  create?: PrivateChatCreateWithoutToInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutToInput[];
  createMany?: PrivateChatCreateManyToInputEnvelope;
  connect?: PrivateChatWhereUniqueInput[];
}

export interface PrivateChatCreateNestedManyWithoutFromInput {
  create?: PrivateChatCreateWithoutFromInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutFromInput[];
  createMany?: PrivateChatCreateManyFromInputEnvelope;
  connect?: PrivateChatWhereUniqueInput[];
}

export interface NotificationCreateNestedManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[];
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[];
  createMany?: NotificationCreateManyUserInputEnvelope;
  connect?: NotificationWhereUniqueInput[];
}

export interface TokenCreateNestedManyWithoutOwnerInput {
  create?: TokenCreateWithoutOwnerInput[];
  connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput[];
  createMany?: TokenCreateManyOwnerInputEnvelope;
  connect?: TokenWhereUniqueInput[];
}

export interface TokenClaimCreateNestedManyWithoutClaimerInput {
  create?: TokenClaimCreateWithoutClaimerInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutClaimerInput[];
  createMany?: TokenClaimCreateManyClaimerInputEnvelope;
  connect?: TokenClaimWhereUniqueInput[];
}

export interface IdentityFileUncheckedCreateNestedManyWithoutUserInput {
  create?: IdentityFileCreateWithoutUserInput[];
  connectOrCreate?: IdentityFileCreateOrConnectWithoutUserInput[];
  createMany?: IdentityFileCreateManyUserInputEnvelope;
  connect?: IdentityFileWhereUniqueInput[];
}

export interface QuestionUncheckedCreateNestedManyWithoutUserInput {
  create?: QuestionCreateWithoutUserInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutUserInput[];
  createMany?: QuestionCreateManyUserInputEnvelope;
  connect?: QuestionWhereUniqueInput[];
}

export interface ExamUncheckedCreateNestedManyWithoutUserInput {
  create?: ExamCreateWithoutUserInput[];
  connectOrCreate?: ExamCreateOrConnectWithoutUserInput[];
  createMany?: ExamCreateManyUserInputEnvelope;
  connect?: ExamWhereUniqueInput[];
}

export interface ExamSessionUncheckedCreateNestedManyWithoutUserInput {
  create?: ExamSessionCreateWithoutUserInput[];
  connectOrCreate?: ExamSessionCreateOrConnectWithoutUserInput[];
  createMany?: ExamSessionCreateManyUserInputEnvelope;
  connect?: ExamSessionWhereUniqueInput[];
}

export interface PrivateChatUncheckedCreateNestedManyWithoutToInput {
  create?: PrivateChatCreateWithoutToInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutToInput[];
  createMany?: PrivateChatCreateManyToInputEnvelope;
  connect?: PrivateChatWhereUniqueInput[];
}

export interface PrivateChatUncheckedCreateNestedManyWithoutFromInput {
  create?: PrivateChatCreateWithoutFromInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutFromInput[];
  createMany?: PrivateChatCreateManyFromInputEnvelope;
  connect?: PrivateChatWhereUniqueInput[];
}

export interface NotificationUncheckedCreateNestedManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[];
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[];
  createMany?: NotificationCreateManyUserInputEnvelope;
  connect?: NotificationWhereUniqueInput[];
}

export interface TokenUncheckedCreateNestedManyWithoutOwnerInput {
  create?: TokenCreateWithoutOwnerInput[];
  connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput[];
  createMany?: TokenCreateManyOwnerInputEnvelope;
  connect?: TokenWhereUniqueInput[];
}

export interface TokenClaimUncheckedCreateNestedManyWithoutClaimerInput {
  create?: TokenClaimCreateWithoutClaimerInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutClaimerInput[];
  createMany?: TokenClaimCreateManyClaimerInputEnvelope;
  connect?: TokenClaimWhereUniqueInput[];
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string;
}

export interface ProvinceUpdateOneRequiredWithoutUsersInput {
  create?: ProvinceUncheckedCreateWithoutUsersInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput;
  upsert?: ProvinceUpsertWithoutUsersInput;
  connect?: ProvinceWhereUniqueInput;
  update?: ProvinceUncheckedUpdateWithoutUsersInput;
}

export interface RegencyUpdateOneRequiredWithoutUsersInput {
  create?: RegencyUncheckedCreateWithoutUsersInput;
  connectOrCreate?: RegencyCreateOrConnectWithoutUsersInput;
  upsert?: RegencyUpsertWithoutUsersInput;
  connect?: RegencyWhereUniqueInput;
  update?: RegencyUncheckedUpdateWithoutUsersInput;
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface EnumRolesFieldUpdateOperationsInput {
  set?: Roles;
}

export interface FloatFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface EnumVerifyTypeFieldUpdateOperationsInput {
  set?: VerifyType;
}

export interface IdentityFileUpdateManyWithoutUserInput {
  create?: IdentityFileCreateWithoutUserInput[];
  connectOrCreate?: IdentityFileCreateOrConnectWithoutUserInput[];
  upsert?: IdentityFileUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: IdentityFileCreateManyUserInputEnvelope;
  set?: IdentityFileWhereUniqueInput[];
  disconnect?: IdentityFileWhereUniqueInput[];
  delete?: IdentityFileWhereUniqueInput[];
  connect?: IdentityFileWhereUniqueInput[];
  update?: IdentityFileUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: IdentityFileUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: IdentityFileScalarWhereInput[];
}

export interface QuestionUpdateManyWithoutUserInput {
  create?: QuestionCreateWithoutUserInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutUserInput[];
  upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: QuestionCreateManyUserInputEnvelope;
  set?: QuestionWhereUniqueInput[];
  disconnect?: QuestionWhereUniqueInput[];
  delete?: QuestionWhereUniqueInput[];
  connect?: QuestionWhereUniqueInput[];
  update?: QuestionUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: QuestionUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: QuestionScalarWhereInput[];
}

export interface ExamUpdateManyWithoutUserInput {
  create?: ExamCreateWithoutUserInput[];
  connectOrCreate?: ExamCreateOrConnectWithoutUserInput[];
  upsert?: ExamUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ExamCreateManyUserInputEnvelope;
  set?: ExamWhereUniqueInput[];
  disconnect?: ExamWhereUniqueInput[];
  delete?: ExamWhereUniqueInput[];
  connect?: ExamWhereUniqueInput[];
  update?: ExamUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ExamUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ExamScalarWhereInput[];
}

export interface ExamSessionUpdateManyWithoutUserInput {
  create?: ExamSessionCreateWithoutUserInput[];
  connectOrCreate?: ExamSessionCreateOrConnectWithoutUserInput[];
  upsert?: ExamSessionUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ExamSessionCreateManyUserInputEnvelope;
  set?: ExamSessionWhereUniqueInput[];
  disconnect?: ExamSessionWhereUniqueInput[];
  delete?: ExamSessionWhereUniqueInput[];
  connect?: ExamSessionWhereUniqueInput[];
  update?: ExamSessionUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ExamSessionUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ExamSessionScalarWhereInput[];
}

export interface PrivateChatUpdateManyWithoutToInput {
  create?: PrivateChatCreateWithoutToInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutToInput[];
  upsert?: PrivateChatUpsertWithWhereUniqueWithoutToInput[];
  createMany?: PrivateChatCreateManyToInputEnvelope;
  set?: PrivateChatWhereUniqueInput[];
  disconnect?: PrivateChatWhereUniqueInput[];
  delete?: PrivateChatWhereUniqueInput[];
  connect?: PrivateChatWhereUniqueInput[];
  update?: PrivateChatUpdateWithWhereUniqueWithoutToInput[];
  updateMany?: PrivateChatUpdateManyWithWhereWithoutToInput[];
  deleteMany?: PrivateChatScalarWhereInput[];
}

export interface PrivateChatUpdateManyWithoutFromInput {
  create?: PrivateChatCreateWithoutFromInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutFromInput[];
  upsert?: PrivateChatUpsertWithWhereUniqueWithoutFromInput[];
  createMany?: PrivateChatCreateManyFromInputEnvelope;
  set?: PrivateChatWhereUniqueInput[];
  disconnect?: PrivateChatWhereUniqueInput[];
  delete?: PrivateChatWhereUniqueInput[];
  connect?: PrivateChatWhereUniqueInput[];
  update?: PrivateChatUpdateWithWhereUniqueWithoutFromInput[];
  updateMany?: PrivateChatUpdateManyWithWhereWithoutFromInput[];
  deleteMany?: PrivateChatScalarWhereInput[];
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[];
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[];
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: NotificationCreateManyUserInputEnvelope;
  set?: NotificationWhereUniqueInput[];
  disconnect?: NotificationWhereUniqueInput[];
  delete?: NotificationWhereUniqueInput[];
  connect?: NotificationWhereUniqueInput[];
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: NotificationUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: NotificationScalarWhereInput[];
}

export interface TokenUpdateManyWithoutOwnerInput {
  create?: TokenCreateWithoutOwnerInput[];
  connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput[];
  upsert?: TokenUpsertWithWhereUniqueWithoutOwnerInput[];
  createMany?: TokenCreateManyOwnerInputEnvelope;
  set?: TokenWhereUniqueInput[];
  disconnect?: TokenWhereUniqueInput[];
  delete?: TokenWhereUniqueInput[];
  connect?: TokenWhereUniqueInput[];
  update?: TokenUpdateWithWhereUniqueWithoutOwnerInput[];
  updateMany?: TokenUpdateManyWithWhereWithoutOwnerInput[];
  deleteMany?: TokenScalarWhereInput[];
}

export interface TokenClaimUpdateManyWithoutClaimerInput {
  create?: TokenClaimCreateWithoutClaimerInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutClaimerInput[];
  upsert?: TokenClaimUpsertWithWhereUniqueWithoutClaimerInput[];
  createMany?: TokenClaimCreateManyClaimerInputEnvelope;
  set?: TokenClaimWhereUniqueInput[];
  disconnect?: TokenClaimWhereUniqueInput[];
  delete?: TokenClaimWhereUniqueInput[];
  connect?: TokenClaimWhereUniqueInput[];
  update?: TokenClaimUpdateWithWhereUniqueWithoutClaimerInput[];
  updateMany?: TokenClaimUpdateManyWithWhereWithoutClaimerInput[];
  deleteMany?: TokenClaimScalarWhereInput[];
}

export interface IdentityFileUncheckedUpdateManyWithoutUserInput {
  create?: IdentityFileCreateWithoutUserInput[];
  connectOrCreate?: IdentityFileCreateOrConnectWithoutUserInput[];
  upsert?: IdentityFileUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: IdentityFileCreateManyUserInputEnvelope;
  set?: IdentityFileWhereUniqueInput[];
  disconnect?: IdentityFileWhereUniqueInput[];
  delete?: IdentityFileWhereUniqueInput[];
  connect?: IdentityFileWhereUniqueInput[];
  update?: IdentityFileUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: IdentityFileUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: IdentityFileScalarWhereInput[];
}

export interface QuestionUncheckedUpdateManyWithoutUserInput {
  create?: QuestionCreateWithoutUserInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutUserInput[];
  upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: QuestionCreateManyUserInputEnvelope;
  set?: QuestionWhereUniqueInput[];
  disconnect?: QuestionWhereUniqueInput[];
  delete?: QuestionWhereUniqueInput[];
  connect?: QuestionWhereUniqueInput[];
  update?: QuestionUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: QuestionUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: QuestionScalarWhereInput[];
}

export interface ExamUncheckedUpdateManyWithoutUserInput {
  create?: ExamCreateWithoutUserInput[];
  connectOrCreate?: ExamCreateOrConnectWithoutUserInput[];
  upsert?: ExamUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ExamCreateManyUserInputEnvelope;
  set?: ExamWhereUniqueInput[];
  disconnect?: ExamWhereUniqueInput[];
  delete?: ExamWhereUniqueInput[];
  connect?: ExamWhereUniqueInput[];
  update?: ExamUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ExamUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ExamScalarWhereInput[];
}

export interface ExamSessionUncheckedUpdateManyWithoutUserInput {
  create?: ExamSessionCreateWithoutUserInput[];
  connectOrCreate?: ExamSessionCreateOrConnectWithoutUserInput[];
  upsert?: ExamSessionUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ExamSessionCreateManyUserInputEnvelope;
  set?: ExamSessionWhereUniqueInput[];
  disconnect?: ExamSessionWhereUniqueInput[];
  delete?: ExamSessionWhereUniqueInput[];
  connect?: ExamSessionWhereUniqueInput[];
  update?: ExamSessionUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ExamSessionUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ExamSessionScalarWhereInput[];
}

export interface PrivateChatUncheckedUpdateManyWithoutToInput {
  create?: PrivateChatCreateWithoutToInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutToInput[];
  upsert?: PrivateChatUpsertWithWhereUniqueWithoutToInput[];
  createMany?: PrivateChatCreateManyToInputEnvelope;
  set?: PrivateChatWhereUniqueInput[];
  disconnect?: PrivateChatWhereUniqueInput[];
  delete?: PrivateChatWhereUniqueInput[];
  connect?: PrivateChatWhereUniqueInput[];
  update?: PrivateChatUpdateWithWhereUniqueWithoutToInput[];
  updateMany?: PrivateChatUpdateManyWithWhereWithoutToInput[];
  deleteMany?: PrivateChatScalarWhereInput[];
}

export interface PrivateChatUncheckedUpdateManyWithoutFromInput {
  create?: PrivateChatCreateWithoutFromInput[];
  connectOrCreate?: PrivateChatCreateOrConnectWithoutFromInput[];
  upsert?: PrivateChatUpsertWithWhereUniqueWithoutFromInput[];
  createMany?: PrivateChatCreateManyFromInputEnvelope;
  set?: PrivateChatWhereUniqueInput[];
  disconnect?: PrivateChatWhereUniqueInput[];
  delete?: PrivateChatWhereUniqueInput[];
  connect?: PrivateChatWhereUniqueInput[];
  update?: PrivateChatUpdateWithWhereUniqueWithoutFromInput[];
  updateMany?: PrivateChatUpdateManyWithWhereWithoutFromInput[];
  deleteMany?: PrivateChatScalarWhereInput[];
}

export interface NotificationUncheckedUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[];
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[];
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: NotificationCreateManyUserInputEnvelope;
  set?: NotificationWhereUniqueInput[];
  disconnect?: NotificationWhereUniqueInput[];
  delete?: NotificationWhereUniqueInput[];
  connect?: NotificationWhereUniqueInput[];
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: NotificationUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: NotificationScalarWhereInput[];
}

export interface TokenUncheckedUpdateManyWithoutOwnerInput {
  create?: TokenCreateWithoutOwnerInput[];
  connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput[];
  upsert?: TokenUpsertWithWhereUniqueWithoutOwnerInput[];
  createMany?: TokenCreateManyOwnerInputEnvelope;
  set?: TokenWhereUniqueInput[];
  disconnect?: TokenWhereUniqueInput[];
  delete?: TokenWhereUniqueInput[];
  connect?: TokenWhereUniqueInput[];
  update?: TokenUpdateWithWhereUniqueWithoutOwnerInput[];
  updateMany?: TokenUpdateManyWithWhereWithoutOwnerInput[];
  deleteMany?: TokenScalarWhereInput[];
}

export interface TokenClaimUncheckedUpdateManyWithoutClaimerInput {
  create?: TokenClaimCreateWithoutClaimerInput[];
  connectOrCreate?: TokenClaimCreateOrConnectWithoutClaimerInput[];
  upsert?: TokenClaimUpsertWithWhereUniqueWithoutClaimerInput[];
  createMany?: TokenClaimCreateManyClaimerInputEnvelope;
  set?: TokenClaimWhereUniqueInput[];
  disconnect?: TokenClaimWhereUniqueInput[];
  delete?: TokenClaimWhereUniqueInput[];
  connect?: TokenClaimWhereUniqueInput[];
  update?: TokenClaimUpdateWithWhereUniqueWithoutClaimerInput[];
  updateMany?: TokenClaimUpdateManyWithWhereWithoutClaimerInput[];
  deleteMany?: TokenClaimScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutNotificationsInput {
  create?: UserUncheckedCreateWithoutNotificationsInput;
  connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserUncheckedCreateWithoutNotificationsInput;
  connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput;
  upsert?: UserUpsertWithoutNotificationsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutNotificationsInput;
}

export interface UserCreateNestedOneWithoutMyPrivateChatsInput {
  create?: UserUncheckedCreateWithoutMyPrivateChatsInput;
  connectOrCreate?: UserCreateOrConnectWithoutMyPrivateChatsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutPrivateChatsInput {
  create?: UserUncheckedCreateWithoutPrivateChatsInput;
  connectOrCreate?: UserCreateOrConnectWithoutPrivateChatsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutMyPrivateChatsInput {
  create?: UserUncheckedCreateWithoutMyPrivateChatsInput;
  connectOrCreate?: UserCreateOrConnectWithoutMyPrivateChatsInput;
  upsert?: UserUpsertWithoutMyPrivateChatsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutMyPrivateChatsInput;
}

export interface UserUpdateOneRequiredWithoutPrivateChatsInput {
  create?: UserUncheckedCreateWithoutPrivateChatsInput;
  connectOrCreate?: UserCreateOrConnectWithoutPrivateChatsInput;
  upsert?: UserUpsertWithoutPrivateChatsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutPrivateChatsInput;
}

export interface EnumContentTypeFieldUpdateOperationsInput {
  set?: ContentType;
}

export interface UserCreateNestedOneWithoutExaminationsInput {
  create?: UserUncheckedCreateWithoutExaminationsInput;
  connectOrCreate?: UserCreateOrConnectWithoutExaminationsInput;
  connect?: UserWhereUniqueInput;
}

export interface ExamQuestionCreateNestedManyWithoutExamInput {
  create?: ExamQuestionCreateWithoutExamInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput[];
  createMany?: ExamQuestionCreateManyExamInputEnvelope;
  connect?: ExamQuestionWhereUniqueInput[];
}

export interface ExamAnswerCreateNestedManyWithoutExamInput {
  create?: ExamAnswerCreateWithoutExamInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamInput[];
  createMany?: ExamAnswerCreateManyExamInputEnvelope;
  connect?: ExamAnswerWhereUniqueInput[];
}

export interface ExamQuestionUncheckedCreateNestedManyWithoutExamInput {
  create?: ExamQuestionCreateWithoutExamInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput[];
  createMany?: ExamQuestionCreateManyExamInputEnvelope;
  connect?: ExamQuestionWhereUniqueInput[];
}

export interface ExamAnswerUncheckedCreateNestedManyWithoutExamInput {
  create?: ExamAnswerCreateWithoutExamInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamInput[];
  createMany?: ExamAnswerCreateManyExamInputEnvelope;
  connect?: ExamAnswerWhereUniqueInput[];
}

export interface UserUpdateOneRequiredWithoutExaminationsInput {
  create?: UserUncheckedCreateWithoutExaminationsInput;
  connectOrCreate?: UserCreateOrConnectWithoutExaminationsInput;
  upsert?: UserUpsertWithoutExaminationsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutExaminationsInput;
}

export interface ExamQuestionUpdateManyWithoutExamInput {
  create?: ExamQuestionCreateWithoutExamInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput[];
  upsert?: ExamQuestionUpsertWithWhereUniqueWithoutExamInput[];
  createMany?: ExamQuestionCreateManyExamInputEnvelope;
  set?: ExamQuestionWhereUniqueInput[];
  disconnect?: ExamQuestionWhereUniqueInput[];
  delete?: ExamQuestionWhereUniqueInput[];
  connect?: ExamQuestionWhereUniqueInput[];
  update?: ExamQuestionUpdateWithWhereUniqueWithoutExamInput[];
  updateMany?: ExamQuestionUpdateManyWithWhereWithoutExamInput[];
  deleteMany?: ExamQuestionScalarWhereInput[];
}

export interface ExamAnswerUpdateManyWithoutExamInput {
  create?: ExamAnswerCreateWithoutExamInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamInput[];
  upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamInput[];
  createMany?: ExamAnswerCreateManyExamInputEnvelope;
  set?: ExamAnswerWhereUniqueInput[];
  disconnect?: ExamAnswerWhereUniqueInput[];
  delete?: ExamAnswerWhereUniqueInput[];
  connect?: ExamAnswerWhereUniqueInput[];
  update?: ExamAnswerUpdateWithWhereUniqueWithoutExamInput[];
  updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamInput[];
  deleteMany?: ExamAnswerScalarWhereInput[];
}

export interface ExamQuestionUncheckedUpdateManyWithoutExamInput {
  create?: ExamQuestionCreateWithoutExamInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput[];
  upsert?: ExamQuestionUpsertWithWhereUniqueWithoutExamInput[];
  createMany?: ExamQuestionCreateManyExamInputEnvelope;
  set?: ExamQuestionWhereUniqueInput[];
  disconnect?: ExamQuestionWhereUniqueInput[];
  delete?: ExamQuestionWhereUniqueInput[];
  connect?: ExamQuestionWhereUniqueInput[];
  update?: ExamQuestionUpdateWithWhereUniqueWithoutExamInput[];
  updateMany?: ExamQuestionUpdateManyWithWhereWithoutExamInput[];
  deleteMany?: ExamQuestionScalarWhereInput[];
}

export interface ExamAnswerUncheckedUpdateManyWithoutExamInput {
  create?: ExamAnswerCreateWithoutExamInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamInput[];
  upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamInput[];
  createMany?: ExamAnswerCreateManyExamInputEnvelope;
  set?: ExamAnswerWhereUniqueInput[];
  disconnect?: ExamAnswerWhereUniqueInput[];
  delete?: ExamAnswerWhereUniqueInput[];
  connect?: ExamAnswerWhereUniqueInput[];
  update?: ExamAnswerUpdateWithWhereUniqueWithoutExamInput[];
  updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamInput[];
  deleteMany?: ExamAnswerScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutExamsessionsInput {
  create?: UserUncheckedCreateWithoutExamsessionsInput;
  connectOrCreate?: UserCreateOrConnectWithoutExamsessionsInput;
  connect?: UserWhereUniqueInput;
}

export interface ExamAnswerCreateNestedManyWithoutExamSessionInput {
  create?: ExamAnswerCreateWithoutExamSessionInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSessionInput[];
  createMany?: ExamAnswerCreateManyExamSessionInputEnvelope;
  connect?: ExamAnswerWhereUniqueInput[];
}

export interface ExamAnswerUncheckedCreateNestedManyWithoutExamSessionInput {
  create?: ExamAnswerCreateWithoutExamSessionInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSessionInput[];
  createMany?: ExamAnswerCreateManyExamSessionInputEnvelope;
  connect?: ExamAnswerWhereUniqueInput[];
}

export interface UserUpdateOneRequiredWithoutExamsessionsInput {
  create?: UserUncheckedCreateWithoutExamsessionsInput;
  connectOrCreate?: UserCreateOrConnectWithoutExamsessionsInput;
  upsert?: UserUpsertWithoutExamsessionsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutExamsessionsInput;
}

export interface ExamAnswerUpdateManyWithoutExamSessionInput {
  create?: ExamAnswerCreateWithoutExamSessionInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSessionInput[];
  upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamSessionInput[];
  createMany?: ExamAnswerCreateManyExamSessionInputEnvelope;
  set?: ExamAnswerWhereUniqueInput[];
  disconnect?: ExamAnswerWhereUniqueInput[];
  delete?: ExamAnswerWhereUniqueInput[];
  connect?: ExamAnswerWhereUniqueInput[];
  update?: ExamAnswerUpdateWithWhereUniqueWithoutExamSessionInput[];
  updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamSessionInput[];
  deleteMany?: ExamAnswerScalarWhereInput[];
}

export interface ExamAnswerUncheckedUpdateManyWithoutExamSessionInput {
  create?: ExamAnswerCreateWithoutExamSessionInput[];
  connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSessionInput[];
  upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamSessionInput[];
  createMany?: ExamAnswerCreateManyExamSessionInputEnvelope;
  set?: ExamAnswerWhereUniqueInput[];
  disconnect?: ExamAnswerWhereUniqueInput[];
  delete?: ExamAnswerWhereUniqueInput[];
  connect?: ExamAnswerWhereUniqueInput[];
  update?: ExamAnswerUpdateWithWhereUniqueWithoutExamSessionInput[];
  updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamSessionInput[];
  deleteMany?: ExamAnswerScalarWhereInput[];
}

export interface QuestionCreateNestedOneWithoutExamquestionsInput {
  create?: QuestionUncheckedCreateWithoutExamquestionsInput;
  connectOrCreate?: QuestionCreateOrConnectWithoutExamquestionsInput;
  connect?: QuestionWhereUniqueInput;
}

export interface ExamCreateNestedOneWithoutExamquestionsInput {
  create?: ExamUncheckedCreateWithoutExamquestionsInput;
  connectOrCreate?: ExamCreateOrConnectWithoutExamquestionsInput;
  connect?: ExamWhereUniqueInput;
}

export interface QuestionUpdateOneRequiredWithoutExamquestionsInput {
  create?: QuestionUncheckedCreateWithoutExamquestionsInput;
  connectOrCreate?: QuestionCreateOrConnectWithoutExamquestionsInput;
  upsert?: QuestionUpsertWithoutExamquestionsInput;
  connect?: QuestionWhereUniqueInput;
  update?: QuestionUncheckedUpdateWithoutExamquestionsInput;
}

export interface ExamUpdateOneRequiredWithoutExamquestionsInput {
  create?: ExamUncheckedCreateWithoutExamquestionsInput;
  connectOrCreate?: ExamCreateOrConnectWithoutExamquestionsInput;
  upsert?: ExamUpsertWithoutExamquestionsInput;
  connect?: ExamWhereUniqueInput;
  update?: ExamUncheckedUpdateWithoutExamquestionsInput;
}

export interface ExamCreateNestedOneWithoutExamAnswersInput {
  create?: ExamUncheckedCreateWithoutExamAnswersInput;
  connectOrCreate?: ExamCreateOrConnectWithoutExamAnswersInput;
  connect?: ExamWhereUniqueInput;
}

export interface ExamSessionCreateNestedOneWithoutExamAnswersInput {
  create?: ExamSessionUncheckedCreateWithoutExamAnswersInput;
  connectOrCreate?: ExamSessionCreateOrConnectWithoutExamAnswersInput;
  connect?: ExamSessionWhereUniqueInput;
}

export interface ExamUpdateOneRequiredWithoutExamAnswersInput {
  create?: ExamUncheckedCreateWithoutExamAnswersInput;
  connectOrCreate?: ExamCreateOrConnectWithoutExamAnswersInput;
  upsert?: ExamUpsertWithoutExamAnswersInput;
  connect?: ExamWhereUniqueInput;
  update?: ExamUncheckedUpdateWithoutExamAnswersInput;
}

export interface ExamSessionUpdateOneWithoutExamAnswersInput {
  create?: ExamSessionUncheckedCreateWithoutExamAnswersInput;
  connectOrCreate?: ExamSessionCreateOrConnectWithoutExamAnswersInput;
  upsert?: ExamSessionUpsertWithoutExamAnswersInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: ExamSessionWhereUniqueInput;
  update?: ExamSessionUncheckedUpdateWithoutExamAnswersInput;
}

export interface QuestionCreateanswersInput {
  set: string;
}

export interface UserCreateNestedOneWithoutQuestionsInput {
  create?: UserUncheckedCreateWithoutQuestionsInput;
  connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;
  connect?: UserWhereUniqueInput;
}

export interface QuestionCreateNestedOneWithoutChildrensInput {
  create?: QuestionUncheckedCreateWithoutChildrensInput;
  connectOrCreate?: QuestionCreateOrConnectWithoutChildrensInput;
  connect?: QuestionWhereUniqueInput;
}

export interface QuestionCreateNestedManyWithoutOriginalQuestionInput {
  create?: QuestionCreateWithoutOriginalQuestionInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutOriginalQuestionInput[];
  createMany?: QuestionCreateManyOriginalQuestionInputEnvelope;
  connect?: QuestionWhereUniqueInput[];
}

export interface ExamQuestionCreateNestedManyWithoutQuestionInput {
  create?: ExamQuestionCreateWithoutQuestionInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionInput[];
  createMany?: ExamQuestionCreateManyQuestionInputEnvelope;
  connect?: ExamQuestionWhereUniqueInput[];
}

export interface QuestionUncheckedCreateNestedManyWithoutOriginalQuestionInput {
  create?: QuestionCreateWithoutOriginalQuestionInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutOriginalQuestionInput[];
  createMany?: QuestionCreateManyOriginalQuestionInputEnvelope;
  connect?: QuestionWhereUniqueInput[];
}

export interface ExamQuestionUncheckedCreateNestedManyWithoutQuestionInput {
  create?: ExamQuestionCreateWithoutQuestionInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionInput[];
  createMany?: ExamQuestionCreateManyQuestionInputEnvelope;
  connect?: ExamQuestionWhereUniqueInput[];
}

export interface EnumQuestionTypeFieldUpdateOperationsInput {
  set?: QuestionType;
}

export interface QuestionUpdateanswersInput {
  set?: string[];
  push?: string[];
}

export interface UserUpdateOneRequiredWithoutQuestionsInput {
  create?: UserUncheckedCreateWithoutQuestionsInput;
  connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;
  upsert?: UserUpsertWithoutQuestionsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutQuestionsInput;
}

export interface QuestionUpdateOneWithoutChildrensInput {
  create?: QuestionUncheckedCreateWithoutChildrensInput;
  connectOrCreate?: QuestionCreateOrConnectWithoutChildrensInput;
  upsert?: QuestionUpsertWithoutChildrensInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: QuestionWhereUniqueInput;
  update?: QuestionUncheckedUpdateWithoutChildrensInput;
}

export interface QuestionUpdateManyWithoutOriginalQuestionInput {
  create?: QuestionCreateWithoutOriginalQuestionInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutOriginalQuestionInput[];
  upsert?: QuestionUpsertWithWhereUniqueWithoutOriginalQuestionInput[];
  createMany?: QuestionCreateManyOriginalQuestionInputEnvelope;
  set?: QuestionWhereUniqueInput[];
  disconnect?: QuestionWhereUniqueInput[];
  delete?: QuestionWhereUniqueInput[];
  connect?: QuestionWhereUniqueInput[];
  update?: QuestionUpdateWithWhereUniqueWithoutOriginalQuestionInput[];
  updateMany?: QuestionUpdateManyWithWhereWithoutOriginalQuestionInput[];
  deleteMany?: QuestionScalarWhereInput[];
}

export interface ExamQuestionUpdateManyWithoutQuestionInput {
  create?: ExamQuestionCreateWithoutQuestionInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionInput[];
  upsert?: ExamQuestionUpsertWithWhereUniqueWithoutQuestionInput[];
  createMany?: ExamQuestionCreateManyQuestionInputEnvelope;
  set?: ExamQuestionWhereUniqueInput[];
  disconnect?: ExamQuestionWhereUniqueInput[];
  delete?: ExamQuestionWhereUniqueInput[];
  connect?: ExamQuestionWhereUniqueInput[];
  update?: ExamQuestionUpdateWithWhereUniqueWithoutQuestionInput[];
  updateMany?: ExamQuestionUpdateManyWithWhereWithoutQuestionInput[];
  deleteMany?: ExamQuestionScalarWhereInput[];
}

export interface QuestionUncheckedUpdateManyWithoutOriginalQuestionInput {
  create?: QuestionCreateWithoutOriginalQuestionInput[];
  connectOrCreate?: QuestionCreateOrConnectWithoutOriginalQuestionInput[];
  upsert?: QuestionUpsertWithWhereUniqueWithoutOriginalQuestionInput[];
  createMany?: QuestionCreateManyOriginalQuestionInputEnvelope;
  set?: QuestionWhereUniqueInput[];
  disconnect?: QuestionWhereUniqueInput[];
  delete?: QuestionWhereUniqueInput[];
  connect?: QuestionWhereUniqueInput[];
  update?: QuestionUpdateWithWhereUniqueWithoutOriginalQuestionInput[];
  updateMany?: QuestionUpdateManyWithWhereWithoutOriginalQuestionInput[];
  deleteMany?: QuestionScalarWhereInput[];
}

export interface ExamQuestionUncheckedUpdateManyWithoutQuestionInput {
  create?: ExamQuestionCreateWithoutQuestionInput[];
  connectOrCreate?: ExamQuestionCreateOrConnectWithoutQuestionInput[];
  upsert?: ExamQuestionUpsertWithWhereUniqueWithoutQuestionInput[];
  createMany?: ExamQuestionCreateManyQuestionInputEnvelope;
  set?: ExamQuestionWhereUniqueInput[];
  disconnect?: ExamQuestionWhereUniqueInput[];
  delete?: ExamQuestionWhereUniqueInput[];
  connect?: ExamQuestionWhereUniqueInput[];
  update?: ExamQuestionUpdateWithWhereUniqueWithoutQuestionInput[];
  updateMany?: ExamQuestionUpdateManyWithWhereWithoutQuestionInput[];
  deleteMany?: ExamQuestionScalarWhereInput[];
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedDateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedEnumIdentityFileTypeFilter {
  equals?: IdentityFileType;
  in?: IdentityFileType[];
  notIn?: IdentityFileType[];
  not?: NestedEnumIdentityFileTypeFilter;
}

export interface NestedEnumIdentityFileTypeWithAggregatesFilter {
  equals?: IdentityFileType;
  in?: IdentityFileType[];
  notIn?: IdentityFileType[];
  not?: NestedEnumIdentityFileTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumIdentityFileTypeFilter;
  _max?: NestedEnumIdentityFileTypeFilter;
}

export interface NestedIntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _avg?: NestedFloatNullableFilter;
  _sum?: NestedIntNullableFilter;
  _min?: NestedIntNullableFilter;
  _max?: NestedIntNullableFilter;
}

export interface NestedFloatNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatNullableFilter;
}

export interface NestedDateTimeNullableFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeNullableFilter;
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface NestedStringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter;
}

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedEnumRolesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedEnumVerifyTypeFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface NestedEnumRolesWithAggregatesFilter {
  equals?: Roles;
  in?: Roles[];
  notIn?: Roles[];
  not?: NestedEnumRolesWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumRolesFilter;
  _max?: NestedEnumRolesFilter;
}

export interface NestedFloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface NestedEnumVerifyTypeWithAggregatesFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumVerifyTypeFilter;
  _max?: NestedEnumVerifyTypeFilter;
}

export interface NestedEnumContentTypeFilter {
  equals?: ContentType;
  in?: ContentType[];
  notIn?: ContentType[];
  not?: NestedEnumContentTypeFilter;
}

export interface NestedEnumContentTypeWithAggregatesFilter {
  equals?: ContentType;
  in?: ContentType[];
  notIn?: ContentType[];
  not?: NestedEnumContentTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumContentTypeFilter;
  _max?: NestedEnumContentTypeFilter;
}

export interface NestedEnumQuestionTypeFilter {
  equals?: QuestionType;
  in?: QuestionType[];
  notIn?: QuestionType[];
  not?: NestedEnumQuestionTypeFilter;
}

export interface NestedEnumQuestionTypeWithAggregatesFilter {
  equals?: QuestionType;
  in?: QuestionType[];
  notIn?: QuestionType[];
  not?: NestedEnumQuestionTypeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumQuestionTypeFilter;
  _max?: NestedEnumQuestionTypeFilter;
}

export interface RegencyCreateWithoutProvinceInput {
  id?: string;
  name: string;
  users?: UserCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  users?: UserUncheckedCreateNestedManyWithoutRegencyInput;
}

export interface RegencyCreateOrConnectWithoutProvinceInput {
  where: RegencyWhereUniqueInput;
  create: RegencyUncheckedCreateWithoutProvinceInput;
}

export interface RegencyCreateManyProvinceInputEnvelope {
  data: RegencyCreateManyProvinceInput;
  skipDuplicates?: boolean;
}

export interface UserCreateWithoutProvinceInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutProvinceInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutProvinceInput;
}

export interface UserCreateManyProvinceInputEnvelope {
  data: UserCreateManyProvinceInput;
  skipDuplicates?: boolean;
}

export interface RegencyUpsertWithWhereUniqueWithoutProvinceInput {
  where: RegencyWhereUniqueInput;
  update: RegencyUncheckedUpdateWithoutProvinceInput;
  create: RegencyUncheckedCreateWithoutProvinceInput;
}

export interface RegencyUpdateWithWhereUniqueWithoutProvinceInput {
  where: RegencyWhereUniqueInput;
  data: RegencyUncheckedUpdateWithoutProvinceInput;
}

export interface RegencyUpdateManyWithWhereWithoutProvinceInput {
  where: RegencyScalarWhereInput;
  data: RegencyUncheckedUpdateManyWithoutRegenciesInput;
}

export interface RegencyScalarWhereInput {
  AND?: RegencyScalarWhereInput[];
  OR?: RegencyScalarWhereInput[];
  NOT?: RegencyScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  provinceId?: StringFilter;
}

export interface UserUpsertWithWhereUniqueWithoutProvinceInput {
  where: UserWhereUniqueInput;
  update: UserUncheckedUpdateWithoutProvinceInput;
  create: UserUncheckedCreateWithoutProvinceInput;
}

export interface UserUpdateWithWhereUniqueWithoutProvinceInput {
  where: UserWhereUniqueInput;
  data: UserUncheckedUpdateWithoutProvinceInput;
}

export interface UserUpdateManyWithWhereWithoutProvinceInput {
  where: UserScalarWhereInput;
  data: UserUncheckedUpdateManyWithoutUsersInput;
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[];
  OR?: UserScalarWhereInput[];
  NOT?: UserScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  email?: StringFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  profilePicturePath?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  nisn?: StringNullableFilter;
  nrg?: StringNullableFilter;
  provinceId?: StringFilter;
  regencyId?: StringFilter;
  isAdmin?: BoolFilter;
  role?: EnumRolesFilter;
  balance?: FloatFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  phoneNumberVerifiedAt?: DateTimeNullableFilter;
  identityNumberVerifiedAt?: DateTimeNullableFilter;
  verifykey?: StringNullableFilter;
  verifyType?: EnumVerifyTypeFilter;
}

export interface ProvinceCreateWithoutRegenciesInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutRegenciesInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutRegenciesInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutRegenciesInput;
}

export interface UserCreateWithoutRegencyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutRegencyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutRegencyInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutRegencyInput;
}

export interface UserCreateManyRegencyInputEnvelope {
  data: UserCreateManyRegencyInput;
  skipDuplicates?: boolean;
}

export interface ProvinceUpsertWithoutRegenciesInput {
  update: ProvinceUncheckedUpdateWithoutRegenciesInput;
  create: ProvinceUncheckedCreateWithoutRegenciesInput;
}

export interface ProvinceUpdateWithoutRegenciesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutRegenciesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
}

export interface UserUpsertWithWhereUniqueWithoutRegencyInput {
  where: UserWhereUniqueInput;
  update: UserUncheckedUpdateWithoutRegencyInput;
  create: UserUncheckedCreateWithoutRegencyInput;
}

export interface UserUpdateWithWhereUniqueWithoutRegencyInput {
  where: UserWhereUniqueInput;
  data: UserUncheckedUpdateWithoutRegencyInput;
}

export interface UserUpdateManyWithWhereWithoutRegencyInput {
  where: UserScalarWhereInput;
  data: UserUncheckedUpdateManyWithoutUsersInput;
}

export interface UserCreateWithoutIdentityFilesInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutIdentityFilesInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutIdentityFilesInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutIdentityFilesInput;
}

export interface UserUpsertWithoutIdentityFilesInput {
  update: UserUncheckedUpdateWithoutIdentityFilesInput;
  create: UserUncheckedCreateWithoutIdentityFilesInput;
}

export interface UserUpdateWithoutIdentityFilesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutIdentityFilesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface UserCreateWithoutMyTokensInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutMyTokensInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutMyTokensInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutMyTokensInput;
}

export interface TokenClaimCreateWithoutTokenInput {
  id?: string;
  claimer: UserCreateNestedOneWithoutTokenClaimsInput;
  expiredAt?: undefined;
}

export interface TokenClaimUncheckedCreateWithoutTokenInput {
  id?: string;
  userId: string;
  expiredAt?: undefined;
}

export interface TokenClaimCreateOrConnectWithoutTokenInput {
  where: TokenClaimWhereUniqueInput;
  create: TokenClaimUncheckedCreateWithoutTokenInput;
}

export interface TokenClaimCreateManyTokenInputEnvelope {
  data: TokenClaimCreateManyTokenInput;
  skipDuplicates?: boolean;
}

export interface UserUpsertWithoutMyTokensInput {
  update: UserUncheckedUpdateWithoutMyTokensInput;
  create: UserUncheckedCreateWithoutMyTokensInput;
}

export interface UserUpdateWithoutMyTokensInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutMyTokensInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface TokenClaimUpsertWithWhereUniqueWithoutTokenInput {
  where: TokenClaimWhereUniqueInput;
  update: TokenClaimUncheckedUpdateWithoutTokenInput;
  create: TokenClaimUncheckedCreateWithoutTokenInput;
}

export interface TokenClaimUpdateWithWhereUniqueWithoutTokenInput {
  where: TokenClaimWhereUniqueInput;
  data: TokenClaimUncheckedUpdateWithoutTokenInput;
}

export interface TokenClaimUpdateManyWithWhereWithoutTokenInput {
  where: TokenClaimScalarWhereInput;
  data: TokenClaimUncheckedUpdateManyWithoutTokenClaimsInput;
}

export interface TokenClaimScalarWhereInput {
  AND?: TokenClaimScalarWhereInput[];
  OR?: TokenClaimScalarWhereInput[];
  NOT?: TokenClaimScalarWhereInput[];
  id?: StringFilter;
  tokenId?: StringFilter;
  userId?: StringFilter;
  expiredAt?: DateTimeNullableFilter;
}

export interface TokenCreateWithoutTokenClaimsInput {
  id?: string;
  token: string;
  owner: UserCreateNestedOneWithoutMyTokensInput;
  maxClaim?: number;
}

export interface TokenUncheckedCreateWithoutTokenClaimsInput {
  id?: string;
  token: string;
  userId: string;
  maxClaim?: number;
}

export interface TokenCreateOrConnectWithoutTokenClaimsInput {
  where: TokenWhereUniqueInput;
  create: TokenUncheckedCreateWithoutTokenClaimsInput;
}

export interface UserCreateWithoutTokenClaimsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
}

export interface UserUncheckedCreateWithoutTokenClaimsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
}

export interface UserCreateOrConnectWithoutTokenClaimsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutTokenClaimsInput;
}

export interface TokenUpsertWithoutTokenClaimsInput {
  update: TokenUncheckedUpdateWithoutTokenClaimsInput;
  create: TokenUncheckedCreateWithoutTokenClaimsInput;
}

export interface TokenUpdateWithoutTokenClaimsInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  owner?: UserUpdateOneRequiredWithoutMyTokensInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenUncheckedUpdateWithoutTokenClaimsInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface UserUpsertWithoutTokenClaimsInput {
  update: UserUncheckedUpdateWithoutTokenClaimsInput;
  create: UserUncheckedCreateWithoutTokenClaimsInput;
}

export interface UserUpdateWithoutTokenClaimsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
}

export interface UserUncheckedUpdateWithoutTokenClaimsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
}

export interface ProvinceCreateWithoutUsersInput {
  id?: string;
  name: string;
  regencies?: RegencyCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ProvinceUncheckedCreateWithoutUsersInput {
  id?: string;
  name: string;
  regencies?: RegencyUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ProvinceCreateOrConnectWithoutUsersInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutUsersInput;
}

export interface RegencyCreateWithoutUsersInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutRegenciesInput;
}

export interface RegencyUncheckedCreateWithoutUsersInput {
  id?: string;
  name: string;
  provinceId: string;
}

export interface RegencyCreateOrConnectWithoutUsersInput {
  where: RegencyWhereUniqueInput;
  create: RegencyUncheckedCreateWithoutUsersInput;
}

export interface IdentityFileCreateWithoutUserInput {
  id?: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
}

export interface IdentityFileUncheckedCreateWithoutUserInput {
  id?: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
}

export interface IdentityFileCreateOrConnectWithoutUserInput {
  where: IdentityFileWhereUniqueInput;
  create: IdentityFileUncheckedCreateWithoutUserInput;
}

export interface IdentityFileCreateManyUserInputEnvelope {
  data: IdentityFileCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface QuestionCreateWithoutUserInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  originalQuestion?: QuestionCreateNestedOneWithoutChildrensInput;
  childrens?: QuestionCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutQuestionInput;
}

export interface QuestionUncheckedCreateWithoutUserInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  originalQuestionId?: string;
  childrens?: QuestionUncheckedCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutQuestionInput;
}

export interface QuestionCreateOrConnectWithoutUserInput {
  where: QuestionWhereUniqueInput;
  create: QuestionUncheckedCreateWithoutUserInput;
}

export interface QuestionCreateManyUserInputEnvelope {
  data: QuestionCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface ExamCreateWithoutUserInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutExamInput;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamInput;
}

export interface ExamUncheckedCreateWithoutUserInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput;
  examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamInput;
}

export interface ExamCreateOrConnectWithoutUserInput {
  where: ExamWhereUniqueInput;
  create: ExamUncheckedCreateWithoutUserInput;
}

export interface ExamCreateManyUserInputEnvelope {
  data: ExamCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface ExamSessionCreateWithoutUserInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedCreateWithoutUserInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionCreateOrConnectWithoutUserInput {
  where: ExamSessionWhereUniqueInput;
  create: ExamSessionUncheckedCreateWithoutUserInput;
}

export interface ExamSessionCreateManyUserInputEnvelope {
  data: ExamSessionCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface PrivateChatCreateWithoutToInput {
  id?: string;
  from: UserCreateNestedOneWithoutMyPrivateChatsInput;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatUncheckedCreateWithoutToInput {
  id?: string;
  fromId: string;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatCreateOrConnectWithoutToInput {
  where: PrivateChatWhereUniqueInput;
  create: PrivateChatUncheckedCreateWithoutToInput;
}

export interface PrivateChatCreateManyToInputEnvelope {
  data: PrivateChatCreateManyToInput;
  skipDuplicates?: boolean;
}

export interface PrivateChatCreateWithoutFromInput {
  id?: string;
  to: UserCreateNestedOneWithoutPrivateChatsInput;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatUncheckedCreateWithoutFromInput {
  id?: string;
  toId: string;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatCreateOrConnectWithoutFromInput {
  where: PrivateChatWhereUniqueInput;
  create: PrivateChatUncheckedCreateWithoutFromInput;
}

export interface PrivateChatCreateManyFromInputEnvelope {
  data: PrivateChatCreateManyFromInput;
  skipDuplicates?: boolean;
}

export interface NotificationCreateWithoutUserInput {
  id?: string;
  picturePath?: string;
  title: string;
  message: string;
  isRead?: boolean;
  followUpContext?: string;
  followUpData?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NotificationUncheckedCreateWithoutUserInput {
  id?: string;
  picturePath?: string;
  title: string;
  message: string;
  isRead?: boolean;
  followUpContext?: string;
  followUpData?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NotificationCreateOrConnectWithoutUserInput {
  where: NotificationWhereUniqueInput;
  create: NotificationUncheckedCreateWithoutUserInput;
}

export interface NotificationCreateManyUserInputEnvelope {
  data: NotificationCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface TokenCreateWithoutOwnerInput {
  id?: string;
  token: string;
  tokenClaims?: TokenClaimCreateNestedManyWithoutTokenInput;
  maxClaim?: number;
}

export interface TokenUncheckedCreateWithoutOwnerInput {
  id?: string;
  token: string;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutTokenInput;
  maxClaim?: number;
}

export interface TokenCreateOrConnectWithoutOwnerInput {
  where: TokenWhereUniqueInput;
  create: TokenUncheckedCreateWithoutOwnerInput;
}

export interface TokenCreateManyOwnerInputEnvelope {
  data: TokenCreateManyOwnerInput;
  skipDuplicates?: boolean;
}

export interface TokenClaimCreateWithoutClaimerInput {
  id?: string;
  token: TokenCreateNestedOneWithoutTokenClaimsInput;
  expiredAt?: undefined;
}

export interface TokenClaimUncheckedCreateWithoutClaimerInput {
  id?: string;
  tokenId: string;
  expiredAt?: undefined;
}

export interface TokenClaimCreateOrConnectWithoutClaimerInput {
  where: TokenClaimWhereUniqueInput;
  create: TokenClaimUncheckedCreateWithoutClaimerInput;
}

export interface TokenClaimCreateManyClaimerInputEnvelope {
  data: TokenClaimCreateManyClaimerInput;
  skipDuplicates?: boolean;
}

export interface ProvinceUpsertWithoutUsersInput {
  update: ProvinceUncheckedUpdateWithoutUsersInput;
  create: ProvinceUncheckedCreateWithoutUsersInput;
}

export interface ProvinceUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ProvinceUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface RegencyUpsertWithoutUsersInput {
  update: RegencyUncheckedUpdateWithoutUsersInput;
  create: RegencyUncheckedCreateWithoutUsersInput;
}

export interface RegencyUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutRegenciesInput;
}

export interface RegencyUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
}

export interface IdentityFileUpsertWithWhereUniqueWithoutUserInput {
  where: IdentityFileWhereUniqueInput;
  update: IdentityFileUncheckedUpdateWithoutUserInput;
  create: IdentityFileUncheckedCreateWithoutUserInput;
}

export interface IdentityFileUpdateWithWhereUniqueWithoutUserInput {
  where: IdentityFileWhereUniqueInput;
  data: IdentityFileUncheckedUpdateWithoutUserInput;
}

export interface IdentityFileUpdateManyWithWhereWithoutUserInput {
  where: IdentityFileScalarWhereInput;
  data: IdentityFileUncheckedUpdateManyWithoutIdentityFilesInput;
}

export interface IdentityFileScalarWhereInput {
  AND?: IdentityFileScalarWhereInput[];
  OR?: IdentityFileScalarWhereInput[];
  NOT?: IdentityFileScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  url?: StringFilter;
  type?: EnumIdentityFileTypeFilter;
  number?: StringFilter;
  userId?: StringFilter;
}

export interface QuestionUpsertWithWhereUniqueWithoutUserInput {
  where: QuestionWhereUniqueInput;
  update: QuestionUncheckedUpdateWithoutUserInput;
  create: QuestionUncheckedCreateWithoutUserInput;
}

export interface QuestionUpdateWithWhereUniqueWithoutUserInput {
  where: QuestionWhereUniqueInput;
  data: QuestionUncheckedUpdateWithoutUserInput;
}

export interface QuestionUpdateManyWithWhereWithoutUserInput {
  where: QuestionScalarWhereInput;
  data: QuestionUncheckedUpdateManyWithoutQuestionsInput;
}

export interface QuestionScalarWhereInput {
  AND?: QuestionScalarWhereInput[];
  OR?: QuestionScalarWhereInput[];
  NOT?: QuestionScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  type?: EnumQuestionTypeFilter;
  contentType?: EnumContentTypeFilter;
  content?: StringFilter;
  answerType?: EnumContentTypeFilter;
  answers?: StringNullableListFilter;
  userId?: StringFilter;
  originalQuestionId?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ExamUpsertWithWhereUniqueWithoutUserInput {
  where: ExamWhereUniqueInput;
  update: ExamUncheckedUpdateWithoutUserInput;
  create: ExamUncheckedCreateWithoutUserInput;
}

export interface ExamUpdateWithWhereUniqueWithoutUserInput {
  where: ExamWhereUniqueInput;
  data: ExamUncheckedUpdateWithoutUserInput;
}

export interface ExamUpdateManyWithWhereWithoutUserInput {
  where: ExamScalarWhereInput;
  data: ExamUncheckedUpdateManyWithoutExaminationsInput;
}

export interface ExamScalarWhereInput {
  AND?: ExamScalarWhereInput[];
  OR?: ExamScalarWhereInput[];
  NOT?: ExamScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  userId?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ExamSessionUpsertWithWhereUniqueWithoutUserInput {
  where: ExamSessionWhereUniqueInput;
  update: ExamSessionUncheckedUpdateWithoutUserInput;
  create: ExamSessionUncheckedCreateWithoutUserInput;
}

export interface ExamSessionUpdateWithWhereUniqueWithoutUserInput {
  where: ExamSessionWhereUniqueInput;
  data: ExamSessionUncheckedUpdateWithoutUserInput;
}

export interface ExamSessionUpdateManyWithWhereWithoutUserInput {
  where: ExamSessionScalarWhereInput;
  data: ExamSessionUncheckedUpdateManyWithoutExamsessionsInput;
}

export interface ExamSessionScalarWhereInput {
  AND?: ExamSessionScalarWhereInput[];
  OR?: ExamSessionScalarWhereInput[];
  NOT?: ExamSessionScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  openAt?: DateTimeNullableFilter;
  closeAt?: DateTimeNullableFilter;
  maxPlayer?: IntNullableFilter;
  userId?: StringFilter;
}

export interface PrivateChatUpsertWithWhereUniqueWithoutToInput {
  where: PrivateChatWhereUniqueInput;
  update: PrivateChatUncheckedUpdateWithoutToInput;
  create: PrivateChatUncheckedCreateWithoutToInput;
}

export interface PrivateChatUpdateWithWhereUniqueWithoutToInput {
  where: PrivateChatWhereUniqueInput;
  data: PrivateChatUncheckedUpdateWithoutToInput;
}

export interface PrivateChatUpdateManyWithWhereWithoutToInput {
  where: PrivateChatScalarWhereInput;
  data: PrivateChatUncheckedUpdateManyWithoutPrivateChatsInput;
}

export interface PrivateChatScalarWhereInput {
  AND?: PrivateChatScalarWhereInput[];
  OR?: PrivateChatScalarWhereInput[];
  NOT?: PrivateChatScalarWhereInput[];
  id?: StringFilter;
  fromId?: StringFilter;
  toId?: StringFilter;
  contentType?: EnumContentTypeFilter;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface PrivateChatUpsertWithWhereUniqueWithoutFromInput {
  where: PrivateChatWhereUniqueInput;
  update: PrivateChatUncheckedUpdateWithoutFromInput;
  create: PrivateChatUncheckedCreateWithoutFromInput;
}

export interface PrivateChatUpdateWithWhereUniqueWithoutFromInput {
  where: PrivateChatWhereUniqueInput;
  data: PrivateChatUncheckedUpdateWithoutFromInput;
}

export interface PrivateChatUpdateManyWithWhereWithoutFromInput {
  where: PrivateChatScalarWhereInput;
  data: PrivateChatUncheckedUpdateManyWithoutMyPrivateChatsInput;
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput;
  update: NotificationUncheckedUpdateWithoutUserInput;
  create: NotificationUncheckedCreateWithoutUserInput;
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput;
  data: NotificationUncheckedUpdateWithoutUserInput;
}

export interface NotificationUpdateManyWithWhereWithoutUserInput {
  where: NotificationScalarWhereInput;
  data: NotificationUncheckedUpdateManyWithoutNotificationsInput;
}

export interface NotificationScalarWhereInput {
  AND?: NotificationScalarWhereInput[];
  OR?: NotificationScalarWhereInput[];
  NOT?: NotificationScalarWhereInput[];
  id?: StringFilter;
  picturePath?: StringNullableFilter;
  title?: StringFilter;
  message?: StringFilter;
  isRead?: BoolFilter;
  followUpContext?: StringNullableFilter;
  followUpData?: StringNullableFilter;
  userId?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface TokenUpsertWithWhereUniqueWithoutOwnerInput {
  where: TokenWhereUniqueInput;
  update: TokenUncheckedUpdateWithoutOwnerInput;
  create: TokenUncheckedCreateWithoutOwnerInput;
}

export interface TokenUpdateWithWhereUniqueWithoutOwnerInput {
  where: TokenWhereUniqueInput;
  data: TokenUncheckedUpdateWithoutOwnerInput;
}

export interface TokenUpdateManyWithWhereWithoutOwnerInput {
  where: TokenScalarWhereInput;
  data: TokenUncheckedUpdateManyWithoutMyTokensInput;
}

export interface TokenScalarWhereInput {
  AND?: TokenScalarWhereInput[];
  OR?: TokenScalarWhereInput[];
  NOT?: TokenScalarWhereInput[];
  id?: StringFilter;
  token?: StringFilter;
  userId?: StringFilter;
  maxClaim?: IntNullableFilter;
}

export interface TokenClaimUpsertWithWhereUniqueWithoutClaimerInput {
  where: TokenClaimWhereUniqueInput;
  update: TokenClaimUncheckedUpdateWithoutClaimerInput;
  create: TokenClaimUncheckedCreateWithoutClaimerInput;
}

export interface TokenClaimUpdateWithWhereUniqueWithoutClaimerInput {
  where: TokenClaimWhereUniqueInput;
  data: TokenClaimUncheckedUpdateWithoutClaimerInput;
}

export interface TokenClaimUpdateManyWithWhereWithoutClaimerInput {
  where: TokenClaimScalarWhereInput;
  data: TokenClaimUncheckedUpdateManyWithoutTokenClaimsInput;
}

export interface UserCreateWithoutNotificationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutNotificationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutNotificationsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutNotificationsInput;
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUncheckedUpdateWithoutNotificationsInput;
  create: UserUncheckedCreateWithoutNotificationsInput;
}

export interface UserUpdateWithoutNotificationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutNotificationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface UserCreateWithoutMyPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutMyPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutMyPrivateChatsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutMyPrivateChatsInput;
}

export interface UserCreateWithoutPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutPrivateChatsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutPrivateChatsInput;
}

export interface UserUpsertWithoutMyPrivateChatsInput {
  update: UserUncheckedUpdateWithoutMyPrivateChatsInput;
  create: UserUncheckedCreateWithoutMyPrivateChatsInput;
}

export interface UserUpdateWithoutMyPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutMyPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface UserUpsertWithoutPrivateChatsInput {
  update: UserUncheckedUpdateWithoutPrivateChatsInput;
  create: UserUncheckedCreateWithoutPrivateChatsInput;
}

export interface UserUpdateWithoutPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface UserCreateWithoutExaminationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutExaminationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutExaminationsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutExaminationsInput;
}

export interface ExamQuestionCreateWithoutExamInput {
  id?: string;
  question: QuestionCreateNestedOneWithoutExamquestionsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionUncheckedCreateWithoutExamInput {
  id?: string;
  questionId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionCreateOrConnectWithoutExamInput {
  where: ExamQuestionWhereUniqueInput;
  create: ExamQuestionUncheckedCreateWithoutExamInput;
}

export interface ExamQuestionCreateManyExamInputEnvelope {
  data: ExamQuestionCreateManyExamInput;
  skipDuplicates?: boolean;
}

export interface ExamAnswerCreateWithoutExamInput {
  id?: string;
  grade?: number;
  finishCalculation?: boolean;
  examSession?: ExamSessionCreateNestedOneWithoutExamAnswersInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerUncheckedCreateWithoutExamInput {
  id?: string;
  grade?: number;
  finishCalculation?: boolean;
  examSessionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerCreateOrConnectWithoutExamInput {
  where: ExamAnswerWhereUniqueInput;
  create: ExamAnswerUncheckedCreateWithoutExamInput;
}

export interface ExamAnswerCreateManyExamInputEnvelope {
  data: ExamAnswerCreateManyExamInput;
  skipDuplicates?: boolean;
}

export interface UserUpsertWithoutExaminationsInput {
  update: UserUncheckedUpdateWithoutExaminationsInput;
  create: UserUncheckedCreateWithoutExaminationsInput;
}

export interface UserUpdateWithoutExaminationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutExaminationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface ExamQuestionUpsertWithWhereUniqueWithoutExamInput {
  where: ExamQuestionWhereUniqueInput;
  update: ExamQuestionUncheckedUpdateWithoutExamInput;
  create: ExamQuestionUncheckedCreateWithoutExamInput;
}

export interface ExamQuestionUpdateWithWhereUniqueWithoutExamInput {
  where: ExamQuestionWhereUniqueInput;
  data: ExamQuestionUncheckedUpdateWithoutExamInput;
}

export interface ExamQuestionUpdateManyWithWhereWithoutExamInput {
  where: ExamQuestionScalarWhereInput;
  data: ExamQuestionUncheckedUpdateManyWithoutExamquestionsInput;
}

export interface ExamQuestionScalarWhereInput {
  AND?: ExamQuestionScalarWhereInput[];
  OR?: ExamQuestionScalarWhereInput[];
  NOT?: ExamQuestionScalarWhereInput[];
  id?: StringFilter;
  questionId?: StringFilter;
  examId?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ExamAnswerUpsertWithWhereUniqueWithoutExamInput {
  where: ExamAnswerWhereUniqueInput;
  update: ExamAnswerUncheckedUpdateWithoutExamInput;
  create: ExamAnswerUncheckedCreateWithoutExamInput;
}

export interface ExamAnswerUpdateWithWhereUniqueWithoutExamInput {
  where: ExamAnswerWhereUniqueInput;
  data: ExamAnswerUncheckedUpdateWithoutExamInput;
}

export interface ExamAnswerUpdateManyWithWhereWithoutExamInput {
  where: ExamAnswerScalarWhereInput;
  data: ExamAnswerUncheckedUpdateManyWithoutExamAnswersInput;
}

export interface ExamAnswerScalarWhereInput {
  AND?: ExamAnswerScalarWhereInput[];
  OR?: ExamAnswerScalarWhereInput[];
  NOT?: ExamAnswerScalarWhereInput[];
  id?: StringFilter;
  examId?: StringFilter;
  grade?: FloatFilter;
  finishCalculation?: BoolFilter;
  examSessionId?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface UserCreateWithoutExamsessionsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutExamsessionsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutExamsessionsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutExamsessionsInput;
}

export interface ExamAnswerCreateWithoutExamSessionInput {
  id?: string;
  exam: ExamCreateNestedOneWithoutExamAnswersInput;
  grade?: number;
  finishCalculation?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerUncheckedCreateWithoutExamSessionInput {
  id?: string;
  examId: string;
  grade?: number;
  finishCalculation?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerCreateOrConnectWithoutExamSessionInput {
  where: ExamAnswerWhereUniqueInput;
  create: ExamAnswerUncheckedCreateWithoutExamSessionInput;
}

export interface ExamAnswerCreateManyExamSessionInputEnvelope {
  data: ExamAnswerCreateManyExamSessionInput;
  skipDuplicates?: boolean;
}

export interface UserUpsertWithoutExamsessionsInput {
  update: UserUncheckedUpdateWithoutExamsessionsInput;
  create: UserUncheckedCreateWithoutExamsessionsInput;
}

export interface UserUpdateWithoutExamsessionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutExamsessionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface ExamAnswerUpsertWithWhereUniqueWithoutExamSessionInput {
  where: ExamAnswerWhereUniqueInput;
  update: ExamAnswerUncheckedUpdateWithoutExamSessionInput;
  create: ExamAnswerUncheckedCreateWithoutExamSessionInput;
}

export interface ExamAnswerUpdateWithWhereUniqueWithoutExamSessionInput {
  where: ExamAnswerWhereUniqueInput;
  data: ExamAnswerUncheckedUpdateWithoutExamSessionInput;
}

export interface ExamAnswerUpdateManyWithWhereWithoutExamSessionInput {
  where: ExamAnswerScalarWhereInput;
  data: ExamAnswerUncheckedUpdateManyWithoutExamAnswersInput;
}

export interface QuestionCreateWithoutExamquestionsInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  user: UserCreateNestedOneWithoutQuestionsInput;
  originalQuestion?: QuestionCreateNestedOneWithoutChildrensInput;
  childrens?: QuestionCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface QuestionUncheckedCreateWithoutExamquestionsInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  userId: string;
  originalQuestionId?: string;
  childrens?: QuestionUncheckedCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface QuestionCreateOrConnectWithoutExamquestionsInput {
  where: QuestionWhereUniqueInput;
  create: QuestionUncheckedCreateWithoutExamquestionsInput;
}

export interface ExamCreateWithoutExamquestionsInput {
  id?: string;
  name: string;
  user: UserCreateNestedOneWithoutExaminationsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamInput;
}

export interface ExamUncheckedCreateWithoutExamquestionsInput {
  id?: string;
  name: string;
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamInput;
}

export interface ExamCreateOrConnectWithoutExamquestionsInput {
  where: ExamWhereUniqueInput;
  create: ExamUncheckedCreateWithoutExamquestionsInput;
}

export interface QuestionUpsertWithoutExamquestionsInput {
  update: QuestionUncheckedUpdateWithoutExamquestionsInput;
  create: QuestionUncheckedCreateWithoutExamquestionsInput;
}

export interface QuestionUpdateWithoutExamquestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  user?: UserUpdateOneRequiredWithoutQuestionsInput;
  originalQuestion?: QuestionUpdateOneWithoutChildrensInput;
  childrens?: QuestionUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface QuestionUncheckedUpdateWithoutExamquestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  userId?: StringFieldUpdateOperationsInput;
  originalQuestionId?: NullableStringFieldUpdateOperationsInput;
  childrens?: QuestionUncheckedUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamUpsertWithoutExamquestionsInput {
  update: ExamUncheckedUpdateWithoutExamquestionsInput;
  create: ExamUncheckedCreateWithoutExamquestionsInput;
}

export interface ExamUpdateWithoutExamquestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExaminationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamInput;
}

export interface ExamUncheckedUpdateWithoutExamquestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamInput;
}

export interface ExamCreateWithoutExamAnswersInput {
  id?: string;
  name: string;
  user: UserCreateNestedOneWithoutExaminationsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutExamInput;
}

export interface ExamUncheckedCreateWithoutExamAnswersInput {
  id?: string;
  name: string;
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput;
}

export interface ExamCreateOrConnectWithoutExamAnswersInput {
  where: ExamWhereUniqueInput;
  create: ExamUncheckedCreateWithoutExamAnswersInput;
}

export interface ExamSessionCreateWithoutExamAnswersInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  user: UserCreateNestedOneWithoutExamsessionsInput;
}

export interface ExamSessionUncheckedCreateWithoutExamAnswersInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  userId: string;
}

export interface ExamSessionCreateOrConnectWithoutExamAnswersInput {
  where: ExamSessionWhereUniqueInput;
  create: ExamSessionUncheckedCreateWithoutExamAnswersInput;
}

export interface ExamUpsertWithoutExamAnswersInput {
  update: ExamUncheckedUpdateWithoutExamAnswersInput;
  create: ExamUncheckedCreateWithoutExamAnswersInput;
}

export interface ExamUpdateWithoutExamAnswersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExaminationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutExamInput;
}

export interface ExamUncheckedUpdateWithoutExamAnswersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutExamInput;
}

export interface ExamSessionUpsertWithoutExamAnswersInput {
  update: ExamSessionUncheckedUpdateWithoutExamAnswersInput;
  create: ExamSessionUncheckedCreateWithoutExamAnswersInput;
}

export interface ExamSessionUpdateWithoutExamAnswersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExamsessionsInput;
}

export interface ExamSessionUncheckedUpdateWithoutExamAnswersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
}

export interface UserCreateWithoutQuestionsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  myTokens?: TokenCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimCreateNestedManyWithoutClaimerInput;
}

export interface UserUncheckedCreateWithoutQuestionsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  myTokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedCreateNestedManyWithoutClaimerInput;
}

export interface UserCreateOrConnectWithoutQuestionsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutQuestionsInput;
}

export interface QuestionCreateWithoutChildrensInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  user: UserCreateNestedOneWithoutQuestionsInput;
  originalQuestion?: QuestionCreateNestedOneWithoutChildrensInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutQuestionInput;
}

export interface QuestionUncheckedCreateWithoutChildrensInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  userId: string;
  originalQuestionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutQuestionInput;
}

export interface QuestionCreateOrConnectWithoutChildrensInput {
  where: QuestionWhereUniqueInput;
  create: QuestionUncheckedCreateWithoutChildrensInput;
}

export interface QuestionCreateWithoutOriginalQuestionInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  user: UserCreateNestedOneWithoutQuestionsInput;
  childrens?: QuestionCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionCreateNestedManyWithoutQuestionInput;
}

export interface QuestionUncheckedCreateWithoutOriginalQuestionInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  userId: string;
  childrens?: QuestionUncheckedCreateNestedManyWithoutOriginalQuestionInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  examquestions?: ExamQuestionUncheckedCreateNestedManyWithoutQuestionInput;
}

export interface QuestionCreateOrConnectWithoutOriginalQuestionInput {
  where: QuestionWhereUniqueInput;
  create: QuestionUncheckedCreateWithoutOriginalQuestionInput;
}

export interface QuestionCreateManyOriginalQuestionInputEnvelope {
  data: QuestionCreateManyOriginalQuestionInput;
  skipDuplicates?: boolean;
}

export interface ExamQuestionCreateWithoutQuestionInput {
  id?: string;
  exam: ExamCreateNestedOneWithoutExamquestionsInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionUncheckedCreateWithoutQuestionInput {
  id?: string;
  examId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionCreateOrConnectWithoutQuestionInput {
  where: ExamQuestionWhereUniqueInput;
  create: ExamQuestionUncheckedCreateWithoutQuestionInput;
}

export interface ExamQuestionCreateManyQuestionInputEnvelope {
  data: ExamQuestionCreateManyQuestionInput;
  skipDuplicates?: boolean;
}

export interface UserUpsertWithoutQuestionsInput {
  update: UserUncheckedUpdateWithoutQuestionsInput;
  create: UserUncheckedCreateWithoutQuestionsInput;
}

export interface UserUpdateWithoutQuestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutQuestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface QuestionUpsertWithoutChildrensInput {
  update: QuestionUncheckedUpdateWithoutChildrensInput;
  create: QuestionUncheckedCreateWithoutChildrensInput;
}

export interface QuestionUpdateWithoutChildrensInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  user?: UserUpdateOneRequiredWithoutQuestionsInput;
  originalQuestion?: QuestionUpdateOneWithoutChildrensInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutQuestionInput;
}

export interface QuestionUncheckedUpdateWithoutChildrensInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  userId?: StringFieldUpdateOperationsInput;
  originalQuestionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutQuestionInput;
}

export interface QuestionUpsertWithWhereUniqueWithoutOriginalQuestionInput {
  where: QuestionWhereUniqueInput;
  update: QuestionUncheckedUpdateWithoutOriginalQuestionInput;
  create: QuestionUncheckedCreateWithoutOriginalQuestionInput;
}

export interface QuestionUpdateWithWhereUniqueWithoutOriginalQuestionInput {
  where: QuestionWhereUniqueInput;
  data: QuestionUncheckedUpdateWithoutOriginalQuestionInput;
}

export interface QuestionUpdateManyWithWhereWithoutOriginalQuestionInput {
  where: QuestionScalarWhereInput;
  data: QuestionUncheckedUpdateManyWithoutChildrensInput;
}

export interface ExamQuestionUpsertWithWhereUniqueWithoutQuestionInput {
  where: ExamQuestionWhereUniqueInput;
  update: ExamQuestionUncheckedUpdateWithoutQuestionInput;
  create: ExamQuestionUncheckedCreateWithoutQuestionInput;
}

export interface ExamQuestionUpdateWithWhereUniqueWithoutQuestionInput {
  where: ExamQuestionWhereUniqueInput;
  data: ExamQuestionUncheckedUpdateWithoutQuestionInput;
}

export interface ExamQuestionUpdateManyWithWhereWithoutQuestionInput {
  where: ExamQuestionScalarWhereInput;
  data: ExamQuestionUncheckedUpdateManyWithoutExamquestionsInput;
}

export interface RegencyCreateManyProvinceInput {
  id?: string;
  name: string;
}

export interface UserCreateManyProvinceInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  regencyId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
}

export interface RegencyUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateManyWithoutRegenciesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface UserUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateManyWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
}

export interface UserCreateManyRegencyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  isAdmin?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  verifykey?: string;
  verifyType?: VerifyType;
}

export interface UserUpdateWithoutRegencyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  myTokens?: TokenUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUpdateManyWithoutClaimerInput;
}

export interface UserUncheckedUpdateWithoutRegencyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: NullableStringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: EnumVerifyTypeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  myTokens?: TokenUncheckedUpdateManyWithoutOwnerInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutClaimerInput;
}

export interface TokenClaimCreateManyTokenInput {
  id?: string;
  userId: string;
  expiredAt?: undefined;
}

export interface TokenClaimUpdateWithoutTokenInput {
  id?: StringFieldUpdateOperationsInput;
  claimer?: UserUpdateOneRequiredWithoutTokenClaimsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface TokenClaimUncheckedUpdateWithoutTokenInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface TokenClaimUncheckedUpdateManyWithoutTokenClaimsInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface IdentityFileCreateManyUserInput {
  id?: string;
  name: string;
  url: string;
  type: IdentityFileType;
  number: string;
}

export interface QuestionCreateManyUserInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  originalQuestionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamCreateManyUserInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamSessionCreateManyUserInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
}

export interface PrivateChatCreateManyToInput {
  id?: string;
  fromId: string;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface PrivateChatCreateManyFromInput {
  id?: string;
  toId: string;
  contentType: ContentType;
  content: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface NotificationCreateManyUserInput {
  id?: string;
  picturePath?: string;
  title: string;
  message: string;
  isRead?: boolean;
  followUpContext?: string;
  followUpData?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface TokenCreateManyOwnerInput {
  id?: string;
  token: string;
  maxClaim?: number;
}

export interface TokenClaimCreateManyClaimerInput {
  id?: string;
  tokenId: string;
  expiredAt?: undefined;
}

export interface IdentityFileUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  url?: StringFieldUpdateOperationsInput;
  type?: EnumIdentityFileTypeFieldUpdateOperationsInput;
  number?: StringFieldUpdateOperationsInput;
}

export interface IdentityFileUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  url?: StringFieldUpdateOperationsInput;
  type?: EnumIdentityFileTypeFieldUpdateOperationsInput;
  number?: StringFieldUpdateOperationsInput;
}

export interface IdentityFileUncheckedUpdateManyWithoutIdentityFilesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  url?: StringFieldUpdateOperationsInput;
  type?: EnumIdentityFileTypeFieldUpdateOperationsInput;
  number?: StringFieldUpdateOperationsInput;
}

export interface QuestionUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  originalQuestion?: QuestionUpdateOneWithoutChildrensInput;
  childrens?: QuestionUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutQuestionInput;
}

export interface QuestionUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  originalQuestionId?: NullableStringFieldUpdateOperationsInput;
  childrens?: QuestionUncheckedUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutQuestionInput;
}

export interface QuestionUncheckedUpdateManyWithoutQuestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  originalQuestionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutExamInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamInput;
}

export interface ExamUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutExamInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamInput;
}

export interface ExamUncheckedUpdateManyWithoutExaminationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamSessionUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedUpdateManyWithoutExamsessionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
}

export interface PrivateChatUpdateWithoutToInput {
  id?: StringFieldUpdateOperationsInput;
  from?: UserUpdateOneRequiredWithoutMyPrivateChatsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatUncheckedUpdateWithoutToInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatUncheckedUpdateManyWithoutPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatUpdateWithoutFromInput {
  id?: StringFieldUpdateOperationsInput;
  to?: UserUpdateOneRequiredWithoutPrivateChatsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatUncheckedUpdateWithoutFromInput {
  id?: StringFieldUpdateOperationsInput;
  toId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface PrivateChatUncheckedUpdateManyWithoutMyPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  toId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NotificationUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  picturePath?: NullableStringFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  message?: StringFieldUpdateOperationsInput;
  isRead?: BoolFieldUpdateOperationsInput;
  followUpContext?: NullableStringFieldUpdateOperationsInput;
  followUpData?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NotificationUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  picturePath?: NullableStringFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  message?: StringFieldUpdateOperationsInput;
  isRead?: BoolFieldUpdateOperationsInput;
  followUpContext?: NullableStringFieldUpdateOperationsInput;
  followUpData?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface NotificationUncheckedUpdateManyWithoutNotificationsInput {
  id?: StringFieldUpdateOperationsInput;
  picturePath?: NullableStringFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  message?: StringFieldUpdateOperationsInput;
  isRead?: BoolFieldUpdateOperationsInput;
  followUpContext?: NullableStringFieldUpdateOperationsInput;
  followUpData?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface TokenUpdateWithoutOwnerInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  tokenClaims?: TokenClaimUpdateManyWithoutTokenInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenUncheckedUpdateWithoutOwnerInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  tokenClaims?: TokenClaimUncheckedUpdateManyWithoutTokenInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenUncheckedUpdateManyWithoutMyTokensInput {
  id?: StringFieldUpdateOperationsInput;
  token?: StringFieldUpdateOperationsInput;
  maxClaim?: NullableIntFieldUpdateOperationsInput;
}

export interface TokenClaimUpdateWithoutClaimerInput {
  id?: StringFieldUpdateOperationsInput;
  token?: TokenUpdateOneRequiredWithoutTokenClaimsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface TokenClaimUncheckedUpdateWithoutClaimerInput {
  id?: StringFieldUpdateOperationsInput;
  tokenId?: StringFieldUpdateOperationsInput;
  expiredAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionCreateManyExamInput {
  id?: string;
  questionId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerCreateManyExamInput {
  id?: string;
  grade?: number;
  finishCalculation?: boolean;
  examSessionId?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionUpdateWithoutExamInput {
  id?: StringFieldUpdateOperationsInput;
  question?: QuestionUpdateOneRequiredWithoutExamquestionsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionUncheckedUpdateWithoutExamInput {
  id?: StringFieldUpdateOperationsInput;
  questionId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionUncheckedUpdateManyWithoutExamquestionsInput {
  id?: StringFieldUpdateOperationsInput;
  questionId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerUpdateWithoutExamInput {
  id?: StringFieldUpdateOperationsInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  examSession?: ExamSessionUpdateOneWithoutExamAnswersInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerUncheckedUpdateWithoutExamInput {
  id?: StringFieldUpdateOperationsInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  examSessionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerUncheckedUpdateManyWithoutExamAnswersInput {
  id?: StringFieldUpdateOperationsInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  examSessionId?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerCreateManyExamSessionInput {
  id?: string;
  examId: string;
  grade?: number;
  finishCalculation?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamAnswerUpdateWithoutExamSessionInput {
  id?: StringFieldUpdateOperationsInput;
  exam?: ExamUpdateOneRequiredWithoutExamAnswersInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamAnswerUncheckedUpdateWithoutExamSessionInput {
  id?: StringFieldUpdateOperationsInput;
  examId?: StringFieldUpdateOperationsInput;
  grade?: FloatFieldUpdateOperationsInput;
  finishCalculation?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface QuestionCreateManyOriginalQuestionInput {
  id?: string;
  name: string;
  type: QuestionType;
  contentType: ContentType;
  content: string;
  answerType: ContentType;
  answers?: string[];
  userId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ExamQuestionCreateManyQuestionInput {
  id?: string;
  examId: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface QuestionUpdateWithoutOriginalQuestionInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  user?: UserUpdateOneRequiredWithoutQuestionsInput;
  childrens?: QuestionUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUpdateManyWithoutQuestionInput;
}

export interface QuestionUncheckedUpdateWithoutOriginalQuestionInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  userId?: StringFieldUpdateOperationsInput;
  childrens?: QuestionUncheckedUpdateManyWithoutOriginalQuestionInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  examquestions?: ExamQuestionUncheckedUpdateManyWithoutQuestionInput;
}

export interface QuestionUncheckedUpdateManyWithoutChildrensInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  type?: EnumQuestionTypeFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  answerType?: EnumContentTypeFieldUpdateOperationsInput;
  answers?: string[];
  userId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionUpdateWithoutQuestionInput {
  id?: StringFieldUpdateOperationsInput;
  exam?: ExamUpdateOneRequiredWithoutExamquestionsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ExamQuestionUncheckedUpdateWithoutQuestionInput {
  id?: StringFieldUpdateOperationsInput;
  examId?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AggregateProvince {
  _count: Maybe<ProvinceCountAggregateOutputType>;
  _min: Maybe<ProvinceMinAggregateOutputType>;
  _max: Maybe<ProvinceMaxAggregateOutputType>;
}

export interface AggregateRegency {
  _count: Maybe<RegencyCountAggregateOutputType>;
  _min: Maybe<RegencyMinAggregateOutputType>;
  _max: Maybe<RegencyMaxAggregateOutputType>;
}

export interface AggregateIdentityFile {
  _count: Maybe<IdentityFileCountAggregateOutputType>;
  _min: Maybe<IdentityFileMinAggregateOutputType>;
  _max: Maybe<IdentityFileMaxAggregateOutputType>;
}

export interface AggregateToken {
  _count: Maybe<TokenCountAggregateOutputType>;
  _avg: Maybe<TokenAvgAggregateOutputType>;
  _sum: Maybe<TokenSumAggregateOutputType>;
  _min: Maybe<TokenMinAggregateOutputType>;
  _max: Maybe<TokenMaxAggregateOutputType>;
}

export interface AggregateTokenClaim {
  _count: Maybe<TokenClaimCountAggregateOutputType>;
  _min: Maybe<TokenClaimMinAggregateOutputType>;
  _max: Maybe<TokenClaimMaxAggregateOutputType>;
}

export interface AggregateUser {
  _count: Maybe<UserCountAggregateOutputType>;
  _avg: Maybe<UserAvgAggregateOutputType>;
  _sum: Maybe<UserSumAggregateOutputType>;
  _min: Maybe<UserMinAggregateOutputType>;
  _max: Maybe<UserMaxAggregateOutputType>;
}

export interface AggregateNotification {
  _count: Maybe<NotificationCountAggregateOutputType>;
  _min: Maybe<NotificationMinAggregateOutputType>;
  _max: Maybe<NotificationMaxAggregateOutputType>;
}

export interface AggregatePrivateChat {
  _count: Maybe<PrivateChatCountAggregateOutputType>;
  _min: Maybe<PrivateChatMinAggregateOutputType>;
  _max: Maybe<PrivateChatMaxAggregateOutputType>;
}

export interface AggregateExam {
  _count: Maybe<ExamCountAggregateOutputType>;
  _min: Maybe<ExamMinAggregateOutputType>;
  _max: Maybe<ExamMaxAggregateOutputType>;
}

export interface AggregateExamSession {
  _count: Maybe<ExamSessionCountAggregateOutputType>;
  _avg: Maybe<ExamSessionAvgAggregateOutputType>;
  _sum: Maybe<ExamSessionSumAggregateOutputType>;
  _min: Maybe<ExamSessionMinAggregateOutputType>;
  _max: Maybe<ExamSessionMaxAggregateOutputType>;
}

export interface AggregateExamQuestion {
  _count: Maybe<ExamQuestionCountAggregateOutputType>;
  _min: Maybe<ExamQuestionMinAggregateOutputType>;
  _max: Maybe<ExamQuestionMaxAggregateOutputType>;
}

export interface AggregateExamAnswer {
  _count: Maybe<ExamAnswerCountAggregateOutputType>;
  _avg: Maybe<ExamAnswerAvgAggregateOutputType>;
  _sum: Maybe<ExamAnswerSumAggregateOutputType>;
  _min: Maybe<ExamAnswerMinAggregateOutputType>;
  _max: Maybe<ExamAnswerMaxAggregateOutputType>;
}

export interface AggregateQuestion {
  _count: Maybe<QuestionCountAggregateOutputType>;
  _min: Maybe<QuestionMinAggregateOutputType>;
  _max: Maybe<QuestionMaxAggregateOutputType>;
}

export interface ProvinceCountOutputType {
  regencies: number;
  users: number;
}

export interface ProvinceCountAggregateOutputType {
  id: number;
  name: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ProvinceMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ProvinceMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface RegencyCountOutputType {
  users: number;
}

export interface RegencyCountAggregateOutputType {
  id: number;
  name: number;
  provinceId: number;
  _all: number;
}

export interface RegencyMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  provinceId: Maybe<string>;
}

export interface RegencyMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  provinceId: Maybe<string>;
}

export interface IdentityFileCountAggregateOutputType {
  id: number;
  name: number;
  url: number;
  type: number;
  number: number;
  userId: number;
  _all: number;
}

export interface IdentityFileMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  url: Maybe<string>;
  type: Maybe<IdentityFileType>;
  number: Maybe<string>;
  userId: Maybe<string>;
}

export interface IdentityFileMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  url: Maybe<string>;
  type: Maybe<IdentityFileType>;
  number: Maybe<string>;
  userId: Maybe<string>;
}

export interface TokenCountOutputType {
  tokenClaims: number;
}

export interface TokenCountAggregateOutputType {
  id: number;
  token: number;
  userId: number;
  maxClaim: number;
  _all: number;
}

export interface TokenAvgAggregateOutputType {
  maxClaim: Maybe<number>;
}

export interface TokenSumAggregateOutputType {
  maxClaim: Maybe<number>;
}

export interface TokenMinAggregateOutputType {
  id: Maybe<string>;
  token: Maybe<string>;
  userId: Maybe<string>;
  maxClaim: Maybe<number>;
}

export interface TokenMaxAggregateOutputType {
  id: Maybe<string>;
  token: Maybe<string>;
  userId: Maybe<string>;
  maxClaim: Maybe<number>;
}

export interface TokenClaimCountAggregateOutputType {
  id: number;
  tokenId: number;
  userId: number;
  expiredAt: number;
  _all: number;
}

export interface TokenClaimMinAggregateOutputType {
  id: Maybe<string>;
  tokenId: Maybe<string>;
  userId: Maybe<string>;
  expiredAt: Maybe<undefined>;
}

export interface TokenClaimMaxAggregateOutputType {
  id: Maybe<string>;
  tokenId: Maybe<string>;
  userId: Maybe<string>;
  expiredAt: Maybe<undefined>;
}

export interface UserCountOutputType {
  identityFiles: number;
  questions: number;
  examinations: number;
  examsessions: number;
  privateChats: number;
  myPrivateChats: number;
  notifications: number;
  myTokens: number;
  tokenClaims: number;
}

export interface UserCountAggregateOutputType {
  id: number;
  name: number;
  email: number;
  phoneNumber: number;
  address: number;
  profilePicturePath: number;
  createdAt: number;
  updatedAt: number;
  nisn: number;
  nrg: number;
  provinceId: number;
  regencyId: number;
  isAdmin: number;
  role: number;
  balance: number;
  emailVerifiedAt: number;
  phoneNumberVerifiedAt: number;
  identityNumberVerifiedAt: number;
  verifykey: number;
  verifyType: number;
  _all: number;
}

export interface UserAvgAggregateOutputType {
  balance: Maybe<number>;
}

export interface UserSumAggregateOutputType {
  balance: Maybe<number>;
}

export interface UserMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  email: Maybe<string>;
  phoneNumber: Maybe<string>;
  address: Maybe<string>;
  profilePicturePath: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  provinceId: Maybe<string>;
  regencyId: Maybe<string>;
  isAdmin: Maybe<boolean>;
  role: Maybe<Roles>;
  balance: Maybe<number>;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  identityNumberVerifiedAt: Maybe<undefined>;
  verifykey: Maybe<string>;
  verifyType: Maybe<VerifyType>;
}

export interface UserMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  email: Maybe<string>;
  phoneNumber: Maybe<string>;
  address: Maybe<string>;
  profilePicturePath: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  provinceId: Maybe<string>;
  regencyId: Maybe<string>;
  isAdmin: Maybe<boolean>;
  role: Maybe<Roles>;
  balance: Maybe<number>;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  identityNumberVerifiedAt: Maybe<undefined>;
  verifykey: Maybe<string>;
  verifyType: Maybe<VerifyType>;
}

export interface NotificationCountAggregateOutputType {
  id: number;
  picturePath: number;
  title: number;
  message: number;
  isRead: number;
  followUpContext: number;
  followUpData: number;
  userId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface NotificationMinAggregateOutputType {
  id: Maybe<string>;
  picturePath: Maybe<string>;
  title: Maybe<string>;
  message: Maybe<string>;
  isRead: Maybe<boolean>;
  followUpContext: Maybe<string>;
  followUpData: Maybe<string>;
  userId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface NotificationMaxAggregateOutputType {
  id: Maybe<string>;
  picturePath: Maybe<string>;
  title: Maybe<string>;
  message: Maybe<string>;
  isRead: Maybe<boolean>;
  followUpContext: Maybe<string>;
  followUpData: Maybe<string>;
  userId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface PrivateChatCountAggregateOutputType {
  id: number;
  fromId: number;
  toId: number;
  contentType: number;
  content: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface PrivateChatMinAggregateOutputType {
  id: Maybe<string>;
  fromId: Maybe<string>;
  toId: Maybe<string>;
  contentType: Maybe<ContentType>;
  content: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface PrivateChatMaxAggregateOutputType {
  id: Maybe<string>;
  fromId: Maybe<string>;
  toId: Maybe<string>;
  contentType: Maybe<ContentType>;
  content: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ExamCountOutputType {
  examquestions: number;
  examAnswers: number;
}

export interface ExamCountAggregateOutputType {
  id: number;
  name: number;
  userId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ExamMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  userId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ExamMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  userId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ExamSessionCountOutputType {
  examAnswers: number;
}

export interface ExamSessionCountAggregateOutputType {
  id: number;
  name: number;
  openAt: number;
  closeAt: number;
  maxPlayer: number;
  userId: number;
  _all: number;
}

export interface ExamSessionAvgAggregateOutputType {
  maxPlayer: Maybe<number>;
}

export interface ExamSessionSumAggregateOutputType {
  maxPlayer: Maybe<number>;
}

export interface ExamSessionMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  openAt: Maybe<undefined>;
  closeAt: Maybe<undefined>;
  maxPlayer: Maybe<number>;
  userId: Maybe<string>;
}

export interface ExamSessionMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  openAt: Maybe<undefined>;
  closeAt: Maybe<undefined>;
  maxPlayer: Maybe<number>;
  userId: Maybe<string>;
}

export interface ExamQuestionCountAggregateOutputType {
  id: number;
  questionId: number;
  examId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ExamQuestionMinAggregateOutputType {
  id: Maybe<string>;
  questionId: Maybe<string>;
  examId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ExamQuestionMaxAggregateOutputType {
  id: Maybe<string>;
  questionId: Maybe<string>;
  examId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ExamAnswerCountAggregateOutputType {
  id: number;
  examId: number;
  grade: number;
  finishCalculation: number;
  examSessionId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ExamAnswerAvgAggregateOutputType {
  grade: Maybe<number>;
}

export interface ExamAnswerSumAggregateOutputType {
  grade: Maybe<number>;
}

export interface ExamAnswerMinAggregateOutputType {
  id: Maybe<string>;
  examId: Maybe<string>;
  grade: Maybe<number>;
  finishCalculation: Maybe<boolean>;
  examSessionId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ExamAnswerMaxAggregateOutputType {
  id: Maybe<string>;
  examId: Maybe<string>;
  grade: Maybe<number>;
  finishCalculation: Maybe<boolean>;
  examSessionId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface QuestionCountOutputType {
  childrens: number;
  examquestions: number;
}

export interface QuestionCountAggregateOutputType {
  id: number;
  name: number;
  type: number;
  contentType: number;
  content: number;
  answerType: number;
  answers: number;
  userId: number;
  originalQuestionId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface QuestionMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  type: Maybe<QuestionType>;
  contentType: Maybe<ContentType>;
  content: Maybe<string>;
  answerType: Maybe<ContentType>;
  userId: Maybe<string>;
  originalQuestionId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface QuestionMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  type: Maybe<QuestionType>;
  contentType: Maybe<ContentType>;
  content: Maybe<string>;
  answerType: Maybe<ContentType>;
  userId: Maybe<string>;
  originalQuestionId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface findUniqueQuestionArgs {
  where: QuestionWhereUniqueInput;
}

export interface findFirstQuestionArgs {
  where?: QuestionWhereInput;
  orderBy?: QuestionOrderByWithRelationInput[];
  cursor?: QuestionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: QuestionScalarFieldEnum[];
}

export interface findManyQuestionArgs {
  where?: QuestionWhereInput;
  orderBy?: QuestionOrderByWithRelationInput[];
  cursor?: QuestionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: QuestionScalarFieldEnum[];
}

export interface findManyQuestionCountArgs {
  where?: QuestionWhereInput;
  orderBy?: QuestionOrderByWithRelationInput[];
  cursor?: QuestionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: QuestionScalarFieldEnum[];
}

export interface aggregateQuestionArgs {
  where?: QuestionWhereInput;
  orderBy?: QuestionOrderByWithRelationInput[];
  cursor?: QuestionWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueExamAnswerArgs {
  where: ExamAnswerWhereUniqueInput;
}

export interface findFirstExamAnswerArgs {
  where?: ExamAnswerWhereInput;
  orderBy?: ExamAnswerOrderByWithRelationInput[];
  cursor?: ExamAnswerWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamAnswerScalarFieldEnum[];
}

export interface findManyExamAnswerArgs {
  where?: ExamAnswerWhereInput;
  orderBy?: ExamAnswerOrderByWithRelationInput[];
  cursor?: ExamAnswerWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamAnswerScalarFieldEnum[];
}

export interface findManyExamAnswerCountArgs {
  where?: ExamAnswerWhereInput;
  orderBy?: ExamAnswerOrderByWithRelationInput[];
  cursor?: ExamAnswerWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamAnswerScalarFieldEnum[];
}

export interface aggregateExamAnswerArgs {
  where?: ExamAnswerWhereInput;
  orderBy?: ExamAnswerOrderByWithRelationInput[];
  cursor?: ExamAnswerWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueExamQuestionArgs {
  where: ExamQuestionWhereUniqueInput;
}

export interface findFirstExamQuestionArgs {
  where?: ExamQuestionWhereInput;
  orderBy?: ExamQuestionOrderByWithRelationInput[];
  cursor?: ExamQuestionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamQuestionScalarFieldEnum[];
}

export interface findManyExamQuestionArgs {
  where?: ExamQuestionWhereInput;
  orderBy?: ExamQuestionOrderByWithRelationInput[];
  cursor?: ExamQuestionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamQuestionScalarFieldEnum[];
}

export interface findManyExamQuestionCountArgs {
  where?: ExamQuestionWhereInput;
  orderBy?: ExamQuestionOrderByWithRelationInput[];
  cursor?: ExamQuestionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamQuestionScalarFieldEnum[];
}

export interface aggregateExamQuestionArgs {
  where?: ExamQuestionWhereInput;
  orderBy?: ExamQuestionOrderByWithRelationInput[];
  cursor?: ExamQuestionWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueExamSessionArgs {
  where: ExamSessionWhereUniqueInput;
}

export interface findFirstExamSessionArgs {
  where?: ExamSessionWhereInput;
  orderBy?: ExamSessionOrderByWithRelationInput[];
  cursor?: ExamSessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamSessionScalarFieldEnum[];
}

export interface findManyExamSessionArgs {
  where?: ExamSessionWhereInput;
  orderBy?: ExamSessionOrderByWithRelationInput[];
  cursor?: ExamSessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamSessionScalarFieldEnum[];
}

export interface findManyExamSessionCountArgs {
  where?: ExamSessionWhereInput;
  orderBy?: ExamSessionOrderByWithRelationInput[];
  cursor?: ExamSessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamSessionScalarFieldEnum[];
}

export interface aggregateExamSessionArgs {
  where?: ExamSessionWhereInput;
  orderBy?: ExamSessionOrderByWithRelationInput[];
  cursor?: ExamSessionWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueExamArgs {
  where: ExamWhereUniqueInput;
}

export interface findFirstExamArgs {
  where?: ExamWhereInput;
  orderBy?: ExamOrderByWithRelationInput[];
  cursor?: ExamWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamScalarFieldEnum[];
}

export interface findManyExamArgs {
  where?: ExamWhereInput;
  orderBy?: ExamOrderByWithRelationInput[];
  cursor?: ExamWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamScalarFieldEnum[];
}

export interface findManyExamCountArgs {
  where?: ExamWhereInput;
  orderBy?: ExamOrderByWithRelationInput[];
  cursor?: ExamWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ExamScalarFieldEnum[];
}

export interface aggregateExamArgs {
  where?: ExamWhereInput;
  orderBy?: ExamOrderByWithRelationInput[];
  cursor?: ExamWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniquePrivateChatArgs {
  where: PrivateChatWhereUniqueInput;
}

export interface findFirstPrivateChatArgs {
  where?: PrivateChatWhereInput;
  orderBy?: PrivateChatOrderByWithRelationInput[];
  cursor?: PrivateChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PrivateChatScalarFieldEnum[];
}

export interface findManyPrivateChatArgs {
  where?: PrivateChatWhereInput;
  orderBy?: PrivateChatOrderByWithRelationInput[];
  cursor?: PrivateChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PrivateChatScalarFieldEnum[];
}

export interface findManyPrivateChatCountArgs {
  where?: PrivateChatWhereInput;
  orderBy?: PrivateChatOrderByWithRelationInput[];
  cursor?: PrivateChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PrivateChatScalarFieldEnum[];
}

export interface aggregatePrivateChatArgs {
  where?: PrivateChatWhereInput;
  orderBy?: PrivateChatOrderByWithRelationInput[];
  cursor?: PrivateChatWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueNotificationArgs {
  where: NotificationWhereUniqueInput;
}

export interface findFirstNotificationArgs {
  where?: NotificationWhereInput;
  orderBy?: NotificationOrderByWithRelationInput[];
  cursor?: NotificationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: NotificationScalarFieldEnum[];
}

export interface findManyNotificationArgs {
  where?: NotificationWhereInput;
  orderBy?: NotificationOrderByWithRelationInput[];
  cursor?: NotificationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: NotificationScalarFieldEnum[];
}

export interface findManyNotificationCountArgs {
  where?: NotificationWhereInput;
  orderBy?: NotificationOrderByWithRelationInput[];
  cursor?: NotificationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: NotificationScalarFieldEnum[];
}

export interface aggregateNotificationArgs {
  where?: NotificationWhereInput;
  orderBy?: NotificationOrderByWithRelationInput[];
  cursor?: NotificationWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueUserArgs {
  where: UserWhereUniqueInput;
}

export interface findFirstUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserCountArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface aggregateUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueTokenClaimArgs {
  where: TokenClaimWhereUniqueInput;
}

export interface findFirstTokenClaimArgs {
  where?: TokenClaimWhereInput;
  orderBy?: TokenClaimOrderByWithRelationInput[];
  cursor?: TokenClaimWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TokenClaimScalarFieldEnum[];
}

export interface findManyTokenClaimArgs {
  where?: TokenClaimWhereInput;
  orderBy?: TokenClaimOrderByWithRelationInput[];
  cursor?: TokenClaimWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TokenClaimScalarFieldEnum[];
}

export interface findManyTokenClaimCountArgs {
  where?: TokenClaimWhereInput;
  orderBy?: TokenClaimOrderByWithRelationInput[];
  cursor?: TokenClaimWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TokenClaimScalarFieldEnum[];
}

export interface aggregateTokenClaimArgs {
  where?: TokenClaimWhereInput;
  orderBy?: TokenClaimOrderByWithRelationInput[];
  cursor?: TokenClaimWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueTokenArgs {
  where: TokenWhereUniqueInput;
}

export interface findFirstTokenArgs {
  where?: TokenWhereInput;
  orderBy?: TokenOrderByWithRelationInput[];
  cursor?: TokenWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TokenScalarFieldEnum[];
}

export interface findManyTokenArgs {
  where?: TokenWhereInput;
  orderBy?: TokenOrderByWithRelationInput[];
  cursor?: TokenWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TokenScalarFieldEnum[];
}

export interface findManyTokenCountArgs {
  where?: TokenWhereInput;
  orderBy?: TokenOrderByWithRelationInput[];
  cursor?: TokenWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TokenScalarFieldEnum[];
}

export interface aggregateTokenArgs {
  where?: TokenWhereInput;
  orderBy?: TokenOrderByWithRelationInput[];
  cursor?: TokenWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueIdentityFileArgs {
  where: IdentityFileWhereUniqueInput;
}

export interface findFirstIdentityFileArgs {
  where?: IdentityFileWhereInput;
  orderBy?: IdentityFileOrderByWithRelationInput[];
  cursor?: IdentityFileWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: IdentityFileScalarFieldEnum[];
}

export interface findManyIdentityFileArgs {
  where?: IdentityFileWhereInput;
  orderBy?: IdentityFileOrderByWithRelationInput[];
  cursor?: IdentityFileWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: IdentityFileScalarFieldEnum[];
}

export interface findManyIdentityFileCountArgs {
  where?: IdentityFileWhereInput;
  orderBy?: IdentityFileOrderByWithRelationInput[];
  cursor?: IdentityFileWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: IdentityFileScalarFieldEnum[];
}

export interface aggregateIdentityFileArgs {
  where?: IdentityFileWhereInput;
  orderBy?: IdentityFileOrderByWithRelationInput[];
  cursor?: IdentityFileWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueRegencyArgs {
  where: RegencyWhereUniqueInput;
}

export interface findFirstRegencyArgs {
  where?: RegencyWhereInput;
  orderBy?: RegencyOrderByWithRelationInput[];
  cursor?: RegencyWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: RegencyScalarFieldEnum[];
}

export interface findManyRegencyArgs {
  where?: RegencyWhereInput;
  orderBy?: RegencyOrderByWithRelationInput[];
  cursor?: RegencyWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: RegencyScalarFieldEnum[];
}

export interface findManyRegencyCountArgs {
  where?: RegencyWhereInput;
  orderBy?: RegencyOrderByWithRelationInput[];
  cursor?: RegencyWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: RegencyScalarFieldEnum[];
}

export interface aggregateRegencyArgs {
  where?: RegencyWhereInput;
  orderBy?: RegencyOrderByWithRelationInput[];
  cursor?: RegencyWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueProvinceArgs {
  where: ProvinceWhereUniqueInput;
}

export interface findFirstProvinceArgs {
  where?: ProvinceWhereInput;
  orderBy?: ProvinceOrderByWithRelationInput[];
  cursor?: ProvinceWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProvinceScalarFieldEnum[];
}

export interface findManyProvinceArgs {
  where?: ProvinceWhereInput;
  orderBy?: ProvinceOrderByWithRelationInput[];
  cursor?: ProvinceWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProvinceScalarFieldEnum[];
}

export interface findManyProvinceCountArgs {
  where?: ProvinceWhereInput;
  orderBy?: ProvinceOrderByWithRelationInput[];
  cursor?: ProvinceWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProvinceScalarFieldEnum[];
}

export interface aggregateProvinceArgs {
  where?: ProvinceWhereInput;
  orderBy?: ProvinceOrderByWithRelationInput[];
  cursor?: ProvinceWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface meArgs {}

export interface createOneQuestionArgs {
  data: QuestionCreateInput;
}

export interface updateOneQuestionArgs {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
}

export interface upsertOneQuestionArgs {
  where: QuestionWhereUniqueInput;
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
}

export interface deleteOneQuestionArgs {
  where: QuestionWhereUniqueInput;
}

export interface updateManyQuestionArgs {
  data: QuestionUpdateManyMutationInput;
  where?: QuestionWhereInput;
}

export interface deleteManyQuestionArgs {
  where?: QuestionWhereInput;
}

export interface createOneExamAnswerArgs {
  data: ExamAnswerCreateInput;
}

export interface updateOneExamAnswerArgs {
  data: ExamAnswerUpdateInput;
  where: ExamAnswerWhereUniqueInput;
}

export interface upsertOneExamAnswerArgs {
  where: ExamAnswerWhereUniqueInput;
  create: ExamAnswerCreateInput;
  update: ExamAnswerUpdateInput;
}

export interface deleteOneExamAnswerArgs {
  where: ExamAnswerWhereUniqueInput;
}

export interface updateManyExamAnswerArgs {
  data: ExamAnswerUpdateManyMutationInput;
  where?: ExamAnswerWhereInput;
}

export interface deleteManyExamAnswerArgs {
  where?: ExamAnswerWhereInput;
}

export interface createOneExamQuestionArgs {
  data: ExamQuestionCreateInput;
}

export interface updateOneExamQuestionArgs {
  data: ExamQuestionUpdateInput;
  where: ExamQuestionWhereUniqueInput;
}

export interface upsertOneExamQuestionArgs {
  where: ExamQuestionWhereUniqueInput;
  create: ExamQuestionCreateInput;
  update: ExamQuestionUpdateInput;
}

export interface deleteOneExamQuestionArgs {
  where: ExamQuestionWhereUniqueInput;
}

export interface updateManyExamQuestionArgs {
  data: ExamQuestionUpdateManyMutationInput;
  where?: ExamQuestionWhereInput;
}

export interface deleteManyExamQuestionArgs {
  where?: ExamQuestionWhereInput;
}

export interface createOneExamSessionArgs {
  data: ExamSessionCreateInput;
}

export interface updateOneExamSessionArgs {
  data: ExamSessionUpdateInput;
  where: ExamSessionWhereUniqueInput;
}

export interface upsertOneExamSessionArgs {
  where: ExamSessionWhereUniqueInput;
  create: ExamSessionCreateInput;
  update: ExamSessionUpdateInput;
}

export interface deleteOneExamSessionArgs {
  where: ExamSessionWhereUniqueInput;
}

export interface updateManyExamSessionArgs {
  data: ExamSessionUpdateManyMutationInput;
  where?: ExamSessionWhereInput;
}

export interface deleteManyExamSessionArgs {
  where?: ExamSessionWhereInput;
}

export interface createOneExamArgs {
  data: ExamCreateInput;
}

export interface updateOneExamArgs {
  data: ExamUpdateInput;
  where: ExamWhereUniqueInput;
}

export interface upsertOneExamArgs {
  where: ExamWhereUniqueInput;
  create: ExamCreateInput;
  update: ExamUpdateInput;
}

export interface deleteOneExamArgs {
  where: ExamWhereUniqueInput;
}

export interface updateManyExamArgs {
  data: ExamUpdateManyMutationInput;
  where?: ExamWhereInput;
}

export interface deleteManyExamArgs {
  where?: ExamWhereInput;
}

export interface createOnePrivateChatArgs {
  data: PrivateChatCreateInput;
}

export interface updateOnePrivateChatArgs {
  data: PrivateChatUpdateInput;
  where: PrivateChatWhereUniqueInput;
}

export interface upsertOnePrivateChatArgs {
  where: PrivateChatWhereUniqueInput;
  create: PrivateChatCreateInput;
  update: PrivateChatUpdateInput;
}

export interface deleteOnePrivateChatArgs {
  where: PrivateChatWhereUniqueInput;
}

export interface updateManyPrivateChatArgs {
  data: PrivateChatUpdateManyMutationInput;
  where?: PrivateChatWhereInput;
}

export interface deleteManyPrivateChatArgs {
  where?: PrivateChatWhereInput;
}

export interface createOneNotificationArgs {
  data: NotificationCreateInput;
}

export interface updateOneNotificationArgs {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
}

export interface upsertOneNotificationArgs {
  where: NotificationWhereUniqueInput;
  create: NotificationCreateInput;
  update: NotificationUpdateInput;
}

export interface deleteOneNotificationArgs {
  where: NotificationWhereUniqueInput;
}

export interface updateManyNotificationArgs {
  data: NotificationUpdateManyMutationInput;
  where?: NotificationWhereInput;
}

export interface deleteManyNotificationArgs {
  where?: NotificationWhereInput;
}

export interface createOneUserArgs {
  data: UserCreateInput;
}

export interface updateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface upsertOneUserArgs {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
}

export interface deleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface updateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface deleteManyUserArgs {
  where?: UserWhereInput;
}

export interface createOneTokenClaimArgs {
  data: TokenClaimCreateInput;
}

export interface updateOneTokenClaimArgs {
  data: TokenClaimUpdateInput;
  where: TokenClaimWhereUniqueInput;
}

export interface upsertOneTokenClaimArgs {
  where: TokenClaimWhereUniqueInput;
  create: TokenClaimCreateInput;
  update: TokenClaimUpdateInput;
}

export interface deleteOneTokenClaimArgs {
  where: TokenClaimWhereUniqueInput;
}

export interface updateManyTokenClaimArgs {
  data: TokenClaimUpdateManyMutationInput;
  where?: TokenClaimWhereInput;
}

export interface deleteManyTokenClaimArgs {
  where?: TokenClaimWhereInput;
}

export interface createOneTokenArgs {
  data: TokenCreateInput;
}

export interface updateOneTokenArgs {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
}

export interface upsertOneTokenArgs {
  where: TokenWhereUniqueInput;
  create: TokenCreateInput;
  update: TokenUpdateInput;
}

export interface deleteOneTokenArgs {
  where: TokenWhereUniqueInput;
}

export interface updateManyTokenArgs {
  data: TokenUpdateManyMutationInput;
  where?: TokenWhereInput;
}

export interface deleteManyTokenArgs {
  where?: TokenWhereInput;
}

export interface createOneIdentityFileArgs {
  data: IdentityFileCreateInput;
}

export interface updateOneIdentityFileArgs {
  data: IdentityFileUpdateInput;
  where: IdentityFileWhereUniqueInput;
}

export interface upsertOneIdentityFileArgs {
  where: IdentityFileWhereUniqueInput;
  create: IdentityFileCreateInput;
  update: IdentityFileUpdateInput;
}

export interface deleteOneIdentityFileArgs {
  where: IdentityFileWhereUniqueInput;
}

export interface updateManyIdentityFileArgs {
  data: IdentityFileUpdateManyMutationInput;
  where?: IdentityFileWhereInput;
}

export interface deleteManyIdentityFileArgs {
  where?: IdentityFileWhereInput;
}

export interface createOneRegencyArgs {
  data: RegencyCreateInput;
}

export interface updateOneRegencyArgs {
  data: RegencyUpdateInput;
  where: RegencyWhereUniqueInput;
}

export interface upsertOneRegencyArgs {
  where: RegencyWhereUniqueInput;
  create: RegencyCreateInput;
  update: RegencyUpdateInput;
}

export interface deleteOneRegencyArgs {
  where: RegencyWhereUniqueInput;
}

export interface updateManyRegencyArgs {
  data: RegencyUpdateManyMutationInput;
  where?: RegencyWhereInput;
}

export interface deleteManyRegencyArgs {
  where?: RegencyWhereInput;
}

export interface createOneProvinceArgs {
  data: ProvinceCreateInput;
}

export interface updateOneProvinceArgs {
  data: ProvinceUpdateInput;
  where: ProvinceWhereUniqueInput;
}

export interface upsertOneProvinceArgs {
  where: ProvinceWhereUniqueInput;
  create: ProvinceCreateInput;
  update: ProvinceUpdateInput;
}

export interface deleteOneProvinceArgs {
  where: ProvinceWhereUniqueInput;
}

export interface updateManyProvinceArgs {
  data: ProvinceUpdateManyMutationInput;
  where?: ProvinceWhereInput;
}

export interface deleteManyProvinceArgs {
  where?: ProvinceWhereInput;
}

export interface confirmVerificationArgs {
  type: VerifyType;
  key: string;
}

export interface registerArgs {
  email: string;
  password: string;
  name: string;
  phoneNumber?: string;
  address?: string;
  nrg?: string;
  nisn?: string;
  provinceId: string;
  regencyId: string;
  role: Roles;
}

export interface validateArgs {
  email: string;
}

export interface loginArgs {
  email: string;
  password: string;
}

export interface sendChatArgs {
  to: string;
  content: string;
  type: ContentType;
  file?: File;
}

export interface privateChatSubscribeArgs {}
