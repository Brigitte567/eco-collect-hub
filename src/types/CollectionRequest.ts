
export interface CollectionRequest {
  id?: string; // UUID in string format
  user_id: string;
  bin_id: string;
  status: 'pending' | 'in_progress' | 'completed';
  created_at?: string;
  updated_at?: string;
  notes?: string;
  address?: string;
}
