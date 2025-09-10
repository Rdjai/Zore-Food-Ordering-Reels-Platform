# Zore App 🍽️🎬

A **Zomato-like Food Delivery App** with **Reels feature**, built with **MERN stack**.  
Users can order food, track delivery, watch restaurant reels, follow other users, and explore trending content.  
Riders, Admins, and AI-powered features are integrated to give a complete real-world experience.

---

## **🌟 Tech Stack**

- **Frontend:** React / React Native  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **File Storage:** Cloudinary / Local Uploads  
- **AI Features:** Auto-caption, Food Detection, Recommendations  

---

## **🚀 Features**

### **User Features**
- Register, login, logout, and profile management  
- Follow / unfollow other users  
- Favorite restaurants & products  
- Place orders and track order status in real-time  
- Add, update, and delete reviews  
- Explore trending reels, tags, and recommendations  

### **Restaurant Features**
- Add & manage restaurants (Admin/Owner)  
- Upload reels (videos with captions & tags)  
- Add menu items, product add-ons, and coupons  
- View reviews and orders  

### **Reels Features**
- Upload, like, unlike, and comment on reels  
- View trending reels and personalized feed  
- Explore reels by tags  

### **Rider Features**
- Update availability (online/offline)  
- Pick up and deliver orders  
- View assigned orders and delivery history  

### **Admin Features**
- Manage users, restaurants, reels, coupons  
- View app analytics & generate announcements  

### **AI Features**
- Auto-generate captions for reels  
- Food detection from video/image frames  
- Personalized restaurant/reel recommendations  
- Predict restaurant ratings  
- Get trending tags  

---

## **📌 API Endpoints**

### **1️⃣ Auth**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/auth/register` | Register new user ✅ |  
| POST `/api/auth/login` | Login & get JWT ✅ |  
| POST `/api/auth/logout` | Logout (invalidate token) ✅ |  
| GET `/api/auth/me` | Get current user profile ✅ |  

### **2️⃣ Users**
| Endpoint | Description |  
|----------|-------------|  
| GET `/api/users/:id` | Get user profile ✅ |  
| PUT `/api/users/:id` | Update profile ✅ |  
| DELETE `/api/users/:id` | Delete account |  
| POST `/api/users/:id/follow` | Follow user ✅ |  
| POST `/api/users/:id/unfollow` | Unfollow user ✅ |  
| GET `/api/users/:id/followers` | Get followers ✅ |  
| GET `/api/users/:id/following` | Get following ✅ |  
| POST `/api/users/:id/favorite` | Add to favorites |  
| DELETE `/api/users/:id/favorite/:restaurantId` | Remove from favorites |  
| GET `/api/users/:id/favorites` | List favorites |  
| GET `/api/users/:id/reviews` | User reviews |  
| POST `/api/users/:id/review` | Add review |  
| PUT `/api/users/:id/review/:reviewId` | Update review |  
| DELETE `/api/users/:id/review/:reviewId` | Delete review |  
| GET `/api/users/:id/orders/history` | User order history |  

### **3️⃣ Restaurants**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/restaurants` | Add restaurant ✅ |  
| GET `/api/restaurants` | Get all restaurants ✅ |  
| GET `/api/restaurants/:id` | Single restaurant ✅ |  
| PUT `/api/restaurants/:id` | Update restaurant ✅ |  
| DELETE `/api/restaurants/:id` | Delete restaurant ✅ |  
| GET `/api/restaurants/:id/reels` | Get all reels ✅ |  
| GET `/api/restaurants/:id/reviews` | Restaurant reviews |  
| POST `/api/restaurants/:id/review` | Add review |  
| GET `/api/restaurants/:id/menu` | Get menu |  
| POST `/api/restaurants/:id/coupon` | Add coupon |  
| GET `/api/restaurants/:id/coupons` | Get coupons |  
| DELETE `/api/restaurants/:id/coupon/:couponId` | Remove coupon |  

### **4️⃣ Products**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/products` | Add product |  
| GET `/api/products` | List products |  
| GET `/api/products/:id` | Product details |  
| PUT `/api/products/:id` | Update product |  
| DELETE `/api/products/:id` | Delete product |  
| POST `/api/products/:id/add-ons` | Add toppings |  
| GET `/api/products/:id/add-ons` | Get toppings |  
| DELETE `/api/products/:id/add-ons/:addonId` | Delete topping |  

### **5️⃣ Reels**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/reels` | Upload reel ✅ |  
| GET `/api/reels` | Get reels ✅ |  
| GET `/api/reels/:id` | Reel details ✅ |  
| DELETE `/api/reels/:id` | Delete reel ✅ |  
| POST `/api/reels/:id/like` | Like reel ✅ |  
| POST `/api/reels/:id/unlike` | Unlike reel ✅ |  
| POST `/api/reels/:id/comment` | Add comment ✅ |  
| GET `/api/reels/:id/comments` | List comments ✅ |  

### **6️⃣ Orders**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/orders` | Place order |  
| GET `/api/orders/:id` | Order details |  
| GET `/api/orders/user/:userId` | User orders |  
| GET `/api/orders/restaurant/:restaurantId` | Restaurant orders |  
| PUT `/api/orders/:id/status` | Update order status |  
| PUT `/api/orders/:id/track` | Track order |  
| POST `/api/orders/:id/payment` | Payment |  
| GET `/api/orders/:id/invoice` | Get invoice |  
| POST `/api/orders/:id/cancel` | Cancel order |  

### **7️⃣ Rider**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/riders` | Add rider |  
| GET `/api/riders` | List riders |  
| PUT `/api/riders/:id/assign` | Assign order |  
| GET `/api/riders/:id/orders` | Assigned orders |  
| PUT `/api/riders/:id/status` | Update availability |  
| POST `/api/riders/:id/pickup` | Mark pickup |  
| POST `/api/riders/:id/deliver` | Mark delivery |  
| GET `/api/riders/:id/history` | Delivery history |  

### **8️⃣ Feed & Explore**
| Endpoint | Description |  
|----------|-------------|  
| GET `/api/feed` | Personalized feed |  
| GET `/api/explore/trending` | Trending reels |  
| GET `/api/explore/tags/:tag` | Reels by tag |  
| GET `/api/explore/cuisine/:cuisine` | Restaurants by cuisine |  
| GET `/api/explore/location/:city` | Restaurants by city |  
| GET `/api/explore/deals` | Restaurants with deals |  

### **9️⃣ AI / Smart Features**
| Endpoint | Description |  
|----------|-------------|  
| POST `/api/ai/caption` | Auto-generate reel caption |  
| POST `/api/ai/recommend` | Recommendations |  
| POST `/api/ai/food-detect` | Detect food in reel |  
| POST `/api/ai/popular-tags` | Trending tags |  
| POST `/api/ai/predict-rating` | Predict rating |  

### **🔟 Admin**
| Endpoint | Description |  
|----------|-------------|  
| GET `/api/admin/users` | List users ✅ |  
| GET `/api/admin/restaurants` | List restaurants ✅ |  
| GET `/api/admin/reels` | List reels ✅ |  
| DELETE `/api/admin/users/:id` | Ban user ✅ |  
| DELETE `/api/admin/reels/:id` | Remove reel ✅ |  
| POST `/api/admin/announcement` | Global announcement |  
| GET `/api/admin/analytics` | App analytics |  
| DELETE `/api/admin/coupon/:id` | Remove coupon |  

---

## **📂 Project Structure**
