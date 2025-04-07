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
    getProfile: builder.query<userSliceType, void>({
      query: () => 'auth/profile',
    }),
    getResturant: builder.query<Resturant, void>({
      query: () => 'resturant',
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
  }),
});

export const {
  useGetProfileQuery,
  useRegisterUserMutation,
  useGetResturantQuery,
} = mobileApi;
