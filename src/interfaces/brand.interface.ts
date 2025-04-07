export interface BrandState {
  brandData: Brand | null;
  brandDataLoading: boolean;
  error: string | null;
}

export interface Brand {
  status_code: number;
  data: Data;
}

export interface Data {
  id: number;
  code: string;
  accepts_instructions: boolean;
  address: string;
  address_line2: string;
  budget: number;
  deals: any[];
  constraints: any[];
  cuisines: Cuisine[];
  delivery_duration_range: any;
  pickup_duration_range: any;
  delivery_fee_source: string;
  description: string;
  discounts: any[];
  distance: number;
  experiments: Experiment[];
  favorite: any;
  has_delivery_provider: boolean;
  hero_image: string;
  hero_listing_image: string;
  is_active: boolean;
  is_delivery_enabled: boolean;
  is_new_until: string;
  is_pickup_enabled: boolean;
  is_premium: boolean;
  is_preorder_enabled: boolean;
  is_promoted: boolean;
  is_test: boolean;
  is_vat_disabled: boolean;
  is_vat_included_in_product_price: boolean;
  is_vat_visible: boolean;
  is_vat_included: boolean;
  is_voucher_enabled: boolean;
  is_super_vendor: boolean;
  latitude: number;
  location: string;
  location_event: any;
  logo: string;
  longitude: number;
  loyalty_percentage_amount: number;
  loyalty_program_enabled: boolean;
  minimum_delivery_fee: number;
  minimum_delivery_time: number;
  minimum_order_amount: number;
  minimum_pickup_time: number;
  name: string;
  original_delivery_fee: number;
  payment_types: any[];
  post_code: string;
  primary_cuisine_id: number;
  rating: number;
  topic_ratings: TopicRating[];
  review_number: number;
  review_with_comment_number: number;
  schedules: Schedule[];
  service_fee: number;
  service_fee_percentage_amount: number;
  short_name: string;
  small_order_fee: any;
  special_days: any[];
  tag: string;
  tags: any;
  trade_register_number: string;
  url_key: string;
  characteristics: Characteristics;
  vendor_legal_information: VendorLegalInformation;
  vertical: string;
  vertical_segment: string;
  vertical_parent: string;
  web_path: string;
  is_partner_cashback_disabled: boolean;
  vertical_type_ids: string[];
  chain: Chain;
  city: City;
  custom_location_url: string;
  customer_phone: string;
  customer_type: string;
  delivery_box: string;
  delivery_conditions: DeliveryCondition[];
  delivery_fee_type: string;
  delivery_provider_id: number;
  food_characteristics: FoodCharacteristic2[];
  favorite_data: any;
  is_busy: boolean;
  is_best_in_city: boolean;
  is_checkout_comment_enabled: boolean;
  is_express_delivery_available: boolean;
  is_express_delivery_enabled: boolean;
  is_new: boolean;
  premium_position: number;
  is_replacement_dish_enabled: boolean;
  is_service_fee_enabled: boolean;
  is_service_tax_enabled: boolean;
  is_service_tax_visible: boolean;
  food_license_number: string;
  maximum_express_order_amount: number;
  menus: Menu[];
  toppings: Toppings2;
  metadata: Metadata;
  redirection_url: string;
  scoreCriteria: ScoreCriteria;
  service_tax_percentage_amount: number;
  time_picker: any;
  vat_percentage_amount: number;
  order_flow: string;
  website: string;
  has_online_payment: boolean;
}

export interface Cuisine {
  id: number;
  name: string;
  url_key: string;
  main: boolean;
}

export interface Experiment {
  experiment_id: string;
  experiment_variation: string;
  is_participating: boolean;
}

export interface TopicRating {
  topic: string;
  score: number;
}

export interface Schedule {
  id: number;
  weekday: number;
  opening_type: string;
  opening_time: string;
  closing_time: string;
}

export interface Characteristics {
  cuisines: Cuisine2[];
  food_characteristics: FoodCharacteristic[];
  primary_cuisine: PrimaryCuisine;
}

export interface Cuisine2 {
  id: number;
  name: string;
  url_key: string;
  main: boolean;
}

export interface FoodCharacteristic {
  id: number;
  name: string;
  is_halal: boolean;
  is_vegetarian: boolean;
}

export interface PrimaryCuisine {
  id: number;
  name: string;
  url_key: string;
  main: boolean;
}

export interface VendorLegalInformation {
  legal_name: string;
  address_line_1: string;
  trade_register_number: string;
}

export interface Chain {
  id: number;
  main_vendor_code: string;
  main_vendor_id: number;
  is_accepting_global_vouchers: boolean;
  listing_image_url: string;
  logo_image_url: string;
  name: any;
  url_key: any;
  code: any;
}

export interface City {
  id: number;
  name: string;
  url_key: string;
  is_top_city: boolean;
  is_main_city: boolean;
  is_express_delivery_enabled: boolean;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface DeliveryCondition {
  delivery_fee: number;
  delivery_fee_type: string;
  minimum_order_amount: number;
  maximum_order_amount: number;
}

export interface FoodCharacteristic2 {
  id: number;
  name: string;
  is_halal: boolean;
  is_vegetarian: boolean;
}

export interface Menu {
  ab_sorting_applied: boolean;
  id: number;
  code: string;
  name: string;
  description: string;
  type: string;
  opening_time: string;
  closing_time: string;
  menu_categories: MenuCategory[];
  toppings: Toppings;
}

export interface MenuCategory {
  id: number;
  code: string;
  name: string;
  description: string;
  products: Product[];
  is_popular_category: boolean;
}

export interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  display_price: string;
  master_category_id: number;
  file_path: string;
  logo_path: string;
  images_urls: any[];
  images: Image[];
  is_prepacked_item: boolean;
  is_sold_out: boolean;
  is_express_item: boolean;
  exclude_dish_information: boolean;
  additives: any[];
  is_alcoholic_item: boolean;
  sold_out_options: SoldOutOption[];
  dietary_attributes: DietaryAttributes;
  product_variations: ProductVariation[];
  half_type: string;
  is_half_type_available: boolean;
  is_bundle: boolean;
  most_liked?: MostLiked;
  vat_percentage?: number;
  tags?: string[];
}

export interface Image {
  image_url: string;
  tags: Tags;
}

export interface Tags {}

export interface SoldOutOption {
  default: boolean;
  option: string;
  text: string;
}

export interface DietaryAttributes {}

export interface ProductVariation {
  id: number;
  code: string;
  remote_code: string;
  container_price: number;
  price: number;
  topping_ids: number[];
  is_vegetarian: boolean;
  is_non_vegetarian: boolean;
  spiceness: string;
  topping_properties: ToppingProperty[];
  unit_pricing: any;
  total_price: number;
  dietary_attributes: DietaryAttributes2;
}

export interface ToppingProperty {
  id: number;
  use_original_price: boolean;
}

export interface DietaryAttributes2 {}

export interface MostLiked {
  ProductId: string;
  Likes: number;
  TotalCount: number;
  Percentage: number;
}

export interface Toppings {
  '15762750': N15762750;
  '16204230': N16204230;
}

export interface N15762750 {
  id: number;
  name: string;
  description: string;
  quantity_minimum: number;
  quantity_maximum: number;
  options: Option[];
  type: string;
}

export interface Option {
  id: number;
  product_id: number;
  name: string;
  description: string;
  price: number;
  is_sold_out: boolean;
  is_half_half_applicable: boolean;
  remote_code: string;
  variation_tag_map: VariationTagMap;
}

export interface VariationTagMap {
  popular: number[];
}

export interface N16204230 {
  id: number;
  name: string;
  description: string;
  quantity_minimum: number;
  quantity_maximum: number;
  options: Option2[];
  type: string;
}

export interface Option2 {
  id: number;
  product_id: number;
  name: string;
  description: string;
  price: number;
  is_sold_out: boolean;
  is_half_half_applicable: boolean;
  remote_code: string;
  variation_tag_map?: VariationTagMap2;
}

export interface VariationTagMap2 {
  popular: number[];
}

export interface Toppings2 {
  '15762750': N157627502;
  '16204230': N162042302;
}

export interface N157627502 {
  id: number;
  name: string;
  description: string;
  quantity_minimum: number;
  quantity_maximum: number;
  options: Option3[];
  type: string;
}

export interface Option3 {
  id: number;
  product_id: number;
  name: string;
  description: string;
  price: number;
  is_sold_out: boolean;
  is_half_half_applicable: boolean;
  remote_code: string;
  variation_tag_map: VariationTagMap3;
}

export interface VariationTagMap3 {
  popular: number[];
}

export interface N162042302 {
  id: number;
  name: string;
  description: string;
  quantity_minimum: number;
  quantity_maximum: number;
  options: Option4[];
  type: string;
}

export interface Option4 {
  id: number;
  product_id: number;
  name: string;
  description: string;
  price: number;
  is_sold_out: boolean;
  is_half_half_applicable: boolean;
  remote_code: string;
  variation_tag_map?: VariationTagMap4;
}

export interface VariationTagMap4 {
  popular: number[];
}

export interface Metadata {
  is_delivery_available: boolean;
  is_pickup_available: boolean;
  is_express_delivery_available: boolean;
  is_temporary_closed: boolean;
  has_discount: boolean;
  timezone: string;
  events: any[];
  close_reasons: any[];
  is_flood_feature_closed: boolean;
  available_in: any;
}

export interface ScoreCriteria {
  vendor_id: number;
  vendor_code: string;
  coefficients: any;
  vendor_values: any;
}
