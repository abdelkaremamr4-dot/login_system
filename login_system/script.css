// script.js

// تهيئة EmailJS مع مفتاح Public Key الخاص بك
emailjs.init('O1VdLuyRAAGHxHpls');

const loginContainer = document.getElementById('login-container');
const forgotContainer = document.getElementById('forgot-container');

const loginForm = document.getElementById('login-form');
const forgotForm = document.getElementById('forgot-form');

const loginError = document.getElementById('login-error');
const forgotError = document.getElementById('forgot-error');
const forgotSuccess = document.getElementById('forgot-success');

document.getElementById('forgot-password-link').addEventListener('click', () => {
  loginContainer.style.display = 'none';
  forgotContainer.style.display = 'block';
  clearMessages();
});

document.getElementById('back-to-login-link').addEventListener('click', () => {
  forgotContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  clearMessages();
});

loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  clearMessages();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      alert('تم تسجيل الدخول بنجاح');
      // هنا يمكنك إعادة التوجيه أو تنفيذ ما تريد بعد تسجيل الدخول
    } else {
      loginError.textContent = data.message || 'فشل تسجيل الدخول';
      loginError.style.display = 'block';
    }
  } catch (error) {
    loginError.textContent = 'حدث خطأ في الاتصال بالخادم';
    loginError.style.display = 'block';
    console.error(error);
  }
});

forgotForm.addEventListener('submit', async e => {
  e.preventDefault();
  clearMessages();

  const usernameOrEmail = document.getElementById('forgot-username').value.trim();

  const sendBtn = document.getElementById('send-password-btn');
  sendBtn.disabled = true;
  sendBtn.textContent = 'جارِ الإرسال...';

  try {
    // نرسل طلب للخادم لاسترجاع بيانات المستخدم (اسم، بريد، كلمة مرور)
    const response = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernameOrEmail })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // نفترض أن الخادم يعيد بيانات المستخدم لإرسال البريد
      const { to_name, to_email, user_password } = data.user;

      const templateParams = {
        to_name,
        to_email,
        user_password
      };

      await emailjs.send('service_6xzbr5j', '__ejs-test-mail-service__', templateParams);

      forgotSuccess.textContent = 'تم إرسال كلمة المرور إلى بريدك الإلكتروني';
      forgotSuccess.style.display = 'block';
      forgotForm.reset();
    } else {
      forgotError.textContent = data.message || 'لم يتم العثور على المستخدم';
      forgotError.style.display = 'block';
    }
  } catch (error) {
    forgotError.textContent = 'حدث خطأ أثناء إرسال البريد الإلكتروني، يرجى المحاولة لاحقاً';
    forgotError.style.display = 'block';
    console.error(error);
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = 'إرسال كلمة المرور';
  }
});

function clearMessages() {
  loginError.style.display = 'none';
  forgotError.style.display = 'none';
  forgotSuccess.style.display = 'none';
}