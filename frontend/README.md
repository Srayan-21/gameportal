# ArenaX

ArenaX is a gaming tournament portal with a React frontend and an Express/MongoDB API.

## Run locally

1. Install the frontend dependencies with `npm install` in `frontend`.
2. Install the backend dependencies with `npm install` in `backend`.
3. Create `backend/.env` with:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_long_random_secret
   PORT=5000
   ```

4. Start the API with `npm run dev` in `backend`.
5. Start the frontend with `npm run dev` in `frontend`.

The frontend expects the API at `http://localhost:5000/api`.
