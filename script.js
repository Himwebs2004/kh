function collectUserInfo() {
    // جمع البيانات حول المتصفح والجهاز
    const userInfo = {
        userAgent: navigator.userAgent,          // معلومات عن المتصفح
        platform: navigator.platform,            // النظام الأساسي (مثل Windows أو Mac)
        language: navigator.language,            // لغة المتصفح
        screenWidth: window.screen.width,        // عرض الشاشة
        screenHeight: window.screen.height,      // ارتفاع الشاشة
        cookiesEnabled: navigator.cookieEnabled, // هل ملفات تعريف الارتباط مفعلة
        referrer: document.referrer              // الصفحة التي جاء منها الزائر
    };

    // إرسال البيانات إلى GitHub (لن يكون ممكنًا مباشرةً بدون خادم)
    console.log(userInfo); // يمكنك أن تقوم بطباعة البيانات لتراها في Console

    // يمكنك تخزين البيانات محليًا باستخدام LocalStorage إذا أردت:
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // أو يمكنك إرسال البيانات إلى خادم أو صفحة باستخدام fetch API (في حالة أنك تحتاج خادم)
    // لكن في GitHub Pages لا يمكن إرسال البيانات مباشرةً، لذلك هذا سيكون غير ممكن
    /*
    fetch(' https://radhwan2007.github.io/kh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => console.log('Data sent successfully', data))
    .catch(error => console.error('Error sending data', error));
    */
}

// استدعاء الدالة لجمع البيانات
collectUserInfo();
