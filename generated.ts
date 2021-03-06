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

export interface Chat {
  id: string;
  fromId: string;
  from: User;
  contentType: ContentType;
  content: string;
  readAt: Maybe<undefined>;
  createdAt: undefined;
  updatedAt: undefined;
  chatSessionId: string;
  chatSession: ChatSession;
}

export interface ChatSession {
  id: string;
  participantsIds: string[];
  lastReadAt: Maybe<undefined>;
  createdAt: undefined;
  updatedAt: undefined;
  chats: Chat[];
  _count: ChatSessionCountOutputType;
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

export interface SchoolStaff {
  id: string;
  schoolId: string;
  school: School;
  userId: string;
  user: User;
  roles: SchoolStaffRoles[];
  createdAt: undefined;
  updatedAt: undefined;
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
  address: Maybe<string>;
  logoPath: Maybe<string>;
  bannerPath: Maybe<string>;
  provinceId: string;
  province: Province;
  regencyId: string;
  regency: Regency;
  schoolStaffs: SchoolStaff[];
  students: User[];
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
  address: Maybe<string>;
  profilePicturePath: Maybe<string>;
  createdAt: undefined;
  updatedAt: undefined;
  nisn: Maybe<string>;
  nrg: Maybe<string>;
  verifykey: Maybe<string>;
  verifyType: Maybe<VerifyType>;
  provinceId: string;
  province: Province;
  regencyId: string;
  regency: Regency;
  isAdmin: boolean;
  isBimbel: boolean;
  role: Roles;
  balance: number;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  bimbelApprovedAt: Maybe<undefined>;
  identityNumberVerifiedAt: Maybe<undefined>;
  identityFiles: IdentityFile[];
  questions: Question[];
  examinations: Exam[];
  examsessions: ExamSession[];
  myChats: Chat[];
  classrooms: Classroom[];
  classroomStudents: ClassroomStudent[];
  notifications: Notification[];
  schoolStaffs: SchoolStaff[];
  schoolId: Maybe<string>;
  school: Maybe<School>;
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

export interface Regency {
  id: string;
  name: string;
  provinceId: string;
  province: Province;
  users: User[];
  School: School[];
  _count: RegencyCountOutputType;
}

export interface Province {
  id: string;
  name: string;
  regencies: Regency[];
  createdAt: undefined;
  updatedAt: undefined;
  users: User[];
  School: School[];
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
  status: Maybe<boolean>;
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
  Verifykey = 'verifykey',
  Verifytype = 'verifyType',
  Provinceid = 'provinceId',
  Regencyid = 'regencyId',
  Isadmin = 'isAdmin',
  Isbimbel = 'isBimbel',
  Role = 'role',
  Balance = 'balance',
  Emailverifiedat = 'emailVerifiedAt',
  Phonenumberverifiedat = 'phoneNumberVerifiedAt',
  Bimbelapprovedat = 'bimbelApprovedAt',
  Identitynumberverifiedat = 'identityNumberVerifiedAt',
  Schoolid = 'schoolId',
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
  Regencyid = 'regencyId',
}
export enum SchoolStaffScalarFieldEnum {
  Id = 'id',
  Schoolid = 'schoolId',
  Userid = 'userId',
  Roles = 'roles',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
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
export enum ChatSessionScalarFieldEnum {
  Id = 'id',
  Participantsids = 'participantsIds',
  Lastreadat = 'lastReadAt',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum ChatScalarFieldEnum {
  Id = 'id',
  Fromid = 'fromId',
  Contenttype = 'contentType',
  Content = 'content',
  Readat = 'readAt',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Chatsessionid = 'chatSessionId',
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
export enum VerifyType {
  Email = 'EMAIL',
  Phone = 'PHONE',
  Otp = 'OTP',
  Identity = 'IDENTITY',
}
export enum Roles {
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  Parent = 'PARENT',
}
export enum SchoolStaffRoles {
  Teacher = 'TEACHER',
  Headmaster = 'HEADMASTER',
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
  regencies?: RegencyListRelationFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  users?: UserListRelationFilter;
  School?: SchoolListRelationFilter;
}

export interface ProvinceOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  regencies?: RegencyOrderByRelationAggregateInput;
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

export interface RegencyWhereInput {
  AND?: RegencyWhereInput[];
  OR?: RegencyWhereInput[];
  NOT?: RegencyWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  users?: UserListRelationFilter;
  School?: SchoolListRelationFilter;
}

export interface RegencyOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  users?: UserOrderByRelationAggregateInput;
  School?: SchoolOrderByRelationAggregateInput;
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

export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: StringFilter;
  name?: StringFilter;
  email?: StringFilter;
  phoneNumber?: StringFilter;
  address?: StringNullableFilter;
  profilePicturePath?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  nisn?: StringNullableFilter;
  nrg?: StringNullableFilter;
  verifykey?: StringNullableFilter;
  verifyType?: EnumVerifyTypeNullableFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  regencyId?: StringFilter;
  regency?: RegencyWhereInput;
  isAdmin?: BoolFilter;
  isBimbel?: BoolFilter;
  role?: EnumRolesFilter;
  balance?: FloatFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  phoneNumberVerifiedAt?: DateTimeNullableFilter;
  bimbelApprovedAt?: DateTimeNullableFilter;
  identityNumberVerifiedAt?: DateTimeNullableFilter;
  identityFiles?: IdentityFileListRelationFilter;
  questions?: QuestionListRelationFilter;
  examinations?: ExamListRelationFilter;
  examsessions?: ExamSessionListRelationFilter;
  myChats?: ChatListRelationFilter;
  classrooms?: ClassroomListRelationFilter;
  classroomStudents?: ClassroomStudentListRelationFilter;
  notifications?: NotificationListRelationFilter;
  schoolStaffs?: SchoolStaffListRelationFilter;
  schoolId?: StringNullableFilter;
  school?: SchoolWhereInput;
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
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  provinceId?: SortOrder;
  province?: ProvinceOrderByWithRelationInput;
  regencyId?: SortOrder;
  regency?: RegencyOrderByWithRelationInput;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  identityFiles?: IdentityFileOrderByRelationAggregateInput;
  questions?: QuestionOrderByRelationAggregateInput;
  examinations?: ExamOrderByRelationAggregateInput;
  examsessions?: ExamSessionOrderByRelationAggregateInput;
  myChats?: ChatOrderByRelationAggregateInput;
  classrooms?: ClassroomOrderByRelationAggregateInput;
  classroomStudents?: ClassroomStudentOrderByRelationAggregateInput;
  notifications?: NotificationOrderByRelationAggregateInput;
  schoolStaffs?: SchoolStaffOrderByRelationAggregateInput;
  schoolId?: SortOrder;
  school?: SchoolOrderByWithRelationInput;
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
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  schoolId?: SortOrder;
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
  phoneNumber?: StringWithAggregatesFilter;
  address?: StringNullableWithAggregatesFilter;
  profilePicturePath?: StringNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  nisn?: StringNullableWithAggregatesFilter;
  nrg?: StringNullableWithAggregatesFilter;
  verifykey?: StringNullableWithAggregatesFilter;
  verifyType?: EnumVerifyTypeNullableWithAggregatesFilter;
  provinceId?: StringWithAggregatesFilter;
  regencyId?: StringWithAggregatesFilter;
  isAdmin?: BoolWithAggregatesFilter;
  isBimbel?: BoolWithAggregatesFilter;
  role?: EnumRolesWithAggregatesFilter;
  balance?: FloatWithAggregatesFilter;
  emailVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  phoneNumberVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  bimbelApprovedAt?: DateTimeNullableWithAggregatesFilter;
  identityNumberVerifiedAt?: DateTimeNullableWithAggregatesFilter;
  schoolId?: StringNullableWithAggregatesFilter;
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
  address?: StringNullableFilter;
  logoPath?: StringNullableFilter;
  bannerPath?: StringNullableFilter;
  provinceId?: StringFilter;
  province?: ProvinceWhereInput;
  regencyId?: StringFilter;
  regency?: RegencyWhereInput;
  schoolStaffs?: SchoolStaffListRelationFilter;
  students?: UserListRelationFilter;
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
  regencyId?: SortOrder;
  regency?: RegencyOrderByWithRelationInput;
  schoolStaffs?: SchoolStaffOrderByRelationAggregateInput;
  students?: UserOrderByRelationAggregateInput;
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
  regencyId?: SortOrder;
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
  address?: StringNullableWithAggregatesFilter;
  logoPath?: StringNullableWithAggregatesFilter;
  bannerPath?: StringNullableWithAggregatesFilter;
  provinceId?: StringWithAggregatesFilter;
  regencyId?: StringWithAggregatesFilter;
}

export interface SchoolStaffWhereInput {
  AND?: SchoolStaffWhereInput[];
  OR?: SchoolStaffWhereInput[];
  NOT?: SchoolStaffWhereInput[];
  id?: StringFilter;
  schoolId?: StringFilter;
  school?: SchoolWhereInput;
  userId?: StringFilter;
  user?: UserWhereInput;
  roles?: EnumSchoolStaffRolesNullableListFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface SchoolStaffOrderByWithRelationInput {
  id?: SortOrder;
  schoolId?: SortOrder;
  school?: SchoolOrderByWithRelationInput;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface SchoolStaffWhereUniqueInput {
  id?: string;
}

export interface SchoolStaffOrderByWithAggregationInput {
  id?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: SchoolStaffCountOrderByAggregateInput;
  _max?: SchoolStaffMaxOrderByAggregateInput;
  _min?: SchoolStaffMinOrderByAggregateInput;
}

export interface SchoolStaffScalarWhereWithAggregatesInput {
  AND?: SchoolStaffScalarWhereWithAggregatesInput[];
  OR?: SchoolStaffScalarWhereWithAggregatesInput[];
  NOT?: SchoolStaffScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  schoolId?: StringWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  roles?: EnumSchoolStaffRolesNullableListFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
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

export interface ChatSessionWhereInput {
  AND?: ChatSessionWhereInput[];
  OR?: ChatSessionWhereInput[];
  NOT?: ChatSessionWhereInput[];
  id?: StringFilter;
  participantsIds?: StringNullableListFilter;
  lastReadAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  chats?: ChatListRelationFilter;
}

export interface ChatSessionOrderByWithRelationInput {
  id?: SortOrder;
  participantsIds?: SortOrder;
  lastReadAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chats?: ChatOrderByRelationAggregateInput;
}

export interface ChatSessionWhereUniqueInput {
  id?: string;
}

export interface ChatSessionOrderByWithAggregationInput {
  id?: SortOrder;
  participantsIds?: SortOrder;
  lastReadAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: ChatSessionCountOrderByAggregateInput;
  _max?: ChatSessionMaxOrderByAggregateInput;
  _min?: ChatSessionMinOrderByAggregateInput;
}

export interface ChatSessionScalarWhereWithAggregatesInput {
  AND?: ChatSessionScalarWhereWithAggregatesInput[];
  OR?: ChatSessionScalarWhereWithAggregatesInput[];
  NOT?: ChatSessionScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  participantsIds?: StringNullableListFilter;
  lastReadAt?: DateTimeNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface ChatWhereInput {
  AND?: ChatWhereInput[];
  OR?: ChatWhereInput[];
  NOT?: ChatWhereInput[];
  id?: StringFilter;
  fromId?: StringFilter;
  from?: UserWhereInput;
  contentType?: EnumContentTypeFilter;
  content?: StringFilter;
  readAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  chatSessionId?: StringFilter;
  chatSession?: ChatSessionWhereInput;
}

export interface ChatOrderByWithRelationInput {
  id?: SortOrder;
  fromId?: SortOrder;
  from?: UserOrderByWithRelationInput;
  contentType?: SortOrder;
  content?: SortOrder;
  readAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chatSessionId?: SortOrder;
  chatSession?: ChatSessionOrderByWithRelationInput;
}

export interface ChatWhereUniqueInput {
  id?: string;
}

export interface ChatOrderByWithAggregationInput {
  id?: SortOrder;
  fromId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  readAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chatSessionId?: SortOrder;
  _count?: ChatCountOrderByAggregateInput;
  _max?: ChatMaxOrderByAggregateInput;
  _min?: ChatMinOrderByAggregateInput;
}

export interface ChatScalarWhereWithAggregatesInput {
  AND?: ChatScalarWhereWithAggregatesInput[];
  OR?: ChatScalarWhereWithAggregatesInput[];
  NOT?: ChatScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  fromId?: StringWithAggregatesFilter;
  contentType?: EnumContentTypeWithAggregatesFilter;
  content?: StringWithAggregatesFilter;
  readAt?: DateTimeNullableWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  chatSessionId?: StringWithAggregatesFilter;
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
  School?: SchoolCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateInput {
  id?: string;
  name: string;
  regencies?: RegencyUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
  School?: SchoolUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
  School?: SchoolUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUncheckedUpdateManyWithoutProvinceInput;
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

export interface RegencyCreateInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutRegenciesInput;
  users?: UserCreateNestedManyWithoutRegencyInput;
  School?: SchoolCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUncheckedCreateInput {
  id?: string;
  name: string;
  provinceId: string;
  users?: UserUncheckedCreateNestedManyWithoutRegencyInput;
  School?: SchoolUncheckedCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutRegenciesInput;
  users?: UserUpdateManyWithoutRegencyInput;
  School?: SchoolUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutRegencyInput;
  School?: SchoolUncheckedUpdateManyWithoutRegencyInput;
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

export interface UserCreateInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
}

export interface UserCreateManyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  schoolId?: string;
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  regency: RegencyCreateNestedOneWithoutSchoolInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutSchoolInput;
  students?: UserCreateNestedManyWithoutSchoolInput;
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
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  regencyId: string;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
  students?: UserUncheckedCreateNestedManyWithoutSchoolInput;
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
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  regency?: RegencyUpdateOneRequiredWithoutSchoolInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutSchoolInput;
  students?: UserUpdateManyWithoutSchoolInput;
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
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutSchoolInput;
  students?: UserUncheckedUpdateManyWithoutSchoolInput;
}

export interface SchoolCreateManyInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  regencyId: string;
}

export interface SchoolUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
}

export interface SchoolStaffCreateInput {
  id?: string;
  school: SchoolCreateNestedOneWithoutSchoolStaffsInput;
  user: UserCreateNestedOneWithoutSchoolStaffsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffUncheckedCreateInput {
  id?: string;
  schoolId: string;
  userId: string;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  school?: SchoolUpdateOneRequiredWithoutSchoolStaffsInput;
  user?: UserUpdateOneRequiredWithoutSchoolStaffsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface SchoolStaffUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  schoolId?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface SchoolStaffCreateManyInput {
  id?: string;
  schoolId: string;
  userId: string;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  schoolId?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
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

export interface ChatSessionCreateInput {
  id?: string;
  participantsIds?: string[];
  lastReadAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chats?: ChatCreateNestedManyWithoutChatSessionInput;
}

export interface ChatSessionUncheckedCreateInput {
  id?: string;
  participantsIds?: string[];
  lastReadAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chats?: ChatUncheckedCreateNestedManyWithoutChatSessionInput;
}

export interface ChatSessionUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  participantsIds?: string[];
  lastReadAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chats?: ChatUpdateManyWithoutChatSessionInput;
}

export interface ChatSessionUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  participantsIds?: string[];
  lastReadAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chats?: ChatUncheckedUpdateManyWithoutChatSessionInput;
}

export interface ChatSessionCreateManyInput {
  id?: string;
  participantsIds?: string[];
  lastReadAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChatSessionUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  participantsIds?: string[];
  lastReadAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChatCreateInput {
  id?: string;
  from: UserCreateNestedOneWithoutMyChatsInput;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chatSession: ChatSessionCreateNestedOneWithoutChatsInput;
}

export interface ChatUncheckedCreateInput {
  id?: string;
  fromId: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chatSessionId: string;
}

export interface ChatUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  from?: UserUpdateOneRequiredWithoutMyChatsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chatSession?: ChatSessionUpdateOneRequiredWithoutChatsInput;
}

export interface ChatUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chatSessionId?: StringFieldUpdateOperationsInput;
}

export interface ChatCreateManyInput {
  id?: string;
  fromId: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chatSessionId: string;
}

export interface ChatUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chatSessionId?: StringFieldUpdateOperationsInput;
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

export interface SchoolListRelationFilter {
  every?: SchoolWhereInput;
  some?: SchoolWhereInput;
  none?: SchoolWhereInput;
}

export interface RegencyOrderByRelationAggregateInput {
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

export interface EnumVerifyTypeNullableFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeNullableFilter;
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

export interface ChatListRelationFilter {
  every?: ChatWhereInput;
  some?: ChatWhereInput;
  none?: ChatWhereInput;
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

export interface SchoolStaffListRelationFilter {
  every?: SchoolStaffWhereInput;
  some?: SchoolStaffWhereInput;
  none?: SchoolStaffWhereInput;
}

export interface SchoolRelationFilter {
  is?: SchoolWhereInput;
  isNot?: SchoolWhereInput;
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

export interface ChatOrderByRelationAggregateInput {
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

export interface SchoolStaffOrderByRelationAggregateInput {
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
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  schoolId?: SortOrder;
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
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  schoolId?: SortOrder;
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
  verifykey?: SortOrder;
  verifyType?: SortOrder;
  provinceId?: SortOrder;
  regencyId?: SortOrder;
  isAdmin?: SortOrder;
  isBimbel?: SortOrder;
  role?: SortOrder;
  balance?: SortOrder;
  emailVerifiedAt?: SortOrder;
  phoneNumberVerifiedAt?: SortOrder;
  bimbelApprovedAt?: SortOrder;
  identityNumberVerifiedAt?: SortOrder;
  schoolId?: SortOrder;
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

export interface EnumVerifyTypeNullableWithAggregatesFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedEnumVerifyTypeNullableFilter;
  _max?: NestedEnumVerifyTypeNullableFilter;
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
  regencyId?: SortOrder;
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
  regencyId?: SortOrder;
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
  regencyId?: SortOrder;
}

export interface SchoolSumOrderByAggregateInput {
  levels?: SortOrder;
}

export interface EnumSchoolStaffRolesNullableListFilter {
  equals?: SchoolStaffRoles[];
  has?: SchoolStaffRoles;
  hasEvery?: SchoolStaffRoles[];
  hasSome?: SchoolStaffRoles[];
  isEmpty?: boolean;
}

export interface SchoolStaffCountOrderByAggregateInput {
  id?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  roles?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface SchoolStaffMaxOrderByAggregateInput {
  id?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface SchoolStaffMinOrderByAggregateInput {
  id?: SortOrder;
  schoolId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
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

export interface StringNullableListFilter {
  equals?: string[];
  has?: string;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface ChatSessionCountOrderByAggregateInput {
  id?: SortOrder;
  participantsIds?: SortOrder;
  lastReadAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChatSessionMaxOrderByAggregateInput {
  id?: SortOrder;
  lastReadAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface ChatSessionMinOrderByAggregateInput {
  id?: SortOrder;
  lastReadAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface EnumContentTypeFilter {
  equals?: ContentType;
  in?: ContentType[];
  notIn?: ContentType[];
  not?: NestedEnumContentTypeFilter;
}

export interface ChatSessionRelationFilter {
  is?: ChatSessionWhereInput;
  isNot?: ChatSessionWhereInput;
}

export interface ChatCountOrderByAggregateInput {
  id?: SortOrder;
  fromId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  readAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chatSessionId?: SortOrder;
}

export interface ChatMaxOrderByAggregateInput {
  id?: SortOrder;
  fromId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  readAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chatSessionId?: SortOrder;
}

export interface ChatMinOrderByAggregateInput {
  id?: SortOrder;
  fromId?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  readAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chatSessionId?: SortOrder;
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

export interface SchoolCreateNestedManyWithoutProvinceInput {
  create?: SchoolCreateWithoutProvinceInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutProvinceInput[];
  createMany?: SchoolCreateManyProvinceInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
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

export interface SchoolUncheckedCreateNestedManyWithoutProvinceInput {
  create?: SchoolCreateWithoutProvinceInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutProvinceInput[];
  createMany?: SchoolCreateManyProvinceInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
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

export interface SchoolCreateNestedManyWithoutRegencyInput {
  create?: SchoolCreateWithoutRegencyInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutRegencyInput[];
  createMany?: SchoolCreateManyRegencyInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
}

export interface UserUncheckedCreateNestedManyWithoutRegencyInput {
  create?: UserCreateWithoutRegencyInput[];
  connectOrCreate?: UserCreateOrConnectWithoutRegencyInput[];
  createMany?: UserCreateManyRegencyInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface SchoolUncheckedCreateNestedManyWithoutRegencyInput {
  create?: SchoolCreateWithoutRegencyInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutRegencyInput[];
  createMany?: SchoolCreateManyRegencyInputEnvelope;
  connect?: SchoolWhereUniqueInput[];
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

export interface SchoolUpdateManyWithoutRegencyInput {
  create?: SchoolCreateWithoutRegencyInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutRegencyInput[];
  upsert?: SchoolUpsertWithWhereUniqueWithoutRegencyInput[];
  createMany?: SchoolCreateManyRegencyInputEnvelope;
  set?: SchoolWhereUniqueInput[];
  disconnect?: SchoolWhereUniqueInput[];
  delete?: SchoolWhereUniqueInput[];
  connect?: SchoolWhereUniqueInput[];
  update?: SchoolUpdateWithWhereUniqueWithoutRegencyInput[];
  updateMany?: SchoolUpdateManyWithWhereWithoutRegencyInput[];
  deleteMany?: SchoolScalarWhereInput[];
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

export interface SchoolUncheckedUpdateManyWithoutRegencyInput {
  create?: SchoolCreateWithoutRegencyInput[];
  connectOrCreate?: SchoolCreateOrConnectWithoutRegencyInput[];
  upsert?: SchoolUpsertWithWhereUniqueWithoutRegencyInput[];
  createMany?: SchoolCreateManyRegencyInputEnvelope;
  set?: SchoolWhereUniqueInput[];
  disconnect?: SchoolWhereUniqueInput[];
  delete?: SchoolWhereUniqueInput[];
  connect?: SchoolWhereUniqueInput[];
  update?: SchoolUpdateWithWhereUniqueWithoutRegencyInput[];
  updateMany?: SchoolUpdateManyWithWhereWithoutRegencyInput[];
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

export interface ChatCreateNestedManyWithoutFromInput {
  create?: ChatCreateWithoutFromInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutFromInput[];
  createMany?: ChatCreateManyFromInputEnvelope;
  connect?: ChatWhereUniqueInput[];
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

export interface SchoolStaffCreateNestedManyWithoutUserInput {
  create?: SchoolStaffCreateWithoutUserInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutUserInput[];
  createMany?: SchoolStaffCreateManyUserInputEnvelope;
  connect?: SchoolStaffWhereUniqueInput[];
}

export interface SchoolCreateNestedOneWithoutStudentsInput {
  create?: SchoolUncheckedCreateWithoutStudentsInput;
  connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput;
  connect?: SchoolWhereUniqueInput;
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

export interface ChatUncheckedCreateNestedManyWithoutFromInput {
  create?: ChatCreateWithoutFromInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutFromInput[];
  createMany?: ChatCreateManyFromInputEnvelope;
  connect?: ChatWhereUniqueInput[];
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

export interface SchoolStaffUncheckedCreateNestedManyWithoutUserInput {
  create?: SchoolStaffCreateWithoutUserInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutUserInput[];
  createMany?: SchoolStaffCreateManyUserInputEnvelope;
  connect?: SchoolStaffWhereUniqueInput[];
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string;
}

export interface NullableEnumVerifyTypeFieldUpdateOperationsInput {
  set?: VerifyType;
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

export interface ChatUpdateManyWithoutFromInput {
  create?: ChatCreateWithoutFromInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutFromInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutFromInput[];
  createMany?: ChatCreateManyFromInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutFromInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutFromInput[];
  deleteMany?: ChatScalarWhereInput[];
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

export interface SchoolStaffUpdateManyWithoutUserInput {
  create?: SchoolStaffCreateWithoutUserInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutUserInput[];
  upsert?: SchoolStaffUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: SchoolStaffCreateManyUserInputEnvelope;
  set?: SchoolStaffWhereUniqueInput[];
  disconnect?: SchoolStaffWhereUniqueInput[];
  delete?: SchoolStaffWhereUniqueInput[];
  connect?: SchoolStaffWhereUniqueInput[];
  update?: SchoolStaffUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: SchoolStaffUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: SchoolStaffScalarWhereInput[];
}

export interface SchoolUpdateOneWithoutStudentsInput {
  create?: SchoolUncheckedCreateWithoutStudentsInput;
  connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput;
  upsert?: SchoolUpsertWithoutStudentsInput;
  disconnect?: boolean;
  delete?: boolean;
  connect?: SchoolWhereUniqueInput;
  update?: SchoolUncheckedUpdateWithoutStudentsInput;
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

export interface ChatUncheckedUpdateManyWithoutFromInput {
  create?: ChatCreateWithoutFromInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutFromInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutFromInput[];
  createMany?: ChatCreateManyFromInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutFromInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutFromInput[];
  deleteMany?: ChatScalarWhereInput[];
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

export interface SchoolStaffUncheckedUpdateManyWithoutUserInput {
  create?: SchoolStaffCreateWithoutUserInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutUserInput[];
  upsert?: SchoolStaffUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: SchoolStaffCreateManyUserInputEnvelope;
  set?: SchoolStaffWhereUniqueInput[];
  disconnect?: SchoolStaffWhereUniqueInput[];
  delete?: SchoolStaffWhereUniqueInput[];
  connect?: SchoolStaffWhereUniqueInput[];
  update?: SchoolStaffUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: SchoolStaffUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: SchoolStaffScalarWhereInput[];
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

export interface RegencyCreateNestedOneWithoutSchoolInput {
  create?: RegencyUncheckedCreateWithoutSchoolInput;
  connectOrCreate?: RegencyCreateOrConnectWithoutSchoolInput;
  connect?: RegencyWhereUniqueInput;
}

export interface SchoolStaffCreateNestedManyWithoutSchoolInput {
  create?: SchoolStaffCreateWithoutSchoolInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutSchoolInput[];
  createMany?: SchoolStaffCreateManySchoolInputEnvelope;
  connect?: SchoolStaffWhereUniqueInput[];
}

export interface UserCreateNestedManyWithoutSchoolInput {
  create?: UserCreateWithoutSchoolInput[];
  connectOrCreate?: UserCreateOrConnectWithoutSchoolInput[];
  createMany?: UserCreateManySchoolInputEnvelope;
  connect?: UserWhereUniqueInput[];
}

export interface ClassroomUncheckedCreateNestedManyWithoutSchoolInput {
  create?: ClassroomCreateWithoutSchoolInput[];
  connectOrCreate?: ClassroomCreateOrConnectWithoutSchoolInput[];
  createMany?: ClassroomCreateManySchoolInputEnvelope;
  connect?: ClassroomWhereUniqueInput[];
}

export interface SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput {
  create?: SchoolStaffCreateWithoutSchoolInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutSchoolInput[];
  createMany?: SchoolStaffCreateManySchoolInputEnvelope;
  connect?: SchoolStaffWhereUniqueInput[];
}

export interface UserUncheckedCreateNestedManyWithoutSchoolInput {
  create?: UserCreateWithoutSchoolInput[];
  connectOrCreate?: UserCreateOrConnectWithoutSchoolInput[];
  createMany?: UserCreateManySchoolInputEnvelope;
  connect?: UserWhereUniqueInput[];
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

export interface RegencyUpdateOneRequiredWithoutSchoolInput {
  create?: RegencyUncheckedCreateWithoutSchoolInput;
  connectOrCreate?: RegencyCreateOrConnectWithoutSchoolInput;
  upsert?: RegencyUpsertWithoutSchoolInput;
  connect?: RegencyWhereUniqueInput;
  update?: RegencyUncheckedUpdateWithoutSchoolInput;
}

export interface SchoolStaffUpdateManyWithoutSchoolInput {
  create?: SchoolStaffCreateWithoutSchoolInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutSchoolInput[];
  upsert?: SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput[];
  createMany?: SchoolStaffCreateManySchoolInputEnvelope;
  set?: SchoolStaffWhereUniqueInput[];
  disconnect?: SchoolStaffWhereUniqueInput[];
  delete?: SchoolStaffWhereUniqueInput[];
  connect?: SchoolStaffWhereUniqueInput[];
  update?: SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput[];
  updateMany?: SchoolStaffUpdateManyWithWhereWithoutSchoolInput[];
  deleteMany?: SchoolStaffScalarWhereInput[];
}

export interface UserUpdateManyWithoutSchoolInput {
  create?: UserCreateWithoutSchoolInput[];
  connectOrCreate?: UserCreateOrConnectWithoutSchoolInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput[];
  createMany?: UserCreateManySchoolInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutSchoolInput[];
  updateMany?: UserUpdateManyWithWhereWithoutSchoolInput[];
  deleteMany?: UserScalarWhereInput[];
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

export interface SchoolStaffUncheckedUpdateManyWithoutSchoolInput {
  create?: SchoolStaffCreateWithoutSchoolInput[];
  connectOrCreate?: SchoolStaffCreateOrConnectWithoutSchoolInput[];
  upsert?: SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput[];
  createMany?: SchoolStaffCreateManySchoolInputEnvelope;
  set?: SchoolStaffWhereUniqueInput[];
  disconnect?: SchoolStaffWhereUniqueInput[];
  delete?: SchoolStaffWhereUniqueInput[];
  connect?: SchoolStaffWhereUniqueInput[];
  update?: SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput[];
  updateMany?: SchoolStaffUpdateManyWithWhereWithoutSchoolInput[];
  deleteMany?: SchoolStaffScalarWhereInput[];
}

export interface UserUncheckedUpdateManyWithoutSchoolInput {
  create?: UserCreateWithoutSchoolInput[];
  connectOrCreate?: UserCreateOrConnectWithoutSchoolInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput[];
  createMany?: UserCreateManySchoolInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutSchoolInput[];
  updateMany?: UserUpdateManyWithWhereWithoutSchoolInput[];
  deleteMany?: UserScalarWhereInput[];
}

export interface SchoolCreateNestedOneWithoutSchoolStaffsInput {
  create?: SchoolUncheckedCreateWithoutSchoolStaffsInput;
  connectOrCreate?: SchoolCreateOrConnectWithoutSchoolStaffsInput;
  connect?: SchoolWhereUniqueInput;
}

export interface UserCreateNestedOneWithoutSchoolStaffsInput {
  create?: UserUncheckedCreateWithoutSchoolStaffsInput;
  connectOrCreate?: UserCreateOrConnectWithoutSchoolStaffsInput;
  connect?: UserWhereUniqueInput;
}

export interface SchoolStaffCreaterolesInput {
  set: SchoolStaffRoles;
}

export interface SchoolUpdateOneRequiredWithoutSchoolStaffsInput {
  create?: SchoolUncheckedCreateWithoutSchoolStaffsInput;
  connectOrCreate?: SchoolCreateOrConnectWithoutSchoolStaffsInput;
  upsert?: SchoolUpsertWithoutSchoolStaffsInput;
  connect?: SchoolWhereUniqueInput;
  update?: SchoolUncheckedUpdateWithoutSchoolStaffsInput;
}

export interface UserUpdateOneRequiredWithoutSchoolStaffsInput {
  create?: UserUncheckedCreateWithoutSchoolStaffsInput;
  connectOrCreate?: UserCreateOrConnectWithoutSchoolStaffsInput;
  upsert?: UserUpsertWithoutSchoolStaffsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutSchoolStaffsInput;
}

export interface SchoolStaffUpdaterolesInput {
  set?: SchoolStaffRoles[];
  push?: SchoolStaffRoles[];
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

export interface ChatSessionCreateparticipantsIdsInput {
  set: string;
}

export interface ChatCreateNestedManyWithoutChatSessionInput {
  create?: ChatCreateWithoutChatSessionInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutChatSessionInput[];
  createMany?: ChatCreateManyChatSessionInputEnvelope;
  connect?: ChatWhereUniqueInput[];
}

export interface ChatUncheckedCreateNestedManyWithoutChatSessionInput {
  create?: ChatCreateWithoutChatSessionInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutChatSessionInput[];
  createMany?: ChatCreateManyChatSessionInputEnvelope;
  connect?: ChatWhereUniqueInput[];
}

export interface ChatSessionUpdateparticipantsIdsInput {
  set?: string[];
  push?: string[];
}

export interface ChatUpdateManyWithoutChatSessionInput {
  create?: ChatCreateWithoutChatSessionInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutChatSessionInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutChatSessionInput[];
  createMany?: ChatCreateManyChatSessionInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutChatSessionInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutChatSessionInput[];
  deleteMany?: ChatScalarWhereInput[];
}

export interface ChatUncheckedUpdateManyWithoutChatSessionInput {
  create?: ChatCreateWithoutChatSessionInput[];
  connectOrCreate?: ChatCreateOrConnectWithoutChatSessionInput[];
  upsert?: ChatUpsertWithWhereUniqueWithoutChatSessionInput[];
  createMany?: ChatCreateManyChatSessionInputEnvelope;
  set?: ChatWhereUniqueInput[];
  disconnect?: ChatWhereUniqueInput[];
  delete?: ChatWhereUniqueInput[];
  connect?: ChatWhereUniqueInput[];
  update?: ChatUpdateWithWhereUniqueWithoutChatSessionInput[];
  updateMany?: ChatUpdateManyWithWhereWithoutChatSessionInput[];
  deleteMany?: ChatScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutMyChatsInput {
  create?: UserUncheckedCreateWithoutMyChatsInput;
  connectOrCreate?: UserCreateOrConnectWithoutMyChatsInput;
  connect?: UserWhereUniqueInput;
}

export interface ChatSessionCreateNestedOneWithoutChatsInput {
  create?: ChatSessionUncheckedCreateWithoutChatsInput;
  connectOrCreate?: ChatSessionCreateOrConnectWithoutChatsInput;
  connect?: ChatSessionWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutMyChatsInput {
  create?: UserUncheckedCreateWithoutMyChatsInput;
  connectOrCreate?: UserCreateOrConnectWithoutMyChatsInput;
  upsert?: UserUpsertWithoutMyChatsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutMyChatsInput;
}

export interface EnumContentTypeFieldUpdateOperationsInput {
  set?: ContentType;
}

export interface ChatSessionUpdateOneRequiredWithoutChatsInput {
  create?: ChatSessionUncheckedCreateWithoutChatsInput;
  connectOrCreate?: ChatSessionCreateOrConnectWithoutChatsInput;
  upsert?: ChatSessionUpsertWithoutChatsInput;
  connect?: ChatSessionWhereUniqueInput;
  update?: ChatSessionUncheckedUpdateWithoutChatsInput;
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

export interface NestedEnumVerifyTypeNullableFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeNullableFilter;
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

export interface NestedEnumVerifyTypeNullableWithAggregatesFilter {
  equals?: VerifyType;
  in?: VerifyType[];
  notIn?: VerifyType[];
  not?: NestedEnumVerifyTypeNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedEnumVerifyTypeNullableFilter;
  _max?: NestedEnumVerifyTypeNullableFilter;
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

export interface RegencyCreateWithoutProvinceInput {
  id?: string;
  name: string;
  users?: UserCreateNestedManyWithoutRegencyInput;
  School?: SchoolCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  users?: UserUncheckedCreateNestedManyWithoutRegencyInput;
  School?: SchoolUncheckedCreateNestedManyWithoutRegencyInput;
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
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutProvinceInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  regency: RegencyCreateNestedOneWithoutSchoolInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutSchoolInput;
  students?: UserCreateNestedManyWithoutSchoolInput;
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
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  regencyId: string;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
  students?: UserUncheckedCreateNestedManyWithoutSchoolInput;
}

export interface SchoolCreateOrConnectWithoutProvinceInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutProvinceInput;
}

export interface SchoolCreateManyProvinceInputEnvelope {
  data: SchoolCreateManyProvinceInput;
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
  phoneNumber?: StringFilter;
  address?: StringNullableFilter;
  profilePicturePath?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  nisn?: StringNullableFilter;
  nrg?: StringNullableFilter;
  verifykey?: StringNullableFilter;
  verifyType?: EnumVerifyTypeNullableFilter;
  provinceId?: StringFilter;
  regencyId?: StringFilter;
  isAdmin?: BoolFilter;
  isBimbel?: BoolFilter;
  role?: EnumRolesFilter;
  balance?: FloatFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  phoneNumberVerifiedAt?: DateTimeNullableFilter;
  bimbelApprovedAt?: DateTimeNullableFilter;
  identityNumberVerifiedAt?: DateTimeNullableFilter;
  schoolId?: StringNullableFilter;
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
  address?: StringNullableFilter;
  logoPath?: StringNullableFilter;
  bannerPath?: StringNullableFilter;
  provinceId?: StringFilter;
  regencyId?: StringFilter;
}

export interface ProvinceCreateWithoutRegenciesInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
  School?: SchoolCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutRegenciesInput {
  id?: string;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
  School?: SchoolUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutRegenciesInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutRegenciesInput;
}

export interface UserCreateWithoutRegencyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutRegencyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
}

export interface UserCreateOrConnectWithoutRegencyInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutRegencyInput;
}

export interface UserCreateManyRegencyInputEnvelope {
  data: UserCreateManyRegencyInput;
  skipDuplicates?: boolean;
}

export interface SchoolCreateWithoutRegencyInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutSchoolInput;
  students?: UserCreateNestedManyWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutRegencyInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
  students?: UserUncheckedCreateNestedManyWithoutSchoolInput;
}

export interface SchoolCreateOrConnectWithoutRegencyInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutRegencyInput;
}

export interface SchoolCreateManyRegencyInputEnvelope {
  data: SchoolCreateManyRegencyInput;
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
  School?: SchoolUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutRegenciesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
  School?: SchoolUncheckedUpdateManyWithoutProvinceInput;
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

export interface SchoolUpsertWithWhereUniqueWithoutRegencyInput {
  where: SchoolWhereUniqueInput;
  update: SchoolUncheckedUpdateWithoutRegencyInput;
  create: SchoolUncheckedCreateWithoutRegencyInput;
}

export interface SchoolUpdateWithWhereUniqueWithoutRegencyInput {
  where: SchoolWhereUniqueInput;
  data: SchoolUncheckedUpdateWithoutRegencyInput;
}

export interface SchoolUpdateManyWithWhereWithoutRegencyInput {
  where: SchoolScalarWhereInput;
  data: SchoolUncheckedUpdateManyWithoutSchoolInput;
}

export interface UserCreateWithoutIdentityFilesInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutIdentityFilesInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutIdentityFilesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
}

export interface ProvinceCreateWithoutUsersInput {
  id?: string;
  name: string;
  regencies?: RegencyCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  School?: SchoolCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutUsersInput {
  id?: string;
  name: string;
  regencies?: RegencyUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  School?: SchoolUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutUsersInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutUsersInput;
}

export interface RegencyCreateWithoutUsersInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutRegenciesInput;
  School?: SchoolCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUncheckedCreateWithoutUsersInput {
  id?: string;
  name: string;
  provinceId: string;
  School?: SchoolUncheckedCreateNestedManyWithoutRegencyInput;
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

export interface ChatCreateWithoutFromInput {
  id?: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chatSession: ChatSessionCreateNestedOneWithoutChatsInput;
}

export interface ChatUncheckedCreateWithoutFromInput {
  id?: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chatSessionId: string;
}

export interface ChatCreateOrConnectWithoutFromInput {
  where: ChatWhereUniqueInput;
  create: ChatUncheckedCreateWithoutFromInput;
}

export interface ChatCreateManyFromInputEnvelope {
  data: ChatCreateManyFromInput;
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

export interface SchoolStaffCreateWithoutUserInput {
  id?: string;
  school: SchoolCreateNestedOneWithoutSchoolStaffsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffUncheckedCreateWithoutUserInput {
  id?: string;
  schoolId: string;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffCreateOrConnectWithoutUserInput {
  where: SchoolStaffWhereUniqueInput;
  create: SchoolStaffUncheckedCreateWithoutUserInput;
}

export interface SchoolStaffCreateManyUserInputEnvelope {
  data: SchoolStaffCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface SchoolCreateWithoutStudentsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  regency: RegencyCreateNestedOneWithoutSchoolInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutStudentsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  regencyId: string;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
}

export interface SchoolCreateOrConnectWithoutStudentsInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutStudentsInput;
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
  School?: SchoolUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  School?: SchoolUncheckedUpdateManyWithoutProvinceInput;
}

export interface RegencyUpsertWithoutUsersInput {
  update: RegencyUncheckedUpdateWithoutUsersInput;
  create: RegencyUncheckedCreateWithoutUsersInput;
}

export interface RegencyUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutRegenciesInput;
  School?: SchoolUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  School?: SchoolUncheckedUpdateManyWithoutRegencyInput;
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

export interface ChatUpsertWithWhereUniqueWithoutFromInput {
  where: ChatWhereUniqueInput;
  update: ChatUncheckedUpdateWithoutFromInput;
  create: ChatUncheckedCreateWithoutFromInput;
}

export interface ChatUpdateWithWhereUniqueWithoutFromInput {
  where: ChatWhereUniqueInput;
  data: ChatUncheckedUpdateWithoutFromInput;
}

export interface ChatUpdateManyWithWhereWithoutFromInput {
  where: ChatScalarWhereInput;
  data: ChatUncheckedUpdateManyWithoutMyChatsInput;
}

export interface ChatScalarWhereInput {
  AND?: ChatScalarWhereInput[];
  OR?: ChatScalarWhereInput[];
  NOT?: ChatScalarWhereInput[];
  id?: StringFilter;
  fromId?: StringFilter;
  contentType?: EnumContentTypeFilter;
  content?: StringFilter;
  readAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  chatSessionId?: StringFilter;
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

export interface SchoolStaffUpsertWithWhereUniqueWithoutUserInput {
  where: SchoolStaffWhereUniqueInput;
  update: SchoolStaffUncheckedUpdateWithoutUserInput;
  create: SchoolStaffUncheckedCreateWithoutUserInput;
}

export interface SchoolStaffUpdateWithWhereUniqueWithoutUserInput {
  where: SchoolStaffWhereUniqueInput;
  data: SchoolStaffUncheckedUpdateWithoutUserInput;
}

export interface SchoolStaffUpdateManyWithWhereWithoutUserInput {
  where: SchoolStaffScalarWhereInput;
  data: SchoolStaffUncheckedUpdateManyWithoutSchoolStaffsInput;
}

export interface SchoolStaffScalarWhereInput {
  AND?: SchoolStaffScalarWhereInput[];
  OR?: SchoolStaffScalarWhereInput[];
  NOT?: SchoolStaffScalarWhereInput[];
  id?: StringFilter;
  schoolId?: StringFilter;
  userId?: StringFilter;
  roles?: EnumSchoolStaffRolesNullableListFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface SchoolUpsertWithoutStudentsInput {
  update: SchoolUncheckedUpdateWithoutStudentsInput;
  create: SchoolUncheckedCreateWithoutStudentsInput;
}

export interface SchoolUpdateWithoutStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  regency?: RegencyUpdateOneRequiredWithoutSchoolInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutSchoolInput;
}

export interface UserCreateWithoutNotificationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutNotificationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutNotificationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  regencies?: RegencyCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceUncheckedCreateWithoutSchoolInput {
  id?: string;
  name: string;
  regencies?: RegencyUncheckedCreateNestedManyWithoutProvinceInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  users?: UserUncheckedCreateNestedManyWithoutProvinceInput;
}

export interface ProvinceCreateOrConnectWithoutSchoolInput {
  where: ProvinceWhereUniqueInput;
  create: ProvinceUncheckedCreateWithoutSchoolInput;
}

export interface RegencyCreateWithoutSchoolInput {
  id?: string;
  name: string;
  province: ProvinceCreateNestedOneWithoutRegenciesInput;
  users?: UserCreateNestedManyWithoutRegencyInput;
}

export interface RegencyUncheckedCreateWithoutSchoolInput {
  id?: string;
  name: string;
  provinceId: string;
  users?: UserUncheckedCreateNestedManyWithoutRegencyInput;
}

export interface RegencyCreateOrConnectWithoutSchoolInput {
  where: RegencyWhereUniqueInput;
  create: RegencyUncheckedCreateWithoutSchoolInput;
}

export interface SchoolStaffCreateWithoutSchoolInput {
  id?: string;
  user: UserCreateNestedOneWithoutSchoolStaffsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffUncheckedCreateWithoutSchoolInput {
  id?: string;
  userId: string;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface SchoolStaffCreateOrConnectWithoutSchoolInput {
  where: SchoolStaffWhereUniqueInput;
  create: SchoolStaffUncheckedCreateWithoutSchoolInput;
}

export interface SchoolStaffCreateManySchoolInputEnvelope {
  data: SchoolStaffCreateManySchoolInput;
  skipDuplicates?: boolean;
}

export interface UserCreateWithoutSchoolInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutSchoolInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutSchoolInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutSchoolInput;
}

export interface UserCreateManySchoolInputEnvelope {
  data: UserCreateManySchoolInput;
  skipDuplicates?: boolean;
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
  regencies?: RegencyUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutProvinceInput;
}

export interface ProvinceUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  regencies?: RegencyUncheckedUpdateManyWithoutProvinceInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutProvinceInput;
}

export interface RegencyUpsertWithoutSchoolInput {
  update: RegencyUncheckedUpdateWithoutSchoolInput;
  create: RegencyUncheckedCreateWithoutSchoolInput;
}

export interface RegencyUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutRegenciesInput;
  users?: UserUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutRegencyInput;
}

export interface SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput {
  where: SchoolStaffWhereUniqueInput;
  update: SchoolStaffUncheckedUpdateWithoutSchoolInput;
  create: SchoolStaffUncheckedCreateWithoutSchoolInput;
}

export interface SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput {
  where: SchoolStaffWhereUniqueInput;
  data: SchoolStaffUncheckedUpdateWithoutSchoolInput;
}

export interface SchoolStaffUpdateManyWithWhereWithoutSchoolInput {
  where: SchoolStaffScalarWhereInput;
  data: SchoolStaffUncheckedUpdateManyWithoutSchoolStaffsInput;
}

export interface UserUpsertWithWhereUniqueWithoutSchoolInput {
  where: UserWhereUniqueInput;
  update: UserUncheckedUpdateWithoutSchoolInput;
  create: UserUncheckedCreateWithoutSchoolInput;
}

export interface UserUpdateWithWhereUniqueWithoutSchoolInput {
  where: UserWhereUniqueInput;
  data: UserUncheckedUpdateWithoutSchoolInput;
}

export interface UserUpdateManyWithWhereWithoutSchoolInput {
  where: UserScalarWhereInput;
  data: UserUncheckedUpdateManyWithoutStudentsInput;
}

export interface SchoolCreateWithoutSchoolStaffsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  regency: RegencyCreateNestedOneWithoutSchoolInput;
  students?: UserCreateNestedManyWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutSchoolStaffsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutSchoolInput;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  regencyId: string;
  students?: UserUncheckedCreateNestedManyWithoutSchoolInput;
}

export interface SchoolCreateOrConnectWithoutSchoolStaffsInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutSchoolStaffsInput;
}

export interface UserCreateWithoutSchoolStaffsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutSchoolStaffsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
}

export interface UserCreateOrConnectWithoutSchoolStaffsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutSchoolStaffsInput;
}

export interface SchoolUpsertWithoutSchoolStaffsInput {
  update: SchoolUncheckedUpdateWithoutSchoolStaffsInput;
  create: SchoolUncheckedCreateWithoutSchoolStaffsInput;
}

export interface SchoolUpdateWithoutSchoolStaffsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  regency?: RegencyUpdateOneRequiredWithoutSchoolInput;
  students?: UserUpdateManyWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutSchoolStaffsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  students?: UserUncheckedUpdateManyWithoutSchoolInput;
}

export interface UserUpsertWithoutSchoolStaffsInput {
  update: UserUncheckedUpdateWithoutSchoolStaffsInput;
  create: UserUncheckedCreateWithoutSchoolStaffsInput;
}

export interface UserUpdateWithoutSchoolStaffsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutSchoolStaffsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
}

export interface SchoolCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  province: ProvinceCreateNestedOneWithoutSchoolInput;
  regency: RegencyCreateNestedOneWithoutSchoolInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutSchoolInput;
  students?: UserCreateNestedManyWithoutSchoolInput;
}

export interface SchoolUncheckedCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
  regencyId: string;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
  students?: UserUncheckedCreateNestedManyWithoutSchoolInput;
}

export interface SchoolCreateOrConnectWithoutClassroomsInput {
  where: SchoolWhereUniqueInput;
  create: SchoolUncheckedCreateWithoutClassroomsInput;
}

export interface UserCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutClassroomsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  regency?: RegencyUpdateOneRequiredWithoutSchoolInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutSchoolInput;
  students?: UserUpdateManyWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutSchoolInput;
  students?: UserUncheckedUpdateManyWithoutSchoolInput;
}

export interface UserUpsertWithoutClassroomsInput {
  update: UserUncheckedUpdateWithoutClassroomsInput;
  create: UserUncheckedCreateWithoutClassroomsInput;
}

export interface UserUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutClassroomsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutClassroomStudentsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutClassroomStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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

export interface ChatCreateWithoutChatSessionInput {
  id?: string;
  from: UserCreateNestedOneWithoutMyChatsInput;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChatUncheckedCreateWithoutChatSessionInput {
  id?: string;
  fromId: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChatCreateOrConnectWithoutChatSessionInput {
  where: ChatWhereUniqueInput;
  create: ChatUncheckedCreateWithoutChatSessionInput;
}

export interface ChatCreateManyChatSessionInputEnvelope {
  data: ChatCreateManyChatSessionInput;
  skipDuplicates?: boolean;
}

export interface ChatUpsertWithWhereUniqueWithoutChatSessionInput {
  where: ChatWhereUniqueInput;
  update: ChatUncheckedUpdateWithoutChatSessionInput;
  create: ChatUncheckedCreateWithoutChatSessionInput;
}

export interface ChatUpdateWithWhereUniqueWithoutChatSessionInput {
  where: ChatWhereUniqueInput;
  data: ChatUncheckedUpdateWithoutChatSessionInput;
}

export interface ChatUpdateManyWithWhereWithoutChatSessionInput {
  where: ChatScalarWhereInput;
  data: ChatUncheckedUpdateManyWithoutChatsInput;
}

export interface UserCreateWithoutMyChatsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutMyChatsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
}

export interface UserCreateOrConnectWithoutMyChatsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutMyChatsInput;
}

export interface ChatSessionCreateWithoutChatsInput {
  id?: string;
  participantsIds?: string[];
  lastReadAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChatSessionUncheckedCreateWithoutChatsInput {
  id?: string;
  participantsIds?: string[];
  lastReadAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChatSessionCreateOrConnectWithoutChatsInput {
  where: ChatSessionWhereUniqueInput;
  create: ChatSessionUncheckedCreateWithoutChatsInput;
}

export interface UserUpsertWithoutMyChatsInput {
  update: UserUncheckedUpdateWithoutMyChatsInput;
  create: UserUncheckedCreateWithoutMyChatsInput;
}

export interface UserUpdateWithoutMyChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutMyChatsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
}

export interface ChatSessionUpsertWithoutChatsInput {
  update: ChatSessionUncheckedUpdateWithoutChatsInput;
  create: ChatSessionUncheckedCreateWithoutChatsInput;
}

export interface ChatSessionUpdateWithoutChatsInput {
  id?: StringFieldUpdateOperationsInput;
  participantsIds?: string[];
  lastReadAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChatSessionUncheckedUpdateWithoutChatsInput {
  id?: StringFieldUpdateOperationsInput;
  participantsIds?: string[];
  lastReadAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserCreateWithoutExaminationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutExaminationsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutExaminationsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  questions?: QuestionCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutExamsessionsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutExamsessionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  province: ProvinceCreateNestedOneWithoutUsersInput;
  regency: RegencyCreateNestedOneWithoutUsersInput;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileCreateNestedManyWithoutUserInput;
  examinations?: ExamCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionCreateNestedManyWithoutUserInput;
  myChats?: ChatCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentCreateNestedManyWithoutUserInput;
  notifications?: NotificationCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffCreateNestedManyWithoutUserInput;
  school?: SchoolCreateNestedOneWithoutStudentsInput;
}

export interface UserUncheckedCreateWithoutQuestionsInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  identityFiles?: IdentityFileUncheckedCreateNestedManyWithoutUserInput;
  examinations?: ExamUncheckedCreateNestedManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedCreateNestedManyWithoutUserInput;
  myChats?: ChatUncheckedCreateNestedManyWithoutFromInput;
  classrooms?: ClassroomUncheckedCreateNestedManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedCreateNestedManyWithoutUserInput;
  notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedCreateNestedManyWithoutUserInput;
  schoolId?: string;
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
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutQuestionsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  schoolId?: string;
}

export interface SchoolCreateManyProvinceInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  regencyId: string;
}

export interface RegencyUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  users?: UserUpdateManyWithoutRegencyInput;
  School?: SchoolUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  users?: UserUncheckedUpdateManyWithoutRegencyInput;
  School?: SchoolUncheckedUpdateManyWithoutRegencyInput;
}

export interface RegencyUncheckedUpdateManyWithoutRegenciesInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface UserUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutProvinceInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
}

export interface UserUncheckedUpdateManyWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
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
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  regency?: RegencyUpdateOneRequiredWithoutSchoolInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutSchoolInput;
  students?: UserUpdateManyWithoutSchoolInput;
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
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutSchoolInput;
  students?: UserUncheckedUpdateManyWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateManyWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
}

export interface UserCreateManyRegencyInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
  schoolId?: string;
}

export interface SchoolCreateManyRegencyInput {
  id?: string;
  name: string;
  npsn?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  levels?: number[];
  type: string;
  address?: string;
  logoPath?: string;
  bannerPath?: string;
  provinceId: string;
}

export interface UserUpdateWithoutRegencyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
  school?: SchoolUpdateOneWithoutStudentsInput;
}

export interface UserUncheckedUpdateWithoutRegencyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
  schoolId?: NullableStringFieldUpdateOperationsInput;
}

export interface SchoolUpdateWithoutRegencyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutSchoolInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutSchoolInput;
  students?: UserUpdateManyWithoutSchoolInput;
}

export interface SchoolUncheckedUpdateWithoutRegencyInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  npsn?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutSchoolInput;
  levels?: number[];
  type?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  logoPath?: NullableStringFieldUpdateOperationsInput;
  bannerPath?: NullableStringFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutSchoolInput;
  students?: UserUncheckedUpdateManyWithoutSchoolInput;
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

export interface ChatCreateManyFromInput {
  id?: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  chatSessionId: string;
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

export interface SchoolStaffCreateManyUserInput {
  id?: string;
  schoolId: string;
  roles?: SchoolStaffRoles[];
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

export interface ChatUpdateWithoutFromInput {
  id?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chatSession?: ChatSessionUpdateOneRequiredWithoutChatsInput;
}

export interface ChatUncheckedUpdateWithoutFromInput {
  id?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chatSessionId?: StringFieldUpdateOperationsInput;
}

export interface ChatUncheckedUpdateManyWithoutMyChatsInput {
  id?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  chatSessionId?: StringFieldUpdateOperationsInput;
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

export interface SchoolStaffUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  school?: SchoolUpdateOneRequiredWithoutSchoolStaffsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface SchoolStaffUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput;
  schoolId?: StringFieldUpdateOperationsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface SchoolStaffUncheckedUpdateManyWithoutSchoolStaffsInput {
  id?: StringFieldUpdateOperationsInput;
  schoolId?: StringFieldUpdateOperationsInput;
  roles?: SchoolStaffRoles[];
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

export interface SchoolStaffCreateManySchoolInput {
  id?: string;
  userId: string;
  roles?: SchoolStaffRoles[];
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserCreateManySchoolInput {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  address?: string;
  profilePicturePath?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  nisn?: string;
  nrg?: string;
  verifykey?: string;
  verifyType?: VerifyType;
  provinceId: string;
  regencyId: string;
  isAdmin?: boolean;
  isBimbel?: boolean;
  role: Roles;
  balance?: number;
  emailVerifiedAt?: undefined;
  phoneNumberVerifiedAt?: undefined;
  bimbelApprovedAt?: undefined;
  identityNumberVerifiedAt?: undefined;
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

export interface SchoolStaffUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutSchoolStaffsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface SchoolStaffUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  userId?: StringFieldUpdateOperationsInput;
  roles?: SchoolStaffRoles[];
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  province?: ProvinceUpdateOneRequiredWithoutUsersInput;
  regency?: RegencyUpdateOneRequiredWithoutUsersInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUpdateManyWithoutUserInput;
  questions?: QuestionUpdateManyWithoutUserInput;
  examinations?: ExamUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUpdateManyWithoutUserInput;
  myChats?: ChatUpdateManyWithoutFromInput;
  classrooms?: ClassroomUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUpdateManyWithoutUserInput;
  notifications?: NotificationUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutSchoolInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityFiles?: IdentityFileUncheckedUpdateManyWithoutUserInput;
  questions?: QuestionUncheckedUpdateManyWithoutUserInput;
  examinations?: ExamUncheckedUpdateManyWithoutUserInput;
  examsessions?: ExamSessionUncheckedUpdateManyWithoutUserInput;
  myChats?: ChatUncheckedUpdateManyWithoutFromInput;
  classrooms?: ClassroomUncheckedUpdateManyWithoutUserInput;
  classroomStudents?: ClassroomStudentUncheckedUpdateManyWithoutUserInput;
  notifications?: NotificationUncheckedUpdateManyWithoutUserInput;
  schoolStaffs?: SchoolStaffUncheckedUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateManyWithoutStudentsInput {
  id?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  phoneNumber?: StringFieldUpdateOperationsInput;
  address?: NullableStringFieldUpdateOperationsInput;
  profilePicturePath?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  nisn?: NullableStringFieldUpdateOperationsInput;
  nrg?: NullableStringFieldUpdateOperationsInput;
  verifykey?: NullableStringFieldUpdateOperationsInput;
  verifyType?: NullableEnumVerifyTypeFieldUpdateOperationsInput;
  provinceId?: StringFieldUpdateOperationsInput;
  regencyId?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  isBimbel?: BoolFieldUpdateOperationsInput;
  role?: EnumRolesFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  phoneNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
  bimbelApprovedAt?: NullableDateTimeFieldUpdateOperationsInput;
  identityNumberVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;
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

export interface ChatCreateManyChatSessionInput {
  id?: string;
  fromId: string;
  contentType: ContentType;
  content: string;
  readAt?: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface ChatUpdateWithoutChatSessionInput {
  id?: StringFieldUpdateOperationsInput;
  from?: UserUpdateOneRequiredWithoutMyChatsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChatUncheckedUpdateWithoutChatSessionInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface ChatUncheckedUpdateManyWithoutChatsInput {
  id?: StringFieldUpdateOperationsInput;
  fromId?: StringFieldUpdateOperationsInput;
  contentType?: EnumContentTypeFieldUpdateOperationsInput;
  content?: StringFieldUpdateOperationsInput;
  readAt?: NullableDateTimeFieldUpdateOperationsInput;
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

export interface AggregateSchoolStaff {
  _count: Maybe<SchoolStaffCountAggregateOutputType>;
  _min: Maybe<SchoolStaffMinAggregateOutputType>;
  _max: Maybe<SchoolStaffMaxAggregateOutputType>;
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

export interface AggregateChatSession {
  _count: Maybe<ChatSessionCountAggregateOutputType>;
  _min: Maybe<ChatSessionMinAggregateOutputType>;
  _max: Maybe<ChatSessionMaxAggregateOutputType>;
}

export interface AggregateChat {
  _count: Maybe<ChatCountAggregateOutputType>;
  _min: Maybe<ChatMinAggregateOutputType>;
  _max: Maybe<ChatMaxAggregateOutputType>;
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

export interface RegencyCountOutputType {
  users: number;
  School: number;
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

export interface UserCountOutputType {
  identityFiles: number;
  questions: number;
  examinations: number;
  examsessions: number;
  myChats: number;
  classrooms: number;
  classroomStudents: number;
  notifications: number;
  schoolStaffs: number;
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
  verifykey: number;
  verifyType: number;
  provinceId: number;
  regencyId: number;
  isAdmin: number;
  isBimbel: number;
  role: number;
  balance: number;
  emailVerifiedAt: number;
  phoneNumberVerifiedAt: number;
  bimbelApprovedAt: number;
  identityNumberVerifiedAt: number;
  schoolId: number;
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
  verifykey: Maybe<string>;
  verifyType: Maybe<VerifyType>;
  provinceId: Maybe<string>;
  regencyId: Maybe<string>;
  isAdmin: Maybe<boolean>;
  isBimbel: Maybe<boolean>;
  role: Maybe<Roles>;
  balance: Maybe<number>;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  bimbelApprovedAt: Maybe<undefined>;
  identityNumberVerifiedAt: Maybe<undefined>;
  schoolId: Maybe<string>;
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
  verifykey: Maybe<string>;
  verifyType: Maybe<VerifyType>;
  provinceId: Maybe<string>;
  regencyId: Maybe<string>;
  isAdmin: Maybe<boolean>;
  isBimbel: Maybe<boolean>;
  role: Maybe<Roles>;
  balance: Maybe<number>;
  emailVerifiedAt: Maybe<undefined>;
  phoneNumberVerifiedAt: Maybe<undefined>;
  bimbelApprovedAt: Maybe<undefined>;
  identityNumberVerifiedAt: Maybe<undefined>;
  schoolId: Maybe<string>;
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
  schoolStaffs: number;
  students: number;
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
  regencyId: number;
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
  regencyId: Maybe<string>;
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
  regencyId: Maybe<string>;
}

export interface SchoolStaffCountAggregateOutputType {
  id: number;
  schoolId: number;
  userId: number;
  roles: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface SchoolStaffMinAggregateOutputType {
  id: Maybe<string>;
  schoolId: Maybe<string>;
  userId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface SchoolStaffMaxAggregateOutputType {
  id: Maybe<string>;
  schoolId: Maybe<string>;
  userId: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
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

export interface ChatSessionCountOutputType {
  chats: number;
}

export interface ChatSessionCountAggregateOutputType {
  id: number;
  participantsIds: number;
  lastReadAt: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface ChatSessionMinAggregateOutputType {
  id: Maybe<string>;
  lastReadAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ChatSessionMaxAggregateOutputType {
  id: Maybe<string>;
  lastReadAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface ChatCountAggregateOutputType {
  id: number;
  fromId: number;
  contentType: number;
  content: number;
  readAt: number;
  createdAt: number;
  updatedAt: number;
  chatSessionId: number;
  _all: number;
}

export interface ChatMinAggregateOutputType {
  id: Maybe<string>;
  fromId: Maybe<string>;
  contentType: Maybe<ContentType>;
  content: Maybe<string>;
  readAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  chatSessionId: Maybe<string>;
}

export interface ChatMaxAggregateOutputType {
  id: Maybe<string>;
  fromId: Maybe<string>;
  contentType: Maybe<ContentType>;
  content: Maybe<string>;
  readAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  chatSessionId: Maybe<string>;
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

export interface findUniqueChatArgs {
  where: ChatWhereUniqueInput;
}

export interface findFirstChatArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithRelationInput[];
  cursor?: ChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatScalarFieldEnum[];
}

export interface findManyChatArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithRelationInput[];
  cursor?: ChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatScalarFieldEnum[];
}

export interface findManyChatCountArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithRelationInput[];
  cursor?: ChatWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatScalarFieldEnum[];
}

export interface aggregateChatArgs {
  where?: ChatWhereInput;
  orderBy?: ChatOrderByWithRelationInput[];
  cursor?: ChatWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueChatSessionArgs {
  where: ChatSessionWhereUniqueInput;
}

export interface findFirstChatSessionArgs {
  where?: ChatSessionWhereInput;
  orderBy?: ChatSessionOrderByWithRelationInput[];
  cursor?: ChatSessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatSessionScalarFieldEnum[];
}

export interface findManyChatSessionArgs {
  where?: ChatSessionWhereInput;
  orderBy?: ChatSessionOrderByWithRelationInput[];
  cursor?: ChatSessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatSessionScalarFieldEnum[];
}

export interface findManyChatSessionCountArgs {
  where?: ChatSessionWhereInput;
  orderBy?: ChatSessionOrderByWithRelationInput[];
  cursor?: ChatSessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ChatSessionScalarFieldEnum[];
}

export interface aggregateChatSessionArgs {
  where?: ChatSessionWhereInput;
  orderBy?: ChatSessionOrderByWithRelationInput[];
  cursor?: ChatSessionWhereUniqueInput;
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

export interface findUniqueSchoolStaffArgs {
  where: SchoolStaffWhereUniqueInput;
}

export interface findFirstSchoolStaffArgs {
  where?: SchoolStaffWhereInput;
  orderBy?: SchoolStaffOrderByWithRelationInput[];
  cursor?: SchoolStaffWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SchoolStaffScalarFieldEnum[];
}

export interface findManySchoolStaffArgs {
  where?: SchoolStaffWhereInput;
  orderBy?: SchoolStaffOrderByWithRelationInput[];
  cursor?: SchoolStaffWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SchoolStaffScalarFieldEnum[];
}

export interface findManySchoolStaffCountArgs {
  where?: SchoolStaffWhereInput;
  orderBy?: SchoolStaffOrderByWithRelationInput[];
  cursor?: SchoolStaffWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: SchoolStaffScalarFieldEnum[];
}

export interface aggregateSchoolStaffArgs {
  where?: SchoolStaffWhereInput;
  orderBy?: SchoolStaffOrderByWithRelationInput[];
  cursor?: SchoolStaffWhereUniqueInput;
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

export interface findChatTargetArgs {
  name: string;
  /** @default 10*/
  take?: number;
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

export interface createOneChatArgs {
  data: ChatCreateInput;
}

export interface updateOneChatArgs {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
}

export interface upsertOneChatArgs {
  where: ChatWhereUniqueInput;
  create: ChatCreateInput;
  update: ChatUpdateInput;
}

export interface deleteOneChatArgs {
  where: ChatWhereUniqueInput;
}

export interface updateManyChatArgs {
  data: ChatUpdateManyMutationInput;
  where?: ChatWhereInput;
}

export interface deleteManyChatArgs {
  where?: ChatWhereInput;
}

export interface createOneChatSessionArgs {
  data: ChatSessionCreateInput;
}

export interface updateOneChatSessionArgs {
  data: ChatSessionUpdateInput;
  where: ChatSessionWhereUniqueInput;
}

export interface upsertOneChatSessionArgs {
  where: ChatSessionWhereUniqueInput;
  create: ChatSessionCreateInput;
  update: ChatSessionUpdateInput;
}

export interface deleteOneChatSessionArgs {
  where: ChatSessionWhereUniqueInput;
}

export interface updateManyChatSessionArgs {
  data: ChatSessionUpdateManyMutationInput;
  where?: ChatSessionWhereInput;
}

export interface deleteManyChatSessionArgs {
  where?: ChatSessionWhereInput;
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

export interface createOneSchoolStaffArgs {
  data: SchoolStaffCreateInput;
}

export interface updateOneSchoolStaffArgs {
  data: SchoolStaffUpdateInput;
  where: SchoolStaffWhereUniqueInput;
}

export interface upsertOneSchoolStaffArgs {
  where: SchoolStaffWhereUniqueInput;
  create: SchoolStaffCreateInput;
  update: SchoolStaffUpdateInput;
}

export interface deleteOneSchoolStaffArgs {
  where: SchoolStaffWhereUniqueInput;
}

export interface updateManySchoolStaffArgs {
  data: SchoolStaffUpdateManyMutationInput;
  where?: SchoolStaffWhereInput;
}

export interface deleteManySchoolStaffArgs {
  where?: SchoolStaffWhereInput;
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
  phoneNumber: string;
  address?: string;
  provinceId: string;
  regencyId: string;
  role: Roles;
  nrg?: string;
  nisn?: string;
  schoolId?: string;
}

export interface validateArgs {
  email: string;
}

export interface loginArgs {
  email: string;
  password: string;
}

export interface createNewSessionArgs {
  to: string;
}

export interface sendChatArgs {
  to: string;
  content: string;
  type: ContentType;
  file?: File;
}

export interface chatSubscribeArgs {}
