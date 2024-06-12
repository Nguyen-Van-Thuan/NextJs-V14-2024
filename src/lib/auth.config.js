export const authConfig = {
  pages: {
    signIn: "/login", // Đường dẫn đến trang đăng nhập
  },
  providers: [], // Danh sách các nhà cung cấp xác thực
  callbacks: {
    // Callback JWT
    async jwt({ token, user }) {
      if (user) {
        // Thêm thông tin người dùng vào token
        token.id = user.id; // ID của người dùng
        token.isAdmin = user.isAdmin; // Trạng thái quản trị viên của người dùng
      }
      return token;
    },
    // Callback Session
    async session({ session, token }) {
      if (token) {
        // Thêm thông tin từ token vào session
        session.user.id = token.id; // ID của người dùng
        session.user.isAdmin = token.isAdmin; // Trạng thái quản trị viên của người dùng
      }
      return session;
    },
    // Callback Authorized
    authorized({ auth, request }) {
      const user = auth?.user; // Thông tin người dùng hiện tại
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin"); // Kiểm tra xem người dùng có trên bảng điều khiển admin không
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog"); // Kiểm tra xem người dùng có trên trang Blog không
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login"); // Kiểm tra xem người dùng có trên trang Đăng nhập không

      // Chỉ quản trị viên mới được phép truy cập vào bảng điều khiển admin
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // Chỉ người dùng đã đăng nhập mới được phép truy cập vào trang Blog
      if (isOnBlogPage && !user) {
        return false;
      }

      // Chỉ những người dùng chưa đăng nhập mới được phép truy cập vào trang Đăng nhập
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      // Mặc định cho phép truy cập
      return true;
    },
  },
};
