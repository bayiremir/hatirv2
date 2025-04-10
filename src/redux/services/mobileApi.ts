import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getAuth} from '@react-native-firebase/auth';
import {userSliceType} from '../../interfaces/user.interface';
import {Resturant} from '../../interfaces/resturant.enum';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5001/api/',
  prepareHeaders: async headers => {
    const token = await getAuth().currentUser?.getIdToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithAuthCheck = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    // Yetkisiz durumda yapılacak işlemler burada ele alınabilir.
    console.error('Unauthorized: Oturumunuz sona erdi.');
  }
  return result;
};

export const mobileApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuthCheck,
  endpoints: builder => ({
    // 🔐 Auth
    getProfile: builder.query<userSliceType, void>({
      query: () => 'auth/profile',
    }),
    registerUser: builder.mutation<
      userSliceType,
      {name: string; email: string; password: string; phoneNumber: string}
    >({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),

    // 🍽️ Restaurant
    getResturant: builder.query<Resturant, void>({
      query: () => 'resturant',
    }),

    // 👥 User List & Search
    getAllUsers: builder.query<userSliceType[], void>({
      query: () => 'users',
    }),
    searchUsers: builder.query<userSliceType[], string>({
      query: keyword => `users/search?q=${keyword}`,
    }),

    // 🤝 Friends
    getFriends: builder.query<userSliceType[], string>({
      query: userId => `users/${userId}/friends`,
    }),
    getFriendRequests: builder.query<userSliceType[], string>({
      query: userId => `users/${userId}/friend-requests`,
    }),
    sendFriendRequest: builder.mutation<
      void,
      {fromUserId: string; toUserId: string}
    >({
      query: body => ({
        url: 'users/send-friend-request',
        method: 'POST',
        body,
      }),
    }),
    acceptFriendRequest: builder.mutation<
      void,
      {userId: string; requesterId: string}
    >({
      query: body => ({
        url: 'users/accept-friend-request',
        method: 'POST',
        body,
      }),
    }),
    rejectFriendRequest: builder.mutation<
      void,
      {userId: string; requesterId: string}
    >({
      query: body => ({
        url: 'users/reject-friend-request',
        method: 'POST',
        body,
      }),
    }),
    removeFriend: builder.mutation<void, {userId: string; friendId: string}>({
      query: body => ({
        url: 'users/remove-friend',
        method: 'POST',
        body,
      }),
    }),

    // 🚫 Block
    blockUser: builder.mutation<void, {userId: string; blockId: string}>({
      query: body => ({
        url: 'users/block',
        method: 'POST',
        body,
      }),
    }),

    // 🎁 Gifts
    sendGift: builder.mutation<
      any,
      {
        productName: string;
        amount: number;
        senderId: string;
        receiverId: string;
      }
    >({
      query: body => ({
        url: 'gifts/send',
        method: 'POST',
        body,
      }),
    }),
    getGiftsByUser: builder.query<any[], string>({
      query: userId => `gifts/user/${userId}`,
    }),
  }),
});

export const {
  useGetProfileQuery,
  useRegisterUserMutation,
  useGetResturantQuery,
  useGetAllUsersQuery,
  useSearchUsersQuery,
  useGetFriendsQuery,
  useGetFriendRequestsQuery,
  useSendFriendRequestMutation,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation,
  useRemoveFriendMutation,
  useBlockUserMutation,
  useSendGiftMutation,
  useGetGiftsByUserQuery,
} = mobileApi;
