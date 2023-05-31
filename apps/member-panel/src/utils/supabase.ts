import { createClient } from "@supabase/supabase-js";
import { type Database } from "../types/supabase";

export const supabase = createClient<Database>(
  "https://lcqkpwigtqwunbahwqbl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcWtwd2lndHF3dW5iYWh3cWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0MzYwNjYsImV4cCI6MjAwMTAxMjA2Nn0.WjjWKm40vWX59uEcqUxqiLAZ9V0QkxzuJUEJGsE-RKA"
);
