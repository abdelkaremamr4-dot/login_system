// Currency symbols
const currencySymbols = {
    USD: '$',
    EUR: '€',
    PLN: 'zł'
};

// Exchange rates
const exchangeRates = {
    USD: { EUR: 0.92, PLN: 4.02, USD: 1.00 },
    EUR: { USD: 1.09, PLN: 4.37, EUR: 1.00 },
    PLN: { USD: 0.25, EUR: 0.23, PLN: 1.00 }
};

// Enhanced translations
const translations = {
    en: {
        appName: "Store Manager",
        loginSubtitle: "Access your data from anywhere",
        loading: "Loading...",
        cloudConnected: "Cloud Connected",
        syncing: "Syncing...",
        offline: "Offline Mode",
        synced: "Synced to Cloud",
        accessAnywhere: "Access from any device",
        login: "Login",
        register: "Register",
        forgotPassword: "Forgot Password",
        emailOrUsername: "Email or Username",
        username: "Username",
        password: "Password",
        fullName: "Full Name",
        email: "Email Address",
        confirmPassword: "Confirm Password",
        companyName: "Company/Store Name",
        loginBtn: "Login",
        registerBtn: "Create Account",
        logout: "Logout",
        logoutConfirm: "Are you sure you want to logout?",
        logoutSuccess: "Logged out successfully",
        loginSuccess: "Login successful!",
        forgotPasswordLink: "Forgot your password?",
        dashboard: "Dashboard",
        orders: "Orders",
        products: "Products",
        customers: "Customers",
        language: "Language",
        currency: "Currency",
        newOrder: "New Order",
        addOrder: "Add Order",
        editOrder: "Edit Order",
        addProduct: "Add Product",
        editProduct: "Edit Product",
        addCustomer: "Add Customer",
        editCustomer: "Edit Customer",
        allOrders: "All Orders",
        allProducts: "All Products",
        allCustomers: "All Customers",
        totalOrders: "Total Orders",
        totalRevenue: "Total Revenue",
        totalProducts: "Total Products",
        totalCustomers: "Total Customers",
        recentOrders: "Recent Orders",
        orderNumber: "Order Number",
        generateNew: "Generate New",
        customer: "Customer",
        product: "Product",
        total: "Total",
        actions: "Actions",
        productName: "Product Name",
        category: "Category",
        price: "Price",
        stock: "Stock",
        description: "Description",
        customerName: "Customer Name",
        phone: "Phone",
        city: "City",
        address: "Address",
        save: "Save",
        update: "Update",
        cancel: "Cancel",
        edit: "Edit",
        delete: "Delete",
        view: "View",
        createOrder: "Create Order",
        updateOrder: "Update Order",
        orderDate: "Order Date",
        orderNotes: "Order Notes",
        paymentStatus: "Payment Status",
        paid: "Paid",
        paymentPending: "Payment Pending",
        partialPayment: "Partial Payment",
        unpaid: "Unpaid",
        paidAmount: "Paid Amount",
        remainingAmount: "Remaining Amount",
        orderStatus: "Order Status",
        completed: "Completed",
        inProgress: "In Progress",
        readyToShip: "Ready to Ship",
        cancelled: "Cancelled",
        shippingMethod: "Shipping Method",
        shippingVia: "Shipping Via",
        standardShipping: "Standard Shipping",
        expressShipping: "Express Shipping",
        overnightShipping: "Overnight Shipping",
        pickupShipping: "Store Pickup",
        exportAll: "Export All Data",
        exportOrders: "Export Orders",
        exportProducts: "Export Products",
        exportCustomers: "Export Customers",
        shareWhatsApp: "Share on WhatsApp",
        shareOnWhatsApp: "Share",
        phoneNumber: "Phone Number",
        customMessage: "Custom Message",
        messagePreview: "Message Preview",
        sendWhatsApp: "Send WhatsApp",
        demoCredentials: "Demo Credentials",
        emailVerificationSent: "Email verification sent! Please check your inbox.",
        emailNotVerified: "Please verify your email address first.",
        resendVerification: "Resend Verification Email",
        backToLogin: "Back to Login"
    },
    ar: {
        appName: "مدير المتجر",
        loginSubtitle: "الوصول إلى بياناتك من أي مكان",
        loading: "جاري التحميل...",
        cloudConnected: "متصل بالسحابة",
        syncing: "جاري المزامنة...",
        offline: "وضع عدم الاتصال",
        synced: "تمت المزامنة مع السحابة",
        accessAnywhere: "الوصول من أي جهاز",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        forgotPassword: "نسيت كلمة المرور",
        emailOrUsername: "البريد الإلكتروني أو اسم المستخدم",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        confirmPassword: "تأكيد كلمة المرور",
        companyName: "اسم الشركة/المتجر",
        loginBtn: "دخول",
        registerBtn: "إنشاء حساب",
        logout: "خروج",
        logoutConfirm: "هل أنت متأكد من تسجيل الخروج؟",
        logoutSuccess: "تم تسجيل الخروج بنجاح",
        loginSuccess: "تم تسجيل الدخول بنجاح!",
        forgotPasswordLink: "نسيت كلمة المرور؟",
        dashboard: "لوحة التحكم",
        orders: "الطلبات",
        products: "المنتجات",
        customers: "العملاء",
        language: "اللغة",
        currency: "العملة",
        newOrder: "طلب جديد",
        addOrder: "إضافة طلب",
        editOrder: "تعديل الطلب",
        addProduct: "إضافة منتج",
        editProduct: "تعديل المنتج",
        addCustomer: "إضافة عميل",
        editCustomer: "تعديل العميل",
        allOrders: "جميع الطلبات",
        allProducts: "جميع المنتجات",
        allCustomers: "جميع العملاء",
        totalOrders: "إجمالي الطلبات",
        totalRevenue: "إجمالي الإيرادات",
        totalProducts: "إجمالي المنتجات",
        totalCustomers: "إجمالي العملاء",
        recentOrders: "الطلبات الأخيرة",
        orderNumber: "رقم الطلب",
        generateNew: "إنشاء رقم جديد",
        customer: "العميل",
        product: "المنتج",
        total: "الإجمالي",
        actions: "الإجراءات",
        productName: "اسم المنتج",
        category: "الفئة",
        price: "السعر",
        stock: "المخزون",
        description: "الوصف",
        customerName: "اسم العميل",
        phone: "الهاتف",
        city: "المدينة",
        address: "العنوان",
        save: "حفظ",
        update: "تحديث",
        cancel: "إلغاء",
        edit: "تعديل",
        delete: "حذف",
        view: "عرض",
        createOrder: "إنشاء الطلب",
        updateOrder: "تحديث الطلب",
        orderDate: "تاريخ الطلب",
        orderNotes: "ملاحظات الطلب",
        paymentStatus: "حالة الدفع",
        paid: "مدفوع",
        paymentPending: "دفع معلق",
        partialPayment: "دفع جزئي",
        unpaid: "غير مدفوع",
        paidAmount: "المبلغ المدفوع",
        remainingAmount: "المبلغ المتبقي",
        orderStatus: "حالة الطلب",
        completed: "تم",
        inProgress: "قيد الانتظار",
        readyToShip: "جاهز للإرسال",
        cancelled: "ملغى",
        shippingMethod: "طريقة الإرسال",
        shippingVia: "الإرسال عبر",
        standardShipping: "إرسال عادي",
        expressShipping: "إرسال سريع",
        overnightShipping: "إرسال ليلي",
        pickupShipping: "استلام من المتجر",
        exportAll: "تصدير جميع البيانات",
        exportOrders: "تصدير الطلبات",
        exportProducts: "تصدير المنتجات",
        exportCustomers: "تصدير العملاء",
        shareWhatsApp: "مشاركة على واتساب",
        shareOnWhatsApp: "مشاركة",
        phoneNumber: "رقم الهاتف",
        customMessage: "رسالة مخصصة",
        messagePreview: "معاينة الرسالة",
        sendWhatsApp: "إرسال واتساب",
        demoCredentials: "بيانات تجريبية",
        emailVerificationSent: "تم إرسال رسالة التحقق! يرجى فحص بريدك الإلكتروني.",
        emailNotVerified: "يرجى تأكيد بريدك الإلكتروني أولاً.",
        resendVerification: "إعادة إرسال رسالة التحقق",
        backToLogin: "العودة لتسجيل الدخول"
    },
    pl: {
        appName: "Menedżer Sklepu",
        loginSubtitle: "Dostęp do danych z dowolnego miejsca",
        loading: "Ładowanie...",
        cloudConnected: "Połączony z chmurą",
        syncing: "Synchronizacja...",
        offline: "Tryb offline",
        synced: "Zsynchronizowane z chmurą",
        accessAnywhere: "Dostęp z dowolnego urządzenia",
        login: "Zaloguj się",
        register: "Zarejestruj się",
        forgotPassword: "Zapomniałeś hasła",
        emailOrUsername: "E-mail lub nazwa użytkownika",
        username: "Nazwa użytkownika",
        password: "Hasło",
        fullName: "Pełne imię",
        email: "Adres e-mail",
        confirmPassword: "Potwierdź hasło",
        companyName: "Nazwa firmy/sklepu",
        loginBtn: "Zaloguj",
        registerBtn: "Utwórz konto",
        logout: "Wyloguj",
        logoutConfirm: "Czy na pewno chcesz się wylogować?",
        logoutSuccess: "Wylogowano pomyślnie",
        loginSuccess: "Zalogowano pomyślnie!",
        forgotPasswordLink: "Zapomniałeś hasła?",
        dashboard: "Panel główny",
        orders: "Zamówienia",
        products: "Produkty",
        customers: "Klienci",
        language: "Język",
        currency: "Waluta",
        emailVerificationSent: "Wysłano e-mail weryfikacyjny! Sprawdź swoją skrzynkę odbiorczą.",
        emailNotVerified: "Najpierw zweryfikuj swój adres e-mail.",
        resendVerification: "Wyślij ponownie e-mail weryfikacyjny",
        backToLogin: "Powrót do logowania"
    }
};

// Global variables
let currentUser = null;
let currentLanguage = 'en';
let currentCurrency = 'USD';
let products = [];
let customers = [];
let orders = [];
let editingItemId = null;
let editingItemType = null;

// Firebase variables (will be initialized in the module script)
let auth, db, analytics;

// Initialize Firebase (this will be called from the module script)
function initializeFirebaseApp(firebaseAuth, firebaseDb, firebaseAnalytics) {
    auth = firebaseAuth;
    db = firebaseDb;
    analytics = firebaseAnalytics;
    
    // Set up auth state listener
    setupAuthStateListener();
    
    // Initialize the app
    initApp();
}

// Auth state listener
function setupAuthStateListener() {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            if (user.emailVerified) {
                // User is signed in and email is verified
                if (!currentUser) {
                    try {
                        const userDoc = await db.collection('users').doc(user.uid).get();
                        if (userDoc.exists) {
                            currentUser = {
                                uid: user.uid,
                                email: user.email,
                                emailVerified: user.emailVerified,
                                ...userDoc.data()
                            };
                            
                            localStorage.setItem('currentUser', JSON.stringify(currentUser));
                            
                            await loadUserData();
                            showApp();
                            updateUserInfo();
                            updateDashboardStats();
                        }
                    } catch (error) {
                        console.error('Error loading user data:', error);
                        showLogin();
                    }
                }
            } else {
                // User is signed in but email is not verified
                showEmailVerificationMessage(user);
            }
        } else {
            // User is signed out
            if (currentUser) {
                currentUser = null;
                localStorage.removeItem('currentUser');
                showLogin();
            }
        }
    });
}

// Show email verification message
function showEmailVerificationMessage(user) {
    const lang = translations[currentLanguage];
    
    // Create verification message
    const verificationDiv = document.createElement('div');
    verificationDiv.className = 'alert alert-warning';
    verificationDiv.innerHTML = `
        <div style="text-align: center;">
            <p>${lang.emailNotVerified}</p>
            <button class="btn btn-primary btn-sm" onclick="resendVerificationEmail()" style="margin-top: 0.5rem;">
                ${lang.resendVerification}
            </button>
        </div>
    `;
    
    // Add to login card
    const loginCard = document.querySelector('.login-card');
    const existingAlert = loginCard.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    loginCard.
     }