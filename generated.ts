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

export interface ClassroomStudent {
  id: string;
  userId: string;
  user: User;
  classroom: Maybe<Classroom>;
  classroomId: Maybe<string>;
  status: ClassroomStudentStatus;
  createdAt: undefined;
  updatedAt: undefined;
}

export interface Classroom {
  id: string;
  name: string;
  schoolId: Maybe<string>;
  school: Maybe<School>;
  userId: string;
  user: User;
  students: ClassroomStudent[];
  level: number;
  createdAt: undefined;
  updatedAt: undefined;
  _count: ClassroomCountOutputType;
}

export interface School {
  id: string;
  name: string;
  npsn: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
  classrooms: Classroom[];
  levels: number[];
  type: string;
  address: string;
  logoPath: Maybe<string>;
  bannerPath: Maybe<string>;
  provinceId: string;
  province: Province;
  cityId: string;
  city: City;
  _count: SchoolCountOutputType;
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
  phoneNumber: string;
  address: string;
  profilePicturePath: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  provinceId: string;
  province: Province;
  cityId: string;
  city: City;
  isAdmin: boolean;
  isBimbel: boolean;
  role: Roles;
  balance: number;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  bimbelApprovedAt: Maybe<undefined>;
  identityFiles: IdentityFile[];
  questions: Question[];
  examinations: Exam[];
  examsessions: ExamSession[];
  privateChats: PrivateChat[];
  myPrivateChats: PrivateChat[];
  classrooms: Classroom[];
  classroomStudents: ClassroomStudent[];
  notifications: Notification[];
  _count: UserCountOutputType;
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

export interface City {
  id: string;
  name: string;
  provinceId: string;
  province: Province;
  users: User[];
  School: School[];
  _count: CityCountOutputType;
}

export interface Province {
  id: string;
  name: string;
  cities: City[];
  createdAt: undefined;
  updatedAt: undefined;
  users: User[];
  School: School[];
  _count: ProvinceCountOutputType;
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
export enum CityScalarFieldEnum {
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
  Cityid = 'cityId',
  Isadmin = 'isAdmin',
  Isbimbel = 'isBimbel',
  Role = 'role',
  Balance = 'balance',
  Emailverifiedat = 'emailVerifiedAt',
  Phonenumberverifiedat = 'phoneNumberVerifiedAt',
  Bimbelapprovedat = 'bimbelApprovedAt',
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
export enum SchoolScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Npsn = 'npsn',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Levels = 'levels',
  Type = 'type',
  Address = 'address',
  Logopath = 'logoPath',
  Bannerpath = 'bannerPath',
  Provinceid = 'provinceId',
  Cityid = 'cityId',
}
export enum ClassroomScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Schoolid = 'schoolId',
  Userid = 'userId',
  Level = 'level',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ClassroomStudentScalarFieldEnum {
  Id = 'id',
  Userid = 'userId',
  Classroomid = 'classroomId',
  Status = 'status',
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
export enum ClassroomStudentStatus {
  Active = 'ACTIVE',
  Banned = 'BANNED',
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
  cities?: CityListRelationFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  users?: UserListRelationFilter;
  School?: SchoolListRelationFilter;
}

export interface ProvinceOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  cities?: CityOrderByRelationAggregateInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  users?: UserOrderByRelationAggregateInput;
  School?: SchoolOrderByRelationAggregateInput;
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

export interface CityWhereInput {
  AND?: CityWhereInput[];
  OR?: CityWhereInput[];
  NOT?: CityWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  users?: UserListRelationFilter;
  School?: SchoolListRelationFilter;
}

export interface CityOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  users?: UserOrderByRelationAggregateInput;
  School?: SchoolOrderByRelationAggregateInput;
}

export interface CityWhereUniqueInput {
  id?: string;
}

export interface CityOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
  _count?: CityCountOrderByAggregateInput;
  _max?: CityMaxOrderByAggregateInput;
  _min?: CityMinOrderByAggregateInput;
}

export interface CityScalarWhereWithAggregatesInput {
  AND?: CityScalarWhereWithAggregatesInput[];
  OR?: CityScalarWhereWithAggregatesInput[];
  NOT?: CityScalarWhereWithAggregatesInput[];
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

export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  email?: StringFilter;
  password?: StringFilter;
  phoneNumber?: StringFilter;
  address?: StringFilter;
  profilePicturePath?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  nisn?: StringNullableFilter;
  nrg?: StringNullableFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  cityId?: StringFilter;
  city?: CityWhereInput;
  isAdmin?: BoolFilter;
  isBimbel?: BoolFilter;
  role?: EnumRolesFilter;
  balance?: FloatFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  phoneNumberVerifiedAt?: DateTimeNullableFilter;
  bimbelApprovedAt?: DateTimeNullableFilter;
  identityFiles?: IdentityFileListRelationFilter;
  questions?: QuestionListRelationFilter;
  examinations?: ExamListRelationFilter;
  examsessions?: ExamSessionListRelationFilter;
  privateChats?: PrivateChatListRelationFilter;
  myPrivateChats?: PrivateChatListRelationFilter;
  classrooms?: ClassroomListRelationFilter;
  classroomStudents?: ClassroomStudentListRelationFilter;
  notifications?: NotificationListRelationFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  cityId?: SortOrder;
  city?: CityOrderByWithRelationInput;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
  identityFiles?: IdentityFileOrderByRelationAggregateInput;
  questions?: QuestionOrderByRelationAggregateInput;
  examinations?: ExamOrderByRelationAggregateInput;
  examsessions?: ExamSessionOrderByRelationAggregateInput;
  privateChats?: PrivateChatOrderByRelationAggregateInput;
  myPrivateChats?: PrivateChatOrderByRelationAggregateInput;
  classrooms?: ClassroomOrderByRelationAggregateInput;
  classroomStudents?: ClassroomStudentOrderByRelationAggregateInput;
  notifications?: NotificationOrderByRelationAggregateInput;
}

export interface UserWhereUniqueInput {
  id?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
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
  password?: StringWithAggregatesFilter;
  phoneNumber?: StringWithAggregatesFilter;
  address?: StringWithAggregatesFilter;
  profilePicturePath?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  nisn?: StringNullableWithAggregatesFilter;
  nrg?: StringNullableWithAggregatesFilter;
  provinceId?: StringWithAggregatesFilter;
  cityId?: StringWithAggregatesFilter;
  isAdmin?: BoolWithAggregatesFilter;
  isBimbel?: BoolWithAggregatesFilter;
  role?: EnumRolesWithAggregatesFilter;
  balance?: FloatWithAggregatesFilter;
  emailVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  phoneNumberVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  bimbelApprovedAt?: DateTimeNullableWithAggregatesFilter;
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

export interface SchoolWhereInput {
  AND?: SchoolWhereInput[];
  OR?: SchoolWhereInput[];
  NOT?: SchoolWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  npsn?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  classrooms?: ClassroomListRelationFilter;
  levels?: IntNullableListFilter;
  type?: StringFilter;
  address?: StringFilter;
  logoPath?: StringNullableFilter;
  bannerPath?: StringNullableFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  cityId?: StringFilter;
  city?: CityWhereInput;
}

export interface SchoolOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  npsn?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  classrooms?: ClassroomOrderByRelationAggregateInput;
  levels?: SortOrder;
  type?: SortOrder;
  address?: SortOrder;
  logoPath?: SortOrder;
  bannerPath?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  cityId?: SortOrder;
  city?: CityOrderByWithRelationInput;
}

export interface SchoolWhereUniqueInput {
  id?: string;
}

export interface SchoolOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  npsn?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  levels?: SortOrder;
  type?: SortOrder;
  address?: SortOrder;
  logoPath?: SortOrder;
  bannerPath?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
  _count?: SchoolCountOrderByAggregateInput;
  _avg?: SchoolAvgOrderByAggregateInput;
  _max?: SchoolMaxOrderByAggregateInput;
  _min?: SchoolMinOrderByAggregateInput;
  _sum?: SchoolSumOrderByAggregateInput;
}

export interface SchoolScalarWhereWithAggregatesInput {
  AND?: SchoolScalarWhereWithAggregatesInput[];
  OR?: SchoolScalarWhereWithAggregatesInput[];
  NOT?: SchoolScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  npsn?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  levels?: IntNullableListFilter;
  type?: StringWithAggregatesFilter;
  address?: StringWithAggregatesFilter;
  logoPath?: StringNullableWithAggregatesFilter;
  bannerPath?: StringNullableWithAggregatesFilter;
  provinceId?: StringWithAggregatesFilter;
  cityId?: StringWithAggregatesFilter;
}

export interface ClassroomWhereInput {
  AND?: ClassroomWhereInput[];
  OR?: ClassroomWhereInput[];
  NOT?: ClassroomWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  schoolId?: StringNullableFilter;
  school?: SchoolWhereInput;
  userId?: StringFilter;
  user?: UserWhereInput;
  students?: ClassroomStudentListRelationFilter;
  level?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ClassroomOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  school?: SchoolOrderByWithRelationInput;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  students?: ClassroomStudentOrderByRelationAggregateInput;
  level?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomWhereUniqueInput {
  id?: string;
}

export interface ClassroomOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  level?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ClassroomCountOrderByAggregateInput;
  _avg?: ClassroomAvgOrderByAggregateInput;
  _max?: ClassroomMaxOrderByAggregateInput;
  _min?: ClassroomMinOrderByAggregateInput;
  _sum?: ClassroomSumOrderByAggregateInput;
}

export interface ClassroomScalarWhereWithAggregatesInput {
  AND?: ClassroomScalarWhereWithAggregatesInput[];
  OR?: ClassroomScalarWhereWithAggregatesInput[];
  NOT?: ClassroomScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  schoolId?: StringNullableWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  level?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ClassroomStudentWhereInput {
  AND?: ClassroomStudentWhereInput[];
  OR?: ClassroomStudentWhereInput[];
  NOT?: ClassroomStudentWhereInput[];
  id?: StringFilter;
  userId?: StringFilter;
  user?: UserWhereInput;
  classroom?: ClassroomWhereInput;
  classroomId?: StringNullableFilter;
  status?: EnumClassroomStudentStatusFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ClassroomStudentOrderByWithRelationInput {
  id?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  classroom?: ClassroomOrderByWithRelationInput;
  classroomId?: SortOrder;
  status?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomStudentWhereUniqueInput {
  id?: string;
}

export interface ClassroomStudentOrderByWithAggregationInput {
  id?: SortOrder;
  userId?: SortOrder;
  classroomId?: SortOrder;
  status?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ClassroomStudentCountOrderByAggregateInput;
  _max?: ClassroomStudentMaxOrderByAggregateInput;
  _min?: ClassroomStudentMinOrderByAggregateInput;
}

export interface ClassroomStudentScalarWhereWithAggregatesInput {
  AND?: ClassroomStudentScalarWhereWithAggregatesInput[];
  OR?: ClassroomStudentScalarWhereWithAggregatesInput[];
  NOT?: ClassroomStudentScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  classroomId?: StringNullableWithAggregatesFilter;
  status?: EnumClassroomStudentStatusWithAggregatesFilter;
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
  password?: StringNullableFilter;
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
  password?: SortOrder;
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
  password?: SortOrder;
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
  password?: StringNullableWithAggregatesFilter;
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
  cities?: CityCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
  School?: SchoolCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateInput {
  id?: string;
  name: string;
  cities?: CityUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
  School?: SchoolUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  cities?: CityUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
  School?: SchoolUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  cities?: CityUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
  School?: SchoolUncheckedUpdateManyWithoutProvinceInput;
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

export interface CityCreateInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutCitiesInput;
  users?: UserCreateNestedManyWithoutCityInput;
  School?: SchoolCreateNestedManyWithoutCityInput;
}

export interface CityUncheckedCreateInput {
  id?: string;
  name: string;
  provinceId: string;
  users?: UserUncheckedCreateNestedManyWithoutCityInput;
  School?: SchoolUncheckedCreateNestedManyWithoutCityInput;
}

export interface CityUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutCitiesInput;
  users?: UserUpdateManyWithoutCityInput;
  School?: SchoolUpdateManyWithoutCityInput;
}

export interface CityUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutCityInput;
  School?: SchoolUncheckedUpdateManyWithoutCityInput;
}

export interface CityCreateManyInput {
  id?: string;
  name: string;
  provinceId: string;
}

export interface CityUncheckedUpdateManyInput {
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

export interface UserCreateInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface UserCreateManyInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
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

export interface SchoolCreateInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  city: CityCreateNestedOneWithoutSchoolInput;
}

export interface SchoolUncheckedCreateInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  cityId: string;
}

export interface SchoolUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  city?: CityUpdateOneRequiredWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
}

export interface SchoolCreateManyInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  cityId: string;
}

export interface SchoolUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
}

export interface ClassroomCreateInput {
  id?: string;
  name: string;
  school?: SchoolCreateNestedOneWithoutClassroomsInput;
  user: UserCreateNestedOneWithoutClassroomsInput;
  students?: ClassroomStudentCreateNestedManyWithoutClassroomInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUncheckedCreateInput {
  id?: string;
  name: string;
  schoolId?: string;
  userId: string;
  students?: ClassroomStudentUncheckedCreateNestedManyWithoutClassroomInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  school?: SchoolUpdateOneWithoutClassroomsInput;
  user?: UserUpdateOneRequiredWithoutClassroomsInput;
  students?: ClassroomStudentUpdateManyWithoutClassroomInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  students?: ClassroomStudentUncheckedUpdateManyWithoutClassroomInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomCreateManyInput {
  id?: string;
  name: string;
  schoolId?: string;
  userId: string;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentCreateInput {
  id?: string;
  user: UserCreateNestedOneWithoutClassroomStudentsInput;
  classroom?: ClassroomCreateNestedOneWithoutStudentsInput;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentUncheckedCreateInput {
  id?: string;
  userId: string;
  classroomId?: string;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutClassroomStudentsInput;
  classroom?: ClassroomUpdateOneWithoutStudentsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  classroomId?: NullableStringFieldUpdateOperationsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentCreateManyInput {
  id?: string;
  userId: string;
  classroomId?: string;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  classroomId?: NullableStringFieldUpdateOperationsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
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
  password?: string;
  user: UserCreateNestedOneWithoutExamsessionsInput;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedCreateInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  password?: string;
  userId: string;
  examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  password?: NullableStringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExamsessionsInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  password?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionCreateManyInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  password?: string;
  userId: string;
}

export interface ExamSessionUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  password?: NullableStringFieldUpdateOperationsInput;
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

export interface CityListRelationFilter {
  every?: CityWhereInput;
  some?: CityWhereInput;
  none?: CityWhereInput;
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

export interface SchoolListRelationFilter {
  every?: SchoolWhereInput;
  some?: SchoolWhereInput;
  none?: SchoolWhereInput;
}

export interface CityOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface SchoolOrderByRelationAggregateInput {
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

export interface CityCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
}

export interface CityMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
}

export interface CityMinOrderByAggregateInput {
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

export interface CityRelationFilter {
  is?: CityWhereInput;
  isNot?: CityWhereInput;
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

export interface ClassroomListRelationFilter {
  every?: ClassroomWhereInput;
  some?: ClassroomWhereInput;
  none?: ClassroomWhereInput;
}

export interface ClassroomStudentListRelationFilter {
  every?: ClassroomStudentWhereInput;
  some?: ClassroomStudentWhereInput;
  none?: ClassroomStudentWhereInput;
}

export interface NotificationListRelationFilter {
  every?: NotificationWhereInput;
  some?: NotificationWhereInput;
  none?: NotificationWhereInput;
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

export interface ClassroomOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ClassroomStudentOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface NotificationOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  balance?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  profilePicturePath?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nisn?: SortOrder;
  nrg?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
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

export interface IntNullableListFilter {
  equals?: number[];
  has?: number;
  hasEvery?: number[];
  hasSome?: number[];
  isEmpty?: boolean;
}

export interface SchoolCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  npsn?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  levels?: SortOrder;
  type?: SortOrder;
  address?: SortOrder;
  logoPath?: SortOrder;
  bannerPath?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
}

export interface SchoolAvgOrderByAggregateInput {
  levels?: SortOrder;
}

export interface SchoolMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  npsn?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  type?: SortOrder;
  address?: SortOrder;
  logoPath?: SortOrder;
  bannerPath?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
}

export interface SchoolMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  npsn?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  type?: SortOrder;
  address?: SortOrder;
  logoPath?: SortOrder;
  bannerPath?: SortOrder;
  provinceId?: SortOrder;
  cityId?: SortOrder;
}

export interface SchoolSumOrderByAggregateInput {
  levels?: SortOrder;
}

export interface SchoolRelationFilter {
  is?: SchoolWhereInput;
  isNot?: SchoolWhereInput;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface ClassroomCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  level?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomAvgOrderByAggregateInput {
  level?: SortOrder;
}

export interface ClassroomMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  level?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  level?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomSumOrderByAggregateInput {
  level?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface ClassroomRelationFilter {
  is?: ClassroomWhereInput;
  isNot?: ClassroomWhereInput;
}

export interface EnumClassroomStudentStatusFilter {
  equals?: ClassroomStudentStatus;
  in?: ClassroomStudentStatus[];
  notIn?: ClassroomStudentStatus[];
  not?: NestedEnumClassroomStudentStatusFilter;
}

export interface ClassroomStudentCountOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  classroomId?: SortOrder;
  status?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomStudentMaxOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  classroomId?: SortOrder;
  status?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ClassroomStudentMinOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  classroomId?: SortOrder;
  status?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface EnumClassroomStudentStatusWithAggregatesFilter {
  equals?: ClassroomStudentStatus;
  in?: ClassroomStudentStatus[];
  notIn?: ClassroomStudentStatus[];
  not?: NestedEnumClassroomStudentStatusWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumClassroomStudentStatusFilter;
  _max?: NestedEnumClassroomStudentStatusFilter;
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

export interface ExamSessionCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  password?: SortOrder;
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
  password?: SortOrder;
  userId?: SortOrder;
}

export interface ExamSessionMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  openAt?: SortOrder;
  closeAt?: SortOrder;
  maxPlayer?: SortOrder;
  password?: SortOrder;
  userId?: SortOrder;
}

export interface ExamSessionSumOrderByAggregateInput {
  maxPlayer?: SortOrder;
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

export interface CityCreateNestedManyWithoutProvinceInput {
  create?: CityCreateWithoutProvinceInput[];
  connectOrCreate?: CityCreateOrConnectWithoutProvinceInput[];
  createMany?: CityCreateManyProvinceInputEnvelope;
  connect?: CityWhereUniqueInput[];
}

export interface UserCreateNestedManyWithoutProvinceInput {
  create?: UserCreateWithoutProvinceInput[];
  connectOrCreate?: UserCreateOrConnectWithoutProvinceInput[];
  createMany?: UserCreateManyProvinceInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface SchoolCreateNestedManyWithoutProvinceInput {
  create?: SchoolCreateWithoutProvinceInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutProvinceInput[];
  createMany?: SchoolCreateManyProvinceInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
}

export interface CityUncheckedCreateNestedManyWithoutProvinceInput {
  create?: CityCreateWithoutProvinceInput[];
  connectOrCreate?: CityCreateOrConnectWithoutProvinceInput[];
  createMany?: CityCreateManyProvinceInputEnvelope;
  connect?: CityWhereUniqueInput[];
}

export interface UserUncheckedCreateNestedManyWithoutProvinceInput {
  create?: UserCreateWithoutProvinceInput[];
  connectOrCreate?: UserCreateOrConnectWithoutProvinceInput[];
  createMany?: UserCreateManyProvinceInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface SchoolUncheckedCreateNestedManyWithoutProvinceInput {
  create?: SchoolCreateWithoutProvinceInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutProvinceInput[];
  createMany?: SchoolCreateManyProvinceInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface CityUpdateManyWithoutProvinceInput {
  create?: CityCreateWithoutProvinceInput[];
  connectOrCreate?: CityCreateOrConnectWithoutProvinceInput[];
  upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: CityCreateManyProvinceInputEnvelope;
  set?: CityWhereUniqueInput[];
  disconnect?: CityWhereUniqueInput[];
  delete?: CityWhereUniqueInput[];
  connect?: CityWhereUniqueInput[];
  update?: CityUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: CityUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: CityScalarWhereInput[];
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

export interface SchoolUpdateManyWithoutProvinceInput {
  create?: SchoolCreateWithoutProvinceInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutProvinceInput[];
  upsert?: SchoolUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: SchoolCreateManyProvinceInputEnvelope;
  set?: SchoolWhereUniqueInput[];
  disconnect?: SchoolWhereUniqueInput[];
  delete?: SchoolWhereUniqueInput[];
  connect?: SchoolWhereUniqueInput[];
  update?: SchoolUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: SchoolUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: SchoolScalarWhereInput[];
}

export interface CityUncheckedUpdateManyWithoutProvinceInput {
  create?: CityCreateWithoutProvinceInput[];
  connectOrCreate?: CityCreateOrConnectWithoutProvinceInput[];
  upsert?: CityUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: CityCreateManyProvinceInputEnvelope;
  set?: CityWhereUniqueInput[];
  disconnect?: CityWhereUniqueInput[];
  delete?: CityWhereUniqueInput[];
  connect?: CityWhereUniqueInput[];
  update?: CityUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: CityUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: CityScalarWhereInput[];
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

export interface SchoolUncheckedUpdateManyWithoutProvinceInput {
  create?: SchoolCreateWithoutProvinceInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutProvinceInput[];
  upsert?: SchoolUpsertWithWhereUniqueWithoutProvinceInput[];
  createMany?: SchoolCreateManyProvinceInputEnvelope;
  set?: SchoolWhereUniqueInput[];
  disconnect?: SchoolWhereUniqueInput[];
  delete?: SchoolWhereUniqueInput[];
  connect?: SchoolWhereUniqueInput[];
  update?: SchoolUpdateWithWhereUniqueWithoutProvinceInput[];
  updateMany?: SchoolUpdateManyWithWhereWithoutProvinceInput[];
  deleteMany?: SchoolScalarWhereInput[];
}

export interface ProvinceCreateNestedOneWithoutCitiesInput {
  create?: ProvinceUncheckedCreateWithoutCitiesInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutCitiesInput;
  connect?: ProvinceWhereUniqueInput;
}

export interface UserCreateNestedManyWithoutCityInput {
  create?: UserCreateWithoutCityInput[];
  connectOrCreate?: UserCreateOrConnectWithoutCityInput[];
  createMany?: UserCreateManyCityInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface SchoolCreateNestedManyWithoutCityInput {
  create?: SchoolCreateWithoutCityInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutCityInput[];
  createMany?: SchoolCreateManyCityInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
}

export interface UserUncheckedCreateNestedManyWithoutCityInput {
  create?: UserCreateWithoutCityInput[];
  connectOrCreate?: UserCreateOrConnectWithoutCityInput[];
  createMany?: UserCreateManyCityInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface SchoolUncheckedCreateNestedManyWithoutCityInput {
  create?: SchoolCreateWithoutCityInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutCityInput[];
  createMany?: SchoolCreateManyCityInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
}

export interface ProvinceUpdateOneRequiredWithoutCitiesInput {
  create?: ProvinceUncheckedCreateWithoutCitiesInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutCitiesInput;
  upsert?: ProvinceUpsertWithoutCitiesInput;
  connect?: ProvinceWhereUniqueInput;
  update?: ProvinceUncheckedUpdateWithoutCitiesInput;
}

export interface UserUpdateManyWithoutCityInput {
  create?: UserCreateWithoutCityInput[];
  connectOrCreate?: UserCreateOrConnectWithoutCityInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutCityInput[];
  createMany?: UserCreateManyCityInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutCityInput[];
  updateMany?: UserUpdateManyWithWhereWithoutCityInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface SchoolUpdateManyWithoutCityInput {
  create?: SchoolCreateWithoutCityInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutCityInput[];
  upsert?: SchoolUpsertWithWhereUniqueWithoutCityInput[];
  createMany?: SchoolCreateManyCityInputEnvelope;
  set?: SchoolWhereUniqueInput[];
  disconnect?: SchoolWhereUniqueInput[];
  delete?: SchoolWhereUniqueInput[];
  connect?: SchoolWhereUniqueInput[];
  update?: SchoolUpdateWithWhereUniqueWithoutCityInput[];
  updateMany?: SchoolUpdateManyWithWhereWithoutCityInput[];
  deleteMany?: SchoolScalarWhereInput[];
}

export interface UserUncheckedUpdateManyWithoutCityInput {
  create?: UserCreateWithoutCityInput[];
  connectOrCreate?: UserCreateOrConnectWithoutCityInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutCityInput[];
  createMany?: UserCreateManyCityInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutCityInput[];
  updateMany?: UserUpdateManyWithWhereWithoutCityInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface SchoolUncheckedUpdateManyWithoutCityInput {
  create?: SchoolCreateWithoutCityInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutCityInput[];
  upsert?: SchoolUpsertWithWhereUniqueWithoutCityInput[];
  createMany?: SchoolCreateManyCityInputEnvelope;
  set?: SchoolWhereUniqueInput[];
  disconnect?: SchoolWhereUniqueInput[];
  delete?: SchoolWhereUniqueInput[];
  connect?: SchoolWhereUniqueInput[];
  update?: SchoolUpdateWithWhereUniqueWithoutCityInput[];
  updateMany?: SchoolUpdateManyWithWhereWithoutCityInput[];
  deleteMany?: SchoolScalarWhereInput[];
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

export interface ProvinceCreateNestedOneWithoutUsersInput {
  create?: ProvinceUncheckedCreateWithoutUsersInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput;
  connect?: ProvinceWhereUniqueInput;
}

export interface CityCreateNestedOneWithoutUsersInput {
  create?: CityUncheckedCreateWithoutUsersInput;
  connectOrCreate?: CityCreateOrConnectWithoutUsersInput;
  connect?: CityWhereUniqueInput;
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

export interface ClassroomCreateNestedManyWithoutUserInput {
  create?: ClassroomCreateWithoutUserInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutUserInput[];
  createMany?: ClassroomCreateManyUserInputEnvelope;
  connect?: ClassroomWhereUniqueInput[];
}

export interface ClassroomStudentCreateNestedManyWithoutUserInput {
  create?: ClassroomStudentCreateWithoutUserInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutUserInput[];
  createMany?: ClassroomStudentCreateManyUserInputEnvelope;
  connect?: ClassroomStudentWhereUniqueInput[];
}

export interface NotificationCreateNestedManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[];
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[];
  createMany?: NotificationCreateManyUserInputEnvelope;
  connect?: NotificationWhereUniqueInput[];
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

export interface ClassroomUncheckedCreateNestedManyWithoutUserInput {
  create?: ClassroomCreateWithoutUserInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutUserInput[];
  createMany?: ClassroomCreateManyUserInputEnvelope;
  connect?: ClassroomWhereUniqueInput[];
}

export interface ClassroomStudentUncheckedCreateNestedManyWithoutUserInput {
  create?: ClassroomStudentCreateWithoutUserInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutUserInput[];
  createMany?: ClassroomStudentCreateManyUserInputEnvelope;
  connect?: ClassroomStudentWhereUniqueInput[];
}

export interface NotificationUncheckedCreateNestedManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[];
  connectOrCreate?: NotificationCreateOrConnectWithoutUserInput[];
  createMany?: NotificationCreateManyUserInputEnvelope;
  connect?: NotificationWhereUniqueInput[];
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

export interface CityUpdateOneRequiredWithoutUsersInput {
  create?: CityUncheckedCreateWithoutUsersInput;
  connectOrCreate?: CityCreateOrConnectWithoutUsersInput;
  upsert?: CityUpsertWithoutUsersInput;
  connect?: CityWhereUniqueInput;
  update?: CityUncheckedUpdateWithoutUsersInput;
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

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: undefined;
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

export interface ClassroomUpdateManyWithoutUserInput {
  create?: ClassroomCreateWithoutUserInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutUserInput[];
  upsert?: ClassroomUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ClassroomCreateManyUserInputEnvelope;
  set?: ClassroomWhereUniqueInput[];
  disconnect?: ClassroomWhereUniqueInput[];
  delete?: ClassroomWhereUniqueInput[];
  connect?: ClassroomWhereUniqueInput[];
  update?: ClassroomUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ClassroomUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ClassroomScalarWhereInput[];
}

export interface ClassroomStudentUpdateManyWithoutUserInput {
  create?: ClassroomStudentCreateWithoutUserInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutUserInput[];
  upsert?: ClassroomStudentUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ClassroomStudentCreateManyUserInputEnvelope;
  set?: ClassroomStudentWhereUniqueInput[];
  disconnect?: ClassroomStudentWhereUniqueInput[];
  delete?: ClassroomStudentWhereUniqueInput[];
  connect?: ClassroomStudentWhereUniqueInput[];
  update?: ClassroomStudentUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ClassroomStudentUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ClassroomStudentScalarWhereInput[];
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

export interface ClassroomUncheckedUpdateManyWithoutUserInput {
  create?: ClassroomCreateWithoutUserInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutUserInput[];
  upsert?: ClassroomUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ClassroomCreateManyUserInputEnvelope;
  set?: ClassroomWhereUniqueInput[];
  disconnect?: ClassroomWhereUniqueInput[];
  delete?: ClassroomWhereUniqueInput[];
  connect?: ClassroomWhereUniqueInput[];
  update?: ClassroomUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ClassroomUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ClassroomScalarWhereInput[];
}

export interface ClassroomStudentUncheckedUpdateManyWithoutUserInput {
  create?: ClassroomStudentCreateWithoutUserInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutUserInput[];
  upsert?: ClassroomStudentUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: ClassroomStudentCreateManyUserInputEnvelope;
  set?: ClassroomStudentWhereUniqueInput[];
  disconnect?: ClassroomStudentWhereUniqueInput[];
  delete?: ClassroomStudentWhereUniqueInput[];
  connect?: ClassroomStudentWhereUniqueInput[];
  update?: ClassroomStudentUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: ClassroomStudentUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: ClassroomStudentScalarWhereInput[];
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

export interface ClassroomCreateNestedManyWithoutSchoolInput {
  create?: ClassroomCreateWithoutSchoolInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutSchoolInput[];
  createMany?: ClassroomCreateManySchoolInputEnvelope;
  connect?: ClassroomWhereUniqueInput[];
}

export interface SchoolCreatelevelsInput {
  set: number;
}

export interface ProvinceCreateNestedOneWithoutSchoolInput {
  create?: ProvinceUncheckedCreateWithoutSchoolInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutSchoolInput;
  connect?: ProvinceWhereUniqueInput;
}

export interface CityCreateNestedOneWithoutSchoolInput {
  create?: CityUncheckedCreateWithoutSchoolInput;
  connectOrCreate?: CityCreateOrConnectWithoutSchoolInput;
  connect?: CityWhereUniqueInput;
}

export interface ClassroomUncheckedCreateNestedManyWithoutSchoolInput {
  create?: ClassroomCreateWithoutSchoolInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutSchoolInput[];
  createMany?: ClassroomCreateManySchoolInputEnvelope;
  connect?: ClassroomWhereUniqueInput[];
}

export interface ClassroomUpdateManyWithoutSchoolInput {
  create?: ClassroomCreateWithoutSchoolInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutSchoolInput[];
  upsert?: ClassroomUpsertWithWhereUniqueWithoutSchoolInput[];
  createMany?: ClassroomCreateManySchoolInputEnvelope;
  set?: ClassroomWhereUniqueInput[];
  disconnect?: ClassroomWhereUniqueInput[];
  delete?: ClassroomWhereUniqueInput[];
  connect?: ClassroomWhereUniqueInput[];
  update?: ClassroomUpdateWithWhereUniqueWithoutSchoolInput[];
  updateMany?: ClassroomUpdateManyWithWhereWithoutSchoolInput[];
  deleteMany?: ClassroomScalarWhereInput[];
}

export interface SchoolUpdatelevelsInput {
  set?: number[];
  push?: number[];
}

export interface ProvinceUpdateOneRequiredWithoutSchoolInput {
  create?: ProvinceUncheckedCreateWithoutSchoolInput;
  connectOrCreate?: ProvinceCreateOrConnectWithoutSchoolInput;
  upsert?: ProvinceUpsertWithoutSchoolInput;
  connect?: ProvinceWhereUniqueInput;
  update?: ProvinceUncheckedUpdateWithoutSchoolInput;
}

export interface CityUpdateOneRequiredWithoutSchoolInput {
  create?: CityUncheckedCreateWithoutSchoolInput;
  connectOrCreate?: CityCreateOrConnectWithoutSchoolInput;
  upsert?: CityUpsertWithoutSchoolInput;
  connect?: CityWhereUniqueInput;
  update?: CityUncheckedUpdateWithoutSchoolInput;
}

export interface ClassroomUncheckedUpdateManyWithoutSchoolInput {
  create?: ClassroomCreateWithoutSchoolInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutSchoolInput[];
  upsert?: ClassroomUpsertWithWhereUniqueWithoutSchoolInput[];
  createMany?: ClassroomCreateManySchoolInputEnvelope;
  set?: ClassroomWhereUniqueInput[];
  disconnect?: ClassroomWhereUniqueInput[];
  delete?: ClassroomWhereUniqueInput[];
  connect?: ClassroomWhereUniqueInput[];
  update?: ClassroomUpdateWithWhereUniqueWithoutSchoolInput[];
  updateMany?: ClassroomUpdateManyWithWhereWithoutSchoolInput[];
  deleteMany?: ClassroomScalarWhereInput[];
}

export interface SchoolCreateNestedOneWithoutClassroomsInput {
  create?: SchoolUncheckedCreateWithoutClassroomsInput;
  connectOrCreate?: SchoolCreateOrConnectWithoutClassroomsInput;
  connect?: SchoolWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutClassroomsInput {
  create?: UserUncheckedCreateWithoutClassroomsInput;
  connectOrCreate?: UserCreateOrConnectWithoutClassroomsInput;
  connect?: UserWhereUniqueInput;
}

export interface ClassroomStudentCreateNestedManyWithoutClassroomInput {
  create?: ClassroomStudentCreateWithoutClassroomInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutClassroomInput[];
  createMany?: ClassroomStudentCreateManyClassroomInputEnvelope;
  connect?: ClassroomStudentWhereUniqueInput[];
}

export interface ClassroomStudentUncheckedCreateNestedManyWithoutClassroomInput {
  create?: ClassroomStudentCreateWithoutClassroomInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutClassroomInput[];
  createMany?: ClassroomStudentCreateManyClassroomInputEnvelope;
  connect?: ClassroomStudentWhereUniqueInput[];
}

export interface SchoolUpdateOneWithoutClassroomsInput {
  create?: SchoolUncheckedCreateWithoutClassroomsInput;
  connectOrCreate?: SchoolCreateOrConnectWithoutClassroomsInput;
  upsert?: SchoolUpsertWithoutClassroomsInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: SchoolWhereUniqueInput;
  update?: SchoolUncheckedUpdateWithoutClassroomsInput;
}

export interface UserUpdateOneRequiredWithoutClassroomsInput {
  create?: UserUncheckedCreateWithoutClassroomsInput;
  connectOrCreate?: UserCreateOrConnectWithoutClassroomsInput;
  upsert?: UserUpsertWithoutClassroomsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutClassroomsInput;
}

export interface ClassroomStudentUpdateManyWithoutClassroomInput {
  create?: ClassroomStudentCreateWithoutClassroomInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutClassroomInput[];
  upsert?: ClassroomStudentUpsertWithWhereUniqueWithoutClassroomInput[];
  createMany?: ClassroomStudentCreateManyClassroomInputEnvelope;
  set?: ClassroomStudentWhereUniqueInput[];
  disconnect?: ClassroomStudentWhereUniqueInput[];
  delete?: ClassroomStudentWhereUniqueInput[];
  connect?: ClassroomStudentWhereUniqueInput[];
  update?: ClassroomStudentUpdateWithWhereUniqueWithoutClassroomInput[];
  updateMany?: ClassroomStudentUpdateManyWithWhereWithoutClassroomInput[];
  deleteMany?: ClassroomStudentScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface ClassroomStudentUncheckedUpdateManyWithoutClassroomInput {
  create?: ClassroomStudentCreateWithoutClassroomInput[];
  connectOrCreate?: ClassroomStudentCreateOrConnectWithoutClassroomInput[];
  upsert?: ClassroomStudentUpsertWithWhereUniqueWithoutClassroomInput[];
  createMany?: ClassroomStudentCreateManyClassroomInputEnvelope;
  set?: ClassroomStudentWhereUniqueInput[];
  disconnect?: ClassroomStudentWhereUniqueInput[];
  delete?: ClassroomStudentWhereUniqueInput[];
  connect?: ClassroomStudentWhereUniqueInput[];
  update?: ClassroomStudentUpdateWithWhereUniqueWithoutClassroomInput[];
  updateMany?: ClassroomStudentUpdateManyWithWhereWithoutClassroomInput[];
  deleteMany?: ClassroomStudentScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutClassroomStudentsInput {
  create?: UserUncheckedCreateWithoutClassroomStudentsInput;
  connectOrCreate?: UserCreateOrConnectWithoutClassroomStudentsInput;
  connect?: UserWhereUniqueInput;
}

export interface ClassroomCreateNestedOneWithoutStudentsInput {
  create?: ClassroomUncheckedCreateWithoutStudentsInput;
  connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput;
  connect?: ClassroomWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutClassroomStudentsInput {
  create?: UserUncheckedCreateWithoutClassroomStudentsInput;
  connectOrCreate?: UserCreateOrConnectWithoutClassroomStudentsInput;
  upsert?: UserUpsertWithoutClassroomStudentsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutClassroomStudentsInput;
}

export interface ClassroomUpdateOneWithoutStudentsInput {
  create?: ClassroomUncheckedCreateWithoutStudentsInput;
  connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput;
  upsert?: ClassroomUpsertWithoutStudentsInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: ClassroomWhereUniqueInput;
  update?: ClassroomUncheckedUpdateWithoutStudentsInput;
}

export interface EnumClassroomStudentStatusFieldUpdateOperationsInput {
  set?: ClassroomStudentStatus;
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

export interface NullableIntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
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

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedEnumClassroomStudentStatusFilter {
  equals?: ClassroomStudentStatus;
  in?: ClassroomStudentStatus[];
  notIn?: ClassroomStudentStatus[];
  not?: NestedEnumClassroomStudentStatusFilter;
}

export interface NestedEnumClassroomStudentStatusWithAggregatesFilter {
  equals?: ClassroomStudentStatus;
  in?: ClassroomStudentStatus[];
  notIn?: ClassroomStudentStatus[];
  not?: NestedEnumClassroomStudentStatusWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumClassroomStudentStatusFilter;
  _max?: NestedEnumClassroomStudentStatusFilter;
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

export interface CityCreateWithoutProvinceInput {
  id?: string;
  name: string;
  users?: UserCreateNestedManyWithoutCityInput;
  School?: SchoolCreateNestedManyWithoutCityInput;
}

export interface CityUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  users?: UserUncheckedCreateNestedManyWithoutCityInput;
  School?: SchoolUncheckedCreateNestedManyWithoutCityInput;
}

export interface CityCreateOrConnectWithoutProvinceInput {
  where: CityWhereUniqueInput;
  create: CityUncheckedCreateWithoutProvinceInput;
}

export interface CityCreateManyProvinceInputEnvelope {
  data: CityCreateManyProvinceInput;
  skipDuplicates?: boolean;
}

export interface UserCreateWithoutProvinceInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutProvinceInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutProvinceInput;
}

export interface UserCreateManyProvinceInputEnvelope {
  data: UserCreateManyProvinceInput;
  skipDuplicates?: boolean;
}

export interface SchoolCreateWithoutProvinceInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  city: CityCreateNestedOneWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  cityId: string;
}

export interface SchoolCreateOrConnectWithoutProvinceInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutProvinceInput;
}

export interface SchoolCreateManyProvinceInputEnvelope {
  data: SchoolCreateManyProvinceInput;
  skipDuplicates?: boolean;
}

export interface CityUpsertWithWhereUniqueWithoutProvinceInput {
  where: CityWhereUniqueInput;
  update: CityUncheckedUpdateWithoutProvinceInput;
  create: CityUncheckedCreateWithoutProvinceInput;
}

export interface CityUpdateWithWhereUniqueWithoutProvinceInput {
  where: CityWhereUniqueInput;
  data: CityUncheckedUpdateWithoutProvinceInput;
}

export interface CityUpdateManyWithWhereWithoutProvinceInput {
  where: CityScalarWhereInput;
  data: CityUncheckedUpdateManyWithoutCitiesInput;
}

export interface CityScalarWhereInput {
  AND?: CityScalarWhereInput[];
  OR?: CityScalarWhereInput[];
  NOT?: CityScalarWhereInput[];
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
  password?: StringFilter;
  phoneNumber?: StringFilter;
  address?: StringFilter;
  profilePicturePath?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  nisn?: StringNullableFilter;
  nrg?: StringNullableFilter;
  provinceId?: StringFilter;
  cityId?: StringFilter;
  isAdmin?: BoolFilter;
  isBimbel?: BoolFilter;
  role?: EnumRolesFilter;
  balance?: FloatFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  phoneNumberVerifiedAt?: DateTimeNullableFilter;
  bimbelApprovedAt?: DateTimeNullableFilter;
}

export interface SchoolUpsertWithWhereUniqueWithoutProvinceInput {
  where: SchoolWhereUniqueInput;
  update: SchoolUncheckedUpdateWithoutProvinceInput;
  create: SchoolUncheckedCreateWithoutProvinceInput;
}

export interface SchoolUpdateWithWhereUniqueWithoutProvinceInput {
  where: SchoolWhereUniqueInput;
  data: SchoolUncheckedUpdateWithoutProvinceInput;
}

export interface SchoolUpdateManyWithWhereWithoutProvinceInput {
  where: SchoolScalarWhereInput;
  data: SchoolUncheckedUpdateManyWithoutSchoolInput;
}

export interface SchoolScalarWhereInput {
  AND?: SchoolScalarWhereInput[];
  OR?: SchoolScalarWhereInput[];
  NOT?: SchoolScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  npsn?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  levels?: IntNullableListFilter;
  type?: StringFilter;
  address?: StringFilter;
  logoPath?: StringNullableFilter;
  bannerPath?: StringNullableFilter;
  provinceId?: StringFilter;
  cityId?: StringFilter;
}

export interface ProvinceCreateWithoutCitiesInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
  School?: SchoolCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutCitiesInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
  School?: SchoolUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutCitiesInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutCitiesInput;
}

export interface UserCreateWithoutCityInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutCityInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutCityInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutCityInput;
}

export interface UserCreateManyCityInputEnvelope {
  data: UserCreateManyCityInput;
  skipDuplicates?: boolean;
}

export interface SchoolCreateWithoutCityInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutCityInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
}

export interface SchoolCreateOrConnectWithoutCityInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutCityInput;
}

export interface SchoolCreateManyCityInputEnvelope {
  data: SchoolCreateManyCityInput;
  skipDuplicates?: boolean;
}

export interface ProvinceUpsertWithoutCitiesInput {
  update: ProvinceUncheckedUpdateWithoutCitiesInput;
  create: ProvinceUncheckedCreateWithoutCitiesInput;
}

export interface ProvinceUpdateWithoutCitiesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
  School?: SchoolUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutCitiesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
  School?: SchoolUncheckedUpdateManyWithoutProvinceInput;
}

export interface UserUpsertWithWhereUniqueWithoutCityInput {
  where: UserWhereUniqueInput;
  update: UserUncheckedUpdateWithoutCityInput;
  create: UserUncheckedCreateWithoutCityInput;
}

export interface UserUpdateWithWhereUniqueWithoutCityInput {
  where: UserWhereUniqueInput;
  data: UserUncheckedUpdateWithoutCityInput;
}

export interface UserUpdateManyWithWhereWithoutCityInput {
  where: UserScalarWhereInput;
  data: UserUncheckedUpdateManyWithoutUsersInput;
}

export interface SchoolUpsertWithWhereUniqueWithoutCityInput {
  where: SchoolWhereUniqueInput;
  update: SchoolUncheckedUpdateWithoutCityInput;
  create: SchoolUncheckedCreateWithoutCityInput;
}

export interface SchoolUpdateWithWhereUniqueWithoutCityInput {
  where: SchoolWhereUniqueInput;
  data: SchoolUncheckedUpdateWithoutCityInput;
}

export interface SchoolUpdateManyWithWhereWithoutCityInput {
  where: SchoolScalarWhereInput;
  data: SchoolUncheckedUpdateManyWithoutSchoolInput;
}

export interface UserCreateWithoutIdentityFilesInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutIdentityFilesInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
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
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutIdentityFilesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface ProvinceCreateWithoutUsersInput {
  id?: string;
  name: string;
  cities?: CityCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  School?: SchoolCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutUsersInput {
  id?: string;
  name: string;
  cities?: CityUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  School?: SchoolUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutUsersInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutUsersInput;
}

export interface CityCreateWithoutUsersInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutCitiesInput;
  School?: SchoolCreateNestedManyWithoutCityInput;
}

export interface CityUncheckedCreateWithoutUsersInput {
  id?: string;
  name: string;
  provinceId: string;
  School?: SchoolUncheckedCreateNestedManyWithoutCityInput;
}

export interface CityCreateOrConnectWithoutUsersInput {
  where: CityWhereUniqueInput;
  create: CityUncheckedCreateWithoutUsersInput;
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
  password?: string;
  examAnswers?: ExamAnswerCreateNestedManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedCreateWithoutUserInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  password?: string;
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

export interface ClassroomCreateWithoutUserInput {
  id?: string;
  name: string;
  school?: SchoolCreateNestedOneWithoutClassroomsInput;
  students?: ClassroomStudentCreateNestedManyWithoutClassroomInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUncheckedCreateWithoutUserInput {
  id?: string;
  name: string;
  schoolId?: string;
  students?: ClassroomStudentUncheckedCreateNestedManyWithoutClassroomInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomCreateOrConnectWithoutUserInput {
  where: ClassroomWhereUniqueInput;
  create: ClassroomUncheckedCreateWithoutUserInput;
}

export interface ClassroomCreateManyUserInputEnvelope {
  data: ClassroomCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface ClassroomStudentCreateWithoutUserInput {
  id?: string;
  classroom?: ClassroomCreateNestedOneWithoutStudentsInput;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentUncheckedCreateWithoutUserInput {
  id?: string;
  classroomId?: string;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentCreateOrConnectWithoutUserInput {
  where: ClassroomStudentWhereUniqueInput;
  create: ClassroomStudentUncheckedCreateWithoutUserInput;
}

export interface ClassroomStudentCreateManyUserInputEnvelope {
  data: ClassroomStudentCreateManyUserInput;
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

export interface ProvinceUpsertWithoutUsersInput {
  update: ProvinceUncheckedUpdateWithoutUsersInput;
  create: ProvinceUncheckedCreateWithoutUsersInput;
}

export interface ProvinceUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  cities?: CityUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  School?: SchoolUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  cities?: CityUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  School?: SchoolUncheckedUpdateManyWithoutProvinceInput;
}

export interface CityUpsertWithoutUsersInput {
  update: CityUncheckedUpdateWithoutUsersInput;
  create: CityUncheckedCreateWithoutUsersInput;
}

export interface CityUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutCitiesInput;
  School?: SchoolUpdateManyWithoutCityInput;
}

export interface CityUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  School?: SchoolUncheckedUpdateManyWithoutCityInput;
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
  password?: StringNullableFilter;
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

export interface ClassroomUpsertWithWhereUniqueWithoutUserInput {
  where: ClassroomWhereUniqueInput;
  update: ClassroomUncheckedUpdateWithoutUserInput;
  create: ClassroomUncheckedCreateWithoutUserInput;
}

export interface ClassroomUpdateWithWhereUniqueWithoutUserInput {
  where: ClassroomWhereUniqueInput;
  data: ClassroomUncheckedUpdateWithoutUserInput;
}

export interface ClassroomUpdateManyWithWhereWithoutUserInput {
  where: ClassroomScalarWhereInput;
  data: ClassroomUncheckedUpdateManyWithoutClassroomsInput;
}

export interface ClassroomScalarWhereInput {
  AND?: ClassroomScalarWhereInput[];
  OR?: ClassroomScalarWhereInput[];
  NOT?: ClassroomScalarWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  schoolId?: StringNullableFilter;
  userId?: StringFilter;
  level?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface ClassroomStudentUpsertWithWhereUniqueWithoutUserInput {
  where: ClassroomStudentWhereUniqueInput;
  update: ClassroomStudentUncheckedUpdateWithoutUserInput;
  create: ClassroomStudentUncheckedCreateWithoutUserInput;
}

export interface ClassroomStudentUpdateWithWhereUniqueWithoutUserInput {
  where: ClassroomStudentWhereUniqueInput;
  data: ClassroomStudentUncheckedUpdateWithoutUserInput;
}

export interface ClassroomStudentUpdateManyWithWhereWithoutUserInput {
  where: ClassroomStudentScalarWhereInput;
  data: ClassroomStudentUncheckedUpdateManyWithoutClassroomStudentsInput;
}

export interface ClassroomStudentScalarWhereInput {
  AND?: ClassroomStudentScalarWhereInput[];
  OR?: ClassroomStudentScalarWhereInput[];
  NOT?: ClassroomStudentScalarWhereInput[];
  id?: StringFilter;
  userId?: StringFilter;
  classroomId?: StringNullableFilter;
  status?: EnumClassroomStudentStatusFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
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

export interface UserCreateWithoutNotificationsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutNotificationsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
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
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutNotificationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
}

export interface ClassroomCreateWithoutSchoolInput {
  id?: string;
  name: string;
  user: UserCreateNestedOneWithoutClassroomsInput;
  students?: ClassroomStudentCreateNestedManyWithoutClassroomInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUncheckedCreateWithoutSchoolInput {
  id?: string;
  name: string;
  userId: string;
  students?: ClassroomStudentUncheckedCreateNestedManyWithoutClassroomInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomCreateOrConnectWithoutSchoolInput {
  where: ClassroomWhereUniqueInput;
  create: ClassroomUncheckedCreateWithoutSchoolInput;
}

export interface ClassroomCreateManySchoolInputEnvelope {
  data: ClassroomCreateManySchoolInput;
  skipDuplicates?: boolean;
}

export interface ProvinceCreateWithoutSchoolInput {
  id?: string;
  name: string;
  cities?: CityCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutSchoolInput {
  id?: string;
  name: string;
  cities?: CityUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutSchoolInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutSchoolInput;
}

export interface CityCreateWithoutSchoolInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutCitiesInput;
  users?: UserCreateNestedManyWithoutCityInput;
}

export interface CityUncheckedCreateWithoutSchoolInput {
  id?: string;
  name: string;
  provinceId: string;
  users?: UserUncheckedCreateNestedManyWithoutCityInput;
}

export interface CityCreateOrConnectWithoutSchoolInput {
  where: CityWhereUniqueInput;
  create: CityUncheckedCreateWithoutSchoolInput;
}

export interface ClassroomUpsertWithWhereUniqueWithoutSchoolInput {
  where: ClassroomWhereUniqueInput;
  update: ClassroomUncheckedUpdateWithoutSchoolInput;
  create: ClassroomUncheckedCreateWithoutSchoolInput;
}

export interface ClassroomUpdateWithWhereUniqueWithoutSchoolInput {
  where: ClassroomWhereUniqueInput;
  data: ClassroomUncheckedUpdateWithoutSchoolInput;
}

export interface ClassroomUpdateManyWithWhereWithoutSchoolInput {
  where: ClassroomScalarWhereInput;
  data: ClassroomUncheckedUpdateManyWithoutClassroomsInput;
}

export interface ProvinceUpsertWithoutSchoolInput {
  update: ProvinceUncheckedUpdateWithoutSchoolInput;
  create: ProvinceUncheckedCreateWithoutSchoolInput;
}

export interface ProvinceUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  cities?: CityUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  cities?: CityUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
}

export interface CityUpsertWithoutSchoolInput {
  update: CityUncheckedUpdateWithoutSchoolInput;
  create: CityUncheckedCreateWithoutSchoolInput;
}

export interface CityUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutCitiesInput;
  users?: UserUpdateManyWithoutCityInput;
}

export interface CityUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutCityInput;
}

export interface SchoolCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  city: CityCreateNestedOneWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  cityId: string;
}

export interface SchoolCreateOrConnectWithoutClassroomsInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutClassroomsInput;
}

export interface UserCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutClassroomsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutClassroomsInput;
}

export interface ClassroomStudentCreateWithoutClassroomInput {
  id?: string;
  user: UserCreateNestedOneWithoutClassroomStudentsInput;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentUncheckedCreateWithoutClassroomInput {
  id?: string;
  userId: string;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentCreateOrConnectWithoutClassroomInput {
  where: ClassroomStudentWhereUniqueInput;
  create: ClassroomStudentUncheckedCreateWithoutClassroomInput;
}

export interface ClassroomStudentCreateManyClassroomInputEnvelope {
  data: ClassroomStudentCreateManyClassroomInput;
  skipDuplicates?: boolean;
}

export interface SchoolUpsertWithoutClassroomsInput {
  update: SchoolUncheckedUpdateWithoutClassroomsInput;
  create: SchoolUncheckedCreateWithoutClassroomsInput;
}

export interface SchoolUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  city?: CityUpdateOneRequiredWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
}

export interface UserUpsertWithoutClassroomsInput {
  update: UserUncheckedUpdateWithoutClassroomsInput;
  create: UserUncheckedCreateWithoutClassroomsInput;
}

export interface UserUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface ClassroomStudentUpsertWithWhereUniqueWithoutClassroomInput {
  where: ClassroomStudentWhereUniqueInput;
  update: ClassroomStudentUncheckedUpdateWithoutClassroomInput;
  create: ClassroomStudentUncheckedCreateWithoutClassroomInput;
}

export interface ClassroomStudentUpdateWithWhereUniqueWithoutClassroomInput {
  where: ClassroomStudentWhereUniqueInput;
  data: ClassroomStudentUncheckedUpdateWithoutClassroomInput;
}

export interface ClassroomStudentUpdateManyWithWhereWithoutClassroomInput {
  where: ClassroomStudentScalarWhereInput;
  data: ClassroomStudentUncheckedUpdateManyWithoutStudentsInput;
}

export interface UserCreateWithoutClassroomStudentsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutClassroomStudentsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutClassroomStudentsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutClassroomStudentsInput;
}

export interface ClassroomCreateWithoutStudentsInput {
  id?: string;
  name: string;
  school?: SchoolCreateNestedOneWithoutClassroomsInput;
  user: UserCreateNestedOneWithoutClassroomsInput;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUncheckedCreateWithoutStudentsInput {
  id?: string;
  name: string;
  schoolId?: string;
  userId: string;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomCreateOrConnectWithoutStudentsInput {
  where: ClassroomWhereUniqueInput;
  create: ClassroomUncheckedCreateWithoutStudentsInput;
}

export interface UserUpsertWithoutClassroomStudentsInput {
  update: UserUncheckedUpdateWithoutClassroomStudentsInput;
  create: UserUncheckedCreateWithoutClassroomStudentsInput;
}

export interface UserUpdateWithoutClassroomStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutClassroomStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface ClassroomUpsertWithoutStudentsInput {
  update: ClassroomUncheckedUpdateWithoutStudentsInput;
  create: ClassroomUncheckedCreateWithoutStudentsInput;
}

export interface ClassroomUpdateWithoutStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  school?: SchoolUpdateOneWithoutClassroomsInput;
  user?: UserUpdateOneRequiredWithoutClassroomsInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomUncheckedUpdateWithoutStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserCreateWithoutMyPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutMyPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutMyPrivateChatsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutMyPrivateChatsInput;
}

export interface UserCreateWithoutPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutPrivateChatsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
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
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutMyPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface UserUpsertWithoutPrivateChatsInput {
  update: UserUncheckedUpdateWithoutPrivateChatsInput;
  create: UserUncheckedCreateWithoutPrivateChatsInput;
}

export interface UserUpdateWithoutPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutPrivateChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface UserCreateWithoutExaminationsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutExaminationsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
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
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutExaminationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
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
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutExamsessionsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
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
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutExamsessionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
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
  password?: string;
  user: UserCreateNestedOneWithoutExamsessionsInput;
}

export interface ExamSessionUncheckedCreateWithoutExamAnswersInput {
  id?: string;
  name: string;
  openAt?: undefined;
  closeAt?: undefined;
  maxPlayer?: number;
  password?: string;
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
  password?: NullableStringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutExamsessionsInput;
}

export interface ExamSessionUncheckedUpdateWithoutExamAnswersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  password?: NullableStringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
}

export interface UserCreateWithoutQuestionsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  city: CityCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutQuestionsInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedCreateNestedManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
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
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutQuestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
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

export interface CityCreateManyProvinceInput {
  id?: string;
  name: string;
}

export interface UserCreateManyProvinceInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  cityId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
}

export interface SchoolCreateManyProvinceInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  cityId: string;
}

export interface CityUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutCityInput;
  School?: SchoolUpdateManyWithoutCityInput;
}

export interface CityUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutCityInput;
  School?: SchoolUncheckedUpdateManyWithoutCityInput;
}

export interface CityUncheckedUpdateManyWithoutCitiesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface UserUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  city?: CityUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateManyWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
}

export interface SchoolUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  city?: CityUpdateOneRequiredWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
}

export interface SchoolUncheckedUpdateManyWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  cityId?: StringFieldUpdateOperationsInput;
}

export interface UserCreateManyCityInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  provinceId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
}

export interface SchoolCreateManyCityInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
}

export interface UserUpdateWithoutCityInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutCityInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  privateChats?: PrivateChatUncheckedUpdateManyWithoutToInput;
  myPrivateChats?: PrivateChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
}

export interface SchoolUpdateWithoutCityInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutCityInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
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
  password?: string;
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

export interface ClassroomCreateManyUserInput {
  id?: string;
  name: string;
  schoolId?: string;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentCreateManyUserInput {
  id?: string;
  classroomId?: string;
  status?: ClassroomStudentStatus;
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
  password?: NullableStringFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  password?: NullableStringFieldUpdateOperationsInput;
  examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSessionInput;
}

export interface ExamSessionUncheckedUpdateManyWithoutExamsessionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  openAt?: NullableDateTimeFieldUpdateOperationsInput;
  closeAt?: NullableDateTimeFieldUpdateOperationsInput;
  maxPlayer?: NullableIntFieldUpdateOperationsInput;
  password?: NullableStringFieldUpdateOperationsInput;
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

export interface ClassroomUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  school?: SchoolUpdateOneWithoutClassroomsInput;
  students?: ClassroomStudentUpdateManyWithoutClassroomInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
  students?: ClassroomStudentUncheckedUpdateManyWithoutClassroomInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomUncheckedUpdateManyWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  classroom?: ClassroomUpdateOneWithoutStudentsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  classroomId?: NullableStringFieldUpdateOperationsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentUncheckedUpdateManyWithoutClassroomStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  classroomId?: NullableStringFieldUpdateOperationsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
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

export interface ClassroomCreateManySchoolInput {
  id?: string;
  name: string;
  userId: string;
  level?: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutClassroomsInput;
  students?: ClassroomStudentUpdateManyWithoutClassroomInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  students?: ClassroomStudentUncheckedUpdateManyWithoutClassroomInput;
  level?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentCreateManyClassroomInput {
  id?: string;
  userId: string;
  status?: ClassroomStudentStatus;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ClassroomStudentUpdateWithoutClassroomInput {
  id?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutClassroomStudentsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentUncheckedUpdateWithoutClassroomInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ClassroomStudentUncheckedUpdateManyWithoutStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  status?: EnumClassroomStudentStatusFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
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

export interface AggregateCity {
  _count: Maybe<CityCountAggregateOutputType>;
  _min: Maybe<CityMinAggregateOutputType>;
  _max: Maybe<CityMaxAggregateOutputType>;
}

export interface AggregateIdentityFile {
  _count: Maybe<IdentityFileCountAggregateOutputType>;
  _min: Maybe<IdentityFileMinAggregateOutputType>;
  _max: Maybe<IdentityFileMaxAggregateOutputType>;
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

export interface AggregateSchool {
  _count: Maybe<SchoolCountAggregateOutputType>;
  _avg: Maybe<SchoolAvgAggregateOutputType>;
  _sum: Maybe<SchoolSumAggregateOutputType>;
  _min: Maybe<SchoolMinAggregateOutputType>;
  _max: Maybe<SchoolMaxAggregateOutputType>;
}

export interface AggregateClassroom {
  _count: Maybe<ClassroomCountAggregateOutputType>;
  _avg: Maybe<ClassroomAvgAggregateOutputType>;
  _sum: Maybe<ClassroomSumAggregateOutputType>;
  _min: Maybe<ClassroomMinAggregateOutputType>;
  _max: Maybe<ClassroomMaxAggregateOutputType>;
}

export interface AggregateClassroomStudent {
  _count: Maybe<ClassroomStudentCountAggregateOutputType>;
  _min: Maybe<ClassroomStudentMinAggregateOutputType>;
  _max: Maybe<ClassroomStudentMaxAggregateOutputType>;
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
  cities: number;
  users: number;
  School: number;
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

export interface CityCountOutputType {
  users: number;
  School: number;
}

export interface CityCountAggregateOutputType {
  id: number;
  name: number;
  provinceId: number;
  _all: number;
}

export interface CityMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  provinceId: Maybe<string>;
}

export interface CityMaxAggregateOutputType {
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

export interface UserCountOutputType {
  identityFiles: number;
  questions: number;
  examinations: number;
  examsessions: number;
  privateChats: number;
  myPrivateChats: number;
  classrooms: number;
  classroomStudents: number;
  notifications: number;
}

export interface UserCountAggregateOutputType {
  id: number;
  name: number;
  email: number;
  password: number;
  phoneNumber: number;
  address: number;
  profilePicturePath: number;
  createdAt: number;
  updatedAt: number;
  nisn: number;
  nrg: number;
  provinceId: number;
  cityId: number;
  isAdmin: number;
  isBimbel: number;
  role: number;
  balance: number;
  emailVerifiedAt: number;
  phoneNumberVerifiedAt: number;
  bimbelApprovedAt: number;
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
  password: Maybe<string>;
  phoneNumber: Maybe<string>;
  address: Maybe<string>;
  profilePicturePath: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  provinceId: Maybe<string>;
  cityId: Maybe<string>;
  isAdmin: Maybe<boolean>;
  isBimbel: Maybe<boolean>;
  role: Maybe<Roles>;
  balance: Maybe<number>;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  bimbelApprovedAt: Maybe<undefined>;
}

export interface UserMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  email: Maybe<string>;
  password: Maybe<string>;
  phoneNumber: Maybe<string>;
  address: Maybe<string>;
  profilePicturePath: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  provinceId: Maybe<string>;
  cityId: Maybe<string>;
  isAdmin: Maybe<boolean>;
  isBimbel: Maybe<boolean>;
  role: Maybe<Roles>;
  balance: Maybe<number>;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  bimbelApprovedAt: Maybe<undefined>;
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

export interface SchoolCountOutputType {
  classrooms: number;
}

export interface SchoolCountAggregateOutputType {
  id: number;
  name: number;
  npsn: number;
  createdAt: number;
  updatedAt: number;
  levels: number;
  type: number;
  address: number;
  logoPath: number;
  bannerPath: number;
  provinceId: number;
  cityId: number;
  _all: number;
}

export interface SchoolAvgAggregateOutputType {
  levels: Maybe<number>;
}

export interface SchoolSumAggregateOutputType {
  levels: Maybe<number>;
}

export interface SchoolMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  npsn: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  type: Maybe<string>;
  address: Maybe<string>;
  logoPath: Maybe<string>;
  bannerPath: Maybe<string>;
  provinceId: Maybe<string>;
  cityId: Maybe<string>;
}

export interface SchoolMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  npsn: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  type: Maybe<string>;
  address: Maybe<string>;
  logoPath: Maybe<string>;
  bannerPath: Maybe<string>;
  provinceId: Maybe<string>;
  cityId: Maybe<string>;
}

export interface ClassroomCountOutputType {
  students: number;
}

export interface ClassroomCountAggregateOutputType {
  id: number;
  name: number;
  schoolId: number;
  userId: number;
  level: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ClassroomAvgAggregateOutputType {
  level: Maybe<number>;
}

export interface ClassroomSumAggregateOutputType {
  level: Maybe<number>;
}

export interface ClassroomMinAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  schoolId: Maybe<string>;
  userId: Maybe<string>;
  level: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ClassroomMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  schoolId: Maybe<string>;
  userId: Maybe<string>;
  level: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ClassroomStudentCountAggregateOutputType {
  id: number;
  userId: number;
  classroomId: number;
  status: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ClassroomStudentMinAggregateOutputType {
  id: Maybe<string>;
  userId: Maybe<string>;
  classroomId: Maybe<string>;
  status: Maybe<ClassroomStudentStatus>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ClassroomStudentMaxAggregateOutputType {
  id: Maybe<string>;
  userId: Maybe<string>;
  classroomId: Maybe<string>;
  status: Maybe<ClassroomStudentStatus>;
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
  password: number;
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
  password: Maybe<string>;
  userId: Maybe<string>;
}

export interface ExamSessionMaxAggregateOutputType {
  id: Maybe<string>;
  name: Maybe<string>;
  openAt: Maybe<undefined>;
  closeAt: Maybe<undefined>;
  maxPlayer: Maybe<number>;
  password: Maybe<string>;
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

export interface findUniqueClassroomStudentArgs {
  where: ClassroomStudentWhereUniqueInput;
}

export interface findFirstClassroomStudentArgs {
  where?: ClassroomStudentWhereInput;
  orderBy?: ClassroomStudentOrderByWithRelationInput[];
  cursor?: ClassroomStudentWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ClassroomStudentScalarFieldEnum[];
}

export interface findManyClassroomStudentArgs {
  where?: ClassroomStudentWhereInput;
  orderBy?: ClassroomStudentOrderByWithRelationInput[];
  cursor?: ClassroomStudentWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ClassroomStudentScalarFieldEnum[];
}

export interface findManyClassroomStudentCountArgs {
  where?: ClassroomStudentWhereInput;
  orderBy?: ClassroomStudentOrderByWithRelationInput[];
  cursor?: ClassroomStudentWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ClassroomStudentScalarFieldEnum[];
}

export interface aggregateClassroomStudentArgs {
  where?: ClassroomStudentWhereInput;
  orderBy?: ClassroomStudentOrderByWithRelationInput[];
  cursor?: ClassroomStudentWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueClassroomArgs {
  where: ClassroomWhereUniqueInput;
}

export interface findFirstClassroomArgs {
  where?: ClassroomWhereInput;
  orderBy?: ClassroomOrderByWithRelationInput[];
  cursor?: ClassroomWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ClassroomScalarFieldEnum[];
}

export interface findManyClassroomArgs {
  where?: ClassroomWhereInput;
  orderBy?: ClassroomOrderByWithRelationInput[];
  cursor?: ClassroomWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ClassroomScalarFieldEnum[];
}

export interface findManyClassroomCountArgs {
  where?: ClassroomWhereInput;
  orderBy?: ClassroomOrderByWithRelationInput[];
  cursor?: ClassroomWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ClassroomScalarFieldEnum[];
}

export interface aggregateClassroomArgs {
  where?: ClassroomWhereInput;
  orderBy?: ClassroomOrderByWithRelationInput[];
  cursor?: ClassroomWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueSchoolArgs {
  where: SchoolWhereUniqueInput;
}

export interface findFirstSchoolArgs {
  where?: SchoolWhereInput;
  orderBy?: SchoolOrderByWithRelationInput[];
  cursor?: SchoolWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SchoolScalarFieldEnum[];
}

export interface findManySchoolArgs {
  where?: SchoolWhereInput;
  orderBy?: SchoolOrderByWithRelationInput[];
  cursor?: SchoolWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SchoolScalarFieldEnum[];
}

export interface findManySchoolCountArgs {
  where?: SchoolWhereInput;
  orderBy?: SchoolOrderByWithRelationInput[];
  cursor?: SchoolWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SchoolScalarFieldEnum[];
}

export interface aggregateSchoolArgs {
  where?: SchoolWhereInput;
  orderBy?: SchoolOrderByWithRelationInput[];
  cursor?: SchoolWhereUniqueInput;
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

export interface findUniqueCityArgs {
  where: CityWhereUniqueInput;
}

export interface findFirstCityArgs {
  where?: CityWhereInput;
  orderBy?: CityOrderByWithRelationInput[];
  cursor?: CityWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CityScalarFieldEnum[];
}

export interface findManyCityArgs {
  where?: CityWhereInput;
  orderBy?: CityOrderByWithRelationInput[];
  cursor?: CityWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CityScalarFieldEnum[];
}

export interface findManyCityCountArgs {
  where?: CityWhereInput;
  orderBy?: CityOrderByWithRelationInput[];
  cursor?: CityWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CityScalarFieldEnum[];
}

export interface aggregateCityArgs {
  where?: CityWhereInput;
  orderBy?: CityOrderByWithRelationInput[];
  cursor?: CityWhereUniqueInput;
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

export interface createOneClassroomStudentArgs {
  data: ClassroomStudentCreateInput;
}

export interface updateOneClassroomStudentArgs {
  data: ClassroomStudentUpdateInput;
  where: ClassroomStudentWhereUniqueInput;
}

export interface upsertOneClassroomStudentArgs {
  where: ClassroomStudentWhereUniqueInput;
  create: ClassroomStudentCreateInput;
  update: ClassroomStudentUpdateInput;
}

export interface deleteOneClassroomStudentArgs {
  where: ClassroomStudentWhereUniqueInput;
}

export interface updateManyClassroomStudentArgs {
  data: ClassroomStudentUpdateManyMutationInput;
  where?: ClassroomStudentWhereInput;
}

export interface deleteManyClassroomStudentArgs {
  where?: ClassroomStudentWhereInput;
}

export interface createOneClassroomArgs {
  data: ClassroomCreateInput;
}

export interface updateOneClassroomArgs {
  data: ClassroomUpdateInput;
  where: ClassroomWhereUniqueInput;
}

export interface upsertOneClassroomArgs {
  where: ClassroomWhereUniqueInput;
  create: ClassroomCreateInput;
  update: ClassroomUpdateInput;
}

export interface deleteOneClassroomArgs {
  where: ClassroomWhereUniqueInput;
}

export interface updateManyClassroomArgs {
  data: ClassroomUpdateManyMutationInput;
  where?: ClassroomWhereInput;
}

export interface deleteManyClassroomArgs {
  where?: ClassroomWhereInput;
}

export interface createOneSchoolArgs {
  data: SchoolCreateInput;
}

export interface updateOneSchoolArgs {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
}

export interface upsertOneSchoolArgs {
  where: SchoolWhereUniqueInput;
  create: SchoolCreateInput;
  update: SchoolUpdateInput;
}

export interface deleteOneSchoolArgs {
  where: SchoolWhereUniqueInput;
}

export interface updateManySchoolArgs {
  data: SchoolUpdateManyMutationInput;
  where?: SchoolWhereInput;
}

export interface deleteManySchoolArgs {
  where?: SchoolWhereInput;
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

export interface createOneCityArgs {
  data: CityCreateInput;
}

export interface updateOneCityArgs {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
}

export interface upsertOneCityArgs {
  where: CityWhereUniqueInput;
  create: CityCreateInput;
  update: CityUpdateInput;
}

export interface deleteOneCityArgs {
  where: CityWhereUniqueInput;
}

export interface updateManyCityArgs {
  data: CityUpdateManyMutationInput;
  where?: CityWhereInput;
}

export interface deleteManyCityArgs {
  where?: CityWhereInput;
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
