1️⃣ Auth Routes

| Endpoint                  | Description               | Status |
| ------------------------- | ------------------------- | ------ |
| POST `/api/auth/register` | Register new user         | ✅      |
| POST `/api/auth/login`    | Login and get token       | ✅      |
| POST `/api/auth/logout`   | Logout (invalidate token) | ✅      |
| GET `/api/auth/me`        | Get current user profile  | ✅      |


2️⃣ User Routes (Extended)
| Endpoint                                       | Description                         | Status |
| ---------------------------------------------- | ----------------------------------- | ------ |
| GET `/api/users/:id`                           | Get user profile                    | ✅      |
| PUT `/api/users/:id`                           | Update profile info                 | ✅      |
| DELETE `/api/users/:id`                        | Delete account                      |        |
| POST `/api/users/:id/follow`                   | Follow user                         | ✅      |
| POST `/api/users/:id/unfollow`                 | Unfollow user                       | ✅      |
| GET `/api/users/:id/followers`                 | Get followers list                  | ✅      |
| GET `/api/users/:id/following`                 | Get following list                  | ✅      |
| POST `/api/users/:id/favorite`                 | Add restaurant/product to favorites |        |
| DELETE `/api/users/:id/favorite/:restaurantId` | Remove from favorites               |        |
| GET `/api/users/:id/favorites`                 | Get all favorites                   |        |
| GET `/api/users/:id/reviews`                   | Get all reviews by user             |        |
| POST `/api/users/:id/review`                   | Add review                          |        |
| PUT `/api/users/:id/review/:reviewId`          | Update review                       |        |
| DELETE `/api/users/:id/review/:reviewId`       | Delete review                       |        |
| GET `/api/users/:id/orders/history`            | Get past orders                     |        |



3️⃣ Restaurant Routes (Extended)

| Endpoint                                       | Description                                              | Status |
| ---------------------------------------------- | -------------------------------------------------------- | ------ |
| POST `/api/restaurants`                        | Add new restaurant (admin/owner)                         | ✅      |
| GET `/api/restaurants`                         | Get all restaurants (filters: cuisine, location, rating) | ✅      |
| GET `/api/restaurants/:id`                     | Get single restaurant                                    | ✅      |
| PUT `/api/restaurants/:id`                     | Update restaurant info                                   | ✅      |
| DELETE `/api/restaurants/:id`                  | Delete restaurant                                        | ✅      |
| GET `/api/restaurants/:id/reels`               | Get all reels for a restaurant                           | ✅      |
| GET `/api/restaurants/:id/reviews`             | Get all reviews for a restaurant                         |        |
| POST `/api/restaurants/:id/review`             | Add review (user)                                        |        |
| GET `/api/restaurants/:id/menu`                | Get all products/menu                                    |        |
| POST `/api/restaurants/:id/coupon`             | Add coupon/promo                                         |        |
| GET `/api/restaurants/:id/coupons`             | Get all coupons                                          |        |
| DELETE `/api/restaurants/:id/coupon/:couponId` | Delete coupon                                            |        |



4️⃣ Product/Food Routes (Extended)

| Endpoint                                    | Description           | Status |
| ------------------------------------------- | --------------------- | ------ |
| POST `/api/products`                        | Add product/food item |        |
| GET `/api/products`                         | Get all products      |        |
| GET `/api/products/:id`                     | Get product details   |        |
| PUT `/api/products/:id`                     | Update product        |        |
| DELETE `/api/products/:id`                  | Delete product        |        |
| POST `/api/products/:id/add-ons`            | Add add-ons/toppings  |        |
| GET `/api/products/:id/add-ons`             | Get add-ons           |        |
| DELETE `/api/products/:id/add-ons/:addonId` | Delete add-on         |        |


5️⃣ Order Routes (Extended)

| Endpoint                                   | Description                     | Status |
| ------------------------------------------ | ------------------------------- | ------ |
| POST `/api/orders`                         | Place an order                  |        |
| GET `/api/orders/:id`                      | Get order details               |        |
| GET `/api/orders/user/:userId`             | Get all orders by a user        |        |
| GET `/api/orders/restaurant/:restaurantId` | Get all orders for a restaurant |        |
| PUT `/api/orders/:id/status`               | Update order status             |        |
| PUT `/api/orders/:id/track`                | Update order location (rider)   |        |
| POST `/api/orders/:id/payment`             | Make payment                    |        |
| GET `/api/orders/:id/invoice`              | Get invoice/bill                |        |
| POST `/api/orders/:id/cancel`              | Cancel order                    |        |



6️⃣ Rider/Delivery Routes (Extended)

| Endpoint                       | Description               | Status |
| ------------------------------ | ------------------------- | ------ |
| POST `/api/riders`             | Add new rider             |        |
| GET `/api/riders`              | List all riders           |        |
| PUT `/api/riders/:id/assign`   | Assign order to rider     |        |
| GET `/api/riders/:id/orders`   | Get assigned orders       |        |
| PUT `/api/riders/:id/status`   | Update rider availability |        |
| POST `/api/riders/:id/pickup`  | Mark order picked up      |        |
| POST `/api/riders/:id/deliver` | Mark order delivered      |        |
| GET `/api/riders/:id/history`  | Get past delivered orders |        |



7️⃣ Feed & Explore Routes (Extended)

| Endpoint                            | Description                 | Status |
| ----------------------------------- | --------------------------- | ------ |
| GET `/api/feed`                     | Personalized feed           |        |
| GET `/api/explore/trending`         | Get trending reels          |        |
| GET `/api/explore/tags/:tag`        | Get reels by tag            |        |
| GET `/api/explore/cuisine/:cuisine` | Get restaurants by cuisine  |        |
| GET `/api/explore/location/:city`   | Get restaurants by location |        |
| GET `/api/explore/deals`            | Get restaurants with deals  |        |



8️⃣ AI / Smart Features (Extended)

| Endpoint                      | Description                                | Status |
| ----------------------------- | ------------------------------------------ | ------ |
| POST `/api/ai/popular-tags`   | Get trending tags from reels               |        |
| POST `/api/ai/predict-rating` | Predict restaurant rating based on reviews |        |


9️⃣ Admin Routes (Extended)

| Endpoint                       | Description                | Status |
| ------------------------------ | -------------------------- | ------ |
| GET `/api/admin/users`         | Get all users              | ✅      |
| GET `/api/admin/restaurants`   | Get all restaurants        | ✅      |
| GET `/api/admin/reels`         | Get all reels              | ✅      |
| DELETE `/api/admin/users/:id`  | Ban user                   | ✅      |
| DELETE `/api/admin/reels/:id`  | Remove reel                | ✅      |
| POST `/api/admin/announcement` | Create global announcement |        |
| GET `/api/admin/analytics`     | App analytics              |        |
| DELETE `/api/admin/coupon/:id` | Remove coupon              |        |



9️⃣ Search Routes

| Endpoint                         | Description        | Status |
| -------------------------------- | ------------------ | ------ |
| GET `/api/search/users?q=`       | Search users       |        |
| GET `/api/search/restaurants?q=` | Search restaurants |        |
| GET `/api/search/reels?q=`       | Search reels       |        |


🔟 Reel Routes

| Endpoint                      | Description                                  | Status |
| ----------------------------- | -------------------------------------------- | ------ |
| POST `/api/reels`             | Upload new reel                              | ✅      |
| GET `/api/reels`              | Get all reels (pagination & trending filter) | ✅      |
| GET `/api/reels/:id`          | Get single reel details                      | ✅      |
| DELETE `/api/reels/:id`       | Delete reel                                  | ✅      |
| POST `/api/reels/:id/like`    | Like reel                                    | ✅      |
| POST `/api/reels/:id/unlike`  | Unlike reel                                  | ✅      |
| POST `/api/reels/:id/comment` | Add comment                                  | ✅      |
| GET `/api/reels/:id/comments` | Get all comments                             | ✅      |



✅ Summary

Total endpoints you completed = 34

Total endpoints in full project = 87


Remaining endpoints to implement include:

Products / Food items

Orders & Payments

Rider / Delivery endpoints

Favorites, Reviews, Coupons

Feed & Explore filters

AI endpoints

Extended Admin analytics & announcements