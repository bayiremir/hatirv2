import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Brand} from '../../interfaces/brand.interface';

const baseQuery = fetchBaseQuery({
  baseUrl: `https://tr.fd-api.com/api/v5/vendors/`,
  prepareHeaders: headers => {
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

export const resturantApi = createApi({
  reducerPath: 'resturantApi',
  baseQuery: baseQueryWithAuthCheck,
  endpoints: builder => ({
    getBrands: builder.query<Brand, {code: String}>({
      query: ({code}: {code: String}) =>
        `${code}?include=menus,bundles,multiple_discounts,payment_types&language_id=2&opening_type=delivery&basket_currency=TRY&latitude=40.9814619&longitude=29.0251977`,
    }),
  }),
});

export const {useGetBrandsQuery} = resturantApi;
