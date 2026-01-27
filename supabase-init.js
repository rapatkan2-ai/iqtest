// supabase-init.js
// Centralized Supabase Initialization
const supabaseUrl = 'https://punlkmquvahqkqmcfqgx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bmxrbXF1dmFocWtxbWNmcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTEwODUsImV4cCI6MjA4MzkyNzA4NX0.7ueEXLBsEBgAqHWoOzc0_djWCZ0d7PBMPIwM3tmay7A';

window.supabaseClient = null;

if (typeof window.supabase !== 'undefined') {
    try {
        window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        // console.log("Supabase initialized globally."); // Optional: verify in console
    } catch (err) {
        console.error("Failed to initialize global Supabase client:", err);
    }
} else {
    console.error("Supabase library not loaded. Ensure supabase-js script is included before this script.");
}
