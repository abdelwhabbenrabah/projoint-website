// Attendez que tout le contenu HTML de la page soit complètement chargé et analysé.
// C'est une bonne pratique pour s'assurer que tous les éléments sont disponibles avant de tenter de les manipuler avec JavaScript.
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne l'élément du carrousel dans le DOM.
    // L'élément avec la classe 'product-carousel' est le conteneur défilant des produits.
    const carousel = document.querySelector('.product-carousel');
    // Sélectionne la flèche de navigation gauche.
    const leftArrow = document.querySelector('.left-arrow');
    // Sélectionne la flèche de navigation droite.
    const rightArrow = document.querySelector('.right-arrow');

    // Définit le nombre de pixels à faire défiler à chaque clic sur une flèche.
    // Ajustez cette valeur si vous voulez un défilement plus ou moins grand.
    const scrollAmount = 300; 

    // Ajoute un écouteur d'événement 'click' à la flèche gauche.
    // Quand la flèche gauche est cliquée, la fonction à l'intérieur est exécutée.
    leftArrow.addEventListener('click', function() {
        // Fait défiler le carrousel vers la gauche.
        // 'left: -scrollAmount' indique de défiler la quantité définie vers la gauche (valeur négative).
        // 'behavior: 'smooth'' assure un défilement fluide et animé.
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Ajoute un écouteur d'événement 'click' à la flèche droite.
    // Quand la flèche droite est cliquée, la fonction à l'intérieur est exécutée.
    rightArrow.addEventListener('click', function() {
        // Fait défiler le carrousel vers la droite.
        // 'left: scrollAmount' indique de défiler la quantité définie vers la droite (valeur positive).
        // 'behavior: 'smooth'' assure un défilement fluide.
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // --- Section Optionnelle et Notes Supplémentaires ---
    // Gérer la visibilité des flèches si le carrousel n'est pas débordant est plus complexe
    // et nécessiterait de surveiller le défilement et la taille du conteneur.
    // Pour un carrousel simple, les flèches restent toujours visibles.
    // Si une implémentation plus robuste est nécessaire, l'utilisation d'une bibliothèque
    // de carrousel dédiée serait préférable.

    // Bonus : Assurer que cliquer sur la carte redirige même si un bouton est présent.
    // Par défaut, si un lien <a> englobe une carte, le clic sur n'importe quelle partie
    // de la carte redirigera. Le bouton est souvent là pour des raisons esthétiques
    // et d'accessibilité. Si un bouton interne avait une action JavaScript distincte
    // et que vous vouliez empêcher le lien parent de se déclencher,
    // vous utiliseriez `event.stopPropagation()` dans le gestionnaire d'événements du bouton.
});
// هذا مجرد مثال للتأكد من أن ملف JavaScript يعمل
console.log("ملف JavaScript لأعمالنا يعمل!");

// هنا يمكنك إضافة كود JavaScript لجلب المشاريع ديناميكيًا،
// أو إضافة تأثيرات التمرير، أو أي تفاعل آخر.

// مثال: إضافة حدث عند النقر على زر "عرض المشروع" (للتجربة فقط)
document.querySelectorAll('.view-project-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // event.preventDefault(); // لمنع الانتقال إلى رابط #
        alert('لقد نقرت على زر عرض المشروع لهذا العمل!');
    });
});
 // دوال عامة لفتح وإغلاق أي نافذة منبثقة
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // اجعلها مرئية أولاً
        // أضف الكلاس للحركة بعد فترة قصيرة
        setTimeout(() => {
            modal.classList.add('is-visible-custom'); // الكلاس الجديد للحركة
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-visible-custom'); // إزالة الكلاس لإعادة الحركة العكسية
        // انتظر حتى تنتهي الحركة قبل إخفائها تماماً ومسح النموذج
        setTimeout(() => {
            modal.style.display = 'none';
            // مسح حقول النموذج بعد الإغلاق
            const form = modal.querySelector('form');
            if (form) {
                form.reset();
            }
            // إخفاء رسائل التحقق
            modal.querySelectorAll('.validation-message-custom').forEach(msg => msg.style.display = 'none');
        }, 400); // يجب أن تتطابق هذه المدة مع مدة الانتقال في CSS
    }
}

// ===========================================
// التعامل مع أزرار فتح النوافذ المنبثقة (بناءً على IDs الأزرار الخارجية)
// ===========================================

// الزر "Demander un échantillon"
const openSampleModalBtn = document.getElementById('openSampleModalBtn');
if (openSampleModalBtn) {
    openSampleModalBtn.addEventListener('click', function() {
        openModal('sampleModal'); // يفتح النافذة بالـ ID 'sampleModal'
    });
}

// الزر "Demander un Devis"
const openQuoteModalBtn = document.getElementById('openQuoteModalBtn');
if (openQuoteModalBtn) {
    openQuoteModalBtn.addEventListener('click', function() {
        openModal('quoteModal'); // يفتح النافذة بالـ ID 'quoteModal'
    });
}

// الزر "Poser une Question"
const openQuestionModalBtn = document.getElementById('openQuestionModalBtn');
if (openQuestionModalBtn) {
    openQuestionModalBtn.addEventListener('click', function() {
        openModal('questionModal'); // يفتح النافذة بالـ ID 'questionModal'
    });
}

// ===========================================
// التعامل مع أزرار إغلاق (X) النوافذ المنبثقة
// (تعتمد على الكلاس 'close-btn-custom' و 'data-modal' attribute)
// ===========================================
const closeButtons = document.querySelectorAll('.close-btn-custom');
closeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const modalToCloseId = event.target.dataset.modal; // نحصل على الـ ID من data-modal
        closeModal(modalToCloseId);
    });
});

// ===========================================
// التعامل مع النقر خارج النافذة لإغلاقها
// (تعتمد على الكلاس 'modern-custom-modal')
// ===========================================
const allModals = document.querySelectorAll('.modern-custom-modal');
allModals.forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) { // إذا كان النقر على الخلفية المعتمة للنافذة
            closeModal(modal.id); // نمرر الـ ID الخاص بالنافذة التي تم النقر على خلفيتها
        }
    });
});

// ===========================================
// التعامل مع إرسال النماذج (كل نموذج على حدة) والتحقق من الحقول
// ===========================================

// دالة عامة لمعالجة إرسال أي نموذج
function setupFormSubmission(formId, nameInputId, messageInputId, modalId) {
    const form = document.getElementById(formId);
    if (!form) {
        // تم تصحيح هذا السطر: استخدام علامات اقتباس عادية وعلامة +
        console.warn('Form with ID \'' + formId + '\' not found. Skipping setup.');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي للصفحة

        const nameInput = document.getElementById(nameInputId);
        const messageInput = document.getElementById(messageInputId);
        
        let isValid = true;

        // التحقق من حقل الاسم
        const nameValidationMsg = nameInput ? nameInput.nextElementSibling : null;
        if (nameInput && nameInput.value.trim() === '') {
            if (nameValidationMsg && nameValidationMsg.classList.contains('validation-message-custom')) {
                nameValidationMsg.style.display = 'block';
            }
            isValid = false;
        } else {
            if (nameValidationMsg && nameValidationMsg.classList.contains('validation-message-custom')) {
                nameValidationMsg.style.display = 'none';
            }
        }

        // التحقق من حقل الرسالة/السؤال
        const messageValidationMsg = messageInput ? messageInput.nextElementSibling : null;
        if (messageInput && messageInput.value.trim() === '') {
            if (messageValidationMsg && messageValidationMsg.classList.contains('validation-message-custom')) {
                messageValidationMsg.style.display = 'block';
            }
            isValid = false;
        } else {
            if (messageValidationMsg && messageValidationMsg.classList.contains('validation-message-custom')) {
                messageValidationMsg.style.display = 'none';
            }
        }

        if (isValid) {
            // جمع البيانات
            const name = nameInput.value;
            // البحث عن حقل الهاتف داخل النموذج المحدد
            const phoneInput = form.querySelector('input[type="tel"]');
            const phone = phoneInput ? phoneInput.value : ''; // تأكد من وجوده قبل أخذ القيمة
            const messageOrQuestion = messageInput.value;

            // تم تصحيح هذه الأسطر: استخدام علامات اقتباس عادية وعلامة +
            console.log('بيانات من نموذج ' + formId + ':');
            console.log('الاسم:', name);
            console.log('رقم الهاتف:', phone);
            console.log('الرسالة/السؤال:', messageOrQuestion);

            // هنا لا يتم إرسال البيانات إلى خادم
            alert('تم إرسال طلبك بنجاح! سنتواصل معك قريبا.');
            closeModal(modalId); // إغلاق النافذة
        } else {
            // يمكنك إزالة هذا الـ alert إذا كنت تفضل الاعتماد فقط على رسائل التحقق الحمراء
            // alert('الرجاء ملء جميع الحقول المطلوبة.');
        }
    });
}

// تطبيق دالة الإرسال لكل نموذج على حدة (تأكد من مطابقة IDs HTML)
// 'formId', 'nameInputId', 'messageInputId', 'modalId'
setupFormSubmission('sampleFormCustom', 'name-sample-custom', 'message-sample-custom', 'sampleModal');
setupFormSubmission('quoteFormCustom', 'name-quote-custom', 'message-quote-custom', 'quoteModal');
setupFormSubmission('questionFormCustom', 'name-question-custom', 'question-text-custom', 'questionModal');