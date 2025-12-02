import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a conditional client - only initialize if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export type Inquiry = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    message: string;
    car_interest?: string;
    status: 'new' | 'read' | 'contacted';
    created_at: string;
};
