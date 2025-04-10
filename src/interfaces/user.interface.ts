// userSlice.interface.ts

// Kullanıcı için login geçmişi interface'i
export interface LoginHistoryType {
  ip: string;
  userAgent: string;
  timestamp: Date;
}

// Bildirim interface'i
export interface NotificationType {
  message: string;
  read: boolean;
  timestamp: Date;
}

// MongoDB şemasına uygun kullanıcı temel veri tipi
export interface BaseUserType {
  uid: string;
  email: string;
  name?: string;
  profilePicture?: string;
  phoneNumber?: string;
  address?: string;
  balance?: number;
  createdAt?: Date;
  updatedAt?: Date;
  isAdmin?: boolean;
  isVerified?: boolean;
  isBlocked?: boolean;
  lastLogin?: Date;
  loginHistory?: LoginHistoryType[];
  notifications?: NotificationType[];
}

// Mevcut uygulama kodunuz için userSliceType
export interface userSliceType {
  uid: '';
  email: '';
  name: '';
  phoneNumber: '';
  profilePicture: '';
  isAuthenticated: false;
}

// Initial state interface'i
export interface userSliceInitialStateType {
  authLogin: boolean;
  user: userSliceType | null;
  theme: string;
  onboarding: boolean;
  notificationEnabled: boolean;
  cart: any[];
}
