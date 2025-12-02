-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  car_interest TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'contacted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for contact form)
CREATE POLICY "Allow public to insert inquiries"
  ON inquiries
  FOR INSERT
  TO PUBLIC  
  WITH CHECK (true);

-- Create policy to allow reads for authenticated users (for admin dashboard)
CREATE POLICY "Allow authenticated users to read inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow updates for authenticated users (for admin dashboard)
CREATE POLICY "Allow authenticated users to update inquiries"
  ON inquiries
  FOR UPDATE
  TO authenticated
  USING (true);
